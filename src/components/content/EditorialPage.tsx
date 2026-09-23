import type { ReactNode } from "react";
import Link from "@/components/DocumentLink";
import InnerPageHero from "@/components/content/InnerPageHero";
import { siteName, siteUrl } from "@/config/site";
import styles from "@/style/page/inner.module.css";
import editorial from "@/style/content/editorial-page.module.css";

type Section = { id?: string; title: string; content: ReactNode };
type Related = { label: string; href: string };
type Breadcrumb = { label: string; href: string };
type Faq = { question: string; answer: string };

export default function EditorialPage({
  eyebrow,
  keyword,
  title,
  displayTitle,
  subtitle,
  lead,
  image,
  imageAlt,
  answer,
  sections,
  related,
  path,
  reviewedAt,
  breadcrumbs = [],
  faq = [],
  variant = "feature",
}: {
  eyebrow: string;
  keyword?: string;
  title: string;
  displayTitle?: string;
  subtitle?: string;
  lead: string;
  image: string;
  imageAlt: string;
  answer: ReactNode;
  sections: Section[];
  related: Related[];
  path: string;
  reviewedAt: string;
  breadcrumbs?: Breadcrumb[];
  faq?: Faq[];
  variant?: "feature" | "reference" | "checklist";
}) {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    ...breadcrumbs,
    { label: displayTitle ?? title, href: path },
  ];
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description: lead,
      image: `${siteUrl}${image}`,
      dateModified: reviewedAt,
      mainEntityOfPage: `${siteUrl}${path}`,
      publisher: { "@type": "Organization", name: siteName },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
        item: `${siteUrl}${item.href}`,
      })),
    },
    ...(faq.length
      ? [{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }]
      : []),
  ];

  return (
    <main className={`container inner-page ${editorial.page} ${editorial[`${variant}Page`]}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <InnerPageHero
        eyebrow={eyebrow}
        keyword={keyword}
        title={displayTitle ?? title}
        subtitle={subtitle}
        lead={lead}
        image={image}
        imageAlt={imageAlt}
        reviewedAt={reviewedAt}
        plate={variant === "reference" ? "QUICK LOOK" : variant === "checklist" ? "STEP-BY-STEP" : "PLAYER GUIDE"}
        breadcrumbs={breadcrumbItems.map((item, index) => ({
          label: item.label,
          href: index === breadcrumbItems.length - 1 ? undefined : item.href,
        }))}
      />
      <div className={`${styles.articleGrid} ${editorial.layout}`}>
        <article className={`${styles.article} ${editorial.article} ${editorial[`${variant}Article`]}`}>
          <section className={styles.answer}>
            <span className="badge">START HERE</span>
            <h2>What you need to know</h2>
            {answer}
          </section>
          {sections.map((section) => (
            <section id={section.id} key={section.title}>
              <h2>{section.title}</h2>
              {section.content}
            </section>
          ))}
        </article>
        <aside className={`${styles.sidebar} ${editorial.sidebar}`}>
          <div className="panel">
            <p className={editorial.panelLabel}>PAGE GUIDE</p>
            <p className={styles.sidebarTitle}>On this page</p>
            <nav className={editorial.linkList} aria-label="Page sections">
              {sections.map((section) => (
                <a key={section.title} href={`#${section.id ?? section.title.toLowerCase().replaceAll(" ", "-")}`}>
                  {section.title} →
                </a>
              ))}
            </nav>
          </div>
          <div className="panel">
            <p className={editorial.panelLabel}>KEEP PLAYING</p>
            <p className={styles.sidebarTitle}>Where to go next</p>
            <nav className={editorial.linkList} aria-label="Related pages">
              {related.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label} →
                </Link>
              ))}
            </nav>
          </div>
        </aside>
      </div>
    </main>
  );
}
