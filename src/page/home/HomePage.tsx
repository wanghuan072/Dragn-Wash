import Link from "@/components/DocumentLink";
import Image from "next/image";
import { dragons, guides, updates, steamStore } from "@/lib/content";
import { siteName, siteUrl } from "@/config/site";
import { formatMonthYear, monthDateTime } from "@/lib/dates";
import styles from "@/style/page/home/home.module.css";

const access = [
  { title: "First Wash", description: "Step-by-step guide", href: "/walkthrough", icon: "bubbles" },
  { title: "Tools", description: "Master your gear", href: "/guides/washing-tools", icon: "sprayer" },
  { title: "Routes", description: "Plan every ending", href: "/endings", icon: "map" },
  { title: "Fixes", description: "Solve common problems", href: "/troubleshooting", icon: "gear" },
  { title: "Mods", description: "Projects & languages", href: "/mods", icon: "sparkles" },
  { title: "Patch Notes", description: "Check latest changes", href: "/updates", icon: "document" },
];

const routePortraits: Record<string, string> = {
  alexander: "/images/ui/alexander-portrait.webp",
  ryan: "/images/ui/ryan-portrait.webp",
  conrad: "/images/ui/conrad-portrait.webp",
};

function ManualIcon({ name }: { name: string }) {
  if (name === "dragon") return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M6 35c3-11 9-18 18-20l-3-9 9 6 8-4-2 9c5 4 7 10 6 17-4-4-8-5-12-3-3 2-4 7-4 12H13c2-5 1-9-7-8z"/><circle cx="33" cy="20" r="2" fill="#efe4d0"/></svg>;
  if (name === "bubbles") return <svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="18" cy="28" r="10"/><circle cx="31" cy="15" r="6"/><circle cx="34" cy="34" r="5"/><circle cx="13" cy="12" r="3"/></svg>;
  if (name === "sprayer") return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 13h23l8 7-5 7-8-3-7 18H9l7-21H8z"/><path d="M30 10l9-5 2 4-9 6z"/></svg>;
  if (name === "map") return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M5 9l12-5 14 6 12-5v34l-12 5-14-6-12 5z"/><path d="M17 4v34M31 10v34"/></svg>;
  if (name === "gear") return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M20 3h8l2 6 6-2 5 6-4 5 6 4v8l-6 2 2 6-6 5-5-4-4 6h-8l-2-6-6 2-5-6 4-5-6-4v-8l6-2-2-6 6-5 5 4z"/><circle cx="24" cy="24" r="7"/></svg>;
  if (name === "sparkles") return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M17 3c1 9 5 13 13 14-8 1-12 5-13 14-1-9-5-13-13-14 8-1 12-5 13-14zM35 22c1 6 3 9 9 10-6 1-8 4-9 10-1-6-3-9-9-10 6-1 8-4 9-10z"/></svg>;
  if (name === "wrench") return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M29 5a12 12 0 0 0-14 15L4 31l13 13 11-11A12 12 0 0 0 43 19l-8 8-8-2-2-8z"/></svg>;
  if (name === "book") return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M5 7h13c4 0 6 2 6 6v28c0-4-2-6-6-6H5zM43 7H30c-4 0-6 2-6 6v28c0-4 2-6 6-6h13z"/></svg>;
  if (name === "clock") return <svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="19"/><path d="M24 12v13l9 5"/></svg>;
  return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M10 4h22l7 7v33H10zM31 4v9h8M16 20h17M16 27h17M16 34h12"/></svg>;
}
const fixes = [
  [
    "Game won't launch",
    "Allow first-boot shaders to finish; check your build.",
    "/troubleshooting/launch-performance#startup",
  ],
  [
    "Wash progress won't finish",
    "Inspect small unwashed areas; check the current prompt.",
    "/troubleshooting/wash-progress",
  ],
  [
    "Character is stuck",
    "Pause and try Unstick Kobold before restarting.",
    "/troubleshooting/stuck-softlock",
  ],
  [
    "Route won't continue",
    "Check the active request and any uncompleted interaction.",
    "/dragons",
  ],
  [
    "Performance drops",
    "Update first, then review the graphics settings.",
    "/troubleshooting/launch-performance#performance",
  ],
  [
    "Controls feel uncomfortable",
    "Try the sprayer motion reduction or invert-Y option.",
    "/updates#kobold-hotfix",
  ],
  [
    "Something else is broken",
    "Match what you see to the right troubleshooting steps.",
    "/troubleshooting",
  ],
];
const faqGroups = [
  {
    label: "The game",
    items: [
      [
        "What is Drag'n Wash?",
        "A first-person dragon washing simulation with a short narrative involving three dragons. It contains adult material.",
      ],
      [
        "How many endings are there?",
        "The developer lists three endings. Exact branch requirements are not published; player reports of additional variants are not yet verified against that official count.",
      ],
      [
        "How long does one ending take?",
        "The developer describes approximately 90 minutes of content per ending. That is an estimate, not a minimum: players report both shorter and longer runs.",
      ],
      [
        "How many dragons are in Drag'n Wash?",
        "Three: Alexander, Ryan, and Conrad, as named in official patch notes and game material.",
      ],
    ],
  },
  {
    label: "Playing",
    items: [
      [
        "Does Drag'n Wash work on Steam Deck?",
        "Yes. The developers announced Steam Deck Verified status in September 2026.",
      ],
      [
        "Does Drag'n Wash support a controller?",
        "Yes. The official Steam listing includes full controller support. Use the current in-game prompts for exact buttons.",
      ],
      [
        "Can I reload a choice from a manual save?",
        "Do not count on it in the current release. In September 2026 a developer described save/load as a highly requested feature still on the team's radar. Plan another run and record important responses instead.",
      ],
      [
        "Can I replay scenes from a gallery?",
        "A scene gallery or chapter-select feature is not confirmed as released. The Endings page explains completed saves, credits and the safest way to plan another run.",
      ],
      [
        "Where can I find the latest patch?",
        "Use the Updates page here for player impact, then follow its link to the official Steam news feed.",
      ],
    ],
  },
  {
    label: "Buying & content",
    items: [
      [
        "Is there VR or Workshop support?",
        "Native VR support is not confirmed in the official materials checked. The developers said Steam Workshop support is their first development priority; do not treat it as already released.",
      ],
      [
        "Is Drag'n Wash free to download?",
        "No official free full-game download is listed. Buy through Steam or the developer's itch.io page; this site does not link to cracked files or download mirrors.",
      ],
      [
        "What languages does Drag'n Wash support?",
        "Steam currently lists English. An unofficial localization project adds Japanese, Simplified Chinese, native-proofread Korean and multiple provisional language packs through Drag'n Wash ModFramework.",
      ],
      [
        "Is there an SFW or uncensored version?",
        "The current official listings do not show an SFW mode or separate censored and uncensored editions. The game is sold as an adult title, so check the official description before buying or streaming it.",
      ],
      [
        "Is Drag'n Wash on GOG, Android or iOS?",
        "No official GOG, Android or iOS release is confirmed in the developer and store information reviewed for this page. A third-party listing is not proof of an authorized port.",
      ],
    ],
  },
];
const faq = faqGroups.flatMap((group) => group.items);
export default function HomePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteName,
      url: siteUrl,
      description: "Player-focused Drag'n Wash walkthroughs, character guides, endings, troubleshooting, mods and update notes.",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroDecor} aria-hidden="true">
            <Image
              src="/images/ui/hero-hose.png"
              alt=""
              width={439}
              height={596}
              className={styles.heroHose}
            />
            <Image
              src="/images/ui/hero-bubble-single.png"
              alt=""
              width={774}
              height={754}
              className={`${styles.heroBubble} ${styles.heroBubbleOne}`}
            />
            <Image
              src="/images/ui/hero-bubble-single.png"
              alt=""
              width={774}
              height={754}
              className={`${styles.heroBubble} ${styles.heroBubbleTwo}`}
            />
            <Image src="/images/ui/hero-bubble-single.png" alt="" width={774} height={754} className={`${styles.heroBubble} ${styles.heroBubbleThree}`} />
            <Image src="/images/ui/hero-bubble-single.png" alt="" width={774} height={754} className={`${styles.heroBubble} ${styles.heroBubbleFour}`} />
          </div>
          <section className={styles.missionBrief}>
            <div className={styles.briefMeta}>
              <span>DRAGON CARE DIVISION</span>
              <span>WASH · REPAIR · DISCOVER</span>
            </div>
            <span className={styles.paperFold} aria-hidden="true" />
            <span className={styles.briefStamp}><ManualIcon name="dragon" /><span>CLEANER<br />JOURNEYS<br />AHEAD</span></span>
            <p className={styles.shiftStatus}>
              <i aria-hidden="true" /> SHIFT 01 · WASH BAY OPEN
            </p>
            <h1>
              <span className={styles.homeKeyword}>DRAG&apos;N WASH</span>
              <span className={styles.homeTitle}>Choose Your Next Move</span>
            </h1>
            <p className={styles.homeSubtitle}>First wash · stuck scene · ending hunt</p>
            <p className={styles.heroLead}>
              Start clean, solve what stopped your run and follow all three
              dragon stories without guessing what the game wants next.
            </p>
            <div className={styles.heroActions}>
              <Link className="button primary" href="/walkthrough">
                <span aria-hidden="true">▶</span> Begin a New Run <b>→</b>
              </Link>
              <Link className="button outline" href="/troubleshooting">
                <span className={styles.actionIcon}><ManualIcon name="wrench" /></span> Solve a Problem <b>→</b>
              </Link>
            </div>
            <div className={styles.heroFacts} aria-label="Game overview">
              <span><ManualIcon name="dragon" /><strong>3</strong><small>DRAGONS</small></span>
              <span><ManualIcon name="book" /><strong>3</strong><small>ENDINGS</small></span>
              <span><ManualIcon name="clock" /><strong>~90</strong><small>MIN / ENDING</small></span>
            </div>
          </section>

          <section className={styles.jobScreen} aria-label="Current job preview">
            <div className={styles.jobLabel}>CURRENT JOB · FIRST WASH</div>
            <div className={styles.screenImage}>
              <Image
                src="/images/home/hero.webp"
                alt="Drag'n Wash first-person gameplay washing a dragon in the wash station"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 48vw"
                className={styles.heroImage}
              />
            </div>
            <span className={styles.screenFoam} aria-hidden="true" />
            <div className={styles.progressBar}>
              <span>WASH PROGRESS</span>
              <i /><i /><i /><i /><i className={styles.inactive} /><i className={styles.inactive} />
            </div>
            <p className={styles.screenMotto}>A CLEANER TOMORROW<br />FOR BRIGHTER DRAGONS.</p>
          </section>

          <aside className={styles.routeRail} aria-label="Choose a dragon story">
            <p className={styles.routeRailTitle}>Choose a Focus</p>
            {dragons.slice(0, 3).map((dragon, index) => (
              <Link href={`/dragons/${dragon.slug}`} className={styles.routeTicket} key={dragon.slug}>
                <Image
                  src={routePortraits[dragon.slug] ?? dragon.image}
                  alt=""
                  width={62}
                  height={62}
                  loading="eager"
                  sizes="62px"
                />
                <span>
                  <strong>{dragon.name}</strong>
                  <small>{index === 0 ? <>MEET ALEXANDER<br />FOLLOW HIS SCENES</> : index === 1 ? <>MEET RYAN<br />FOLLOW HIS SCENES</> : <>MEET CONRAD<br />FOLLOW HIS SCENES</>}</small>
                </span>
                <b aria-hidden="true">›</b>
              </Link>
            ))}
            <p className={styles.railNote}>ONE SHARED RUN.<br />THREE DRAGON STORIES.</p>
          </aside>
        </div>
      </section>
      <section
        className={`container ${styles.quickAccess}`}
        aria-label="Quick access"
      >
        <h2 className="sr-only">Drag&apos;n Wash Quick Guides</h2>
        {access.map((item) => (
          <Link href={item.href} className={styles.accessCard} key={item.title}>
            <span className={styles.accessIcon}><ManualIcon name={item.icon} /></span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <b aria-hidden="true">›</b>
          </Link>
        ))}
      </section>
      <div className={`container ${styles.homeStack}`}>
        <div className={`${styles.featureGrid} ${styles.continueBoard}`}>
          <section className={styles.continueGuides}>
            <div className="section-heading">
              <div>
                <p className={styles.boardEyebrow}>YOUR ACTIVE MANUAL</p>
                <h2>Drag&apos;n Wash Walkthrough &amp; Guides</h2>
                <p>Pick up where you left off, or dive into a new guide.</p>
              </div>
              <Link href="/guides">Browse all Drag&apos;n Wash guides →</Link>
            </div>
            <div className={styles.guideGrid}>
              {guides
                .filter((guide) =>
                  [
                    "beginner-guide",
                    "how-to-wash",
                    "washing-tools",
                    "controls",
                    "cleaning-tips",
                  ].includes(guide.slug),
                )
                .map((guide) => (
                  <Link
                    href={`/guides/${guide.slug}`}
                    className={styles.guideCard}
                    key={guide.slug}
                  >
                    <div className={styles.cardImage}>
                      <Image
                        src={guide.image}
                        alt={guide.imageAlt}
                        fill
                        sizes="(max-width: 700px) 100vw, 30vw"
                      />
                    </div>
                    <div className={styles.cardBody}>
                      <small className="badge">{guide.category}</small>
                      <h3>{guide.title}</h3>
                      <p>{guide.description}</p>
                    </div>
                  </Link>
                ))}
              <Link href="/endings" className={styles.guideCard}>
                <div className={styles.cardImage}>
                  <Image
                    src="/images/home/steam-5.webp"
                    alt="Dragon in a later Drag'n Wash scene"
                    fill
                    sizes="30vw"
                  />
                </div>
                <div className={styles.cardBody}>
                  <small className="badge">ROUTES</small>
                  <h3>All Endings</h3>
                  <p>See what changes, what carries over and how to plan another run.</p>
                </div>
              </Link>
            </div>
          </section>
          <section className={styles.routeBoard}>
            <div className="section-heading">
              <div>
                <h2>Drag&apos;n Wash Dragons: Alexander, Ryan &amp; Conrad</h2>
                <p>You meet all three in a run. Your relationship choices can affect later scenes.</p>
              </div>
              <Link href="/romance">Drag&apos;n Wash relationship choices →</Link>
            </div>
            <div className={styles.dragonStack}>
              {dragons.map((dragon) => (
                <Link
                  href={`/dragons/${dragon.slug}`}
                  className={styles.dragonCard}
                  key={dragon.slug}
                >
                  <Image
                    src={dragon.image}
                    alt={dragon.imageAlt}
                    fill
                    sizes="(max-width: 800px) 100vw, 28vw"
                  />
                  <div>
                    <h3>{dragon.name}</h3>
                    <p>{dragon.description}</p>
                    <span>View {dragon.name} route guide →</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
        <section className="panel">
          <div className="section-heading">
            <div>
              <h2>Drag&apos;n Wash Troubleshooting &amp; Fixes</h2>
              <p>Start with the symptom you can see, then open the focused fix if it still will not move.</p>
            </div>
            <Link href="/troubleshooting">Open Drag&apos;n Wash troubleshooting →</Link>
          </div>
          <div className={styles.fixTable}>
            <div className={styles.fixHead}>
              <strong>Problem</strong>
              <strong>Try this first</strong>
            </div>
            {fixes.map(([problem, fix, href]) => (
              <Link href={href} key={problem}>
                <span>{problem}</span>
                <span>{fix}</span>
              </Link>
            ))}
          </div>
        </section>
        <section className="panel" id="gameplay">
          <div className="section-heading">
            <div>
              <h2>How Drag&apos;n Wash Gameplay Works</h2>
              <p>Washing, conversation and story progression share the same compact run.</p>
            </div>
            <Link href="/walkthrough">Follow the full playthrough →</Link>
          </div>
          <div className={styles.discoveryGrid}>
            {[
              [
                "Meet the Customer",
                "Answer the phone, finish the conversation and open the wash bay.",
                "/walkthrough#step-by-step",
                "steam-3.webp",
                "The Drag'n Wash station where customers arrive",
              ],
              [
                "Prepare the Tools",
                "Fill the bucket and use the right tool for the current stage.",
                "/guides/washing-tools",
                "steam-2.webp",
                "A bucket being filled inside the wash station",
              ],
              [
                "Wash and Rinse",
                "Work across the full body, change angles and clear the remaining soap.",
                "/guides/how-to-wash",
                "steam-0.webp",
                "First-person washing with the sprayer",
              ],
              [
                "Follow the Story",
                "Read the active request and note choices you may compare later.",
                "/dragons",
                "steam-10.webp",
                "A dragon reacting during a story conversation",
              ],
              [
                "Finish and Replay",
                "Record the ending you saw before beginning another run.",
                "/endings",
                "steam-5.webp",
                "A later story scene before an ending",
              ],
            ].map(([title, desc, href, image, alt]) => (
              <Link href={href} className={styles.discoveryCard} key={title}>
                <div className={styles.cardImage}>
                  <Image
                    src={`/images/home/${image}`}
                    alt={alt}
                    fill
                    sizes="20vw"
                  />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </Link>
            ))}
          </div>
        </section>
        <section className="panel">
          <div className="section-heading">
            <div>
              <h2>Latest Updates</h2>
              <p>Official news, translated into what you should do next.</p>
            </div>
            <Link href="/updates">View all Drag&apos;n Wash updates →</Link>
          </div>
          <div className={styles.updateGrid}>
            {updates.map((item) => (
              <Link
                href={`/updates#${item.slug}`}
                className={styles.updateCard}
                key={item.slug}
              >
                <div className={styles.cardImage}>
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="33vw"
                  />
                </div>
                <div>
                  <small className="badge">{item.tag}</small>
                  <h3>{item.title}</h3>
                  <time dateTime={monthDateTime(item.date)}>{formatMonthYear(item.date)}</time>
                  <p>{item.description}</p>
                  <span>Read {item.title} →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <section className={`panel ${styles.about}`}>
          <div className={styles.aboutIntro}>
            <p className="eyebrow">THE GAME AT A GLANCE</p>
            <h2>What is Drag&apos;n Wash?</h2>
            <p>
              Drag&apos;n Wash is a first-person adult simulation from Gator Dragon
              Games. You run a wash service for dragons, learn a hands-on
              cleaning routine and get to know Alexander, Ryan and Conrad as
              they return with new requests. All three appear during the same
              story run, so you do not pick a separate campaign from the title
              screen.
            </p>
            <p>
              This guide is built for the moments when you want a clear next
              step: opening the station, finishing a stubborn wash, following a
              character&apos;s scenes, understanding the three-ending structure or
              checking whether a mod, platform or requested feature is actually
              available. Start with the walkthrough for a first playthrough, or
              jump straight to troubleshooting if your run has stopped moving.
            </p>
            <p className={styles.aboutLinks}>
              <a href="#gameplay">Gameplay overview →</a>
              <a href="#buy">Stores & platforms →</a>
              <a href="#adult-content">Adult content →</a>
              <Link href="/mods/localization">Language mod →</Link>
              <Link href="/endings#replay-all-endings">Scene replay status →</Link>
              <Link href="/sources">How we check changing game information →</Link>
            </p>
            <a href={steamStore} target="_blank" rel="noreferrer">
              See the official Steam page ↗
            </a>
            {" · "}
            <a href="https://gatordragongames.itch.io/dragnwash" target="_blank" rel="noreferrer">
              Official itch.io downloads ↗
            </a>
          </div>
          <dl>
            <div>
              <dt>Developer</dt>
              <dd>Gator Dragon Games</dd>
            </div>
            <div>
              <dt>Release</dt>
              <dd>itch.io and Steam, September 2026</dd>
            </div>
            <div>
              <dt>Platforms</dt>
              <dd>Windows · macOS · Linux</dd>
            </div>
            <div>
              <dt>Genre</dt>
              <dd>Simulation</dd>
            </div>
            <div>
              <dt>Endings</dt>
              <dd>3</dd>
            </div>
          </dl>
        </section>
        <section className="panel" id="buy">
            <div className="section-heading">
              <div>
                <p className={styles.boardEyebrow}>BEFORE YOU BUY</p>
                <h2>Where to Buy and Download Drag&apos;n Wash</h2>
                <p>Use an official store and check the current terms for your account and region.</p>
              </div>
            </div>
            <div className={styles.fixTable}>
              <div className={styles.fixHead}><strong>Question</strong><strong>Current answer</strong></div>
              <div><span>Official stores</span><span>Steam and the developer&apos;s itch.io page.</span></div>
              <div><span>Full-game price</span><span>itch.io currently lists US$15 or more; regional Steam prices can change.</span></div>
              <div><span>Desktop downloads</span><span>Windows, macOS and Linux packages are listed on itch.io.</span></div>
              <div><span>Steam Deck</span><span>The developer announced Steam Deck Verified status.</span></div>
              <div><span>GOG or mobile</span><span>No official GOG, Android or iOS release is confirmed.</span></div>
              <div><span>Free download</span><span>No official free full-game release is listed; avoid cracked mirrors.</span></div>
            </div>
            <p className={styles.aboutLinks}><a href={steamStore} target="_blank" rel="noreferrer">Buy on Steam ↗</a><a href="https://gatordragongames.itch.io/dragnwash" target="_blank" rel="noreferrer">Buy on itch.io ↗</a><Link href="/updates#steam-deck-verified">Steam Deck notes →</Link></p>
        </section>
        <section className="panel" id="adult-content">
            <div className="section-heading">
              <div>
                <p className={styles.boardEyebrow}>CONTENT CHECK</p>
                <h2>Is Drag&apos;n Wash an Adult Game?</h2>
                <p>Yes. The adult material is part of the advertised game, not an optional surprise.</p>
              </div>
            </div>
            <div className={styles.contentGrid}>
              <article><span>01</span><h3>What the store listing says</h3><p>The official itch.io listing uses Adult and NSFW tags and describes male dragons, male-on-male dragon content and male-dragon-on-player content. General pages here use non-graphic images, but the purchased game is still intended for adults.</p></article>
              <article><span>02</span><h3>SFW, censored and uncensored versions</h3><p>No official SFW switch or separate censored and uncensored edition is documented in the current store information. Regional availability does not prove that another storefront contains different scene files.</p></article>
              <article><span>03</span><h3>Requests are not released features</h3><p>Players discuss additions such as a vore option, more characters and lighter-content settings. A comment is not an in-game feature. Check the <Link href="/updates">update timeline</Link> before relying on a claimed mode or patch.</p></article>
            </div>
        </section>
        <section className="panel" id="faq">
          <div className="section-heading">
            <div>
              <p className={styles.boardEyebrow}>PLAYER BRIEFING</p>
              <h2>Frequently Asked Questions</h2>
              <p>Buying, play and content questions answered on this page.</p>
            </div>
          </div>
          <div className={styles.faqBoard}>
            {faq.map(([question, answer], index) => (
              <article className={styles.faqItem} key={question}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{question}</h3>
                  <p>{answer}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
