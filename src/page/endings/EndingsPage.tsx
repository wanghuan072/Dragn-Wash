import Link from "@/components/DocumentLink";
import Image from "next/image";
import InnerPageHero from "@/components/content/InnerPageHero";
import VideoEvidence from "@/components/content/VideoEvidence";
import { endingFaq, endingNodes, evidenceLabels, type EndingEvidence, type EndingNode } from "@/data/endings";
import { siteName, siteUrl } from "@/config/site";
import { metadataFor } from "@/seo/metadata";
import inner from "@/style/page/inner.module.css";
import styles from "@/style/page/endings.module.css";

export const metadata = metadataFor("endings", "/endings");

const nodeById = Object.fromEntries(endingNodes.map((node) => [node.id, node])) as Record<string, EndingNode>;
const evidenceClass: Record<EndingEvidence, string> = {
  official: styles.official,
  video: styles.video,
  "multi-report": styles.multiReport,
  "single-report": styles.singleReport,
  unverified: styles.unverified,
};

function EvidenceBadge({ evidence }: { evidence: EndingEvidence }) {
  return <span className={`${styles.evidenceBadge} ${evidenceClass[evidence]}`}>{evidenceLabels[evidence]}</span>;
}

function TreeNode({ id, compact = false }: { id: string; compact?: boolean }) {
  const node = nodeById[id];
  return (
    <article className={`${styles.treeNode} ${styles[node.character]} ${evidenceClass[node.evidence]} ${compact ? styles.compactNode : ""}`} aria-labelledby={`node-${node.id}`}>
      <div className={styles.nodeTopline}><span>{node.stage}</span><EvidenceBadge evidence={node.evidence} /></div>
      <h3 id={`node-${node.id}`}>{node.title}</h3>
      {node.choiceText && <p className={styles.choiceText}><strong>Choice shown:</strong> {node.choiceText}</p>}
      {node.unlockText && <p className={styles.unlockText}>SYSTEM · {node.unlockText}</p>}
      <p>{node.result}</p>
      {node.media && <div className={styles.nodeMedia}><Image src={node.media.poster ?? `https://i.ytimg.com/vi/${node.media.youtubeId}/mqdefault.jpg`} width={960} height={540} unoptimized loading="lazy" referrerPolicy="no-referrer" alt={node.media.alt} /></div>}
    </article>
  );
}

function RouteEvidence({ id }: { id: string }) {
  const node = nodeById[id];
  return node.media ? <VideoEvidence {...node.media} /> : null;
}

export default function EndingsPage() {
  const jsonLd = [
    { "@context": "https://schema.org", "@type": "Article", headline: "Drag'n Wash Endings Choice Tree and Route Guide", description: "A filmed choice tree for Drag'n Wash relationship routes, route locks, three confirmed endings and replay planning.", image: `${siteUrl}/images/og-image.png`, dateModified: "2026-09-23", mainEntityOfPage: `${siteUrl}/endings`, publisher: { "@type": "Organization", name: siteName } },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl }, { "@type": "ListItem", position: 2, name: "Endings", item: `${siteUrl}/endings` }] },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: endingFaq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) },
  ];

  return (
    <main className={`container inner-page ${inner.endingsPage} ${styles.page}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <InnerPageHero
        eyebrow="FULL SPOILERS · ROUTE EVIDENCE"
        keyword="DRAG'N WASH ENDINGS"
        title="YOUR CHOICES SHAPE THE ENDING"
        subtitle="See How Each Decision Changes the Route"
        lead="Use the choices we see in the game to plan a Conrad, Ryan, Ryan–Conrad or Alexander run. Each branch shows what to choose, what changes next and how confident we can be in the result."
        image="/images/home/steam-5.webp"
        imageAlt="Late Drag'n Wash scene used to introduce the endings choice tree"
        reviewedAt="2026-09-23"
        plate="ENDING FIELD MAP"
        stamp={"FULL\nSPOILERS"}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Endings" }]}
      />

      <div className={styles.spoilerWarning} role="note">
        <span aria-hidden="true">!</span>
        <div><strong>Full spoiler warning</strong><p>This page names late relationship choices and outcomes. It does not hide the route tree behind accordions, so stop here if you want a blind first run.</p></div>
      </div>

      <section className={styles.quickAnswer} aria-labelledby="quick-answer-title">
        <div>
          <p className={styles.kicker}>QUICK ANSWER</p>
          <h2 id="quick-answer-title">Three endings, several relationship states</h2>
          <p>We can finish <strong>three endings</strong>, with the developer estimating about <strong>90 minutes of content for each one</strong>. The clearest decisions happen in Conrad&apos;s conversation and Ryan&apos;s picnic. Those choices shape who we date, whether Ryan and Conrad get together, and how Alexander speaks to us later.</p>
        </div>
        <dl>
          <div><dt>Official endings</dt><dd>3</dd></div>
          <div><dt>Estimated content</dt><dd>~90 min / ending</dd></div>
          <div><dt>Route model</dt><dd>One shared story</dd></div>
          <div><dt>Manual branch return</dt><dd>Not confirmed</dd></div>
        </dl>
      </section>

      <div className={`${inner.articleGrid} ${styles.endingsGrid}`}>
        <article className={`${inner.article} ${styles.article}`}>
          <section id="choice-tree" className={styles.treeSection}>
            <header className={styles.sectionHeader}>
              <p className={styles.kicker}>THE DECISIONS THAT ACTUALLY MATTER</p>
              <h2>Drag&apos;n Wash Ending Choice Tree</h2>
              <p>Read from top to bottom. Solid cyan paths are shown directly in video; dashed paths combine filmed entry points with repeated player reports; dotted paths still need a complete current-build recording. “Leads to” labels preserve the same order on mobile.</p>
            </header>
            <div className={styles.legend} aria-label="Evidence line legend">
              <span className={styles.video}>Filmed choice</span><span className={styles.multiReport}>Repeated player reports</span><span className={styles.singleReport}>Incomplete verification</span><span className={styles.official}>Official count</span>
            </div>
            <div className={styles.choiceTree}>
              <div className={`${styles.treeRow} ${styles.startRow}`}><TreeNode id="shared-run" compact /></div>
              <div className={styles.connectorLabel}>LEADS TO TWO FILMED ROUTE LOCKS</div>
              <div className={`${styles.treeRow} ${styles.forkRow}`}><TreeNode id="conrad-lock" /><TreeNode id="ryan-picnic" /></div>
              <div className={styles.connectorLabel}>CHOOSE THE PLAYER OR CONNECT THE DRAGONS</div>
              <div className={`${styles.treeRow} ${styles.outcomeRow}`}><TreeNode id="conrad-romance" compact /><TreeNode id="ryan-romance" compact /><TreeNode id="ryan-conrad" compact /></div>
              <div className={styles.connectorLabel}>YOUR EXISTING RELATIONSHIP CHANGES THE LATE VISIT</div>
              <div className={`${styles.treeRow} ${styles.alexanderRow}`}><TreeNode id="alexander-open" compact /><TreeNode id="alexander-locked" compact /><TreeNode id="alexander-romance" compact /></div>
              <div className={styles.connectorLabel}>FINISH THE RUN</div>
              <div className={`${styles.treeRow} ${styles.finalRow}`}><TreeNode id="ending-count" compact /></div>
            </div>
          </section>

          <section id="conrad-route" className={styles.routeSection}>
            <div className={styles.routeCopy}>
              <div className={styles.routeHeading}><span className={styles.routeNumber}>01</span><div><p className={styles.kicker}>FILMED ROUTE LOCK</p><h2>Conrad Ending Route</h2></div></div>
              <p>When Conrad asks who he should spend time with, we get a clear fork: point him toward Ryan or offer to spend time with him ourselves. If we choose Conrad, the game shows <strong>“Unlock Conrad Romance”</strong> and the conversation immediately moves toward a date.</p>
              <div className={styles.routeFacts}><div><span>When</span><strong>Late Conrad conversation</strong></div><div><span>Choose</span><strong>Spend time with Conrad yourself</strong></div><div><span>Immediate change</span><strong>Romance unlock appears</strong></div><div><span>Alternative</span><strong>Introduce Conrad to Ryan</strong></div></div>
              <p className={styles.caution}>The romance unlock is filmed. A fan-made “Conrad Good Ending” name, score threshold or required wash grade is not.</p>
              <div className={styles.inlineLinks}><Link href="/dragons/conrad">Read Conrad&apos;s route profile →</Link><a href="#ryan-conrad-route">Compare the pairing branch ↓</a></div>
            </div>
            <RouteEvidence id="conrad-lock" />
          </section>

          <section id="ryan-route" className={styles.routeSection}>
            <RouteEvidence id="ryan-picnic" />
            <div className={styles.routeCopy}>
              <div className={styles.routeHeading}><span className={styles.routeNumber}>02</span><div><p className={styles.kicker}>PICNIC DECISION</p><h2>Ryan Ending Route</h2></div></div>
              <p>At the picnic, Ryan asks whether we know someone he could date. The menu spells out the result before we commit: <strong>“I know this one red dragon. I think you&apos;d like him!”</strong> pairs Ryan with Conrad, while <strong>“I wouldn&apos;t mind… if I was that someone.”</strong> locks in Ryan&apos;s romance.</p>
              <div className={styles.routeFacts}><div><span>When</span><strong>Ryan&apos;s picnic conversation</strong></div><div><span>Choose Ryan</span><strong>“If I was that someone”</strong></div><div><span>Choose pairing</span><strong>“This one red dragon”</strong></div><div><span>Menu result</span><strong>Route lock shown on screen</strong></div></div>
              <p className={styles.caution}>The screenshot confirms both route labels. It does not, by itself, prove every later scene or give the final ending an official name.</p>
              <div className={styles.inlineLinks}><Link href="/dragons/ryan">Follow Ryan&apos;s scenes →</Link><Link href="/romance#how-choices-connect">Compare relationship locks →</Link></div>
            </div>
          </section>

          <section id="ryan-conrad-route" className={styles.routeSection}>
            <div className={styles.routeCopy}>
              <div className={styles.routeHeading}><span className={styles.routeNumber}>03</span><div><p className={styles.kicker}>TWO ENTRY POINTS</p><h2>Ryan–Conrad Pairing Route</h2></div></div>
              <p>We have two opportunities to bring Ryan and Conrad together. We can introduce Conrad to Ryan during Conrad&apos;s conversation, or recommend Conrad when Ryan asks about a date at the picnic. Both choices point toward the same pairing instead of starting a romance with either dragon ourselves.</p>
              <ol className={styles.branchSteps}><li><strong>At Conrad&apos;s choice:</strong> choose Ryan instead of ourselves.</li><li><strong>At Ryan&apos;s picnic:</strong> describe or recommend Conrad.</li><li><strong>Later in the run:</strong> watch for dialogue that treats them as a pair.</li><li><strong>When Alexander returns:</strong> his invitation can remain open because we did not date Ryan or Conrad.</li></ol>
              <p className={styles.caution}>The image shows the picnic option exactly as it appears, including “Hooks up Ryan with Conrad.” It proves the route lock, not a fourth official ending; the published total remains three.</p>
              <div className={styles.inlineLinks}><Link href="/romance#ryan-conrad">Read the relationship context →</Link><a href="#alexander-route">Continue to Alexander ↓</a></div>
            </div>
            <RouteEvidence id="ryan-conrad" />
          </section>

          <section id="alexander-route" className={styles.routeSection}>
            <RouteEvidence id="alexander-open" />
            <div className={styles.routeCopy}>
              <div className={styles.routeHeading}><span className={styles.routeNumber}>04</span><div><p className={styles.kicker}>LATE RELATIONSHIP CHECK</p><h2>Alexander Ending Route</h2></div></div>
              <p>Alexander&apos;s late visit gives us a direct choice between accepting his invitation and turning it down. The recorded menu labels the answers <strong>“Will lead to Alexander romance”</strong> and <strong>“Will lead to no romance”</strong>, so we no longer have to infer the immediate result from a generic conversation clip.</p>
              <div className={styles.alexanderStates}><article><EvidenceBadge evidence="multi-report" /><h3>No Ryan or Conrad romance</h3><p>Alexander&apos;s invitation remains available; accept it to continue his relationship outcome.</p></article><article><EvidenceBadge evidence="multi-report" /><h3>Already dating Ryan or Conrad</h3><p>The dialogue acknowledges that date instead of presenting the same invitation path.</p></article></div>
              <p className={styles.caution}>The romance/no-romance choice is filmed at 51:55. What remains less certain is the full prerequisite list that makes this menu appear, so ordinary friendly answers should not be converted into invented affection points.</p>
              <Link href="/dragons/alexander">Read Alexander&apos;s late-scene notes →</Link>
            </div>
          </section>

          <section id="what-counts" className={styles.definitionSection}>
            <div className={styles.sectionHeader}><p className={styles.kicker}>SCENE, ROUTE OR ENDING?</p><h2>What Counts as a Drag&apos;n Wash Ending?</h2><p>When we see a new line or romance unlock, it is tempting to count it as another ending. It is better to separate the choice we made, the relationship it opened and the final result that reaches the credits.</p></div>
            <div className={styles.definitionGrid}>
              <article><span>01</span><h3>Choice</h3><p>A response selected from an on-screen menu, such as choosing Conrad or recommending him to Ryan.</p></article>
              <article><span>02</span><h3>Route state</h3><p>A persistent relationship change: Conrad romance, Ryan romance, the Ryan–Conrad pairing or Alexander remaining open.</p></article>
              <article><span>03</span><h3>Scene variation</h3><p>Later dialogue reacting to that state. Useful evidence, but not proof of another official ending.</p></article>
              <article><span>04</span><h3>Official ending</h3><p>One of the three final outcomes counted by the developer. No official Good, Bad or True names are published.</p></article>
            </div>
            <aside className={styles.unverifiedCallout}><strong>Why “All Dragons Happy” is not a fourth ending</strong><p>A video title can describe a satisfying run, a montage or several saves. Without an uncut choice-to-credits sequence, the title alone cannot change the official total of three.</p><span className={styles.sourceLabel}>Reviewed video claim · “All Dragons Happy”</span></aside>
          </section>

          <section id="replay-all-endings" className={styles.replaySection}>
            <div className={styles.sectionHeader}><p className={styles.kicker}>CONTROLLED REPLAY</p><h2>How to Replay All Three Endings</h2><p>The current public feature descriptions do not promise a scene gallery, chapter select or manual save before every route lock. Treat each completed slot as a record of one run.</p></div>
            <ol className={styles.replaySteps}>
              <li><span>01</span><div><strong>Finish one route</strong><p>Record the relationship unlock, late Alexander state and what appears before the credits.</p></div></li>
              <li><span>02</span><div><strong>Keep the rest of the run stable</strong><p>Use the same general wash order and do not change every optional response at once.</p></div></li>
              <li><span>03</span><div><strong>Change one route lock</strong><p>Switch Conrad&apos;s answer or Ryan&apos;s picnic recommendation, then follow the new relationship state.</p></div></li>
              <li><span>04</span><div><strong>Start a fresh run if credits loop</strong><p>If Continue returns to the completed ending, begin another slot instead of treating it as a chapter menu.</p></div></li>
            </ol>
            <div className={styles.replayLinks}><Link href="/walkthrough#choices">Use the complete walkthrough →</Link><Link href="/troubleshooting/stuck-softlock">Recover a stalled scene →</Link><Link href="/romance">Compare relationship choices →</Link></div>
          </section>

          <section id="faq" className={styles.faqSection}>
            <div className={styles.sectionHeader}><p className={styles.kicker}>DIRECT ANSWERS</p><h2>Drag&apos;n Wash Endings FAQ</h2></div>
            <div className={styles.faqGrid}>{endingFaq.map((item) => <article key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></article>)}</div>
          </section>

          <section id="evidence-notes" className={styles.evidenceSection}>
            <div><p className={styles.kicker}>EVIDENCE & VERSION NOTES</p><h2>How We Checked Each Route</h2><p>We use the choice visible on screen first, then compare what happens later in the same run. When only other players have repeated a result, we say so instead of turning it into a guaranteed recipe. The map was checked again on September 23, 2026.</p></div>
            <ul><li><span>Official game description · ending count and playtime</span></li><li><span>Steam player discussion · late relationship changes</span></li><li><span>Alexander route recording · Conrad route choice at 24:00</span></li><li><span>Ryan route recording · picnic route choice at 13:57</span></li><li><span>Alexander route recording · romance/no-romance choice at 51:55</span></li></ul>
          </section>
        </article>

        <aside className={`${inner.sidebar} ${styles.sidebar}`}>
          <div className="panel"><p className="eyebrow">ROUTE INDEX</p><p className={inner.sidebarTitle}>On this page</p><a href="#choice-tree">Ending choice tree →</a><a href="#conrad-route">Conrad route →</a><a href="#ryan-route">Ryan route →</a><a href="#ryan-conrad-route">Ryan–Conrad pairing →</a><a href="#alexander-route">Alexander route →</a><a href="#what-counts">What counts as an ending? →</a><a href="#replay-all-endings">Replay all three endings →</a><a href="#faq">Endings FAQ →</a></div>
          <div className="panel"><p className="eyebrow">CHARACTER FILES</p><p className={inner.sidebarTitle}>Follow the route</p><Link href="/dragons/alexander">Alexander route profile →</Link><Link href="/dragons/ryan">Ryan route profile →</Link><Link href="/dragons/conrad">Conrad route profile →</Link><Link href="/romance">Romance and relationship guide →</Link></div>
          <div className="panel"><p className="eyebrow">RUN SUPPORT</p><p className={inner.sidebarTitle}>Before the next ending</p><Link href="/walkthrough">Complete walkthrough →</Link><Link href="/troubleshooting/stuck-softlock">Stuck or softlocked? →</Link><Link href="/sources">How route claims are checked →</Link></div>
        </aside>
      </div>
    </main>
  );
}
