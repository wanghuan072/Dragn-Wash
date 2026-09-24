"use client";

import { useState } from "react";
import { evidenceLabels, sceneById, type EndingCharacter, type EndingEvidence } from "@/data/endings";
import styles from "@/style/page/endings.module.css";

type Focus = "all" | Exclude<EndingCharacter, "shared">;

const evidenceClass: Record<EndingEvidence, string> = {
  official: styles.official,
  video: styles.video,
  "multi-report": styles.multiReport,
  "single-report": styles.singleReport,
  unverified: styles.unverified,
};

const routeNodes = {
  shared: { sceneId: "shared-story", character: "shared" as const, title: "One shared story", note: "Meet Alexander, Ryan and Conrad before the relationship locks." },
  conradChoice: { sceneId: "conrad-introduction-choice", character: "conrad" as const, title: "Conrad's choice", note: "Choose Conrad, or introduce him to Ryan." },
  conradRoute: { sceneId: "conrad-romance-state", character: "conrad" as const, title: "Conrad romance", note: "Unlock Conrad Romance → Conrad scenes → credits." },
  ryanChoice: { sceneId: "ryan-picnic-choice", character: "ryan" as const, title: "Ryan's picnic", note: "Volunteer yourself, or recommend the red dragon." },
  ryanRoute: { sceneId: "ryan-romance-state", character: "ryan" as const, title: "Ryan romance", note: "Locks in Ryan romance → Ryan scenes → credits." },
  pairing: { sceneId: "ryan-conrad-pairing", character: "ryan" as const, title: "Ryan–Conrad pairing", note: "The second answer completes the cross-character setup." },
  alexChoice: { sceneId: "alexander-final-invitation", character: "alexander" as const, title: "Alexander's invitation", note: "The invitation opens while we are still unattached." },
  alexRoute: { sceneId: "alexander-romance-state", character: "alexander" as const, title: "Alexander romance", note: "Accept → Alexander scenes → credits." },
  noRomance: { sceneId: "no-romance-state", character: "alexander" as const, title: "No-romance state", note: "Decline → remain unattached; not a proven fourth ending." },
};

function isHighlighted(focus: Focus, character: EndingCharacter) {
  return focus === "all" || character === "shared" || focus === character || (focus === "alexander" && character === "ryan");
}

function RouteNode({ node, focus }: { node: (typeof routeNodes)[keyof typeof routeNodes]; focus: Focus }) {
  const scene = sceneById[node.sceneId];
  return (
    <a
      href={`#${node.sceneId}`}
      className={`${styles.routeNode} ${styles[node.character]} ${isHighlighted(focus, node.character) ? styles.activePath : styles.dimmed}`}
    >
      <span className={styles.routeNodeStage}>{scene.stage}</span>
      <strong>{node.title}</strong>
      <p>{node.note}</p>
      <span className={`${styles.evidenceBadge} ${evidenceClass[scene.evidence]}`}>{evidenceLabels[scene.evidence]}</span>
    </a>
  );
}

function Edge({ label, tone = "confirmed" }: { label: string; tone?: "confirmed" | "variation" | "unverified" }) {
  return <div className={`${styles.routeEdge} ${styles[tone]}`}><span>{label}</span></div>;
}

export default function EndingRouteMap() {
  const [focus, setFocus] = useState<Focus>("all");

  return (
    <>
      <header className={styles.sectionHeader}>
        <p className={styles.kicker}>ALL ROUTES · ONE SHARED RUN</p>
        <h2 id="ending-route-title">Drag&apos;n Wash Ending Choice Map</h2>
        <p>Use the buttons to trace one character, or leave every path visible to see where Conrad&apos;s conversation feeds Ryan&apos;s picnic and then Alexander&apos;s late invitation.</p>
      </header>
      <div className={styles.routeFilters} aria-label="Highlight a character path">
        {(["all", "conrad", "ryan", "alexander"] as Focus[]).map((item) => (
          <button key={item} type="button" aria-pressed={focus === item} onClick={() => setFocus(item)}>
            {item === "all" ? "Show all paths" : `Highlight ${item}`}
          </button>
        ))}
      </div>
      <div className={styles.legend} aria-label="Route line legend">
        <span className={styles.video}>Filmed route lock</span>
        <span className={styles.sceneVariation}>Same-route variation</span>
        <span className={styles.unverified}>Outcome still unverified</span>
      </div>

      <div className={styles.routeOverview} role="group" aria-label="Complete Drag'n Wash relationship route map">
        <div className={styles.routeStart}><RouteNode node={routeNodes.shared} focus={focus} /></div>
        <Edge label="Continue to Conrad's relationship question" />
        <div className={styles.routeStart}><RouteNode node={routeNodes.conradChoice} focus={focus} /></div>
        <div className={styles.routeSplit} aria-label="Conrad choice branches">
          <div className={styles.routeLane}>
            <Edge label="Spend time with Conrad" />
            <RouteNode node={routeNodes.conradRoute} focus={focus} />
          </div>
          <div className={styles.routeLane}>
            <Edge label="Introduce Conrad to Ryan" />
            <RouteNode node={routeNodes.ryanChoice} focus={focus} />
          </div>
        </div>
        <p className={styles.routeStageLabel}>If you introduced Conrad to Ryan, the picnic creates the next fork</p>
        <div className={styles.routeSplit} aria-label="Ryan picnic branches">
          <div className={styles.routeLane}>
            <Edge label="Volunteer yourself" />
            <RouteNode node={routeNodes.ryanRoute} focus={focus} />
          </div>
          <div className={styles.routeLane}>
            <Edge label="Recommend the red dragon" />
            <RouteNode node={routeNodes.pairing} focus={focus} />
          </div>
        </div>
        <Edge label="The pairing leaves us unattached for Alexander" />
        <div className={styles.routeStart}><RouteNode node={routeNodes.alexChoice} focus={focus} /></div>
        <div className={styles.routeSplit} aria-label="Alexander invitation branches">
          <div className={styles.routeLane}>
            <Edge label="Accept" />
            <RouteNode node={routeNodes.alexRoute} focus={focus} />
          </div>
          <div className={styles.routeLane}>
            <Edge label="Decline" tone="unverified" />
            <RouteNode node={routeNodes.noRomance} focus={focus} />
          </div>
        </div>
      </div>
      <p className={styles.routeNote}>Cyan connectors are choices shown directly in a recorded run. The dotted final connector marks a visible no-romance state whose relationship to the official three-ending count remains unconfirmed.</p>
    </>
  );
}
