import EditorialPage from "@/components/content/EditorialPage";
import { coreSources, evidenceDefinitions } from "@/data/knowledge";
import { metadataFor } from "@/seo/metadata";
import styles from "@/style/content/editorial-page.module.css";

export const metadata = metadataFor("sources", "/sources");

export default function SourcesPage() {
  return <EditorialPage
    variant="reference"
    path="/sources"
    reviewedAt="2026-09-21"
    eyebrow="EDITORIAL STANDARD"
    keyword="DRAG'N WASH GUIDE"
    title="How We Check Drag'n Wash Information"
    displayTitle="HOW WE CHECK"
    subtitle="Information That Can Change"
    lead="Game updates can change a fix, mod or scene. This page explains how official announcements, repeatable gameplay and player reports are handled so you know which details are settled and which still need testing."
    image="/images/home/steam-7.webp"
    imageAlt="A dragon inside the Drag'n Wash station representing guide research"
    answer={<><p>Official sources establish release facts and patch history. Firsthand testing establishes repeatable behavior. Community guides and reports identify useful leads, but they remain clearly labeled until reproduced. Conflicting or unsupported claims do not become facts through repetition.</p><p className={styles.source}><span className="badge">INDEPENDENT FAN RESOURCE</span> This site is not affiliated with Gator Dragon Games and does not republish game files or competitor copy.</p></>}
    sections={[
      {id:"labels",title:"What the status labels mean",content:<table className={styles.table}><thead><tr><th>Label</th><th>Meaning</th><th>When it appears</th></tr></thead><tbody>{evidenceDefinitions.map((item)=><tr key={item.label}><td>{item.label}</td><td>{item.meaning}</td><td>{item.use}</td></tr>)}</tbody></table>},
      {id:"sources",title:"Where changing details are checked",content:<table className={styles.table}><thead><tr><th>Place checked</th><th>Type</th><th>Used for</th></tr></thead><tbody>{coreSources.map((source)=><tr key={source.name}><td><a href={source.href} target="_blank" rel="noreferrer">{source.name} ↗</a></td><td>{source.type}</td><td>{source.covers}</td></tr>)}</tbody></table>},
      {id:"conflicts",title:"How conflicting information is handled",content:<ol><li>Prefer a current official source over an undated fan claim.</li><li>Keep a direct player observation as a community report rather than erasing it.</li><li>Record the applicable build when a behavior may have changed.</li><li>Use neutral labels such as Ending A/B/C until the game supplies confirmed names.</li><li>Correct every page drawing from shared data when stronger evidence appears.</li></ol>},
      {id:"reuse",title:"How other guides are used",content:<><p>Other guide sites can reveal a question players keep asking or an experiment worth repeating. Their prose, screenshots and unsupported mechanics are not copied. Practical steps are rewritten only after they can be compared with an official statement or a repeatable playthrough.</p><p>This keeps broad wiki-style coverage useful without turning a repeated fan claim into a game rule.</p></>},
      {id:"review-cycle",title:"Review cycle",content:<><ul><li>Store and platform facts: recheck after an official update or storefront change.</li><li>Mods and localization: recheck every release and after a base-game patch.</li><li>Known issues: move to Fixed only with official notes or controlled reproduction.</li><li>Scenes and routes: add exact conditions only after repeatable testing.</li></ul><p>Visible reviewed dates refer to the page content, not the age of every linked community comment.</p></>},
    ]}
    related={[{label:"Known issues",href:"/troubleshooting"},{label:"Dragon story records",href:"/dragons#story-moments"},{label:"Updates",href:"/updates"},{label:"Mods & community projects",href:"/mods"}]}
  />;
}
