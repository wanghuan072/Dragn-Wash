import { metadataFor } from "@/seo/metadata";
import Link from "@/components/DocumentLink";
import Image from "next/image";
import { dragons } from "@/lib/content";
import styles from "@/style/page/inner.module.css";
import InnerPageHero from "@/components/content/InnerPageHero";
import { siteName, siteUrl } from "@/config/site";
import { characterNameStatus, contentReview } from "@/data/currentFacts";
export const metadata = metadataFor("dragons", "/dragons");
export default function DragonsPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Drag'n Wash Characters: Alexander, Ryan and Conrad",
      description: "Character and route guides for all three dragons in the shared Drag'n Wash story.",
      url: `${siteUrl}/dragons`,
      isPartOf: { "@type": "WebSite", name: siteName, url: siteUrl },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: dragons.map((dragon, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: dragon.name,
          url: `${siteUrl}/dragons/${dragon.slug}`,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Dragons", item: `${siteUrl}/dragons` },
      ],
    },
  ];
  return (
    <main className={`container inner-page ${styles.dragonsIndexPage}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <InnerPageHero
        eyebrow="MEET THE DRAGONS"
        keyword="DRAG'N WASH CHARACTERS"
        title="Alexander, Ryan and Conrad"
        subtitle="The three dragons in one shared run"
        lead="All three dragons visit during the same story. Choose a character below to follow his wash visits, later conversations, relationship moments and patch-related issues."
        image="/images/home/steam-7.webp"
        imageAlt="A dragon in the Drag'n Wash station"
        reviewedAt={contentReview.checkedAt}
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
        {characterNameStatus.conrad} Alexander and Ryan are identified by the names used in the game interface and established player route records. Some early fan material calls Conrad “Dagon”; this guide uses Conrad consistently.
      </p>
      <section className="panel">
        <h2>How their stories connect</h2>
        <p>The same run includes all three dragons. Recorded menus now show Conrad&apos;s first relationship fork, Ryan&apos;s picnic decision and Alexander&apos;s late invitation. Those visible choices form a practical route map, but the developer has not published official names or hidden point requirements for the three endings.</p>
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
          <div><strong>Alexander</strong><span>Optional questions, existing-date dialogue and a recorded late romance or no-romance invitation.</span><Link href="/dragons/alexander">Follow Alexander&apos;s scenes →</Link></div>
          <div><strong>Ryan</strong><span>Picnic dialogue, a filmed romance lock and the second step of the Ryan–Conrad pairing.</span><Link href="/dragons/ryan">Follow Ryan&apos;s scenes →</Link></div>
          <div><strong>Conrad</strong><span>Early recovery, the first filmed relationship fork and official level 8 and level 14 fixes.</span><Link href="/dragons/conrad">Follow Conrad&apos;s scenes →</Link></div>
        </div>
        <div className={styles.inlineLinks}><Link href="/walkthrough#story-flow">Follow the shared story order →</Link><Link href="/endings#replay-all-endings">Check scene replay options →</Link><Link href="/endings#ending-routes">Compare the ending routes →</Link></div>
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
