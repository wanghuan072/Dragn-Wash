import Link from "@/components/DocumentLink";
import EditorialPage from "@/components/content/EditorialPage";
import { metadataFor } from "@/seo/metadata";
import styles from "@/style/content/editorial-page.module.css";
import { contentReview, gameStatus, localizationStatus } from "@/data/currentFacts";

export const metadata = metadataFor("mods", "/mods");

export default function ModsPage() {
  return <EditorialPage
    variant="reference"
    path="/mods"
    reviewedAt={contentReview.gameUpdateCheckedAt}
    eyebrow="CUSTOMIZATION STATUS"
    keyword="DRAG'N WASH MODS"
    title="Drag'n Wash Mods – Localization, VR & Workshop Status"
    displayTitle="CHANGE THE GAME"
    subtitle="Localization, VR & Workshop Status"
    lead="Find the community projects you can try now, check whether they match your game version and see what the developer has—and has not—announced about Steam Workshop support."
    image="/images/home/steam-6.webp"
    imageAlt="A dragon inside the Drag'n Wash wash station"
    verification={{scope:"Workshop, VR and community mod availability",platforms:"Official base game · third-party project notes",method:"Developer news and original project pages checked October 8, 2026"}}
    answer={<><p>{gameStatus.workshop} {gameStatus.nativeVr} The localization project is active at v{localizationStatus.version}, but it and the VR project remain community software with their own compatibility rules.</p><p className={styles.source}><span className="badge">STATUS CHECKED OCT 8, 2026</span> <Link href="/updates#future-of-drag-n-wash">Read the developer-update timeline →</Link></p></>}
    sections={[
      {id:"status",title:"Drag'n Wash mods available now",content:<><table className={styles.table}><thead><tr><th>Feature</th><th>Status</th><th>What that means</th></tr></thead><tbody><tr><td>Localization mod</td><td>Third-party · v{localizationStatus.version}</td><td>{localizationStatus.languageCount} listed languages, update controls and platform-specific installers run through ModFramework {localizationStatus.frameworkVersion}.</td></tr><tr><td>Drag&apos;n Wash ModFramework</td><td>Third-party framework</td><td>Provides a Mods screen, settings, update notices and supporting tools for compatible community mods.</td></tr><tr><td>Steam Workshop</td><td>Developer priority · not released</td><td>The official announcement names the priority but supplies no launch date or live integration.</td></tr><tr><td>Native VR</td><td>Not listed officially</td><td>The unmodified game does not advertise a VR mode.</td></tr><tr><td>Community VR mod</td><td>Third-party project</td><td>Check the project&apos;s current build requirements before changing game files.</td></tr><tr><td>Custom dragons / 3D models</td><td>No verified official workflow</td><td>Do not download extracted assets or follow a fan page that presents an invented install path.</td></tr></tbody></table><div className={styles.cards}><Link href="/mods/localization"><strong>Localization mod guide</strong><span>Languages, ModFramework, safe source and platform status</span></Link><a href="https://github.com/TomXV/dragnwash-localization/releases" target="_blank" rel="noreferrer"><strong>Author&apos;s releases</strong><span>Use the original project source only ↗</span></a></div></>},
      {id:"vr",title:"What about the community VR mod?",content:<><p>A creator hosts an unofficial Drag&apos;n Wash VR mod on itch.io. Its presence answers “is there a VR project?”—not “does the base game officially support VR?” Check the mod page for the author&apos;s current requirements, supported build and troubleshooting notes before installing.</p><p>Changing game files can make a bug report harder to diagnose. If a new patch breaks an interaction, test the unmodified game first and keep a copy of any files you replace.</p><p className={styles.source}><span className="badge muted">COMMUNITY</span> <a href="https://randomcat4.itch.io/dragn-wash-vr-mod" target="_blank" rel="noreferrer">VR mod project page ↗</a></p></>},
      {id:"before-installing",title:"Before installing any mod",content:<ol><li>Confirm the mod targets your current game version and operating system.</li><li>Read the author&apos;s original installation and removal directions.</li><li>Keep an untouched copy of replaced files, if the author instructs file replacement.</li><li>Remove the mod before reporting a possible base-game bug.</li><li>Check <Link href="/updates">recent updates</Link> after every game patch.</li></ol>},
      {id:"workshop",title:"Where to watch for Workshop news",content:<><p>The developer&apos;s “Future of Drag&apos;n Wash” announcement says Workshop support is the first development priority. Priority is not a shipping date. When it does arrive, official Steam news and the game&apos;s store/community pages are the reliable places to confirm it.</p><p className={styles.source}><a href="https://steamcommunity.com/app/4739660/allnews/" target="_blank" rel="noreferrer">Official Steam news ↗</a></p></>},
    ]}
    related={[{label:"Localization mod",href:"/mods/localization"},{label:"Stores & Steam Deck",href:"/#buy"},{label:"Mod troubleshooting",href:"/troubleshooting/launch-performance"},{label:"Latest updates",href:"/updates"}]}
  />;
}
