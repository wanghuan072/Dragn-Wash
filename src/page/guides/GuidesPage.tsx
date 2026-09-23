import { metadataFor } from "@/seo/metadata";
import Link from "@/components/DocumentLink";
import Image from "next/image";
import { guides } from "@/lib/content";
import styles from "@/style/page/inner.module.css";
import InnerPageHero from "@/components/content/InnerPageHero";
import { siteName, siteUrl } from "@/config/site";
import { formatMonthYear, monthDateTime } from "@/lib/dates";
export const metadata = metadataFor("guides", "/guides");
const groups = [
  {
    title: "Drag'n Wash Beginner Guides",
    slugs: ["beginner-guide", "how-to-wash"],
  },
  {
    title: "Drag'n Wash Gameplay & Washing Guides",
    slugs: ["washing-tools", "controls", "cleaning-tips"],
  },
];
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
        itemListElement: guides.map((guide, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: guide.title,
          url: `${siteUrl}/guides/${guide.slug}`,
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
              {group.slugs.map((slug) => {
                const g = guides.find((item) => item.slug === slug)!;
                return (
                  <Link
                    key={slug}
                    className={styles.listCard}
                    href={`/guides/${slug}`}
                  >
                    <div className={styles.listCardImage}>
                      <Image
                        src={g.image}
                        fill
                        sizes="(max-width: 600px) 130px, 190px"
                        alt={g.imageAlt}
                      />
                    </div>
                    <div>
                      <small className="badge">{g.category}</small>
                      <h3>{g.title}</h3>
                      <p>{g.description}</p>
                      <time dateTime={monthDateTime(g.updatedAt)}>
                        Updated {formatMonthYear(g.updatedAt)}
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
