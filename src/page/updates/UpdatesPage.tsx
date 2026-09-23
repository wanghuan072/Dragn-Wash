import Image from "next/image";
import Link from "@/components/DocumentLink";
import { metadataFor } from "@/seo/metadata";
import { officialNews, updates } from "@/lib/content";
import styles from "@/style/page/inner.module.css";
import InnerPageHero from "@/components/content/InnerPageHero";
import { siteName, siteUrl } from "@/config/site";
import { formatMonthYear, monthDateTime } from "@/lib/dates";

export const metadata = metadataFor("updates", "/updates");

const details: Record<string, { summary: string; changes: string[]; impact: string; links: { label: string; href: string }[] }> = {
  "kobold-hotfix": {
    summary: "The first major post-launch hotfix added recovery and comfort options while fixing character, input, Linux, Deck and scene-progression problems.",
    changes: [
      "Added Sprayer Reduce Motion, Invert Look Y and an Unstick Kobold menu action.",
      "Fixed Conrad level 8 interaction-order and window softlocks, plus a level 14 texture swap.",
      "Fixed a medkit-between-levels softlock and turning locks while using the sponge or hand.",
      "Fixed native Linux graphics on Nvidia GPUs and Steam Deck touchscreen spinning.",
      "Preloaded shaders at boot to reduce first-seen hitching; the main menu may therefore take longer to appear.",
      "Corrected Ryan picnic edge cases, rare already-clean arrivals, expressions, clipping and other presentation issues.",
    ],
    impact: "Update before following an old workaround. Use Unstick only for an actual movement or interaction lock; a full-looking clean bar may still require another task.",
    links: [
      { label: "Troubleshooting guide", href: "/troubleshooting" },
      { label: "Launch & performance", href: "/troubleshooting/launch-performance" },
      { label: "Conrad guide", href: "/dragons/conrad" },
    ],
  },
  "steam-deck-verified": {
    summary: "Valve marked Drag'n Wash Steam Deck Verified after work on the native Linux build.",
    changes: [
      "Official Verified status applies to the Steam version reviewed by Valve.",
      "The announcement specifically credits work on the native Linux build.",
      "Verification does not guarantee that every community mod or external installer is Deck-compatible.",
    ],
    impact: "Base-game buyers can use the official Deck status when deciding where to play. Mod users should still follow each project's Deck/Linux instructions.",
    links: [
      { label: "Stores & platform overview", href: "/#buy" },
      { label: "Localization on Deck", href: "/mods/localization" },
      { label: "Controls guide", href: "/guides/controls" },
    ],
  },
  "future-of-drag-n-wash": {
    summary: "The developer named Steam Workshop support as the first development priority and said larger content plans would follow it.",
    changes: [
      "Workshop support is a development priority, not a released feature.",
      "The team wants to make the game easier to mod.",
      "Further content was promised only in broad terms; no date, character, mode or feature list was announced.",
    ],
    impact: "Do not treat custom dragons, Job Mode, a gallery or a particular new scene as confirmed. Check the live announcement feed before planning around a community wish list.",
    links: [
      { label: "Mods status", href: "/mods" },
      { label: "Playtime & current modes", href: "/walkthrough#playtime" },
      { label: "Dragon interactions", href: "/dragons#interactions" },
    ],
  },
};

export default function UpdatesPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Drag'n Wash Updates and Patch Timeline",
      description: "A dated Drag'n Wash update timeline with official changes, practical player impact and current feature status.",
      url: `${siteUrl}/updates`,
      isPartOf: { "@type": "WebSite", name: siteName, url: siteUrl },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: updates.map((update, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: update.title,
          url: `${siteUrl}/updates#${update.slug}`,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Updates", item: `${siteUrl}/updates` },
      ],
    },
  ];
  return (
    <main className={`container inner-page ${styles.updatesPage}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <InnerPageHero
        eyebrow="OFFICIAL CHANGE LOG"
        keyword="DRAG'N WASH UPDATES"
        title="PATCH TIMELINE"
        subtitle="Changes That Affect Your Playthrough"
        lead="Follow each announced change in date order and see what it means for stuck scenes, controls, Steam Deck play, mods and older guide steps."
        image="/images/updates/steam-1.webp"
        imageAlt="Drag'n Wash official update artwork"
        reviewedAt="2026-09-22"
        plate="PATCH TIMELINE"
        stamp={"DATED\nRECORD"}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Updates" }]}
      />
      <div className={styles.warning}>
        <strong>No invented version numbers</strong>
        <p>The current official posts are titled announcements rather than numbered release notes. Build identifiers from itch.io packages or third-party mods are not relabeled as Steam patch versions.</p>
      </div>
      <div className={styles.updateTimeline}>
        {updates.map((item) => {
          const detail = details[item.slug];
          return (
            <article className="panel" id={item.slug} key={item.slug}>
              <div className={styles.updateMarker} aria-hidden="true" />
              <div className={styles.updateDate}>
                <time dateTime={monthDateTime(item.date)}>{formatMonthYear(item.date)}</time>
                <span className="badge">{item.tag}</span>
              </div>
              <div className={styles.updateBody}>
                <Image src={item.image} width={720} height={405} alt={item.imageAlt} priority={item === updates[0]} />
                <h2>{item.title}</h2>
                <p>{detail.summary}</p>
                <h3>What changed</h3>
                <ul>{detail.changes.map((change) => <li key={change}>{change}</li>)}</ul>
                <div className={styles.impactBox}><strong>What it means for players</strong><p>{detail.impact}</p></div>
                <div className={styles.inlineLinks}>{detail.links.map((link) => <Link key={link.href} href={link.href}>{link.label} →</Link>)}</div>
                <a href={officialNews} target="_blank" rel="noreferrer">Read the official announcement feed ↗</a>
              </div>
            </article>
          );
        })}
      </div>
      <section className="panel" id="requested-features">
        <h2>Requested features that are not released</h2>
        <p>Community interest is useful for understanding what players want, but it is not a roadmap. The table below keeps popular searches separate from features that have actually shipped.</p>
        <div className={styles.compare}>
          <div><strong>Requested feature</strong><strong>Current status</strong><strong>Where to check</strong></div>
          <div><span>Job Mode or endless washing</span><span>Not confirmed as released</span><Link href="/walkthrough#playtime">Current play structure →</Link></div>
          <div><span>Scene gallery or chapter select</span><span>Not confirmed as released</span><Link href="/endings#replay-all-endings">Replay status →</Link></div>
          <div><span>SFW mode</span><span>Player request; no official option confirmed</span><Link href="/#adult-content">Content questions →</Link></div>
          <div><span>Custom dragons</span><span>No verified official workflow yet</span><Link href="/mods#status">Mod status →</Link></div>
          <div><span>Steam Workshop</span><span>Named as a development priority; no release date supplied</span><Link href="/mods#workshop">Workshop notes →</Link></div>
        </div>
      </section>
      <section className="panel">
        <h2>Reading the timeline</h2>
        <p>A patch entry describes what shipped and how it changes the way you should play or troubleshoot. Requested modes and community projects stay on their own pages until a later announcement confirms they are part of the game.</p>
        <Link href="/sources">See how changing update details are checked →</Link>
      </section>
    </main>
  );
}
