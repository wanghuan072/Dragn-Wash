import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";

const datePattern = /^\d{4}-\d{2}-\d{2}$/;
const cache = new Map<string, string>();

/**
 * Return the newest committed content date for a route.
 *
 * The checked-in fallback preserves a truthful lastmod when a deployment
 * provider does not expose Git history. We deliberately never use the build
 * time: rebuilding an unchanged page must not make it look newly updated.
 */
export function lastModifiedFor(
  contentPaths: readonly string[],
  fallback: string,
): string {
  const cacheKey = [...contentPaths].sort().join("\0");
  const cached = cache.get(cacheKey);
  if (cached) return newestDate(cached, fallback);

  try {
    const committedDate = execFileSync(
      "git",
      ["log", "-1", "--format=%cs", "--", ...contentPaths],
      {
        cwd: process.cwd(),
        encoding: "utf8",
        stdio: ["ignore", "pipe", "ignore"],
      },
    ).trim();

    if (datePattern.test(committedDate)) {
      cache.set(cacheKey, committedDate);
      return newestDate(committedDate, fallback);
    }
  } catch {
    // Vercel normally exposes Git history, but exported builds may not.
  }

  return fallback;
}

/**
 * Resolve the last meaningful edit to one item in a shared JSON collection.
 * The item's `updatedAt` line is ignored so the date describes content edits,
 * not a date-only change. Shared page templates are checked separately.
 */
export function lastModifiedForJsonEntry(
  filePath: string,
  slug: string,
  sharedContentPaths: readonly string[],
  fallback: string,
): string {
  const sharedDate = lastModifiedFor(sharedContentPaths, fallback);
  const cacheKey = `json:${filePath}:${slug}`;
  const cached = cache.get(cacheKey);
  if (cached) return newestDate(sharedDate, cached);

  try {
    const lines = readFileSync(filePath, "utf8").split(/\r?\n/);
    const slugLine = lines.findIndex((line) =>
      line.includes(`"slug": "${slug}"`),
    );
    if (slugLine < 0) return sharedDate;

    let start = slugLine;
    while (start > 0 && !/^\s*\{\s*$/.test(lines[start])) start -= 1;
    let end = slugLine;
    while (end < lines.length && !/^\s*\},?\s*$/.test(lines[end])) end += 1;

    const blame = execFileSync(
      "git",
      [
        "blame",
        "--line-porcelain",
        `-L${start + 1},${Math.min(end + 1, lines.length)}`,
        "--",
        filePath,
      ],
      {
        cwd: process.cwd(),
        encoding: "utf8",
        stdio: ["ignore", "pipe", "ignore"],
      },
    );

    let currentTimestamp = 0;
    let newestTimestamp = 0;
    for (const line of blame.split(/\r?\n/)) {
      if (/^[0-9a-f^]{40}\s/.test(line)) currentTimestamp = 0;
      if (line.startsWith("committer-time ")) {
        currentTimestamp = Number(line.slice("committer-time ".length));
      }
      if (
        line.startsWith("\t") &&
        !line.includes('"updatedAt"') &&
        currentTimestamp > newestTimestamp
      ) {
        newestTimestamp = currentTimestamp;
      }
    }

    if (newestTimestamp > 0) {
      const itemDate = new Date(newestTimestamp * 1_000)
        .toISOString()
        .slice(0, 10);
      cache.set(cacheKey, itemDate);
      return newestDate(sharedDate, itemDate);
    }
  } catch {
    // Keep the checked-in fallback when Git blame is unavailable.
  }

  return sharedDate;
}

function newestDate(first: string, second: string): string {
  return first > second ? first : second;
}
