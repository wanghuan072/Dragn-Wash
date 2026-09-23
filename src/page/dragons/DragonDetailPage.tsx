import Link from "@/components/DocumentLink";
import Image from "next/image";
import { dragons } from "@/lib/content";
import { sceneRecords } from "@/data/knowledge";
import styles from "@/style/page/inner.module.css";
import InnerPageHero from "@/components/content/InnerPageHero";
import { siteName, siteUrl } from "@/config/site";
const routeNotes: Record<
  string,
  {
    overview: string;
    focus: string;
    atGlanceTitle: string;
    identityTitle: string;
    overviewTitle: string;
    focusTitle: string;
    interactionTitle: string;
    issueTitle: string;
    endingTitle: string;
    evidenceTitle: string;
    reportContext: string;
    interactions: string[];
    replayChecks: string[];
  }
> = {
  alexander: {
    overview:
      "Alexander is the tall purple dragon shown in the official game imagery. Players often single out his quieter conversations, but personality summaries are community impressions rather than formal route rules.",
    focus:
      "During Alexander's late conversation, watch for acknowledgement of an earlier date with Ryan or Conrad. Note the exact response if you plan to compare it on another run; a complete branch table has not been published.",
    atGlanceTitle: "Alexander Route at a Glance",
    identityTitle: "Alexander Profile and Visual Identification",
    overviewTitle: "Alexander's Character and Wash-Station Role",
    focusTitle: "Alexander's Late Relationship Dialogue",
    interactionTitle: "Important Alexander Interactions",
    issueTitle: "Alexander Model-Clipping Fix and Patch History",
    endingTitle: "Alexander Ending Evidence",
    evidenceTitle: "Alexander Facts, Reports and Open Questions",
    reportContext:
      "Alexander's late dialogue and references to earlier Ryan or Conrad choices",
    interactions: [
      "Read his conversation after the wash rather than leaving as soon as the cleaning stage ends.",
      "Watch his late conversation for a reference to an earlier date with Ryan or Conrad (community report).",
      "On a replay, change one response and compare the ending rather than changing every earlier interaction.",
    ],
    replayChecks: [
      "Note whether you dated Ryan or Conrad before Alexander's late conversation.",
      "Record Alexander's actual response rather than guessing at a hidden score.",
      "On a later run, compare that response after changing one relationship choice.",
    ],
  },
  ryan: {
    overview:
      "Ryan is one of the three returning dragon customers. Players describe his expressions as especially lively; treat that as a community impression, not a hidden score indicator.",
    focus:
      "Follow Ryan's requests in order and pay special attention to the picnic interaction. Choices involving the other dragons may affect later dialogue, so note any response you want to compare. The September 2026 hotfix corrected a picnic-scene edge case.",
    atGlanceTitle: "Ryan Route at a Glance",
    identityTitle: "Ryan Profile and Visual Identification",
    overviewTitle: "Ryan's Character and Wash-Station Role",
    focusTitle: "Ryan's Picnic Scene",
    interactionTitle: "Ryan's Picnic and Relationship Interactions",
    issueTitle: "Ryan Picnic Scene Fixes",
    endingTitle: "Ryan Ending Evidence",
    evidenceTitle: "Ryan Facts, Reports and Open Questions",
    reportContext:
      "Ryan's picnic sequence and reports about a possible Ryan–Conrad pairing",
    interactions: [
      "Check each wash prompt and the following conversation before trying to advance.",
      "At the picnic scene, complete the current request before using a workaround from an older guide.",
      "If the scene stops responding, confirm the hotfix is installed and try the game-menu recovery option.",
    ],
    replayChecks: [
      "Write down the response you chose in Ryan's relationship conversations.",
      "Finish the picnic request before judging whether a scene is blocked.",
      "Compare later dialogue on a second run; do not assume a named ending from one scene.",
    ],
  },
  conrad: {
    overview:
      "Conrad is the smaller red dragon. The official hotfix explicitly names him, which is why this site uses Conrad instead of the Dagon label found in some early fan guides.",
    focus:
      "Pay attention to prompts and relationship choices involving Conrad and Ryan. Players report that the two can be paired, so note what you chose without treating an incomplete choice chain as proven. The September 2026 hotfix fixed two level 8 issues involving Conrad.",
    atGlanceTitle: "Conrad Route at a Glance",
    identityTitle: "Why Some Guides Call Conrad Dagon",
    overviewTitle: "Conrad's Character and Wash-Station Role",
    focusTitle: "Conrad and Ryan Relationship Reports",
    interactionTitle: "Conrad's Level 8 Interactions",
    issueTitle: "Conrad Level 8 and Level 14 Fixes",
    endingTitle: "Conrad Ending Evidence",
    evidenceTitle: "Conrad Facts, Reports and Open Questions",
    reportContext:
      "Conrad's level 8 interactions and reports about a possible Ryan–Conrad pairing",
    interactions: [
      "Complete the current request before changing scene items.",
      "If level 8 stalls, verify the game build first; the official patch addressed an interaction-order softlock and a separate window issue.",
      "Treat the level 14 texture fix as a visual correction, not a route trigger.",
    ],
    replayChecks: [
      "Record dialogue involving Conrad and Ryan separately from the wash steps.",
      "If level 8 fails, note the installed build before trying a route change.",
      "Compare the ending after altering only one relationship response.",
    ],
  },
};
const secondaryImages: Record<string, { src: string; alt: string }> = {
  alexander: { src: "/images/home/steam-7.webp", alt: "Wide station view of Alexander for visual identification" },
  ryan: { src: "/images/home/steam-10.webp", alt: "Ryan reacting during a later Drag'n Wash interaction" },
  conrad: { src: "/images/home/steam-4.webp", alt: "Conrad speaking during a station scene" },
};
export default function DragonDetailPage({ slug }: { slug: string }) {
  const dragon = dragons.find((d) => d.slug === slug)!;
  const notes = routeNotes[slug];
  const scenes = sceneRecords.filter((scene) => scene.character.toLowerCase() === slug);
  const faq = [
    {
      question: `Is ${dragon.name} a separate campaign?`,
      answer: `No. You meet all three dragons during the shared story run; this guide keeps ${dragon.name}'s conversations and scene-specific issues together so they are easier to follow.`,
    },
    {
      question: `Does ${dragon.name} have a confirmed unique ending?`,
      answer: "The developer confirms three endings but has not published a one-character-one-ending map. Treat exact fan route labels as unverified until reproduced.",
    },
    ...(slug === "ryan"
      ? [{
          question: "Can Ryan and Conrad get together?",
          answer: "Players report a Ryan–Conrad pairing, but a guaranteed current-build choice sequence has not been independently confirmed.",
        }]
      : []),
    ...(slug === "conrad"
      ? [{
          question: "Is Conrad the character some guides call Dagon?",
          answer: "Official hotfix notes use Conrad. This site uses the official name and treats Dagon as an older community label.",
        }]
      : []),
  ];
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: `${dragon.name} Route Guide`,
      description: dragon.seoDescription,
      image: `${siteUrl}${dragon.image}`,
      dateModified: dragon.updatedAt,
      mainEntityOfPage: `${siteUrl}/dragons/${slug}`,
      publisher: { "@type": "Organization", name: siteName },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Dragons", item: `${siteUrl}/dragons` },
        { "@type": "ListItem", position: 3, name: dragon.name, item: `${siteUrl}/dragons/${slug}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ];
  return (
    <main className={`container inner-page ${styles.characterPage}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <InnerPageHero
        eyebrow="CHARACTER GUIDE · LIGHT SPOILERS"
        keyword="DRAG'N WASH"
        title={`${dragon.name} Route Guide`}
        subtitle="Scenes, Choices & Route Notes"
        lead={`Follow ${dragon.name}'s visits in the shared story, spot the interactions worth remembering and prepare for scene-specific problems before your next run.`}
        image={dragon.image}
        imageAlt={dragon.imageAlt}
        reviewedAt="2026-09-23"
        plate="DRAGON STORY"
        stamp={"MEET\nTHE DRAGON"}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Dragons", href: "/dragons" }, { label: dragon.name }]}
      />
      <div className={styles.articleGrid}>
        <article className={`${styles.article} ${styles.characterArticle}`}>
          <section className={styles.answer} id="overview">
            <span className="badge">ROUTE AT A GLANCE</span>
            <h2>{notes.atGlanceTitle}</h2>
            <p>
              You meet all three dragons in the same run. Use this page to
              follow {dragon.name}&apos;s scenes rather than treating him as a
              separate campaign: finish his current request, note meaningful
              responses and compare what changes later.
            </p>
          </section>
          <section id="route">
            <h2>{notes.focusTitle}</h2>
            <p>
              {notes.focus} See the <Link href="/endings">Drag&apos;n Wash endings guide</Link>{" "}
              before a replay.
            </p>
            <p>
              <span className="badge muted">COMMUNITY</span> These relationship
              observations come from player reports about {notes.reportContext}. {" "}
              <a href="https://steamcommunity.com/app/4739660/discussions/0/525387040750137310/" target="_blank" rel="noreferrer">Read the firsthand discussion ↗</a>
            </p>
          </section>
          <section id="identity">
            <h2>{notes.identityTitle}</h2>
            <div className={styles.compare}>
              <div><strong>Field</strong><strong>Current record</strong><strong>Confidence</strong></div>
              <div><strong>Name</strong><span>{dragon.name}</span><span>{slug === "conrad" ? "Official patch text" : "Established community name"}</span></div>
              <div><strong>Visual ID</strong><span>{slug === "alexander" ? "Tall purple dragon" : slug === "ryan" ? "Pale blue-white dragon" : "Smaller red dragon"}</span><span>Official screenshots + community identification</span></div>
              <div><strong>Campaign structure</strong><span>Appears in the shared story run</span><span>Consistent across current guides</span></div>
              <div><strong>Unique ending formula</strong><span>Not published</span><span>Verification required</span></div>
            </div>
            <p className={styles.note}>{slug === "conrad" ? "Conrad is named directly in the official Kobold Hotfix." : `${dragon.name}'s name is widely used by players and route videos, but has not been found in the official store copy reviewed for this page.`}</p>
          </section>
          <section id="character">
            <h2>{notes.overviewTitle}</h2>
            <p>
              <span className="badge muted">COMMUNITY</span> {notes.overview}
            </p>
            <Image className={styles.inlineImage} src={secondaryImages[slug].src} width={900} height={506} alt={secondaryImages[slug].alt} />
          </section>
          <section id="interactions">
            <h2>{notes.interactionTitle}</h2>
            <ul>
              {notes.interactions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section id="tools">
            <h2>{dragon.name} Wash Tools and Scene States</h2>
            <div className={styles.compare}>
              <div><strong>State</strong><strong>What to watch</strong><strong>Next step</strong></div>
              <div><strong>Normal wash</strong><span>Follow bucket, sponge, rinse and post-wash prompts.</span><Link href="/guides/how-to-wash">Wash guide →</Link></div>
              <div><strong>Contextual request</strong><span>Later care can use dialogue or scene items rather than ordinary washing.</span><a href="#scenes">Character scenes ↓</a></div>
              <div><strong>Relationship response</strong><span>Record the exact line and later observable consequence.</span><Link href="/romance">Relationship choices →</Link></div>
              <div><strong>Interaction lock</strong><span>Update first; use Unstick only when movement or interaction is blocked.</span><Link href="/troubleshooting/stuck-softlock">Fix a Drag&apos;n Wash softlock →</Link></div>
            </div>
          </section>
          <section id="scenes">
            <h2>{dragon.name}&apos;s scenes</h2>
            <div className={styles.compare}>
              <div><strong>Scene</strong><strong>What is known</strong><strong>Open</strong></div>
              {scenes.map((scene) => (
                <div key={scene.id}>
                  <strong>{scene.title}</strong>
                  <span>{scene.evidence} · {scene.availability}. {scene.notes}</span>
                  <Link href="/dragons#story-moments">Compare all dragon story visits →</Link>
                </div>
              ))}
            </div>
            <p className={styles.note}>These records keep what is known on the character page without turning an unverified visit order into a route requirement.</p>
          </section>
          <section id="branch-points">
            <h2>{dragon.name} Relationship Choices to Record</h2>
            <p>
              Before a meaningful response or late route scene, write down your
              choice. Manual save/load was described by the developer as a
              requested feature, not a confirmed tool for revisiting this point.
              The exact branch point has not been independently verified.
            </p>
            <Link href="/endings#replay-strategy">Full replay strategy →</Link>
          </section>
          <section id="replay">
            <h2>{dragon.name} replay checklist</h2>
            <ol>
              {notes.replayChecks.map((check) => <li key={check}>{check}</li>)}
            </ol>
            <Link href="/romance">Compare relationship observations →</Link>
          </section>
          <section id="issues">
            <h2>{notes.issueTitle}</h2>
            {slug === "conrad" ? (
              <p>
                <span className="badge">OFFICIAL</span> The September 2026 Kobold
                Hotfix addressed a level 8 interaction-order softlock, a
                separate level 8 window issue, and a level 14 texture issue
                involving Conrad. Update before retrying those scenes.
              </p>
            ) : slug === "ryan" ? (
              <p>
                <span className="badge">OFFICIAL</span> The September 2026 hotfix
                addressed edge cases during Ryan&apos;s picnic scene. If your
                scene gets stuck, update first and then try{" "}
                <Link href="/troubleshooting/stuck-softlock">Unstick or a restart</Link>.
              </p>
            ) : (
              <p>
                <span className="badge">OFFICIAL</span> The September 2026 hotfix
                included a model-clipping fix for Alexander. No exact
                route-choice table was published in that update.
              </p>
            )}
            <Link href="/updates#kobold-hotfix">Read the Drag&apos;n Wash Kobold Hotfix →</Link>
          </section>
          <section id="ending-impact">
            <h2>{notes.endingTitle}</h2>
            <p>
              Official information lists three endings in total, but it does
              not establish a one-dragon-one-ending mapping. Do not treat a
              specific {dragon.name} finale trigger as guaranteed unless the
              same choices still produce it on the current build.
            </p>
            <Link href="/endings">Drag&apos;n Wash endings and replay guide →</Link>
          </section>
          <section id="faq">
            <h2>{dragon.name} FAQ</h2>
            {faq.map((item) => (
              <div className={styles.faqItem} key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
            {slug === "ryan" && <Link href="/romance#ryan-conrad">Read the Ryan and Conrad pairing notes →</Link>}
          </section>
          <section id="sources">
            <h2>{notes.evidenceTitle}</h2>
            <p>
              Official patch notes confirm the named fixes
              {slug === "conrad" ? " and Conrad's character name" : " for this character"}.
              The store description confirms the shared premise and three-ending
              count. Personality, pairing and precise route observations remain
              player findings until the same result can be repeated.
            </p>
            <div className={styles.inlineLinks}><Link href="/sources">How game details are checked →</Link><a href="https://steamcommunity.com/app/4739660/allnews/" target="_blank" rel="noreferrer">Official announcements ↗</a></div>
          </section>
        </article>
        <aside className={styles.sidebar}>
          <div className="panel">
            <p className="eyebrow">PAGE GUIDE</p>
            <p className={styles.sidebarTitle}>On this page</p>
            <a href="#overview">Route at a glance →</a>
            <a href="#route">Shared route role →</a>
            <a href="#identity">Character identity →</a>
            <a href="#character">Character overview →</a>
            <a href="#interactions">Important interactions →</a>
            <a href="#tools">Tools & scene states →</a>
            <a href="#scenes">Character scenes →</a>
            <a href="#replay">Replay checklist →</a>
            <a href="#issues">Known issues →</a>
            <a href="#ending-impact">Ending impact →</a>
            <a href="#faq">FAQ →</a>
          </div>
          <div className="panel">
            <p className="eyebrow">KEEP PLAYING</p>
            <p className={styles.sidebarTitle}>Continue the route</p>
            <Link href="/guides/how-to-wash">Washing basics →</Link>
            <a href="#scenes">Character scenes →</a>
            <Link href="/romance">Relationship choices →</Link>
            <Link href="/endings">Endings and replay →</Link>
            <Link href="/troubleshooting">Troubleshooting →</Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
