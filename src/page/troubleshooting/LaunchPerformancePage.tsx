import Link from "@/components/DocumentLink";
import { metadataFor } from "@/seo/metadata";
import styles from "@/style/page/inner.module.css";
import InnerPageHero from "@/components/content/InnerPageHero";
import { siteName, siteUrl } from "@/config/site";

export const metadata = metadataFor("launchPerformance", "/troubleshooting/launch-performance");

export default function LaunchPerformancePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Drag'n Wash Launch and Performance Troubleshooting",
      description: "Startup, shader, frame-rate, Linux, Steam Deck, resolution and ultrawide checks for Drag'n Wash.",
      image: `${siteUrl}/images/home/steam-2.webp`,
      dateModified: "2026-09-23",
      mainEntityOfPage: `${siteUrl}/troubleshooting/launch-performance`,
      publisher: { "@type": "Organization", name: siteName },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Troubleshooting", item: `${siteUrl}/troubleshooting` },
        { "@type": "ListItem", position: 3, name: "Launch & Performance", item: `${siteUrl}/troubleshooting/launch-performance` },
      ],
    },
  ];
  return (
    <main className="container inner-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <InnerPageHero
        eyebrow="STARTUP & PERFORMANCE"
        keyword="DRAG'N WASH TROUBLESHOOTING"
        title="FIX THE GAME"
        subtitle="Launch & Performance Problems"
        lead="Identify whether the problem is startup, performance during play, platform graphics or a frozen scene before trying a fix."
        image="/images/home/steam-2.webp"
        imageAlt="Drag'n Wash wash station used for launch and performance troubleshooting"
        reviewedAt="2026-09-23"
        plate="DIAGNOSTIC FILE"
        stamp={"CHECK\nFIRST"}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Troubleshooting", href: "/troubleshooting" }, { label: "Launch & Performance" }]}
      />
      <div className={styles.articleGrid}>
        <article className={styles.article}>
          <section className={styles.answer}>
            <span className="badge">TRY THIS FIRST</span>
            <h2>Choose the symptom</h2>
            <div className={styles.compare}>
              <div><strong>What happens</strong><strong>First check</strong><strong>Next page</strong></div>
              <div><span>Main menu is slow to appear</span><span>Allow the first shader preload to finish.</span><a href="#startup">Startup steps ↓</a></div>
              <div><span>Game opens, then stutters</span><span>Update and compare graphics settings.</span><a href="#performance">Performance steps ↓</a></div>
              <div><span>Pointer misses buttons</span><span>Restart after changing resolution.</span><a href="#display">Display steps ↓</a></div>
              <div><span>Can&apos;t move in one scene</span><span>Use Unstick Kobold.</span><Link href="/troubleshooting/stuck-softlock">Softlock fix →</Link></div>
            </div>
          </section>
          <section id="startup">
            <h2>Slow boot or no main menu</h2>
            <ol>
              <li>Confirm you have the latest game build from your storefront.</li>
              <li>On first boot, give shader preloading time to complete. The developer warned that this can delay the menu after the September 2026 hotfix.</li>
              <li>If the menu never appears, check the current <a href="https://store.steampowered.com/app/4739660/Dragn_Wash/" target="_blank" rel="noreferrer">store requirements ↗</a> for your operating system and hardware.</li>
              <li>Use your storefront&apos;s install verification or re-download option only after those checks. Preserve any local files you may need before changing the installation.</li>
            </ol>
            <p>A delayed first menu is different from a game that repeatedly closes or shows an error. For a persistent failure, record the platform, build and any exact error message before seeking support.</p>
          </section>
          <section id="performance">
            <h2>Stutter or low performance after launch</h2>
            <p>The hotfix targeted allocation-related slowdowns. Update first, then test one scene with the current graphics options. Avoid changing several settings and installing a mod at once; that makes the cause hard to identify.</p>
            <p>If the issue is limited to one story scene or input action, use the <Link href="/troubleshooting/stuck-softlock">softlock guide</Link> instead of treating it as a frame-rate problem.</p>
          </section>
          <section id="platforms">
            <h2>Linux and Steam Deck checks</h2>
            <p>The September 2026 hotfix addressed visual glitches on the native Linux build with Nvidia GPUs and continuous spinning after Steam Deck touch input. Check that the update is installed before using an older workaround. Steam Deck Verified status was announced afterward; it does not guarantee identical performance on every graphics setting.</p>
            <Link href="/#buy">See store and platform status →</Link>
          </section>
          <section id="display">
            <h2>Resolution and ultrawide pointer offset</h2>
            <p><span className="badge muted">COMMUNITY REPORT</span> A player reported that changing between an ultrawide resolution and 16:9 could leave visible buttons and their clickable areas out of alignment. Restart after changing resolution, then test a standard 16:9 mode before treating it as an input failure.</p>
            <p>Record the display resolution, window mode, operating-system scaling and whether the problem returned after restart. This issue has not been established as universal across ultrawide displays.</p>
            <Link href="/troubleshooting#ultrawide-offset">Open the tracked issue →</Link>
          </section>
          <section>
            <h2>Source and version note</h2>
            <p><span className="badge">OFFICIAL</span> These patch-related checks come from the developer&apos;s Kobold Hotfix. Hardware requirements and store badges may change; check the live listing for specifications rather than relying on a copied number.</p>
            <Link href="/updates#kobold-hotfix">Read what the hotfix changed →</Link>
          </section>
        </article>
        <aside className={styles.sidebar}>
          <div className="panel"><p className={styles.sidebarTitle}>Other quick fixes</p><Link href="/troubleshooting">Search known issues →</Link><Link href="/troubleshooting/wash-progress">Wash progress stuck →</Link><Link href="/troubleshooting/stuck-softlock">Character or scene stuck →</Link><Link href="/guides/controls">Controls &amp; comfort →</Link></div>
        </aside>
      </div>
    </main>
  );
}
