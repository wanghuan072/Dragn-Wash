import { metadataFor } from "@/seo/metadata";
import Link from "next/link";
import Image from "next/image";
import { dragons } from "@/lib/content";
import styles from "@/style/page/inner.module.css";
import InnerPageHero from "@/components/content/InnerPageHero";
export const metadata = metadataFor("dragons", "/dragons");
export default function DragonsPage() {
  return (
    <main className={`container inner-page ${styles.dragonsIndexPage}`}>
      <InnerPageHero
        eyebrow="MEET THE DRAGONS"
        keyword="DRAG'N WASH CHARACTERS"
        title="MEET THE DRAGONS"
        subtitle="Alexander, Ryan & Conrad"
        lead="All three dragons visit during the same story. Choose a character below to follow his wash visits, later conversations, relationship moments and patch-related issues."
        image="/images/home/steam-7.webp"
        imageAlt="A dragon in the Drag'n Wash station"
        reviewedAt="2026-09-22"
        plate="MEET THE DRAGONS"
        stamp={"THREE\nSTORIES"}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Dragons" }]}
      />
      <div className={styles.warning}>
        <strong>One shared story, not three separate campaigns</strong>
        <p>You will meet Alexander, Ryan and Conrad in the same run. Following one character more closely may change later conversations, but the game does not publish a one-character-one-ending chart.</p>
      </div>
      <section className="panel">
        <h2>Explore each character</h2>
        <div className={styles.compare}>
          <div>
            <strong>Dragon</strong>
            <strong>Route focus</strong>
            <strong>Guide</strong>
          </div>
          {dragons.map((d) => (
            <div key={d.slug}>
              <strong>{d.name}</strong>
              <span>Conversations, requests & replay notes</span>
              <Link href={`/dragons/${d.slug}`}>View route →</Link>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.threeCards}>
        {dragons.map((d) => (
          <article className="panel" key={d.slug}>
            <Image src={d.image} width={640} height={360} alt={d.imageAlt} />
            <div>
              <span className="badge">ROUTE OVERVIEW</span>
              <h2>{d.name}</h2>
              <p>{d.description}</p>
              <Link className="button outline" href={`/dragons/${d.slug}`}>
                View route →
              </Link>
            </div>
          </article>
        ))}
      </section>
      <p className={styles.note}>
        The official patch names Conrad. Some early fan material calls the third
        character “Dagon”; the in-game/official name Conrad is used here.
      </p>
      <section className="panel">
        <h2>How their stories connect</h2>
        <p>The same run includes all three dragons. Player reports suggest that a dating choice can change later dialogue, and that Ryan and Conrad can be paired. Exact conditions are not published as an official route chart.</p>
        <Link href="/romance">Explore romance and relationship choices →</Link>
      </section>
      <section className={styles.columns}>
        <div className="panel">
          <h2>What each character page covers</h2>
          <p>Use these pages to recognize each dragon, prepare for his visits, revisit important conversations and check problems tied to a particular scene. They do not imply that the title screen offers three separate campaigns.</p>
          <div className={styles.compare}>
            <div><strong>Information</strong><strong>How it is treated</strong></div>
            <div><strong>Appearance</strong><span>Compared with official screenshots and scene captures</span></div>
            <div><strong>Name</strong><span>Official when present in patch text; otherwise labeled community</span></div>
            <div><strong>Personality</strong><span>Summary of observable dialogue, not numeric attributes</span></div>
            <div><strong>Route effect</strong><span>Separated into observed consequence and unverified trigger</span></div>
          </div>
        </div>
        <div className="panel">
          <h2>How to follow one character</h2>
          <ol>
            <li>Complete the shared opening and learn the wash loop.</li>
            <li>Record that character&apos;s meaningful dialogue responses.</li>
            <li>Finish contextual requests before deciding a scene is locked.</li>
            <li>Note later dialogue and the final outcome.</li>
            <li>Change one uncertain response on the next run.</li>
          </ol>
          <Link href="/walkthrough#choices">Walkthrough route discipline →</Link>
        </div>
      </section>
      <section className="panel" id="story-moments">
        <h2>Dragon visits and story moments</h2>
        <p>Use this overview to locate a character moment without treating every variation as a separate ending. Visit order belongs to the shared playthrough; ending interpretation and replay limitations are covered on the Endings page.</p>
        <div className={styles.compare}>
          <div><strong>Character</strong><strong>Documented story lead</strong><strong>Open the character page</strong></div>
          <div><strong>Alexander</strong><span>Late dialogue may acknowledge earlier dating choices; exact branch rules remain under review.</span><Link href="/dragons/alexander">Follow Alexander&apos;s scenes →</Link></div>
          <div><strong>Ryan</strong><span>A picnic sequence exists and received official edge-case fixes.</span><Link href="/dragons/ryan">Follow Ryan&apos;s scenes →</Link></div>
          <div><strong>Conrad</strong><span>Official hotfix notes name him and document level 8 and level 14 fixes.</span><Link href="/dragons/conrad">Follow Conrad&apos;s scenes →</Link></div>
        </div>
        <div className={styles.inlineLinks}><Link href="/walkthrough#story-flow">Follow the shared story order →</Link><Link href="/endings#feature-status">Check scene replay options →</Link><Link href="/endings">Compare the three endings →</Link></div>
      </section>
      <section className="panel" id="interactions">
        <h2>Player-reported interactions worth checking</h2>
        <p><span className="badge muted">COMMUNITY</span> Players report small reactions when using the sprayer near a dragon&apos;s face, petting during permitted interactions and approaching missed dirt from another angle. These observations can help you notice the game&apos;s animation and feedback, but they are not a secret-ending checklist.</p>
        <p>Record the character, visit and current build before treating an unusual reaction as repeatable. If an interaction prevents progress, use the <Link href="/troubleshooting/stuck-softlock">softlock recovery guide</Link>; if the clean bar stops, use the <Link href="/troubleshooting/wash-progress">wash-progress checks</Link>.</p>
        <div className={styles.inlineLinks}><Link href="/romance">Relationship observations →</Link><Link href="/sources">How player reports are labeled →</Link></div>
      </section>
    </main>
  );
}
