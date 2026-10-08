import Image from "next/image";
import Link from "@/components/DocumentLink";
import InnerPageHero from "@/components/content/InnerPageHero";
import { dragons } from "@/lib/content";
import { characterNameStatus, contentReview, gameStatus } from "@/data/currentFacts";
import { effectLabels, evidenceLabels, scenesByCharacter, type EndingCharacter } from "@/data/endings";
import { siteName, siteUrl } from "@/config/site";
import styles from "@/style/page/inner.module.css";
import editorial from "@/style/content/editorial-page.module.css";

type CharacterSlug = Exclude<EndingCharacter, "shared">;

const profiles: Record<CharacterSlug, {
  visual: string;
  heroLead: string;
  overviewTitle: string;
  timelineTitle: string;
  routeSummary: string;
  issueTitle: string;
  issueText: string;
  routeHref: string;
  routeLabel: string;
}> = {
  alexander: {
    visual: "the tall purple dragon",
    heroLead: "Follow Alexander's optional questions, existing-date dialogue and final invitation without treating every reply as a hidden romance point.",
    overviewTitle: "Where Alexander Fits Into the Shared Story",
    timelineTitle: "Alexander's Questions, Relationship Check and Invitation",
    routeSummary: "Alexander's early menus add character detail. The recorded route does not show a relationship lock until his late invitation, where the game labels both romance and no-romance outcomes.",
    issueTitle: "Alexander's Model-Clipping Fix",
    issueText: "The Kobold Hotfix includes an Alexander model-clipping correction. It is a presentation fix, not evidence that an early question changes his ending.",
    routeHref: "/endings#alexander-final-invitation",
    routeLabel: "Alexander's final invitation",
  },
  ryan: {
    visual: "the pale blue-white dragon",
    heroLead: "Follow Ryan from the picnic opening through the choice that either locks his romance or completes the Ryan–Conrad pairing.",
    overviewTitle: "Why Ryan's Picnic Is the Deciding Scene",
    timelineTitle: "Ryan's Picnic Choices and Relationship States",
    routeSummary: "Ryan's picnic contains one confirmed route lock. Volunteering ourselves opens Ryan's romance; recommending the red dragon completes the pairing prepared in Conrad's earlier conversation.",
    issueTitle: "Ryan's Picnic Hotfix",
    issueText: "The Kobold Hotfix corrected picnic-scene edge cases. Update before using an older workaround, then separate a real interaction lock from an ordinary dialogue pause.",
    routeHref: "/endings#ryan-picnic-choice",
    routeLabel: "Ryan's picnic route choice",
  },
  conrad: {
    visual: "the smaller red dragon",
    heroLead: "Follow Conrad's recovery, first relationship fork and later route scenes, including the choice that can carry his story into Ryan's picnic.",
    overviewTitle: "Why Conrad Opens the First Relationship Fork",
    timelineTitle: "Conrad's Recovery, Introduction Choice and Route",
    routeSummary: "Conrad presents the first filmed relationship fork. Spending time with him opens his romance; introducing him to Ryan postpones the final relationship decision until Ryan's picnic.",
    issueTitle: "Conrad Level 8 and Level 14 Fixes",
    issueText: "The Kobold Hotfix fixed a level 8 interaction-order softlock, a separate level 8 window problem and a level 14 texture issue involving Conrad. These fixes are not route requirements.",
    routeHref: "/endings#conrad-introduction-choice",
    routeLabel: "Conrad's first relationship choice",
  },
};

export default function DragonDetailPage({ slug }: { slug: string }) {
  const character = slug as CharacterSlug;
  const dragon = dragons.find((item) => item.slug === slug)!;
  const profile = profiles[character];
  const scenes = scenesByCharacter(character);
  const scenesWithChoices = scenes.filter((scene) => scene.choices.length > 0);
  const faq = [
    {
      question: `Is ${dragon.name} a separate campaign?`,
      answer: `No. ${dragon.name} appears inside the same shared run as the other two dragons. This page isolates his scenes so we can follow them without pretending the game starts three separate campaigns.`,
    },
    {
      question: `Does every ${dragon.name} dialogue choice change the ending?`,
      answer: "No. The scene archive separates route locks from dialogue changes and ordinary scene variations. Only a choice with a demonstrated later result is presented as a branch.",
    },
    {
      question: `Does ${dragon.name} have an official named ending?`,
      answer: `The developer confirms ${gameStatus.endings} endings but does not publish character-ending names. “${dragon.name} route” is a navigation label used by this guide.`,
    },
  ];
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: `${dragon.name} Route Guide`,
      description: dragon.seoDescription,
      image: `${siteUrl}${dragon.image}`,
      dateModified: contentReview.checkedAt,
      mainEntityOfPage: `${siteUrl}/dragons/${slug}`,
      publisher: { "@type": "Organization", name: siteName },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Dragons", item: `${siteUrl}/dragons` },
        { "@type": "ListItem", position: 3, name: dragon.name, item: `${siteUrl}/dragons/${slug}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ];

  return (
    <main className={`container inner-page ${styles.characterPage}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <InnerPageHero
        eyebrow="CHARACTER SCENE GUIDE · LIGHT SPOILERS"
        keyword="DRAG'N WASH"
        title={`${dragon.name} Route Guide`}
        subtitle="Scenes, Choices & Visible Results"
        lead={profile.heroLead}
        image={dragon.image}
        imageAlt={dragon.imageAlt}
        reviewedAt={contentReview.checkedAt}
        plate="DRAGON STORY"
        stamp={"SCENE\nRECORD"}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Dragons", href: "/dragons" }, { label: dragon.name }]}
      />
      <dl className={editorial.verificationBar} aria-label="Content verification">
        <div><dt>Checked scope</dt><dd>{dragon.name}&apos;s recorded menus and later scene results</dd></div>
        <div><dt>Platforms</dt><dd>Recorded PC playthroughs · official patch notes</dd></div>
        <div><dt>Method</dt><dd>Complete choice frames matched to later relationship states</dd></div>
      </dl>

      <div className={styles.articleGrid}>
        <article className={`${styles.article} ${styles.characterArticle}`}>
          <section className={styles.answer} id="overview">
            <span className="badge">CHARACTER AT A GLANCE</span>
            <h2>{profile.overviewTitle}</h2>
            <p>{profile.routeSummary}</p>
            <p className={styles.note}><strong>Name record:</strong> {characterNameStatus[character]}</p>
          </section>

          <section id="scene-timeline">
            <h2>{profile.timelineTitle}</h2>
            <p>These scenes are ordered inside {dragon.name}&apos;s recorded story. A highlighted choice is not automatically an ending branch; the label beside each answer tells us what the recording actually demonstrates.</p>
            <div className={styles.sceneArchive}>
              {scenes.map((scene, index) => (
                <article id={scene.id} key={scene.id} className={styles.sceneRecord}>
                  <header>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div><small>{scene.stage}</small><h3>{scene.title}</h3></div>
                    <em>{evidenceLabels[scene.evidence]}</em>
                  </header>
                  {scene.media && <Image src={scene.media.image} width={scene.media.width} height={scene.media.height} alt={scene.media.alt} />}
                  <p>{scene.description}</p>
                  {scene.choices.length > 0 && (
                    <div className={styles.choiceList}>
                      {scene.choices.map((choice) => (
                        <div key={choice.text}>
                          <strong>{choice.text}</strong>
                          {choice.systemText && <small>{choice.systemText}</small>}
                          <p>{choice.result}</p>
                          <span>{effectLabels[choice.effect]}</span>
                          {choice.targetSceneId && <Link href={`/endings#${choice.targetSceneId}`}>Follow the result in the endings guide →</Link>}
                        </div>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>

          <section id="choices">
            <h2>{dragon.name} Choices That Are Worth Recording</h2>
            <div className={styles.compare}>
              <div><strong>Scene</strong><strong>Demonstrated effect</strong><strong>Full route</strong></div>
              {scenesWithChoices.map((scene) => (
                <div key={scene.id}>
                  <strong>{scene.title}</strong>
                  <span>{scene.choices.some((choice) => choice.effect === "route-lock" || choice.effect === "cross-character") ? "Contains a route or cross-character decision" : "Changes this conversation while the same route continues"}</span>
                  <Link href={`/endings#${scene.id}`}>See every visible option →</Link>
                </div>
              ))}
            </div>
          </section>

          <section id="issues">
            <h2>{profile.issueTitle}</h2>
            <p><span className="badge">OFFICIAL PATCH</span> {profile.issueText}</p>
            <div className={styles.inlineLinks}><Link href="/updates#kobold-hotfix">Read the player-impact summary →</Link><Link href="/troubleshooting/stuck-softlock">Recover a stuck interaction →</Link></div>
          </section>

          <section id="identity">
            <h2>How to Recognize {dragon.name}</h2>
            <p>{dragon.name} is {profile.visual}. His name status is shown above because a common player name and a name printed in official patch notes are different levels of evidence.</p>
            <Image className={styles.inlineImage} src={dragon.image} width={900} height={506} alt={dragon.imageAlt} />
          </section>

          <section id="faq">
            <h2>{dragon.name} Route FAQ</h2>
            {faq.map((item) => <div className={styles.faqItem} key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></div>)}
          </section>
        </article>

        <aside className={styles.sidebar}>
          <div className="panel">
            <p className="eyebrow">PAGE GUIDE</p>
            <p className={styles.sidebarTitle}>{dragon.name}&apos;s scenes</p>
            <a href="#overview">Story role →</a>
            <a href="#scene-timeline">Scene timeline →</a>
            <a href="#choices">Choices to record →</a>
            <a href="#issues">Patch notes →</a>
            <a href="#faq">Route FAQ →</a>
          </div>
          <div className="panel">
            <p className="eyebrow">CONTINUE THE RUN</p>
            <p className={styles.sidebarTitle}>Related player guides</p>
            <Link href={profile.routeHref}>{profile.routeLabel} →</Link>
            <Link href="/romance">Relationship states explained →</Link>
            <Link href="/walkthrough">Complete shared walkthrough →</Link>
            <Link href="/troubleshooting">Troubleshooting →</Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
