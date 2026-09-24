import Image from "next/image";
import Link from "@/components/DocumentLink";
import InnerPageHero from "@/components/content/InnerPageHero";
import EndingRouteMap from "@/page/endings/EndingRouteMap";
import {
  effectLabels,
  endingFaq,
  evidenceLabels,
  scenesByCharacter,
  type DragonScene,
  type EndingCharacter,
  type EndingEvidence,
} from "@/data/endings";
import { siteName, siteUrl } from "@/config/site";
import { metadataFor } from "@/seo/metadata";
import inner from "@/style/page/inner.module.css";
import styles from "@/style/page/endings.module.css";

export const metadata = metadataFor("endings", "/endings");

const evidenceClass: Record<EndingEvidence, string> = {
  official: styles.official,
  video: styles.video,
  "multi-report": styles.multiReport,
  "single-report": styles.singleReport,
  unverified: styles.unverified,
};

const characterCopy: Record<Exclude<EndingCharacter, "shared">, { title: string; kicker: string; intro: string }> = {
  conrad: {
    title: "Conrad Scenes and Ending Route",
    kicker: "01 · THE FIRST RELATIONSHIP FORK",
    intro: "Conrad gives us the first meaningful route choice. We can date him directly, or connect him with Ryan and carry that decision into the picnic.",
  },
  ryan: {
    title: "Ryan Scenes and Ending Route",
    kicker: "02 · THE PICNIC DECISION",
    intro: "Ryan's picnic contains the second route lock. The surrounding menus add personality, but only the dating question changes who the run follows.",
  },
  alexander: {
    title: "Alexander Scenes and Ending Route",
    kicker: "03 · THE LATE INVITATION",
    intro: "Alexander has several optional conversations before the final invitation. We keep those scene variations visible without pretending they are hidden affection points.",
  },
};

function timestampLabel(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainder = seconds % 60;
  return `${minutes}:${String(remainder).padStart(2, "0")}`;
}

function EvidenceBadge({ evidence }: { evidence: EndingEvidence }) {
  return <span className={`${styles.evidenceBadge} ${evidenceClass[evidence]}`}>{evidenceLabels[evidence]}</span>;
}

function SceneCard({ scene, index }: { scene: DragonScene; index: number }) {
  return (
    <article id={scene.id} className={`${styles.sceneCard} ${styles[scene.character]}`}>
      <header className={styles.sceneCardHeader}>
        <span className={styles.sceneNumber}>{String(index + 1).padStart(2, "0")}</span>
        <div>
          <p className={styles.kicker}>{scene.stage}</p>
          <h3>{scene.title}</h3>
        </div>
        <EvidenceBadge evidence={scene.evidence} />
      </header>
      <p className={styles.sceneDescription}>{scene.description}</p>

      {scene.media ? (
        <figure className={styles.sceneMedia}>
          <Image
            src={scene.media.image}
            width={scene.media.width}
            height={scene.media.height}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 920px"
            alt={scene.media.alt}
          />
          <figcaption>Recorded menu at {timestampLabel(scene.media.timestampSeconds)} · full choice area preserved</figcaption>
        </figure>
      ) : scene.id === "conrad-date-planning" ? (
        <p className={styles.noCleanFrame}>No clean, uncensored choice frame is used here. The two lines are transcribed from the recorded scene and kept as a same-route variation.</p>
      ) : null}

      {scene.choices.length > 0 && (
        <div className={styles.sceneChoices} aria-label={`Choices in ${scene.title}`}>
          {scene.choices.map((choice) => (
            <article className={styles.choiceCard} key={choice.text}>
              <div className={styles.choiceTopline}>
                <span className={styles.effectTag}>{effectLabels[choice.effect]}</span>
                {choice.selectedInSource && <span className={styles.selectedTag}>Selected in this recording</span>}
              </div>
              <strong>“{choice.text}”</strong>
              {choice.systemText && <p className={styles.systemText}>{choice.systemText}</p>}
              <p>{choice.result}</p>
              {choice.targetSceneId && <a href={`#${choice.targetSceneId}`}>Continue at {choice.targetSceneId.replaceAll("-", " ")} ↓</a>}
            </article>
          ))}
        </div>
      )}
    </article>
  );
}

function CharacterTimeline({ character }: { character: Exclude<EndingCharacter, "shared"> }) {
  const copy = characterCopy[character];
  const scenes = scenesByCharacter(character);
  return (
    <section id={`${character}-scenes`} className={`${styles.timelineSection} ${styles[character]}`}>
      <header className={styles.timelineHeader}>
        <p className={styles.kicker}>{copy.kicker}</p>
        <h2>{copy.title}</h2>
        <p>{copy.intro}</p>
      </header>
      <div className={styles.sceneTimeline}>
        {scenes.map((scene, index) => <SceneCard key={scene.id} scene={scene} index={index} />)}
      </div>
    </section>
  );
}

export default function EndingsPage() {
  const jsonLd = [
    { "@context": "https://schema.org", "@type": "Article", headline: "Drag'n Wash Endings: How Different Choices Change the Route", description: "Follow every filmed Drag'n Wash relationship choice across Conrad, Ryan and Alexander, with full menus, immediate results and cross-character branches.", image: `${siteUrl}/images/og-image.png`, dateModified: "2026-09-24", mainEntityOfPage: `${siteUrl}/endings`, publisher: { "@type": "Organization", name: siteName } },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl }, { "@type": "ListItem", position: 2, name: "Endings", item: `${siteUrl}/endings` }] },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: endingFaq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) },
  ];

  return (
    <main className={`container inner-page ${inner.endingsPage} ${styles.page}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <InnerPageHero
        eyebrow="FULL SPOILERS · EVERY RECORDED CHOICE"
        keyword="DRAG'N WASH ENDINGS"
        title="DIFFERENT CHOICES, DIFFERENT ENDINGS"
        subtitle="Follow Conrad, Ryan and Alexander Through One Shared Story"
        lead="Start with the complete route map, then check every filmed dialogue menu in scene order. We separate real route locks from ordinary replies so you can replay the ending you want without guessing at a hidden score."
        image="/images/home/steam-5.webp"
        imageAlt="Late Drag'n Wash character scene introducing the game's ending choices"
        reviewedAt="2026-09-24"
        plate="ENDING FIELD MAP"
        stamp={"FULL\nSPOILERS"}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Endings" }]}
      />

      <div className={styles.spoilerWarning} role="note">
        <span aria-hidden="true">!</span>
        <div><strong>Full spoiler warning</strong><p>Every relationship choice and late route result is visible below. Stop here if you want to play the first run blind.</p></div>
      </div>

      <section className={styles.quickAnswer} aria-labelledby="quick-answer-title">
        <div>
          <p className={styles.kicker}>QUICK ANSWER</p>
          <h2 id="quick-answer-title">Three official endings, connected through two early choices</h2>
          <p>The developer confirms <strong>three endings</strong> and roughly <strong>90 minutes of content per ending</strong>. In the runs we checked, Conrad&apos;s conversation opens the first fork, Ryan&apos;s picnic resolves the second, and an unattached player can receive Alexander&apos;s late invitation.</p>
        </div>
        <dl>
          <div><dt>Official endings</dt><dd>3</dd></div>
          <div><dt>Core route locks</dt><dd>3 filmed menus</dd></div>
          <div><dt>Story structure</dt><dd>One shared run</dd></div>
          <div><dt>Invented score required</dt><dd>No</dd></div>
        </dl>
      </section>

      <div className={`${inner.articleGrid} ${styles.endingsGrid}`}>
        <article className={`${inner.article} ${styles.article}`}>
          <section id="ending-routes" className={styles.treeSection}><EndingRouteMap /></section>
          <CharacterTimeline character="conrad" />
          <CharacterTimeline character="ryan" />
          <CharacterTimeline character="alexander" />

          <section id="what-counts" className={styles.definitionSection}>
            <header className={styles.sectionHeader}><p className={styles.kicker}>SCENE, ROUTE OR ENDING?</p><h2>What Counts as a Drag&apos;n Wash Ending?</h2><p>A new line is not automatically a new ending. We use the labels below so ordinary role-play choices do not become fake route conditions.</p></header>
            <div className={styles.definitionGrid}>
              <article><span>01</span><h3>Choice</h3><p>Any answer selected from an on-screen dialogue menu.</p></article>
              <article><span>02</span><h3>Route lock</h3><p>A menu that names a romance or cross-character relationship result.</p></article>
              <article><span>03</span><h3>Scene variation</h3><p>Different dialogue inside the same route, with no demonstrated ending change.</p></article>
              <article><span>04</span><h3>Official ending</h3><p>One of the three final outcomes counted by the developer.</p></article>
            </div>
            <aside className={styles.unverifiedCallout}><strong>Ryan–Conrad and no romance are not extra endings</strong><p>The pairing is a cross-character state that keeps Alexander available. “No romance” is visible on Alexander&apos;s menu, but no complete current-build record proves it adds a fourth outcome to the official count.</p></aside>
          </section>

          <section id="replay-all-endings" className={styles.replaySection}>
            <header className={styles.sectionHeader}><p className={styles.kicker}>CONTROLLED REPLAY</p><h2>How to Replay All Three Endings</h2><p>Keep most of the run the same and change one confirmed lock at a time. That makes it much easier to see which later scene actually came from your choice.</p></header>
            <ol className={styles.replaySteps}>
              <li><span>01</span><div><strong>Finish and note one route</strong><p>Write down Conrad&apos;s answer, Ryan&apos;s picnic answer and Alexander&apos;s late state.</p></div></li>
              <li><span>02</span><div><strong>Start a clean run</strong><p>Do not assume Continue is a chapter-select screen after the credits.</p></div></li>
              <li><span>03</span><div><strong>Change one route lock</strong><p>Use the full menu screenshots above and leave ordinary scene replies to preference.</p></div></li>
              <li><span>04</span><div><strong>Compare the closing scenes</strong><p>Count the final outcome, not every changed line, as the ending.</p></div></li>
            </ol>
            <div className={styles.replayLinks}><Link href="/walkthrough#choices">Use the complete walkthrough →</Link><Link href="/troubleshooting/stuck-softlock">Recover a stalled scene →</Link><Link href="/romance">Compare the relationships →</Link></div>
          </section>

          <section id="faq" className={styles.faqSection}>
            <header className={styles.sectionHeader}><p className={styles.kicker}>DIRECT ANSWERS</p><h2>Drag&apos;n Wash Endings FAQ</h2></header>
            <div className={styles.faqGrid}>{endingFaq.map((item) => <article key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></article>)}</div>
          </section>

          <section id="evidence-notes" className={styles.evidenceSection}>
            <div><p className={styles.kicker}>EVIDENCE & VERSION NOTES</p><h2>How These Routes Were Checked</h2><p>We followed full and chaptered playthroughs frame by frame, transcribed every visible menu used above and checked what happened later in the same recording. Video IDs and timestamps stay in the route data for maintenance; the page keeps you inside this guide.</p></div>
            <ul><li>Route locks require an on-screen label or a demonstrated later result.</li><li>Ordinary answers remain scene variations unless a branch is visible.</li><li>Adult frames are not used as thumbnails.</li><li>Official ending count remains separate from community route names.</li></ul>
          </section>
        </article>

        <aside className={`${inner.sidebar} ${styles.sidebar}`}>
          <div className="panel"><p className="eyebrow">SCENE INDEX</p><p className={inner.sidebarTitle}>Jump to a choice</p><a href="#ending-routes">Complete route map →</a><a href="#conrad-introduction-choice">Conrad&apos;s route fork →</a><a href="#ryan-picnic-choice">Ryan&apos;s picnic fork →</a><a href="#alexander-final-invitation">Alexander&apos;s invitation →</a><a href="#what-counts">What counts as an ending? →</a><a href="#replay-all-endings">Replay steps →</a><a href="#faq">Endings FAQ →</a></div>
          <div className="panel"><p className="eyebrow">CHARACTER FILES</p><p className={inner.sidebarTitle}>Meet each dragon</p><Link href="/dragons/alexander">Alexander profile →</Link><Link href="/dragons/ryan">Ryan profile →</Link><Link href="/dragons/conrad">Conrad profile →</Link><Link href="/romance">Romance guide →</Link></div>
          <div className="panel"><p className="eyebrow">RUN SUPPORT</p><p className={inner.sidebarTitle}>Before another ending</p><Link href="/walkthrough">Complete walkthrough →</Link><Link href="/troubleshooting/stuck-softlock">Stuck or softlocked? →</Link></div>
        </aside>
      </div>
    </main>
  );
}
