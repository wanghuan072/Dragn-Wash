"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { knownIssues } from "@/data/knowledge";
import styles from "@/style/content/knowledge-tools.module.css";

const quickFilters = ["wash", "stuck", "credits", "launch", "steam deck", "mod"];

export default function IssueFinder() {
  const [query, setQuery] = useState("");
  const normalized = query.trim().toLowerCase();
  const results = useMemo(() => {
    if (!normalized) return knownIssues;
    return knownIssues.filter((issue) =>
      [issue.title, issue.platform, issue.status, ...issue.symptoms]
        .join(" ")
        .toLowerCase()
        .includes(normalized),
    );
  }, [normalized]);

  return (
    <div className={styles.finder}>
      <label htmlFor="issue-search">Describe the symptom</label>
      <div className={styles.searchRow}>
        <input
          id="issue-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try clean bar, credits, Linux, mod…"
        />
        {query && <button type="button" onClick={() => setQuery("")}>Clear</button>}
      </div>
      <div className={styles.chips} aria-label="Common issue filters">
        {quickFilters.map((filter) => (
          <button
            type="button"
            className={normalized === filter ? styles.selected : ""}
            onClick={() => setQuery(filter)}
            key={filter}
          >
            {filter}
          </button>
        ))}
      </div>
      <p className={styles.count}>{results.length} matching issue{results.length === 1 ? "" : "s"}</p>
      <div className={styles.issueList}>
        {results.map((issue) => (
          <article key={issue.id} id={issue.id}>
            <div className={styles.issueHeading}>
              <div>
                <small>{issue.platform}</small>
                <h3>{issue.title}</h3>
              </div>
              <span data-status={issue.status}>{issue.status}</span>
            </div>
            <dl>
              <div><dt>Try first</dt><dd>{issue.firstAction}</dd></div>
              <div><dt>If it persists</dt><dd>{issue.nextAction}</dd></div>
              <div><dt>Status</dt><dd>{issue.evidence}</dd></div>
            </dl>
            <div className={styles.issueLinks}>
              <Link href={issue.relatedHref}>Open detailed help →</Link>
              <a href={issue.sourceUrl} target="_blank" rel="noreferrer">Evidence source ↗</a>
            </div>
          </article>
        ))}
        {!results.length && (
          <div className={styles.empty}>
            No exact match. Try a shorter symptom or use the reporting checklist below.
          </div>
        )}
      </div>
    </div>
  );
}
