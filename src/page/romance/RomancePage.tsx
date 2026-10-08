import Link from "@/components/DocumentLink";
import EditorialPage from "@/components/content/EditorialPage";
import { contentReview, gameStatus } from "@/data/currentFacts";
import { sceneById } from "@/data/endings";
import { metadataFor } from "@/seo/metadata";
import styles from "@/style/content/editorial-page.module.css";

export const metadata = metadataFor("romance", "/romance");

const faq = [
  {
    question: "Do ordinary dialogue choices add hidden romance points?",
    answer: "The recorded menus show conversation variations, but the game does not publish an affection score. This guide only calls a choice a route lock when the screen or later recorded result demonstrates it.",
  },
  {
    question: "Can Ryan and Conrad become a pair?",
    answer: "Yes. Their pairing uses one choice in Conrad's conversation and a second decision at Ryan's picnic. It is a relationship state inside the shared story, not a fourth official ending.",
  },
  {
    question: "Can I reach Alexander after pairing Ryan and Conrad?",
    answer: "That is the clearest recorded setup: Ryan and Conrad pair with each other, the player remains unattached and Alexander's late invitation becomes the next relationship decision.",
  },
];

export default function RomancePage() {
  const conradFork = sceneById["conrad-introduction-choice"];
  const ryanFork = sceneById["ryan-picnic-choice"];
  const alexanderFork = sceneById["alexander-final-invitation"];

  return <EditorialPage
    path="/romance"
    reviewedAt={contentReview.checkedAt}
    breadcrumbs={[{label:"Dragons",href:"/dragons"}]}
    eyebrow="RELATIONSHIP MECHANICS · SPOILER-LIGHT"
    keyword="DRAG'N WASH ROMANCE"
    title="Drag'n Wash Romance Choices"
    subtitle="How the three relationships connect"
    lead="Understand when a conversation is just role-play, when the game actually locks a relationship and how Conrad, Ryan and Alexander connect across one shared run."
    image="/images/home/steam-4.webp"
    imageAlt="Conrad speaking to the player during a Drag'n Wash relationship scene"
    verification={{scope:"Conrad, Ryan and Alexander relationship states",platforms:"Recorded PC playthroughs",method:"Complete on-screen menus matched to later recorded scenes"}}
    faq={faq}
    answer={<><p>We meet all three dragons during one story. Conrad presents the first confirmed relationship decision, Ryan&apos;s picnic settles the second, and Alexander&apos;s late invitation appears after the game has checked whether we already have a date. We use the words <strong>dialogue change</strong>, <strong>route lock</strong> and <strong>relationship state</strong> separately so a friendly answer does not become a fake ending requirement.</p><p className={styles.source}><span className="badge">PLAYER VIEW</span> This page explains the system without reproducing every menu. The <Link href="/endings#ending-routes">ending choice guide</Link> contains the complete on-screen options and screenshots.</p></>}
    sections={[
      {id:"terms",title:"Dialogue, Dates and Endings Are Not the Same Thing",content:<><table className={styles.table}><thead><tr><th>Label</th><th>What we mean</th><th>What it does not prove</th></tr></thead><tbody><tr><td>Dialogue change</td><td>A response changes the next line or tone while the same scene continues.</td><td>A hidden point, romance unlock or different ending.</td></tr><tr><td>Route lock</td><td>The menu or later recording identifies a romance or cross-character result.</td><td>An official Good, Bad or True Ending name.</td></tr><tr><td>Relationship state</td><td>The story later treats us as dating someone, unattached or having paired two dragons.</td><td>A fourth ending beyond the developer&apos;s confirmed count.</td></tr><tr><td>Official ending</td><td>One of the {gameStatus.endings} outcomes counted by the developer.</td><td>That every character scene is a separate ending.</td></tr></tbody></table></>},
      {id:"spoiler-light-plan",title:"Choose a Relationship Without Reading Every Spoiler",content:<><div className={styles.cards}><Link href="/dragons/conrad#scene-timeline"><strong>Spend time with Conrad</strong><span>Follow his early recovery and choose him at the first relationship fork.</span></Link><Link href="/dragons/ryan#scene-timeline"><strong>Keep Ryan available</strong><span>Carry Conrad&apos;s introduction forward, then make the dating decision at the picnic.</span></Link><Link href="/dragons/alexander#scene-timeline"><strong>Stay unattached for Alexander</strong><span>Pair Ryan and Conrad, then continue to Alexander&apos;s late invitation.</span></Link><Link href="/endings#replay-all-endings"><strong>Compare another run</strong><span>Change one confirmed lock instead of rewriting every conversation.</span></Link></div></>},
      {id:"connection",title:"How Conrad, Ryan and Alexander Connect",content:<><table className={styles.table}><thead><tr><th>Story point</th><th>What the recorded scene establishes</th><th>Continue</th></tr></thead><tbody><tr><td>{conradFork.title}</td><td>We can open Conrad&apos;s romance or carry an introduction into Ryan&apos;s later scene.</td><td><Link href="/endings#conrad-introduction-choice">See the complete Conrad menu →</Link></td></tr><tr><td>{ryanFork.title}</td><td>We can date Ryan or complete the Ryan–Conrad pairing prepared earlier.</td><td><Link href="/endings#ryan-picnic-choice">See the complete picnic menu →</Link></td></tr><tr><td>{alexanderFork.title}</td><td>An unattached player can accept Alexander&apos;s romance or remain without a romance.</td><td><Link href="/endings#alexander-final-invitation">See Alexander&apos;s invitation →</Link></td></tr></tbody></table><p>The full path is sequential: a cross-character answer in Conrad&apos;s scene does not finish the pairing by itself, and Alexander&apos;s invitation should not be described without the player&apos;s existing relationship state.</p></>},
      {id:"what-to-record",title:"What to Write Down During a Run",content:<><ol><li>Record the character and scene, not just the answer you liked.</li><li>Copy the visible unlock message when the menu supplies one.</li><li>Separate an immediate reaction from a later relationship change.</li><li>Finish the run before naming the outcome.</li><li>On the next run, change one confirmed lock and leave ordinary role-play replies alone.</li></ol><p>This method is slower than following a made-up affection table, but it lets us compare what the game actually shows.</p></>},
      {id:"unsupported",title:"Claims We Do Not Use as Route Rules",content:<><ul><li>Hidden affection percentages without a visible counter or repeatable test.</li><li>Good, Bad or True Ending names that the developer did not publish.</li><li>The idea that every optional Alexander question adds romance points.</li><li>A fourth official ending created by the no-romance relationship state.</li><li>A promise that an ordinary tone choice changes the credits sequence.</li></ul></>},
      {id:"faq",title:"Drag'n Wash Romance FAQ",content:<>{faq.map((item)=><div key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></div>)}</>},
    ]}
    related={[{label:"Complete choice and ending guide",href:"/endings#ending-routes"},{label:"Alexander scene guide",href:"/dragons/alexander"},{label:"Ryan scene guide",href:"/dragons/ryan"},{label:"Conrad scene guide",href:"/dragons/conrad"},{label:"Replay another ending",href:"/endings#replay-all-endings"}]}
  />;
}
