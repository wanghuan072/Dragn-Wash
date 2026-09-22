import Link from "next/link";
import Image from "next/image";
import { dragons } from "@/lib/content";
import { sceneRecords } from "@/data/knowledge";
import styles from "@/style/page/inner.module.css";
import InnerPageHero from "@/components/content/InnerPageHero";
const routeNotes: Record<
  string,
  { overview: string; focus: string; interactions: string[]; replayChecks: string[] }
> = {
  alexander: {
    overview:
      "Alexander is the tall purple dragon shown in the official game imagery. Players often single out his quieter conversations, but personality summaries are community impressions rather than formal route rules.",
    focus:
      "During Alexander's late conversation, watch for acknowledgement of an earlier date with Ryan or Conrad. Note the exact response if you plan to compare it on another run; a complete branch table has not been published.",
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
      "Follow Ryan's requests in order and pay special attention to the picnic interaction. Choices involving the other dragons may affect later dialogue, so note any response you want to compare. The September 13 hotfix corrected a picnic-scene edge case.",
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
      "Pay attention to prompts and relationship choices involving Conrad and Ryan. Players report that the two can be paired, so note what you chose without treating an incomplete choice chain as proven. The September 13 hotfix fixed two level 8 issues involving Conrad.",
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
  return (
    <main className={`container inner-page ${styles.characterPage}`}>
      <InnerPageHero
        eyebrow="CHARACTER GUIDE · LIGHT SPOILERS"
        keyword="DRAG'N WASH CHARACTER"
        title={dragon.name}
        subtitle="Scenes, Choices & Route Notes"
        lead={`Follow ${dragon.name}'s visits in the shared story, spot the interactions worth remembering and prepare for scene-specific problems before your next run.`}
        image={dragon.image}
        imageAlt={dragon.imageAlt}
        reviewedAt="2026-09-21"
        plate="DRAGON STORY"
        stamp={"MEET\nTHE DRAGON"}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Dragons", href: "/dragons" }, { label: dragon.name }]}
      />
      <div className={styles.articleGrid}>
        <article className={`${styles.article} ${styles.characterArticle}`}>
          <section className={styles.answer} id="overview">
            <span className="badge">ROUTE AT A GLANCE</span>
            <h2>What matters now</h2>
            <p>
              You meet all three dragons in the same run. Use this page to
              follow {dragon.name}&apos;s scenes rather than treating him as a
              separate campaign: finish his current request, note meaningful
              responses and compare what changes later.
            </p>
          </section>
          <section id="identity">
            <h2>How to recognize {dragon.name}</h2>
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
            <h2>Character overview</h2>
            <p>
              <span className="badge muted">COMMUNITY</span> {notes.overview}
            </p>
            <Image className={styles.inlineImage} src={secondaryImages[slug].src} width={900} height={506} alt={secondaryImages[slug].alt} />
          </section>
          <section id="route">
            <h2>How to follow his story</h2>
            <p>
              {notes.focus} See the <Link href="/endings">ending overview</Link>{" "}
              before a replay.
            </p>
            <p>
              <span className="badge muted">COMMUNITY</span> These relationship
              observations come from player reports, including a discussion of
              Alexander&apos;s late dialogue and Ryan–Conrad pairing. {" "}
              <a href="https://steamcommunity.com/app/4739660/discussions/0/525387040750137310/" target="_blank" rel="noreferrer">Read the firsthand discussion ↗</a>
            </p>
          </section>
          <section id="interactions">
            <h2>What to do during important interactions</h2>
            <ul>
              {notes.interactions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section id="tools">
            <h2>Tools and scene states to watch</h2>
            <div className={styles.compare}>
              <div><strong>State</strong><strong>What to watch</strong><strong>Next step</strong></div>
              <div><strong>Normal wash</strong><span>Follow bucket, sponge, rinse and post-wash prompts.</span><Link href="/guides/how-to-wash">Wash guide →</Link></div>
              <div><strong>Contextual request</strong><span>Later care can use dialogue or scene items rather than ordinary washing.</span><a href="#scenes">Character scenes ↓</a></div>
              <div><strong>Relationship response</strong><span>Record the exact line and later observable consequence.</span><Link href="/romance">Relationship choices →</Link></div>
              <div><strong>Interaction lock</strong><span>Update first; use Unstick only when movement or interaction is blocked.</span><Link href="/troubleshooting/stuck-softlock">Recovery →</Link></div>
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
                  <Link href="/dragons#story-moments">Compare visits →</Link>
                </div>
              ))}
            </div>
            <p className={styles.note}>These records keep what is known on the character page without turning an unverified visit order into a route requirement.</p>
          </section>
          <section id="branch-points">
            <h2>What to note before a branch</h2>
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
            <h2>Known Issues &amp; Patch History</h2>
            {slug === "conrad" ? (
              <p>
                <span className="badge">OFFICIAL</span> The September 13 Kobold
                Hotfix addressed a level 8 interaction-order softlock, a
                separate level 8 window issue, and a level 14 texture issue
                involving Conrad. Update before retrying those scenes.
              </p>
            ) : slug === "ryan" ? (
              <p>
                <span className="badge">OFFICIAL</span> The September 13 hotfix
                addressed edge cases during Ryan&apos;s picnic scene. If your
                scene gets stuck, update first and then try{" "}
                <Link href="/troubleshooting/stuck-softlock">Unstick or a restart</Link>.
              </p>
            ) : (
              <p>
                <span className="badge">OFFICIAL</span> The September 13 hotfix
                included a model-clipping fix for Alexander. No exact
                route-choice table was published in that update.
              </p>
            )}
            <Link href="/updates#kobold-hotfix">Read the hotfix impact →</Link>
          </section>
          <section id="ending-impact">
            <h2>Ending Impact</h2>
            <p>
              Official information lists three endings in total, but it does
              not establish a one-dragon-one-ending mapping. Do not treat a
              specific {dragon.name} finale trigger as guaranteed unless the
              same choices still produce it on the current build.
            </p>
            <Link href="/endings">Endings &amp; replay planning →</Link>
          </section>
          <section id="faq">
            <h2>{dragon.name} FAQ</h2>
            <h3>Is {dragon.name} a separate campaign?</h3>
            <p>No. You meet all three dragons during the shared story run; this guide keeps {dragon.name}&apos;s conversations and scene-specific issues together so they are easier to follow.</p>
            <h3>Does {dragon.name} have a confirmed unique ending?</h3>
            <p>The developer confirms three endings but has not published a one-character-one-ending map. Treat exact fan route labels as unverified until reproduced.</p>
            {slug === "ryan" && <><h3>Can Ryan and Conrad get together?</h3><p>Players report a Ryan–Conrad pairing, but a guaranteed current-build choice sequence has not been independently confirmed. See the <Link href="/romance#ryan-conrad">pairing notes and replay plan</Link>.</p></>}
            {slug === "conrad" && <><h3>Is Conrad the character some guides call Dagon?</h3><p>Official hotfix notes use Conrad. This site redirects the older Dagon label here to avoid creating duplicate character pages.</p></>}
          </section>
          <section id="sources">
            <h2>What is confirmed and what can still change</h2>
            <p>Official patch notes confirm the named fixes and, for Conrad, the character name. The store description confirms the shared premise and three-ending count. Personality, pairing and precise route observations remain player findings until the same result can be repeated.</p>
            <div className={styles.inlineLinks}><Link href="/sources">How game details are checked →</Link><a href="https://steamcommunity.com/app/4739660/allnews/" target="_blank" rel="noreferrer">Official announcements ↗</a></div>
          </section>
        </article>
        <aside className={styles.sidebar}>
          <div className="panel">
            <p className="eyebrow">PAGE GUIDE</p>
            <h2>On this page</h2>
            <a href="#overview">Route at a glance →</a>
            <a href="#identity">Character identity →</a>
            <a href="#character">Character overview →</a>
            <a href="#route">Shared route role →</a>
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
            <h2>Continue the route</h2>
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
