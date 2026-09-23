import Link from "@/components/DocumentLink";
import EditorialPage from "@/components/content/EditorialPage";
import { metadataFor } from "@/seo/metadata";
import styles from "@/style/content/editorial-page.module.css";

export const metadata = metadataFor("mods", "/mods");

export default function ModsPage() {
  return <EditorialPage
    variant="reference"
    path="/mods"
    reviewedAt="2026-09-22"
    eyebrow="CUSTOMIZATION STATUS"
    keyword="DRAG'N WASH MODS"
    title="Drag'n Wash Mods – Localization, VR & Workshop Status"
    displayTitle="CHANGE THE GAME"
    subtitle="Localization, VR & Workshop Status"
    lead="Find the community projects you can try now, check whether they match your game version and see what the developer has—and has not—announced about Steam Workshop support."
    image="/images/home/steam-6.webp"
    imageAlt="A dragon inside the Drag'n Wash wash station"
    answer={<><p>Steam Workshop support was named as a development priority in the September 2026 developer update, but no release date or live Workshop integration was announced there. Native VR is not listed among the official store features. An independent VR mod exists; it is not official game support.</p><p className={styles.source}><span className="badge">OFFICIAL</span> <Link href="/updates#future-of-drag-n-wash">Read the developer-update timeline →</Link></p></>}
    sections={[
      {id:"status",title:"Drag'n Wash mods available now",content:<><table className={styles.table}><thead><tr><th>Feature</th><th>Status</th><th>What that means</th></tr></thead><tbody><tr><td>Localization mod</td><td>Third-party · v1.4.0 checked</td><td>Japanese, Simplified Chinese, native-proofread Korean and provisional packs run on the bundled ModFramework.</td></tr><tr><td>Drag&apos;n Wash ModFramework</td><td>Third-party framework</td><td>Provides a Mods screen, settings, update notices, shared tools and save history for compatible community mods.</td></tr><tr><td>Steam Workshop</td><td>Developer priority</td><td>Planned work, not proof of a released integration.</td></tr><tr><td>Native VR</td><td>Not listed officially</td><td>Do not assume the base game includes a VR mode.</td></tr><tr><td>Community VR mod</td><td>Third-party project</td><td>Check its current instructions and version compatibility.</td></tr><tr><td>Custom dragons / 3D models</td><td>No verified official workflow</td><td>Do not download extracted game assets or follow an invented install path.</td></tr></tbody></table><div className={styles.cards}><Link href="/mods/localization"><strong>Localization mod guide</strong><span>Languages, ModFramework, safe source and platform status</span></Link><a href="https://github.com/TomXV/dragnwash-localization/releases" target="_blank" rel="noreferrer"><strong>Author&apos;s releases</strong><span>Use the original project source only ↗</span></a></div></>},
      {id:"vr",title:"What about the community VR mod?",content:<><p>A creator hosts an unofficial Drag&apos;n Wash VR mod on itch.io. Its presence answers “is there a VR project?”—not “does the base game officially support VR?” Check the mod page for the author&apos;s current requirements, supported build and troubleshooting notes before installing.</p><p>Changing game files can make a bug report harder to diagnose. If a new patch breaks an interaction, test the unmodified game first and keep a copy of any files you replace.</p><p className={styles.source}><span className="badge muted">COMMUNITY</span> <a href="https://randomcat4.itch.io/dragn-wash-vr-mod" target="_blank" rel="noreferrer">VR mod project page ↗</a></p></>},
      {id:"before-installing",title:"Before installing any mod",content:<ol><li>Confirm the mod targets your current game version and operating system.</li><li>Read the author&apos;s original installation and removal directions.</li><li>Keep an untouched copy of replaced files, if the author instructs file replacement.</li><li>Remove the mod before reporting a possible base-game bug.</li><li>Check <Link href="/updates">recent updates</Link> after every game patch.</li></ol>},
      {id:"workshop",title:"Where to watch for Workshop news",content:<><p>The developer&apos;s “Future of Drag&apos;n Wash” announcement says Workshop support is the first development priority. Priority is not a shipping date. When it does arrive, official Steam news and the game&apos;s store/community pages are the reliable places to confirm it.</p><p className={styles.source}><a href="https://steamcommunity.com/app/4739660/allnews/" target="_blank" rel="noreferrer">Official Steam news ↗</a></p></>},
    ]}
    related={[{label:"Localization mod",href:"/mods/localization"},{label:"Stores & Steam Deck",href:"/#buy"},{label:"Mod troubleshooting",href:"/troubleshooting/launch-performance"},{label:"Latest updates",href:"/updates"}]}
  />;
}
