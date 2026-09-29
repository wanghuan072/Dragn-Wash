import { execFileSync } from "node:child_process";

function git(args) {
  return execFileSync("git", args, {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  }).trim();
}

try {
  if (git(["rev-parse", "--is-shallow-repository"]) === "true") {
    console.log("Fetching complete Git history for accurate sitemap lastmod dates...");
    execFileSync("git", ["fetch", "--unshallow", "--no-tags", "origin"], {
      stdio: "inherit",
    });
  }
} catch (error) {
  console.warn(
    "Could not expand Git history; sitemap generation will use verified fallback dates.",
  );
  if (process.env.CI !== "true" && process.env.VERCEL !== "1") {
    console.warn(error instanceof Error ? error.message : String(error));
  }
}
