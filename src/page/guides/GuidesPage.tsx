import { metadataFor } from "@/seo/metadata";
import Link from "next/link";
import Image from "next/image";
import { guides } from "@/lib/content";
import styles from "@/style/page/inner.module.css";
import InnerPageHero from "@/components/content/InnerPageHero";
export const metadata = metadataFor("guides", "/guides");
const groups = [
  {
    title: "Start Here",
    slugs: ["beginner-guide", "how-to-wash"],
  },
  {
    title: "Gameplay",
    slugs: ["washing-tools", "controls", "cleaning-tips"],
  },
];
export default function GuidesPage() {
  return (
    <main className="container inner-page">
      <InnerPageHero
        eyebrow="THE FIELD GUIDE"
        keyword="DRAG'N WASH GUIDES"
        title="MASTER THE WASH"
        subtitle="From Your First Shift to a Clean Finish"
        lead="New to the wash bay? Start with the opening shift, then learn the tools, controls and cleaning checks that help you finish each visit without scrubbing the same spot forever."
        image="/images/guides/steam-0.webp"
        imageAlt="First-person dragon washing in Drag'n Wash"
        reviewedAt="2026-09-21"
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
                      <time dateTime={g.updatedAt}>
                        Updated {new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(`${g.updatedAt}T00:00:00Z`))}
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
