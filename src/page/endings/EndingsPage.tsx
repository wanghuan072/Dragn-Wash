import { metadataFor } from "@/seo/metadata";
import Link from "@/components/DocumentLink";
import Image from "next/image";
import { dragons } from "@/lib/content";
import styles from "@/style/page/inner.module.css";
import InnerPageHero from "@/components/content/InnerPageHero";
import { siteName, siteUrl } from "@/config/site";
export const metadata = metadataFor("endings", "/endings");
export default function EndingsPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Drag'n Wash Endings: Three Outcomes and Replay Guide",
      description: "A spoiler-aware guide to the three confirmed Drag'n Wash endings, relationship choices, replay limits and current route evidence.",
      image: `${siteUrl}/images/home/steam-5.webp`,
      dateModified: "2026-09-23",
      mainEntityOfPage: `${siteUrl}/endings`,
      publisher: { "@type": "Organization", name: siteName },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Endings", item: `${siteUrl}/endings` },
      ],
    },
  ];
  return (
    <main className={`container inner-page ${styles.endingsPage}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <InnerPageHero
        eyebrow="ROUTES & OUTCOMES"
        keyword="DRAG'N WASH ENDINGS"
        title="THREE OUTCOMES"
        subtitle="What Changes and How to Replay"
        lead="There are three confirmed endings, but the game does not publish a complete choice chart. Learn what to watch during a run, what remains uncertain and how to compare a different outcome without changing everything at once."
        image="/images/home/steam-5.webp"
        imageAlt="A later Drag'n Wash story scene used for the endings field record"
        reviewedAt="2026-09-23"
        plate="ENDING GUIDE"
        stamp={"SPOILER\nAHEAD"}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Endings" }]}
      />
      <div className={styles.warning}>
        <strong>⚠ Spoiler warning</strong>
        <p>
          This page discusses route structure and late-game planning. It avoids
          unverified ending scenes and precise dialogue solutions.
        </p>
      </div>
      <div className={styles.articleGrid}>
        <article className={`${styles.article} ${styles.endingsArticle}`}>
          <section className={styles.answer} id="overview">
            <span className="badge">OFFICIAL</span>
            <h2>Three endings are confirmed</h2>
            <p>
              The official game description states there are{" "}
              <strong>three endings</strong>, with approximately{" "}
              <strong>90 minutes of content per ending</strong>. It does not
              provide a public decision tree or the exact conditions for each
              result.
            </p>
            <a href="https://gatordragongames.itch.io/dragnwash" target="_blank" rel="noreferrer">
              Check the official description ↗
            </a>
          </section>
          <section id="characters">
            <h2>Choose a character focus</h2>
            <div className={styles.routeLinks}>
              {dragons.map((d) => (
                <Link href={`/dragons/${d.slug}`} key={d.slug}>
                  <strong>{d.name}</strong>
                  <span>Route overview and replay notes →</span>
                </Link>
              ))}
            </div>
          </section>
          <section id="confirmed">
            <h2>What the game tells you</h2>
            <p>
              <span className="badge">OFFICIAL</span> Three dragons appear in
              the game, three endings are listed in the developer&apos;s description, and
              the developer estimates about 90 minutes of content per ending.
              That figure is not a minimum or a fixed timer.
            </p>
          </section>
          <section id="evidence-map">
            <h2>What is known about the three endings</h2>
            <div className={styles.compare}>
              <div><strong>Question</strong><strong>Current answer</strong><strong>Where to go next</strong></div>
              <div><span>Three endings exist</span><span>Official developer description</span><a href="https://gatordragongames.itch.io/dragnwash" target="_blank" rel="noreferrer">Official page ↗</a></div>
              <div><span>Do the endings have official names?</span><span>No public names have been confirmed.</span><a href="#outcome-records">Compare late scenes ↓</a></div>
              <div><span>Is there an exact choice chart?</span><span>No complete chart is published; player-reported paths remain incomplete.</span><Link href="/romance">Relationship choices →</Link></div>
              <div><span>Are scene variations separate endings?</span><span>Not necessarily. A changed scene does not automatically increase the ending count.</span><a href="#branch-ledger">Review observed branches ↓</a></div>
            </div>
          </section>
          <section id="outcome-records">
            <h2>How to compare one ending with the next</h2>
            <div className={styles.walkthroughList}>
              <article><Image src="/images/home/steam-6.webp" width={520} height={293} alt="Purple dragon scene used when recording an Alexander-focused run"/><div><span className="eyebrow">CHARACTER CONTEXT</span><h3>Note who the late scene centers on</h3><p>Write down the character, any earlier date references and the exact later dialogue. A character appearing near the finale does not by itself prove a one-character-one-ending rule.</p></div></article>
              <article><Image src="/images/home/steam-10.webp" width={520} height={293} alt="Pale dragon reacting during a relationship scene"/><div><span className="eyebrow">CHOICE AND RESULT</span><h3>Separate the response from its consequence</h3><p>Keep the response, first visible change and final outcome separate. That makes it easier to tell whether a memorable scene was actually the decisive branch.</p></div></article>
              <article><Image src="/images/home/steam-11.webp" width={520} height={293} alt="Red dragon wash scene before a later route outcome"/><div><span className="eyebrow">NEXT RUN</span><h3>Change one meaningful choice</h3><p>On the next run, change one uncertain relationship response while keeping unrelated dialogue and cleaning behavior consistent.</p></div></article>
            </div>
          </section>
          <section id="branch-ledger">
            <h2>Reported branches and their current status</h2>
            <div className={styles.compare}>
              <div><strong>Observed branch</strong><strong>What is supported</strong><strong>Status</strong></div>
              <div><strong>Alexander late dialogue</strong><span>Players report acknowledgement of an earlier date with Ryan or Conrad.</span><span>Community report; exact prerequisite unverified</span></div>
              <div><strong>Ryan picnic</strong><span>The scene exists and received official edge-case fixes.</span><span>Scene official; ending effect unverified</span></div>
              <div><strong>Ryan–Conrad pairing</strong><span>Players report being able to connect the two characters.</span><span>Community outcome; choice chain incomplete</span></div>
              <div><strong>Three final outcomes</strong><span>The developer publishes a total of three endings.</span><span>Official count; names and mapping unpublished</span></div>
            </div>
            <p className={styles.note}>A recorded scene can establish that an outcome exists without proving the exact trigger that caused it.</p>
          </section>
          <section id="feature-status">
            <h2>How to replay Drag&apos;n Wash ending scenes</h2>
            <p>The current official descriptions do not advertise a scene gallery or chapter selector. Treat a completed progress slot as a record of that run, not as a guaranteed menu for reopening every earlier scene.</p>
            <div className={styles.compare}>
              <div><strong>Question</strong><strong>Current answer</strong><strong>Next step</strong></div>
              <div><span>How many endings?</span><span>Three are listed by the developer.</span><a href="https://gatordragongames.itch.io/dragnwash" target="_blank" rel="noreferrer">Official source ↗</a></div>
              <div><span>Scene gallery?</span><span>Not confirmed as a released feature.</span><a href="#replay-strategy">Plan another run ↓</a></div>
              <div><span>Chapter select?</span><span>Requested by players; not a confirmed unlock.</span><Link href="/updates#future-of-drag-n-wash">Development status →</Link></div>
              <div><span>Manual branch save?</span><span>Developer described save/load as requested.</span><a href="#replay-strategy">Replay strategy ↓</a></div>
            </div>
          </section>
          <section id="community">
            <h2>Community Observations</h2>
            <p>
              <span className="badge muted">COMMUNITY</span> Players discuss
              meeting all three dragons in a run. Reports describe an exclusive
              player romance and later dialogue that acknowledges an earlier
              date. Other players report being able to pair Ryan with Conrad.
              These are firsthand observations, not an official decision tree. {" "}
              <a href="https://steamcommunity.com/app/4739660/discussions/0/525387040750137310/" target="_blank" rel="noreferrer">Read the player discussion ↗</a>
            </p>
          </section>
          <section id="unverified">
            <h2>Still Being Tested</h2>
            <p>
              The exact dialogue requirements, affection thresholds, and point
              of no return for each ending are not confirmed by the official
              description. One player reports four outcomes, in tension with
              the developer&apos;s published count of three. It is unclear whether
              that player counted scene variants as separate outcomes, so
              unsupported “good”, “bad”, or “true” categories are not used here. {" "}
              <a href="https://steamcommunity.com/app/4739660/reviews/?browsefilter=toprated" target="_blank" rel="noreferrer">See the player review ↗</a>
            </p>
          </section>
          <section id="replay-strategy">
            <h2>Plan your next replay</h2>
            <p>
              <span className="badge">OFFICIAL</span> A developer said manual
              save/load is a highly requested feature still on the team&apos;s
              radar. Progress slots may exist, but do not assume they provide
              a manual checkpoint before any late choice. {" "}
              <a
                href="https://steamcommunity.com/app/4739660/discussions/0/525387040750131252/"
                target="_blank"
                rel="noreferrer"
              >
                Read the developer reply ↗
              </a>
            </p>
            <ol className={styles.timeline}>
              <li>
                <strong>Run 1 · Follow the shared story</strong>
                <span>
                  Meet all three dragons and complete a first ending. You can
                  follow one relationship more closely without skipping others.
                </span>
              </li>
              <li>
                <strong>During the run · Keep short notes</strong>
                <span>
                  Record meaningful responses and requests. There may be no
                  manual checkpoint to revisit them later.
                </span>
              </li>
              <li>
                <strong>After the ending · Record the result</strong>
                <span>
                  Note which character and ending you saw, plus any late choice
                  that seemed important.
                </span>
              </li>
              <li>
                <strong>Run 2 · Change one thing</strong>
                <span>
                  Focus on a different dragon or test one uncertain response so
                  you can compare outcomes.
                </span>
              </li>
            </ol>
            <a href="#feature-status">Review gallery and chapter-select status ↑</a>
          </section>
          <section id="another-ending">
            <h2>Starting another ending</h2>
            <p>If Continue on a completed slot returns to the credits, do not assume the save is a scene selector. Note the ending and relationship you saw, begin another run and change one meaningful response at a time. You will get a much clearer comparison than if you change every dialogue choice.</p>
            <Link href="/romance">Compare relationship choices →</Link>
          </section>
          <section id="faq">
            <h2>Drag&apos;n Wash endings FAQ</h2>
            <h3>How many endings are confirmed?</h3><p>Three. The developer&apos;s game description is the strongest source for the count.</p>
            <h3>Are there official Good, Bad or True Ending names?</h3><p>No such names were published in the official sources reviewed for this page. They are excluded until a first-party source or controlled current-build test supports them.</p>
            <h3>Does every dragon have a separate ending?</h3><p>That mapping is not established by the official three-ending statement. Character pages list observable scenes without converting them into a guaranteed finale formula.</p>
            <h3>Does cleaning quality decide the ending?</h3><p>No official numeric cleaning-to-ending rule has been published. Complete the requested care, then record relationship choices separately.</p>
          </section>
        </article>
        <aside className={styles.sidebar}>
          <div className="panel">
            <p className="eyebrow">PAGE GUIDE</p>
            <p className={styles.sidebarTitle}>On this page</p>
            <a href="#overview">Ending overview →</a>
            <a href="#characters">Character focus →</a>
            <a href="#confirmed">Confirmed facts →</a>
            <a href="#evidence-map">What is known →</a>
            <a href="#outcome-records">Compare endings →</a>
            <a href="#branch-ledger">Reported branches →</a>
            <a href="#feature-status">Replay status →</a>
            <a href="#unverified">Still being tested →</a>
            <a href="#replay-strategy">Replay strategy →</a>
            <a href="#faq">FAQ →</a>
          </div>
          <div className="panel">
            <p className="eyebrow">KEEP PLAYING</p>
            <p className={styles.sidebarTitle}>Plan the next run</p>
            <Link href="/dragons">Compare Drag&apos;n Wash dragon routes →</Link>
            <Link href="/romance">Relationship choices →</Link>
            <Link href="/walkthrough#playtime">Playtime and current modes →</Link>
            <Link href="/dragons#story-moments">Dragon visits and story moments →</Link>
            <Link href="/sources">How changing details are checked →</Link>
          </div>
          <div className="panel">
            <p className="eyebrow">RECOVERY</p>
            <p className={styles.sidebarTitle}>Progress stalled?</p>
            <Link href="/troubleshooting/stuck-softlock">Stuck / softlock fix →</Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
