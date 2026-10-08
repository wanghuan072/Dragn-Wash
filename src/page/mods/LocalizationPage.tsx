import Link from "@/components/DocumentLink";
import EditorialPage from "@/components/content/EditorialPage";
import { metadataFor } from "@/seo/metadata";
import styles from "@/style/content/editorial-page.module.css";
import { contentReview, localizationStatus } from "@/data/currentFacts";

const repository = "https://github.com/TomXV/dragnwash-localization";
const releases = `${repository}/releases`;

export const metadata = metadataFor("localization", "/mods/localization");

const faq = [
  {
    question: "Does Drag'n Wash have a Chinese translation?",
    answer: "The official Steam data lists English. A third-party localization mod provides Simplified Chinese and a provisional Traditional Chinese pack; it is not an official game translation.",
  },
  {
    question: "Does the localization mod work on Steam Deck or Linux?",
    answer: "The project documents and verifies a native Linux and Steam Deck installation. Follow the current project README because loader and launch-option steps can change.",
  },
  {
    question: "Does the localization mod work on macOS?",
    answer: "The project now documents an experimental repository script that runs through Rosetta with an unreleased Doorstop build. It is not included in the release ZIP, so macOS should still be treated as an advanced, experimental setup.",
  },
];

export default function LocalizationPage() {
  return <EditorialPage
    variant="reference"
    path="/mods/localization"
    reviewedAt={contentReview.localizationCheckedAt}
    breadcrumbs={[{label:"Mods & VR",href:"/mods"}]}
    eyebrow="UNOFFICIAL LANGUAGE MOD"
    keyword="DRAG'N WASH LOCALIZATION"
    title="Drag'n Wash Localization Mod – Chinese, Japanese & More"
    displayTitle="PLAY IN YOUR LANGUAGE"
    subtitle="Chinese, Japanese & More"
    lead="Add a community translation on Windows, Steam Deck or Linux, choose the right release file and check current language quality and platform limits before installing."
    image="/images/home/steam-6.webp"
    imageAlt="A dragon inside the Drag'n Wash wash station"
    verification={{scope:"Localization v1.6.0 release and installation paths",platforms:"Windows · Steam Deck/Linux · experimental macOS",method:"Author release notes and README checked October 8, 2026"}}
    faq={faq}
    answer={<><p>Steam still lists English for the base game. The community Drag&apos;n Wash Localization project reached v{localizationStatus.version} with {localizationStatus.languageCount} entries in its language list. Japanese and Simplified Chinese are supervised, Korean and Turkish have native-language review, and the remaining packs carry their own project status. This is an unofficial BepInEx mod, not a developer translation or a Steam Workshop item.</p><p className={styles.source}><span className="badge muted">THIRD-PARTY · CHECKED OCT 8, 2026</span> <a href={repository} target="_blank" rel="noreferrer">Author&apos;s repository ↗</a> · <a href={releases} target="_blank" rel="noreferrer">Original releases ↗</a></p></>}
    sections={[
      {id:"current-release",title:"Current project status",content:<><table className={styles.table}><thead><tr><th>Item</th><th>Checked status</th><th>Player impact</th></tr></thead><tbody><tr><td>Localization release</td><td>v{localizationStatus.version} · Sep 26, 2026</td><td>Adds Turkish and translates the v1.6.0 launcher and in-game update controls across the language packs.</td></tr><tr><td>ModFramework</td><td>v{localizationStatus.frameworkVersion} required</td><td>The installer fetches the matching framework release and verifies its size and SHA-256 before installation.</td></tr><tr><td>Updating</td><td>Launcher and in-game update paths</td><td>After v1.6.0 is installed, players can update before launch or from Options → Mods instead of downloading each later ZIP manually.</td></tr><tr><td>macOS</td><td>Experimental repository script</td><td>The setup uses Rosetta and an unreleased Doorstop build. It is not part of the release ZIP and should not be treated as normal support.</td></tr></tbody></table><p className={styles.source}>Always compare the live <a href={releases} target="_blank" rel="noreferrer">Releases page ↗</a> before installing; this status table was checked on October 8, 2026.</p></>},
      {id:"languages",title:"Language pack status",content:<><table className={styles.table}><thead><tr><th>Pack</th><th>Project status</th><th>What to expect</th></tr></thead><tbody><tr><td>Japanese and Simplified Chinese</td><td>Supervised</td><td>The project identifies these as its supervised translation packs.</td></tr><tr><td>Korean and Turkish</td><td>Native-language review</td><td>Korean is proofread by a native speaker; Turkish was translated by a native speaker for v1.6.0.</td></tr><tr><td>Traditional Chinese</td><td>Converted from Simplified Chinese</td><td>Useful coverage, but not described as an independently reviewed translation.</td></tr><tr><td>German, French, Spanish, Brazilian Portuguese, Russian, Polish, Hebrew, Ukrainian, Thai and Vietnamese</td><td>Provisional</td><td>Expect occasional unnatural wording, missed nuance or lines awaiting correction.</td></tr><tr><td>Esperanto and Toki Pona</td><td>Community extras</td><td>Included by the project for experimentation and fun.</td></tr></tbody></table><p>Translation files contain dialogue in story order. Opening the CSV files can reveal the full story, so treat the repository&apos;s translation folders as spoiler material.</p></>},
      {id:"platforms",title:"Windows, Steam Deck, Linux and macOS",content:<table className={styles.table}><thead><tr><th>Platform</th><th>Current project status</th><th>Recommended action</th></tr></thead><tbody><tr><td>Windows Steam build</td><td>Supported</td><td>Use the named release ZIP with Install.exe, or follow the current manual method.</td></tr><tr><td>Steam Deck / native Linux</td><td>Supported by the project</td><td>Run install-steamdeck.sh and follow the current Steam launch-option instructions.</td></tr><tr><td>macOS</td><td>Experimental</td><td>Use only the repository&apos;s experimental script if you understand Rosetta and unreleased-loader limitations; it is not in the normal release ZIP.</td></tr><tr><td>itch.io direct build</td><td>Not the primary documented target</td><td>Do not assume the Steam-oriented installer will detect it; check the author&apos;s latest notes.</td></tr></tbody></table>},
      {id:"safe-download",title:"Download from the original project",content:<><ol><li>Open the author&apos;s <a href={releases} target="_blank" rel="noreferrer">GitHub Releases page ↗</a>.</li><li>Choose the named installable mod ZIP from release assets. GitHub&apos;s automatic “Source code” archives are not install packages.</li><li>Compare any published checksum before running a downloaded installer.</li><li>If your security software blocks an unsigned launcher, use the author&apos;s documented manual method instead of disabling protection.</li><li>Never download a repack from a video description, file mirror or unrelated mod index.</li></ol><p>This guide does not host the mod or its game text. The project&apos;s current release notes remain the source of truth.</p></>},
      {id:"install",title:"Installation overview",content:<><h3>Windows</h3><p>Download the named DragNWashLocalization release ZIP, extract it outside the game folder and run Install.exe. Choose a language, let the installer locate the Steam game and close Steam if it needs to write the launch option. It verifies the ModFramework download before installing it.</p><h3>Steam Deck and Linux</h3><p>Extract the same release and run <code>bash install-steamdeck.sh</code>. The project documents native Linux and Steam Deck support, including Steam libraries on an SD card. Use the current README rather than copying an older launch command.</p><h3>Updates and removal</h3><p>With v1.6.0 installed, the launcher can offer an update before play and Options → Mods → Drag&apos;n Wash Localization includes Update now. The project also documents its uninstall path. These are third-party framework features, not base-game promises.</p><p className={styles.source}><a href={repository} target="_blank" rel="noreferrer">Read the current installation instructions ↗</a></p></>},
      {id:"troubleshooting",title:"Verify, update or uninstall",content:<><ul><li>Confirm you installed a release asset, not a source archive.</li><li>Check that the project&apos;s startup entry appears in the BepInEx log.</li><li>After a game update, compare the mod release date and compatibility notes before troubleshooting the base game.</li><li>Use the installer&apos;s Uninstall action on Windows when available; preserve translation work or snapshots only if the project documents them.</li><li>Remove the mod and reproduce a bug in the unmodified game before reporting it to the game developer.</li></ul><div className={styles.cards}><Link href="/mods"><strong>All mods & VR</strong><span>Official plans versus community projects</span></Link><Link href="/#buy"><strong>Base-game platforms</strong><span>Official Windows, macOS, Linux and Deck status</span></Link></div></>},
      {id:"faq",title:"Localization FAQ",content:<>{faq.map((item)=><div key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></div>)}</>},
    ]}
    related={[{label:"Mods & VR status",href:"/mods"},{label:"Stores & platforms",href:"/#buy"},{label:"Launch troubleshooting",href:"/troubleshooting/launch-performance"},{label:"Latest updates",href:"/updates"}]}
  />;
}
