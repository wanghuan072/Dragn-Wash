import Link from "next/link";
import EditorialPage from "@/components/content/EditorialPage";
import IssueFinder from "@/components/IssueFinder";
import { knownIssues } from "@/data/knowledge";
import { metadataFor } from "@/seo/metadata";
import styles from "@/style/content/editorial-page.module.css";

export const metadata = metadataFor("troubleshooting", "/troubleshooting");

export default function KnownIssuesPage() {
  const fixed = knownIssues.filter((issue) => issue.status === "Fixed").length;
  const reports = knownIssues.filter((issue) => issue.status === "Community report").length;
  return <EditorialPage
    variant="reference"
    path="/troubleshooting"
    reviewedAt="2026-09-21"
    eyebrow="VERSION-AWARE TROUBLESHOOTING"
    keyword="DRAG'N WASH TROUBLESHOOTING"
    title="Drag'n Wash Troubleshooting – Fix Stuck Washes and Softlocks"
    displayTitle="GET UNSTUCK"
    subtitle="Wash Progress, Softlocks & Launch Fixes"
    lead="Start with the symptom on your screen—full clean bar, missed dirt, frozen interaction, slow launch or display trouble—and try the shortest safe fix before restarting your run."
    image="/images/home/steam-2.webp"
    imageAlt="The wash station bucket and tap used during Drag'n Wash troubleshooting"
    answer={<><p>Choose from {knownIssues.length} specific symptoms instead of trying every workaround at once. {fixed} were addressed in official hotfix notes, while {reports} are player-reported problems that may not affect every setup. Update first, remove third-party mods, then follow the steps for the problem you can actually see.</p><p className={styles.source}><span className="badge">UPDATED SEP 21, 2026</span> A fixed issue can still return as a regression, so record your platform and build if the same problem comes back.</p></>}
    sections={[
      {id:"finder",title:"Find a matching symptom",content:<IssueFinder/>},
      {id:"report",title:"Record a useful bug report",content:<ol><li>Write down the storefront, operating system and game build.</li><li>Name the character and scene or objective.</li><li>List the exact steps immediately before the problem.</li><li>Say whether Unstick, a restart or changing resolution altered it.</li><li>Remove mods and try once in the base game.</li><li>Separate “happened once” from a repeatable result.</li></ol>},
      {id:"status",title:"Why old fixes can be misleading",content:<><p>The September 13 hotfix addressed several softlocks, input-turning problems, a native Linux Nvidia issue, Steam Deck touch spinning and rare already-clean arrivals. A report written before that patch can still describe a real historical bug without being a current workaround.</p><p>Use the <Link href="/updates">update timeline</Link> to see which guide or issue a patch changes.</p></>},
      {id:"safety",title:"Safe troubleshooting boundaries",content:<><ul><li>Do not disable security software to run an unsigned community installer.</li><li>Do not replace save files from an unknown download.</li><li>Do not report a modded-game failure as a base-game bug until reproduced without mods.</li><li>Preserve a completed slot before testing an unverified credits workaround.</li></ul></>},
    ]}
    related={[{label:"Wash progress",href:"/troubleshooting/wash-progress"},{label:"Stuck & softlocks",href:"/troubleshooting/stuck-softlock"},{label:"Launch & performance",href:"/troubleshooting/launch-performance"},{label:"How fixes are checked",href:"/sources"}]}
  />;
}
