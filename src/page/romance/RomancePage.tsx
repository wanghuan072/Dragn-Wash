import Link from "@/components/DocumentLink";
import EditorialPage from "@/components/content/EditorialPage";
import { metadataFor } from "@/seo/metadata";
import styles from "@/style/content/editorial-page.module.css";

export const metadata = metadataFor("romance", "/romance");

export default function RomancePage() {
  return <EditorialPage
    path="/romance"
    reviewedAt="2026-09-24"
    breadcrumbs={[{label:"Dragons",href:"/dragons"}]}
    eyebrow="CHARACTERS & CHOICES"
    keyword="DRAG'N WASH ROMANCE"
    title="Drag'n Wash Romance – Alexander, Ryan & Conrad Choices"
    displayTitle="RELATIONSHIP CHOICES"
    subtitle="Alexander, Ryan & Conrad"
    lead="Follow the relationship choices we can actually see in one shared run: Conrad's first fork, Ryan's picnic decision and Alexander's late invitation, without relying on invented affection points."
    image="/images/home/steam-4.webp"
    imageAlt="A dragon speaking to the player during a Drag'n Wash scene"
    answer={<><p>You meet all three dragons in a run. The relationship route begins when Conrad asks who he should spend time with. If we introduce him to Ryan, the later picnic lets us date Ryan or complete the Ryan–Conrad pairing. Staying unattached keeps the clearest filmed path to Alexander&apos;s late invitation open.</p><p className={styles.source}><span className="badge">FILMED CHOICES</span> Every route lock links to the full on-screen menu in our endings guide.</p></>}
    sections={[
      {id:"how-choices-connect",title:"How the characters connect",content:<><p>These are not isolated character-select campaigns. Conrad&apos;s menu opens either his romance or a later choice involving Ryan. Ryan&apos;s picnic then locks his romance or completes the Ryan–Conrad pairing. In the filmed Alexander run, that pairing leaves the player unattached for Alexander&apos;s invitation.</p><table className={styles.table}><thead><tr><th>Choice area</th><th>Filmed result</th><th>What remains unknown</th></tr></thead><tbody><tr><td><Link href="/endings#conrad-introduction-choice">Conrad&apos;s conversation</Link></td><td>Date Conrad, or introduce him to Ryan.</td><td>Whether earlier tone choices alter anything beyond dialogue.</td></tr><tr><td><Link href="/endings#ryan-picnic-choice">Ryan&apos;s picnic</Link></td><td>Date Ryan, or complete the Ryan–Conrad pairing.</td><td>Whether optional picnic replies affect later wording.</td></tr><tr><td><Link href="/endings#alexander-final-invitation">Alexander&apos;s invitation</Link></td><td>Choose Alexander romance or no romance.</td><td>Whether the visible no-romance state maps to a separate final credits sequence.</td></tr></tbody></table></>},
      {id:"plan-a-run",title:"Plan a run without invented numbers",content:<><ol><li>Meet all three dragons and finish each active wash or story request.</li><li>When a response clearly concerns dating or another character, note its wording and the result.</li><li>Finish the ending before comparing a second run. Change one consequential response at a time.</li><li>Use the <Link href="/endings#replay-all-endings">ending replay strategy</Link> for the limits of current save behavior.</li></ol><p>Do not follow a guide claiming a hidden “70% affection” requirement unless it supplies direct, reproducible evidence. Neither official store description publishes such a threshold.</p></>},
      {id:"character-notes",title:"Explore each character",content:<div className={styles.cards}><Link href="/dragons/alexander"><strong>Alexander</strong><span>Question menu, existing-date dialogue and final invitation</span></Link><Link href="/dragons/ryan"><strong>Ryan</strong><span>Picnic replies, relationship lock and pairing branch</span></Link><Link href="/dragons/conrad"><strong>Conrad</strong><span>First relationship fork and later route scenes</span></Link><a href="#ryan-conrad"><strong>Ryan–Conrad pairing</strong><span>The two choices that connect their scenes</span></a></div>},
      {id:"ryan-conrad",title:"How to pair Ryan and Conrad",content:<><p>The pairing is a two-step cross-character route, not a rumor and not a fourth official ending.</p><ol><li>At <Link href="/endings#conrad-introduction-choice">Conrad&apos;s relationship choice</Link>, select “I know a dragon, Ryan. I could get you two in contact?”</li><li>Continue to <Link href="/endings#ryan-picnic-choice">Ryan&apos;s picnic</Link>.</li><li>Select “I know this one red dragon. I think you&apos;d like him!”</li><li>The menu labels the result “Hooks up Ryan with Conrad!” and the player remains unattached for the later Alexander path.</li></ol><p>We still do not assign a hidden affection number or call the pairing its own official ending.</p></>},
      {id:"source-status",title:"What is official and what is not",content:<><p><span className="badge">OFFICIAL</span> The developer describes three male dragons, increasingly personal conversations and three endings.</p><p><span className="badge muted">ON SCREEN</span> The Conrad romance, Ryan romance, Ryan–Conrad pairing, Alexander romance and no-romance labels are visible in recorded dialogue menus.</p><p><span className="badge muted">NOT PUBLISHED</span> Exact romance percentages, a fixed points table and named Good, Bad or True endings remain unsupported.</p></>},
    ]}
    related={[{label:"Complete ending route map",href:"/endings#ending-routes"},{label:"Conrad's first route choice",href:"/endings#conrad-introduction-choice"},{label:"Ryan's picnic choice",href:"/endings#ryan-picnic-choice"},{label:"Alexander's final invitation",href:"/endings#alexander-final-invitation"},{label:"Meet the dragons",href:"/dragons"}]}
  />;
}
