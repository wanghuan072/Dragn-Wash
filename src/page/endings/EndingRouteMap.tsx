"use client";

import { useEffect, useId, useState, type ReactNode } from "react";
import { endingNodes, evidenceLabels, type EndingEvidence, type EndingNode } from "@/data/endings";
import styles from "@/style/page/endings.module.css";

const nodeById = Object.fromEntries(endingNodes.map((node) => [node.id, node])) as Record<string, EndingNode>;
const evidenceClass: Record<EndingEvidence, string> = {
  official: styles.official,
  video: styles.video,
  "multi-report": styles.multiReport,
  "single-report": styles.singleReport,
  unverified: styles.unverified,
};

const flowAnchors: Record<string, string> = {
  "conrad-lock": "#conrad-route",
  "conrad-romance": "#conrad-route",
  "ryan-picnic": "#ryan-route",
  "ryan-romance": "#ryan-route",
  "ryan-conrad": "#ryan-conrad-route",
  "alexander-open": "#alexander-route",
  "alexander-locked": "#alexander-route",
  "alexander-romance": "#alexander-route",
  "ending-count": "#what-counts",
};

const flowTitles: Record<string, string> = {
  "shared-run": "Meet all three dragons",
  "conrad-lock": "Conrad’s conversation",
  "ryan-picnic": "Ryan’s picnic",
  "conrad-romance": "Spend time with Conrad",
  "ryan-romance": "Tell Ryan it could be you",
  "ryan-conrad": "Pair Ryan with Conrad",
  "alexander-open": "Invitation stays open",
  "alexander-locked": "Already dating someone else",
  "alexander-romance": "Accept Alexander’s invitation",
  "ending-count": "Credits · three official endings",
};

const flowChoice: Record<string, string> = {
  "shared-run": "One shared story. The route lock comes later.",
  "conrad-lock": "Who should Conrad spend time with?",
  "ryan-picnic": "Does Ryan know someone he could date?",
  "conrad-romance": "Unlock Conrad Romance",
  "ryan-romance": "“If I was that someone.”",
  "ryan-conrad": "Introduce or recommend Conrad.",
  "alexander-open": "Reach the late visit without dating Ryan or Conrad.",
  "alexander-locked": "Ryan or Conrad romance already locked.",
  "alexander-romance": "“Will lead to Alexander romance.”",
  "ending-count": "~90 min of content per ending.",
};

type RouteId = "conrad" | "ryan" | "alexander";

const routes: Array<{
  id: RouteId;
  label: string;
  kicker: string;
  blurb: string;
}> = [
  {
    id: "conrad",
    label: "Conrad Route",
    kicker: "Filmed route lock",
    blurb: "At Conrad’s conversation, spend time with him to lock his romance, or introduce Ryan to start the pairing instead.",
  },
  {
    id: "ryan",
    label: "Ryan Route",
    kicker: "Picnic decision",
    blurb: "At the picnic, say it could be you to continue Ryan’s romance, or recommend Conrad to pair the two dragons.",
  },
  {
    id: "alexander",
    label: "Alexander Route",
    kicker: "Late relationship check",
    blurb: "Keep Ryan and Conrad as friends so Alexander’s invitation can appear, then accept or turn it down.",
  },
];

function routeFromHash(hash: string): RouteId | null {
  const id = hash.replace("#", "");
  if (id === "alexander-route") return "alexander";
  if (id === "ryan-route") return "ryan";
  if (id === "conrad-route" || id === "ryan-conrad-route") return "conrad";
  return null;
}

function EvidenceBadge({ evidence }: { evidence: EndingEvidence }) {
  return <span className={`${styles.evidenceBadge} ${evidenceClass[evidence]}`}>{evidenceLabels[evidence]}</span>;
}

function FlowNode({ id, routeId }: { id: string; routeId: RouteId }) {
  const node = nodeById[id];
  const href = flowAnchors[id];
  const className = `${styles.flowNode} ${styles[node.character]} ${evidenceClass[node.evidence]}`;
  const titleId = `flow-${routeId}-${node.id}`;
  const body = (
    <>
      <div className={styles.nodeTopline}>
        <span>{node.stage}</span>
        <EvidenceBadge evidence={node.evidence} />
      </div>
      <p className={styles.flowTitle} id={titleId}>{flowTitles[id] ?? node.title}</p>
      {flowChoice[id] && <p>{flowChoice[id]}</p>}
    </>
  );

  if (!href) {
    return <article className={className} aria-labelledby={titleId}>{body}</article>;
  }

  return (
    <a href={href} className={className} aria-labelledby={titleId}>
      {body}
    </a>
  );
}

function FlowBand({
  caption,
  paths,
}: {
  caption: string;
  paths: Array<{ d: string; evidence: EndingEvidence }>;
}) {
  return (
    <div className={styles.flowBand} aria-hidden="true">
      <svg className={styles.flowConnect} viewBox="0 0 40 20" preserveAspectRatio="none">
        {paths.map((path) => (
          <path key={path.d} className={evidenceClass[path.evidence]} d={path.d} />
        ))}
      </svg>
      <p className={styles.edgeCaption}>{caption}</p>
    </div>
  );
}

function ConradChart() {
  return (
    <div className={styles.flowChart} role="group" aria-label="Conrad Route">
      <div className={styles.flowCenter}><FlowNode routeId="conrad" id="shared-run" /></div>
      <FlowBand
        caption="Late Conrad conversation"
        paths={[{ d: "M20 0 V20", evidence: "video" }]}
      />
      <div className={styles.flowCenter}><FlowNode routeId="conrad" id="conrad-lock" /></div>
      <FlowBand
        caption="Choose Conrad, or introduce Ryan"
        paths={[
          { d: "M20 0 V7 H10 V20", evidence: "video" },
          { d: "M20 7 H30 V20", evidence: "video" },
        ]}
      />
      <div className={styles.flowLeft}><FlowNode routeId="conrad" id="conrad-romance" /></div>
      <div className={styles.flowRight}><FlowNode routeId="conrad" id="ryan-conrad" /></div>
      <FlowBand
        caption="Both answers finish a run"
        paths={[
          { d: "M10 0 V8 H20 V20", evidence: "official" },
          { d: "M30 0 V8 H20 V20", evidence: "official" },
        ]}
      />
      <div className={styles.flowCenter}><FlowNode routeId="conrad" id="ending-count" /></div>
    </div>
  );
}

function RyanChart() {
  return (
    <div className={styles.flowChart} role="group" aria-label="Ryan Route">
      <div className={styles.flowCenter}><FlowNode routeId="ryan" id="shared-run" /></div>
      <FlowBand
        caption="Picnic conversation"
        paths={[{ d: "M20 0 V20", evidence: "video" }]}
      />
      <div className={styles.flowCenter}><FlowNode routeId="ryan" id="ryan-picnic" /></div>
      <FlowBand
        caption="Choose Ryan, or recommend Conrad"
        paths={[
          { d: "M20 0 V7 H10 V20", evidence: "multi-report" },
          { d: "M20 7 H30 V20", evidence: "video" },
        ]}
      />
      <div className={styles.flowLeft}><FlowNode routeId="ryan" id="ryan-romance" /></div>
      <div className={styles.flowRight}><FlowNode routeId="ryan" id="ryan-conrad" /></div>
      <FlowBand
        caption="Both answers finish a run"
        paths={[
          { d: "M10 0 V8 H20 V20", evidence: "official" },
          { d: "M30 0 V8 H20 V20", evidence: "official" },
        ]}
      />
      <div className={styles.flowCenter}><FlowNode routeId="ryan" id="ending-count" /></div>
    </div>
  );
}

function AlexanderChart() {
  return (
    <div className={styles.flowChart} role="group" aria-label="Alexander Route">
      <div className={styles.flowCenter}><FlowNode routeId="alexander" id="shared-run" /></div>
      <FlowBand
        caption="Who you already date changes this visit"
        paths={[
          { d: "M20 0 V7 H10 V20", evidence: "video" },
          { d: "M20 7 H30 V20", evidence: "multi-report" },
        ]}
      />
      <div className={styles.flowLeft}><FlowNode routeId="alexander" id="alexander-open" /></div>
      <div className={styles.flowRight}><FlowNode routeId="alexander" id="alexander-locked" /></div>
      <FlowBand
        caption="Accept the invitation, or continue without it"
        paths={[
          { d: "M10 0 V20", evidence: "single-report" },
          { d: "M30 0 V20", evidence: "official" },
        ]}
      />
      <div className={styles.flowLeft}><FlowNode routeId="alexander" id="alexander-romance" /></div>
      <div className={styles.flowThrough} aria-hidden="true" />
      <FlowBand
        caption="The run still reaches the credits"
        paths={[
          { d: "M10 0 V8 H20 V20", evidence: "official" },
          { d: "M30 0 V8 H20 V20", evidence: "official" },
        ]}
      />
      <div className={styles.flowCenter}><FlowNode routeId="alexander" id="ending-count" /></div>
    </div>
  );
}

const charts: Record<RouteId, () => ReactNode> = {
  conrad: ConradChart,
  ryan: RyanChart,
  alexander: AlexanderChart,
};

export default function EndingRouteMap() {
  const tabPrefix = useId();
  const [active, setActive] = useState<RouteId>("conrad");
  const current = routes.find((route) => route.id === active) ?? routes[0];
  const Chart = charts[active];

  useEffect(() => {
    const applyHash = () => {
      const fromHash = routeFromHash(window.location.hash);
      if (fromHash) setActive(fromHash);
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  return (
    <>
      <header className={styles.sectionHeader}>
        <p className={styles.kicker}>{current.kicker}</p>
        <h2 id="ending-route-title">{current.label}</h2>
        <p>{current.blurb} Cyan lines are filmed; dashed coral lines come from repeated player reports; dotted lines still need a complete current-build recording.</p>
      </header>
      <div className={styles.routeTabs} role="tablist" aria-label="Ending routes">
        {routes.map((route) => {
          const selected = route.id === active;
          return (
            <button
              key={route.id}
              type="button"
              role="tab"
              id={`${tabPrefix}-${route.id}`}
              className={`${styles.routeTab} ${styles[route.id]}`}
              aria-selected={selected}
              aria-controls={`${tabPrefix}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(route.id)}
            >
              {route.label}
            </button>
          );
        })}
      </div>
      <div
        role="tabpanel"
        id={`${tabPrefix}-panel`}
        aria-labelledby="ending-route-title"
      >
        <div className={styles.legend} aria-label="Evidence line legend">
          <span className={styles.video}>Filmed choice</span>
          <span className={styles.multiReport}>Repeated player reports</span>
          <span className={styles.singleReport}>Incomplete verification</span>
          <span className={styles.official}>Official count</span>
        </div>
        <p className={styles.flowHint}>On a narrow screen, swipe sideways to keep the branch lines aligned.</p>
        <div className={styles.flowViewport}>
          <Chart />
        </div>
      </div>
    </>
  );
}
