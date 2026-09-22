import Link from "next/link";
import styles from "@/style/page/inner.module.css";
import InnerPageHero from "@/components/content/InnerPageHero";
export default function HelpDetailPage({ slug }: { slug: string }) {
  const stuck = slug === "stuck";
  return (
    <main className="container inner-page">
      <InnerPageHero
        eyebrow="FAST RECOVERY"
        keyword="DRAG'N WASH TROUBLESHOOTING"
        title={stuck ? "STUCK OR SOFTLOCK" : "CLEAN BAR STUCK"}
        subtitle={stuck ? "Recover Without Losing Your Run" : "Find the Missing Wash Step"}
        lead={stuck ? "Try the in-game recovery option before throwing away your progress." : "A short checklist for a wash that looks complete but does not advance."}
        image={stuck ? "/images/home/steam-2.webp" : "/images/guides/steam-11.webp"}
        imageAlt={stuck ? "Drag'n Wash station during a troubleshooting check" : "A dragon being rinsed while checking wash progress"}
        reviewedAt="2026-09-21"
        plate="RECOVERY PROCEDURE"
        stamp={"TRY THIS\nFIRST"}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Troubleshooting", href: "/troubleshooting" }, { label: stuck ? "Stuck or Softlock" : "Wash Progress" }]}
      />
      <div className={styles.articleGrid}>
        <article className={styles.article}>
          <section className={styles.answer}>
            <span className="badge">TRY THIS FIRST</span>
            <h2>
              {stuck ? "Recover your character" : "Find the missing step"}
            </h2>
            <ol>
              {(stuck
                ? [
                    "Pause the game.",
                    "Choose Unstick Kobold in the game menu (added in the September 13 hotfix).",
                    "Check whether the current scene still expects an interaction or request.",
                    "If you remain locked, verify the game is updated; restart the scene or run only after trying Unstick.",
                  ]
                : [
                    "Read the current on-screen request: a full-looking bar may still be waiting for rinsing, conversation or another interaction.",
                    "Rotate around the dragon and inspect small dirt or ink marks, especially edges, the tail and the back of the neck.",
                    "If soap remains, use the sprayer from more than one angle until the visible foam is gone.",
                    "Release and reselect the prompted tool if the sponge or sprayer stops responding.",
                    "Try Unstick Kobold and confirm the game is updated before restarting the scene.",
                  ]
              ).map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
          </section>
          <section>
            <h2>Why this can happen</h2>
            <p>
              {stuck
                ? "The official September 13 hotfix addressed multiple scene softlocks and input issues. Older reports may describe bugs that have already been fixed, so the game version matters."
                : "A nearly full progress indicator does not prove every required action has been completed. Sometimes the next step is a scene prompt rather than more cleaning. A rare arrival-already-clean issue was also addressed in the official hotfix."}
            </p>
          </section>
          {!stuck && <section>
            <h2>Full clean bar but the third dragon will not finish?</h2>
            <p><span className="badge muted">COMMUNITY REPORT</span> Players have reported tiny marks blending into the third dragon&apos;s tail after sponging, plus a small missed area behind the neck. These are useful places to inspect, not guaranteed spawn points in every run.</p>
            <div className={styles.compare}>
              <div><strong>Symptom</strong><strong>Check</strong><strong>Action</strong></div>
              <div><span>Bar looks full</span><span>Active request and remaining marks</span><span>Rotate and inspect edges</span></div>
              <div><span>Soap will not clear</span><span>Tail, neck and hidden side</span><span>Rinse from another angle</span></div>
              <div><span>Nothing responds</span><span>Current game build</span><span>Update → Unstick → restart</span></div>
            </div>
            <p><a href="https://gatordragongames.itch.io/dragnwash" target="_blank" rel="noreferrer">Read the player reports on the developer page ↗</a></p>
          </section>}
          <section>
            <h2>When to restart</h2>
            <p>
              Restart only after checking the prompt, trying Unstick, and
              updating the game. A developer has described manual save/load as a
              requested feature, so do not count on an earlier slot being
              available in the current release.
            </p>
          </section>
          {stuck && <section id="out-of-bounds">
            <h2>Out-of-bounds and escape experiments</h2>
            <p><span className="badge muted">COMMUNITY · VERSION-SENSITIVE</span> A community guide describes leaving the normal wash-station area. It is not a required route, secret ending or supported feature, and collision behavior can change after an update.</p>
            <p>Try movement experiments only on a run you can restart. Record the build, platform, scene and exact starting position. If you lose movement or interaction, use Unstick Kobold, reload the scene and test again without mods before reporting a base-game problem.</p>
            <a href="https://ggguides.com/guide/dragn-wash-guide-how-to-wash-dragons-and-escape/" target="_blank" rel="noreferrer">Read the original community guide ↗</a>
          </section>}
          <section>
            <h2>Related guides</h2>
            <Link href="/guides/how-to-wash">How to Wash →</Link>
            <br />
            <Link href="/guides/washing-tools">Washing Tools →</Link>
            <br />
            <Link href="/endings#replay-strategy">Replay planning →</Link>
            <br />
            <Link href="/troubleshooting">Search all known issues →</Link>
          </section>
        </article>
        <aside className={styles.sidebar}>
          <div className="panel">
            <h2>Patch context</h2>
            <p>
              <span className="badge">OFFICIAL</span> Unstick Kobold and several
              softlock fixes arrived Sep 13, 2026.
            </p>
            <Link href="/updates#kobold-hotfix">Read player impact →</Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
