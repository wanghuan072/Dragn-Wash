import Image from "next/image";
import Link from "@/components/DocumentLink";
import { formatMonthYear } from "@/lib/dates";
import styles from "@/style/content/inner-page-hero.module.css";

type Breadcrumb = { label: string; href?: string };

export default function InnerPageHero({
  eyebrow,
  keyword,
  title,
  subtitle,
  lead,
  image,
  imageAlt,
  breadcrumbs,
  reviewedAt,
  plate = "PLAYER GUIDE",
  stamp = "PLAY\nYOUR WAY",
  priority = true,
}: {
  eyebrow: string;
  keyword?: string;
  title: string;
  subtitle?: string;
  lead: string;
  image: string;
  imageAlt: string;
  breadcrumbs: Breadcrumb[];
  reviewedAt?: string;
  plate?: string;
  stamp?: string;
  priority?: boolean;
}) {
  const reviewedLabel = reviewedAt ? formatMonthYear(reviewedAt) : undefined;

  return (
    <header className={styles.hero}>
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <span className={styles.breadcrumbLabel}>YOU ARE HERE</span>
        {breadcrumbs.map((item, index) => (
          <span key={`${item.label}-${index}`}>
            {index > 0 && <b aria-hidden="true">›</b>}
            {item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
          </span>
        ))}
      </nav>

      <div className={styles.frame}>
        <section className={styles.paper}>
          <div className={styles.paperCode}>DRAGON CARE DIVISION<br />WASH · REPAIR · DISCOVER</div>
          <div className={styles.stamp} aria-hidden="true">
            {stamp.split("\n").map((line) => <span key={line}>{line}</span>)}
          </div>
          <h1>
            <span className={styles.keyword}>{keyword ?? eyebrow}</span>
            <span className={styles.heroTitle}>{title}</span>
          </h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          <p className={styles.lead}>{lead}</p>
          <div className={styles.paperFooter}>
            <span><i aria-hidden="true" /> CURRENT BUILD</span>
            {reviewedLabel && <span>REVIEWED {reviewedLabel.toUpperCase()}</span>}
          </div>
        </section>

        <figure className={styles.screen}>
          <div className={styles.plate}>{plate}</div>
          <div className={styles.imageWrap}>
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 820px) 100vw, 55vw"
              priority={priority}
              loading={priority ? "eager" : "lazy"}
            />
          </div>
          <figcaption>
            <span>IN-GAME VIEW</span>
            <b>{eyebrow}</b>
          </figcaption>
        </figure>

        <Image className={styles.foam} src="/images/ui/hero-foam.png" alt="" width={566} height={318} aria-hidden="true" />
        <Image className={styles.bubble} src="/images/ui/hero-bubble-single.png" alt="" width={774} height={754} aria-hidden="true" />
      </div>
    </header>
  );
}
