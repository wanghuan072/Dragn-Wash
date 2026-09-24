import { metadataFor } from "@/seo/metadata";
import Link from "@/components/DocumentLink";
import Image from "next/image";
import { guides } from "@/lib/content";
import styles from "@/style/page/inner.module.css";
import InnerPageHero from "@/components/content/InnerPageHero";
import { siteName, siteUrl } from "@/config/site";
import { formatMonthYear, monthDateTime } from "@/lib/dates";
export const metadata = metadataFor("guides", "/guides");

const guideDirectory = guides.map((guide) => ({
  ...guide,
  href: `/guides/${guide.slug}`,
}));

const troubleshootingDirectory = [
  {
    slug: "troubleshooting",
    title: "Troubleshooting & Known Issues",
    description: "Match the symptom on your screen to the safest current fix.",
    category: "Fixes",
    image: "/images/home/steam-2.webp",
    imageAlt: "Drag'n Wash bucket and water station used for troubleshooting",
    updatedAt: "2026-09-21",
    href: "/troubleshooting",
  },
  {
    slug: "wash-progress",
    title: "Wash Progress & Missed Spots",
    description: "Fix a full clean bar, remaining soap or a wash that will not finish.",
    category: "Cleaning Fix",
    image: "/images/home/steam-11.webp",
    imageAlt: "Sprayer rinsing a red dragon while checking wash progress",
    updatedAt: "2026-09-23",
    href: "/troubleshooting/wash-progress",
  },
  {
    slug: "stuck-softlock",
    title: "Stuck Scenes & Softlocks",
    description: "Recover movement, dialogue and scene progression without risking your run.",
    category: "Run Recovery",
    image: "/images/home/steam-5.webp",
    imageAlt: "Later Drag'n Wash story scene used for stuck-scene recovery",
    updatedAt: "2026-09-23",
    href: "/troubleshooting/stuck-softlock",
  },
  {
    slug: "launch-performance",
    title: "Launch & Performance Fixes",
    description: "Check slow startup, black screens, graphics, audio and frame-rate problems.",
    category: "PC Fixes",
    image: "/images/home/steam-3.webp",
    imageAlt: "Drag'n Wash station interior used for launch and performance checks",
    updatedAt: "2026-09-23",
    href: "/troubleshooting/launch-performance",
  },
];

const groups = [
  {
    title: "Drag'n Wash Beginner Guides",
    items: guideDirectory.filter((guide) => ["beginner-guide", "how-to-wash"].includes(guide.slug)),
  },
  {
    title: "Drag'n Wash Gameplay & Washing Guides",
    items: guideDirectory.filter((guide) => ["washing-tools", "controls", "cleaning-tips"].includes(guide.slug)),
  },
  {
    title: "Drag'n Wash Troubleshooting & Fixes",
    items: troubleshootingDirectory,
  },
];

const directoryItems = groups.flatMap((group) => group.items);

export default function GuidesPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Drag'n Wash Guides",
      description: "Step-by-step Drag'n Wash guides for the first shift, washing tools, controls, missed spots and cleaning progress.",
      url: `${siteUrl}/guides`,
      isPartOf: { "@type": "WebSite", name: siteName, url: siteUrl },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: directoryItems.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.title,
          url: `${siteUrl}${item.href}`,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${siteUrl}/guides` },
      ],
    },
  ];
  return (
    <main className="container inner-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <InnerPageHero
        eyebrow="THE FIELD GUIDE"
        keyword="DRAG'N WASH GUIDES"
        title="MASTER THE WASH"
        subtitle="From Your First Shift to a Clean Finish"
        lead="New to the wash bay? Start with the opening shift, then learn the tools, controls and cleaning checks that help you finish each visit without scrubbing the same spot forever."
        image="/images/guides/steam-0.webp"
        imageAlt="First-person dragon washing in Drag'n Wash"
        reviewedAt="2026-09-23"
        plate="WASH GUIDES"
        stamp={"START\nHERE"}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Guides" }]}
      />
      <div className={styles.guideGroups}>
        {groups.map((group) => (
          <section className="panel" key={group.title}>
            <h2>{group.title}</h2>
            <div className={styles.guideListGrid}>
              {group.items.map((item) => {
                return (
                  <Link
                    key={item.href}
                    className={styles.listCard}
                    href={item.href}
                  >
                    <div className={styles.listCardImage}>
                      <Image
                        src={item.image}
                        fill
                        sizes="(max-width: 600px) 130px, 190px"
                        alt={item.imageAlt}
                      />
                    </div>
                    <div>
                      <small className="badge">{item.category}</small>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <time dateTime={monthDateTime(item.updatedAt)}>
                        Updated {formatMonthYear(item.updatedAt)}
                      </time>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
