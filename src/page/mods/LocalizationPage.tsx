import Link from "@/components/DocumentLink";
import EditorialPage from "@/components/content/EditorialPage";
import { metadataFor } from "@/seo/metadata";
import styles from "@/style/content/editorial-page.module.css";

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
    answer: "The project README currently says macOS does not work because its BepInEx loader cannot hook this Unity build. Check the current README before attempting an installation.",
  },
];

export default function LocalizationPage() {
  return <EditorialPage
    variant="reference"
    path="/mods/localization"
    reviewedAt="2026-09-22"
    breadcrumbs={[{label:"Mods & VR",href:"/mods"}]}
    eyebrow="UNOFFICIAL LANGUAGE MOD"
    keyword="DRAG'N WASH LOCALIZATION"
    title="Drag'n Wash Localization Mod – Chinese, Japanese & More"
    displayTitle="PLAY IN YOUR LANGUAGE"
    subtitle="Chinese, Japanese & More"
    lead="Add a community translation on Windows, Steam Deck or Linux, choose the right release file and check current language quality and platform limits before installing."
    image="/images/home/steam-6.webp"
    imageAlt="A dragon inside the Drag'n Wash wash station"
    faq={faq}
    answer={<><p>Steam currently lists English as the game&apos;s supported language. The community Drag&apos;n Wash Localization project adds Japanese, Simplified Chinese, native-proofread Korean and provisional packs through BepInEx and Drag&apos;n Wash ModFramework. The repository listed v1.4.0 as current when checked on September 22, 2026. It is an unofficial mod, not a developer translation or Steam Workshop item.</p><p className={styles.source}><span className="badge muted">THIRD-PARTY · CHECKED SEP 22, 2026</span> <a href={repository} target="_blank" rel="noreferrer">Author&apos;s repository ↗</a> · <a href={releases} target="_blank" rel="noreferrer">Original releases ↗</a></p></>}
    sections={[
      {id:"current-release",title:"Current project status",content:<><table className={styles.table}><thead><tr><th>Item</th><th>Checked status</th><th>Player impact</th></tr></thead><tbody><tr><td>Localization release</td><td>v1.4.0 listed as latest</td><td>Adds experimental translation support for other mods and language-specific pictures through ModFramework 1.4.0.</td></tr><tr><td>ModFramework</td><td>Required and bundled</td><td>Adds the in-game Mods screen, shared settings, update notices and save history.</td></tr><tr><td>Game update resilience</td><td>Improved in v1.2.x</td><td>Translations and save discovery were updated for the September 14 game build.</td></tr><tr><td>macOS</td><td>Not working</td><td>BepInEx cannot currently hook this Unity 6.3 build; the repository has no working release path.</td></tr></tbody></table><p className={styles.source}>Always compare the live <a href={releases} target="_blank" rel="noreferrer">Releases page ↗</a> before installing; this status table is a dated snapshot.</p></>},
      {id:"languages",title:"Language pack status",content:<><table className={styles.table}><thead><tr><th>Pack</th><th>Project status</th><th>What to expect</th></tr></thead><tbody><tr><td>Japanese and Simplified Chinese</td><td>Primary project packs</td><td>Included as the project&apos;s principal non-English translations.</td></tr><tr><td>Korean</td><td>Native proofread</td><td>The repository credits a native-language proofreader.</td></tr><tr><td>Traditional Chinese, German, French, Spanish, Brazilian Portuguese, Russian, Polish, Hebrew</td><td>Provisional</td><td>Playable community packs that may contain unnatural wording or missed nuance.</td></tr><tr><td>Ukrainian, Thai and Vietnamese</td><td>Provisional · added in v1.2.0</td><td>Included in the expanded 16-language project release.</td></tr><tr><td>Esperanto and Toki Pona</td><td>Community extras</td><td>Included by the project for experimentation.</td></tr></tbody></table><p>Translation files contain dialogue in story order. Opening the CSV files can reveal the full story, so treat the repository&apos;s translation folders as spoiler material.</p></>},
      {id:"platforms",title:"Windows, Steam Deck, Linux and macOS",content:<table className={styles.table}><thead><tr><th>Platform</th><th>Current project status</th><th>Recommended action</th></tr></thead><tbody><tr><td>Windows Steam build</td><td>Supported</td><td>Use the release package and the author&apos;s installer or documented manual method.</td></tr><tr><td>Steam Deck / native Linux</td><td>Verified by the project</td><td>Follow the current Linux steps and Steam launch option in the README.</td></tr><tr><td>macOS</td><td>Currently not working</td><td>Do not rely on the experimental script; wait for the loader issue to be resolved and retested.</td></tr><tr><td>itch.io direct build</td><td>Not the primary documented target</td><td>Do not assume the Steam-oriented installer will detect it; check the author&apos;s latest notes.</td></tr></tbody></table>},
      {id:"safe-download",title:"Download from the original project",content:<><ol><li>Open the author&apos;s <a href={releases} target="_blank" rel="noreferrer">GitHub Releases page ↗</a>.</li><li>Choose the named installable mod ZIP from release assets. GitHub&apos;s automatic “Source code” archives are not install packages.</li><li>Compare any published checksum before running a downloaded installer.</li><li>If your security software blocks an unsigned launcher, use the author&apos;s documented manual method instead of disabling protection.</li><li>Never download a repack from a video description, file mirror or unrelated mod index.</li></ol><p>This guide does not host the mod or its game text. The project&apos;s current release notes remain the source of truth.</p></>},
      {id:"install",title:"Installation overview",content:<><h3>Windows</h3><p>Extract the official release asset, run the project installer, select a language and let it locate the Steam game. The installer can download and checksum the supported BepInEx release when needed. Launch the game and use Options → Language (Mod) to verify the pack.</p><h3>Steam Deck and Linux</h3><p>The project uses the native Linux BepInEx build plus a Steam launch option. Its current script can find Steam libraries, including an SD card, and records an installer log. Follow the exact README steps rather than copying an old command; loader requirements are version-sensitive.</p><h3>ModFramework features</h3><p>The bundled framework provides Options → Mods, per-mod settings and enable switches, update notices, a shared F1 tool window and save-history support. These are third-party framework features, not promises about the unmodified game.</p><p className={styles.source}><a href={repository} target="_blank" rel="noreferrer">Read the current installation instructions ↗</a></p></>},
      {id:"troubleshooting",title:"Verify, update or uninstall",content:<><ul><li>Confirm you installed a release asset, not a source archive.</li><li>Check that the project&apos;s startup entry appears in the BepInEx log.</li><li>After a game update, compare the mod release date and compatibility notes before troubleshooting the base game.</li><li>Use the installer&apos;s Uninstall action on Windows when available; preserve translation work or snapshots only if the project documents them.</li><li>Remove the mod and reproduce a bug in the unmodified game before reporting it to the game developer.</li></ul><div className={styles.cards}><Link href="/mods"><strong>All mods & VR</strong><span>Official plans versus community projects</span></Link><Link href="/#buy"><strong>Base-game platforms</strong><span>Official Windows, macOS, Linux and Deck status</span></Link></div></>},
      {id:"faq",title:"Localization FAQ",content:<>{faq.map((item)=><div key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></div>)}</>},
    ]}
    related={[{label:"Mods & VR status",href:"/mods"},{label:"Stores & platforms",href:"/#buy"},{label:"Launch troubleshooting",href:"/troubleshooting/launch-performance"},{label:"Latest updates",href:"/updates"}]}
  />;
}
