import Image from "next/image";
import Link from "@/components/DocumentLink";
import { guides } from "@/lib/content";
import { siteName, siteUrl } from "@/config/site";
import { formatMonthYear } from "@/lib/dates";
import InnerPageHero from "@/components/content/InnerPageHero";
import styles from "@/style/page/inner.module.css";

type Step = {
  title: string;
  action: string;
  why: string;
  check: string;
  problem: string;
  image: string;
  imageAlt: string;
};

type GuideConfig = {
  heroSubtitle: string;
  answer: string;
  purpose: string;
  before: string[];
  steps: Step[];
  reference: [string, string, string][];
  mistakes: [string, string][];
  faq: [string, string][];
  related: { label: string; href: string }[];
};

type GuideHeadings = {
  answer: string;
  purpose: string;
  before: string;
  steps: string;
  reference: string;
  mistakes: string;
  sources: string;
};

const images = {
  wash: "/images/guides/steam-0.webp",
  close: "/images/guides/steam-1.webp",
  bucket: "/images/guides/steam-2.webp",
  station: "/images/guides/steam-4.webp",
  story: "/images/guides/steam-5.webp",
  purple: "/images/guides/steam-7.webp",
  scrub: "/images/guides/steam-9.webp",
  rinse: "/images/guides/steam-11.webp",
};

const configs: Record<string, GuideConfig> = {
  "beginner-guide": {
    heroSubtitle: "Your First Shift, Step by Step",
    answer: "Start a new progress slot, follow the objective instead of searching the station at random, answer the phone, complete the window and gate sequence, then prepare the water and sponge. Watch the cleaning progress and the active scene request separately.",
    purpose: "Your first shift teaches two things at once: how the wash tools respond and when the story expects conversation or another interaction instead of more cleaning. This guide stays with that opening experience; the complete walkthrough carries the run forward.",
    before: [
      "Allow extra time on first boot because the hotfix moved shader preparation to startup.",
      "Set Sprayer Reduce Motion or Invert Look Y before a long wash if either improves comfort.",
      "Use one progress slot for the outcome you want to observe, but do not treat it as a manual save before every dialogue choice.",
      "Expect adult male-dragon content; check the content guide before buying or streaming the game.",
    ],
    steps: [
      { title: "Choose a progress slot", action: "Start a new run and keep this slot associated with one set of relationship choices. Read the first objective before moving around the station.", why: "A named slot helps you compare a later replay even though a freely placed branch save is not confirmed.", check: "The opening scene loads and an objective or interaction prompt appears.", problem: "If the menu seems frozen, allow shader preparation to finish, then use the launch checklist if it never advances.", image: images.story, imageAlt: "Drag'n Wash story scene at the beginning of a run" },
      { title: "Answer the downstairs phone", action: "Go to the ringing phone and complete the opening conversation. Do not collect tools yet unless the current prompt asks for one.", why: "The phone establishes the customer flow; wandering ahead can make the next gate control look inactive.", check: "The objective changes from the phone to the arriving customer sequence.", problem: "Stand close to the highlighted interaction, put away held items and finish every dialogue line.", image: images.station, imageAlt: "Drag'n Wash station during the opening customer sequence" },
      { title: "Finish the window conversation", action: "Approach the service window, complete the dialogue and wait for the gate instruction.", why: "Conversation, gate access and washing are separate scene states. The next control may remain inactive until the dialogue closes.", check: "The gate control becomes the current interaction.", problem: "Return to the window and confirm no dialogue prompt is still waiting.", image: images.purple, imageAlt: "A dragon waiting inside the Drag'n Wash service area" },
      { title: "Open the gate and admit the customer", action: "Use the gate control when prompted and allow the dragon to move into the wash position before grabbing equipment.", why: "The station changes state as the customer enters; interacting too early with unrelated props does not advance it.", check: "The dragon reaches the working area and the objective changes to preparation or cleaning.", problem: "Do not repeatedly press the gate. Recheck the window dialogue and active objective first.", image: images.wash, imageAlt: "Dragon positioned for a first-person wash in Drag'n Wash" },
      { title: "Fill the bucket and wet the sponge", action: "Bring the bucket to its water source, fill it and wet the sponge. Re-wet the sponge whenever scrubbing stops registering.", why: "A dry cleaning action can look like broken progress even when the scene is functioning normally.", check: "Scrubbing a dirty surface visibly changes the dirt or progress response.", problem: "Confirm the bucket has water and that the scene still asks for washing rather than another item.", image: images.bucket, imageAlt: "Bucket being filled at the water tap in Drag'n Wash" },
      { title: "Clean broad areas methodically", action: "Work across the visible side in sections. Reposition your view instead of repeating the same clean patch.", why: "A repeatable scan makes small remaining areas easier to diagnose and prevents wasted movement.", check: "Visible dirt fades and the cleaning indicator continues to move.", problem: "Check the far side, limbs, tail and neck edges; these are inspection areas, not guaranteed fixed dirt locations.", image: images.scrub, imageAlt: "A red dragon being scrubbed during the cleaning stage" },
      { title: "Rinse and inspect", action: "Use the sprayer across the cleaned surfaces until soap and loosened grime are gone, then inspect from another angle.", why: "Soap residue, remaining dirt and a waiting story interaction can all look like the same stalled bar at first glance.", check: "The visible wash state completes or the objective changes to a post-wash request.", problem: "Read the prompt before applying more water. If only movement is locked, use Unstick Kobold.", image: images.rinse, imageAlt: "A red dragon being rinsed with the wash-station sprayer" },
      { title: "Finish the scene, not only the wash", action: "Put down the tool when needed, complete the conversation, item or request, and wait for the next objective.", why: "Drag'n Wash alternates practical washing with story interactions; a clean dragon does not always mean the scene is over.", check: "The customer sequence closes or the next story objective appears.", problem: "Use the wash-progress decision path to distinguish missed dirt, a waiting request and a genuine softlock.", image: images.close, imageAlt: "Close character interaction after a wash in Drag'n Wash" },
    ],
    reference: [
      ["Current objective", "Tells you which scene state is active", "Read it before switching tools"],
      ["Clean progress", "Shows whether washing actions are registering", "Do not confuse it with the entire scene"],
      ["Progress slot", "Tracks a run", "Not confirmed as a free manual checkpoint"],
      ["Unstick Kobold", "Recovers some movement or interaction locks", "Not a shortcut for dirt or dialogue"],
    ],
    mistakes: [
      ["Searching for tools before the phone call", "Finish the active story interaction first."],
      ["Scrubbing one clean area", "Scan the whole reachable surface and change angle."],
      ["Assuming a full-looking bar ends the scene", "Check for rinsing, dialogue, debris or another request."],
      ["Following an ending formula on the first run", "Learn the shared flow and record only meaningful choices."],
    ],
    faq: [
      ["Do I choose one dragon at the start?", "No. The shared run introduces all three dragons; character pages group their scenes for reference."],
      ["How long should I reserve?", "The developer describes approximately 90 minutes of content per ending, but first runs and stuck points can change your time."],
      ["What should I do if the clean bar stops?", "Stop repeating the same motion, read the request, inspect another angle, rinse, and then use the wash-progress checklist."],
    ],
    related: [{ label: "Complete walkthrough", href: "/walkthrough" }, { label: "How to wash", href: "/guides/how-to-wash" }, { label: "Controls & comfort", href: "/guides/controls" }, { label: "All dragons", href: "/dragons" }],
  },
  "how-to-wash": {
    heroSubtitle: "From Soap to the Final Rinse",
    answer: "Prepare the water, wet the sponge, scan visible dirt in a consistent order, reposition when prompted and rinse every cleaned surface. If progress stalls, work out whether dirt, soap, dialogue or lost movement is holding the scene back before restarting.",
    purpose: "A repeatable cleaning order is more useful than a guessed body-part score when the first wash feels unclear or the bar stops moving. This page stays inside the wash loop; the walkthrough handles the wider story.",
    before: ["Read the current request.", "Turn on sprayer motion reduction if needed.", "Identify the bucket, sponge and sprayer before the customer blocks your view."],
    steps: [
      { title: "Prepare water", action: "Fill the bucket at the station and place it where you can re-wet the sponge without losing track of the current surface.", why: "Preparation avoids mistaking a dry sponge for a broken interaction.", check: "The bucket visibly contains water and the sponge can be wetted.", problem: "Follow the scene's displayed water source rather than a third-party control assumption.", image: images.bucket, imageAlt: "Water filling a bucket in the Drag'n Wash station" },
      { title: "Wet and test the sponge", action: "Wet the sponge and make a short pass on a clearly dirty patch before committing to a full section.", why: "A test pass confirms the correct tool and interaction state.", check: "Dirt changes or the progress indicator responds.", problem: "Re-wet the sponge, move closer and verify that washing is still the active request.", image: images.scrub, imageAlt: "Sponge cleaning a visibly dirty red dragon" },
      { title: "Work in sections", action: "Use a consistent scan: visible torso, accessible limbs and edges, then the far side after repositioning. The order is organizational, not a hidden scoring formula.", why: "A stable scan makes missed areas easier to find than random scrubbing.", check: "Each dirty region stops responding once it is clean.", problem: "Do not treat permanent markings or shadows as dirt unless the indicator reacts.", image: images.wash, imageAlt: "First-person view of a dragon during a systematic wash" },
      { title: "Reposition when prompted", action: "Put down the current item if necessary and use the available interaction to expose another side.", why: "Some surfaces cannot be reached from the initial pose or camera angle.", check: "The dragon changes position and new surfaces become reachable.", problem: "Read the current objective; continuing to scrub will not replace a required interaction.", image: images.close, imageAlt: "Dragon reacting during a repositioning interaction" },
      { title: "Rinse the full cleaned area", action: "Move the sprayer across every scrubbed surface, then slow down around body edges and overlapping geometry.", why: "Rinsing clears soap separately from the earlier dirt pass.", check: "Soap disappears and the objective either completes or changes.", problem: "Use motion reduction if the sprayer is uncomfortable; update if input or turning locks occur.", image: images.rinse, imageAlt: "Sprayer rinsing soap from a red dragon" },
      { title: "Diagnose the final percent", action: "Check the prompt, change angle, inspect the far side and decide whether the remaining task is visual dirt, rinse residue or a story request.", why: "Repeating one tool cannot solve every stalled state.", check: "A specific action changes either the bar or the objective.", problem: "Follow the dedicated decision tree before restarting the entire scene.", image: images.station, imageAlt: "Wash station view used while checking the active objective" },
    ],
    reference: [["Bucket", "Holds water for the cleaning loop", "Refill when the sponge stops working"], ["Sponge", "Removes visible dirt", "Wet it and cover broad surfaces"], ["Sprayer", "Rinses soap and loosened grime", "Use motion reduction if needed"], ["Hand / scene items", "Context-dependent interactions", "Use only when the current request makes them available"]],
    mistakes: [["Random scrubbing", "Use a repeatable visual scan."], ["Treating every dark mark as dirt", "Confirm the progress indicator responds."], ["Rinsing only the front", "Inspect edges and the far side."], ["Restarting at a full-looking bar", "Check the next interaction first."]],
    faq: [["Is there one best body-part order?", "No official scoring order is published. A consistent scan is useful because it reduces missed surfaces, not because it unlocks an ending."], ["Can cleaning affect the ending?", "The official sources do not publish a cleaning-score-to-ending formula. Record relationship choices separately from wash completion."], ["Why does the bar look full?", "A tiny area may remain, soap may need rinsing, or washing may be complete while another interaction waits."]],
    related: [{ label: "Wash progress decision tree", href: "/troubleshooting/wash-progress" }, { label: "Washing tools", href: "/guides/washing-tools" }, { label: "Cleaning tips", href: "/guides/cleaning-tips" }, { label: "Walkthrough", href: "/walkthrough" }],
  },
  "washing-tools": {
    heroSubtitle: "Bucket, Sponge, Sprayer & Hands",
    answer: "Use the bucket and water to prepare the sponge, scrub visible dirt, then rinse soap and loosened grime with the sprayer. Hands and later scene items appear only when a particular interaction calls for them.",
    purpose: "When a tool seems unresponsive, check whether it is dry, aimed at an already clean surface, blocked by the current scene or affected by an input problem. The tool table below helps you decide what to try next without cycling through every item.",
    before: ["Update to the hotfix or newer.", "Read the current prompt before picking up an item.", "Test one action and watch for visual or objective feedback."],
    steps: [
      { title: "Bucket and water source", action: "Fill the bucket before the main sponge pass and keep it accessible for re-wetting.", why: "The bucket supports the cleaning loop; it is not an ending or affection mechanic.", check: "The sponge can be wetted and resumes cleaning.", problem: "If nothing changes, verify the scene currently expects washing.", image: images.bucket, imageAlt: "Bucket and water source in the wash station" },
      { title: "Sponge", action: "Use the wet sponge on visibly dirty surfaces in broad controlled passes.", why: "It is the primary confirmed scrubbing tool in the opening wash flow.", check: "Dirt fades or progress rises.", problem: "The hotfix fixed some turning locks; update and release the input before using Unstick.", image: images.scrub, imageAlt: "Sponge used on a red dragon's dirty scales" },
      { title: "Sprayer", action: "Rinse soap and loosened grime across all cleaned surfaces.", why: "Rinsing is a separate completion state from scrubbing.", check: "Soap clears and the wash state advances.", problem: "Enable Sprayer Reduce Motion if needed; inspect other angles if residue remains.", image: images.rinse, imageAlt: "Sprayer rinsing a dragon inside the station" },
      { title: "Hands and contextual items", action: "Use these only when the current scene exposes or requests the interaction.", why: "Official hotfix notes confirm hand interactions, a medkit and a mount in later scenes, but do not publish a universal unlock formula.", check: "The requested interaction progresses the scene.", problem: "Do not import thresholds or tool rankings from unverified fan tables.", image: images.close, imageAlt: "Close contextual character interaction in Drag'n Wash" },
      { title: "Put a tool down and reassess", action: "When an item stops producing feedback, release it and read the objective before switching repeatedly.", why: "A story prompt can replace the cleaning state without an obvious mechanical failure.", check: "A dialogue, reposition or item prompt becomes clear.", problem: "Use the troubleshooting page if movement or interaction remains locked.", image: images.station, imageAlt: "Drag'n Wash work area used to reassess the current task" },
    ],
    reference: [["Bucket", "Prepare and refresh water", "Opening/core wash"], ["Sponge", "Scrub visible dirt", "Wet cleaning stage"], ["Sprayer", "Remove soap and rinse", "After scrubbing"], ["Hand", "Contextual direct interaction", "Only when available"], ["Medkit / mount", "Later scene-specific items confirmed by patch notes", "Follow the exact request"]],
    mistakes: [["Inventing comfort values per tool", "No official numeric table is published."], ["Assuming every item is always usable", "Scene state controls availability."], ["Calling input lock missed dirt", "Separate movement symptoms from wash progress."], ["Using an old modded tool list", "Confirm the current base-game build first."]],
    faq: [["How many tools are officially documented?", "Official public material describes wash tools, hands and more, while patch notes name specific later items. It does not publish a complete numbered inventory."], ["Does one tool guarantee a route?", "No verified official source provides that rule."], ["Why did the sponge stop working?", "It may be dry, the surface may already be clean, or the scene may now expect another interaction."]],
    related: [{ label: "How to wash", href: "/guides/how-to-wash" }, { label: "Controls", href: "/guides/controls" }, { label: "Kobold Hotfix", href: "/updates#kobold-hotfix" }, { label: "Dragon visits", href: "/dragons#story-moments" }],
  },
  controls: {
    heroSubtitle: "Inputs, Camera Comfort & Recovery",
    answer: "Drag'n Wash lists full controller support and includes Invert Look Y, Sprayer Reduce Motion and Unstick Kobold. Follow the current on-screen prompt for exact buttons because keyboard and controller actions can differ.",
    purpose: "Use these settings to make close-range washing more comfortable, separate an input problem from a scene problem and choose a safe recovery action for your device.",
    before: ["Open Options before the first long wash.", "Use the prompt shown for the connected device.", "Remove old input mods before diagnosing the base game."],
    steps: [
      { title: "Set camera direction", action: "Enable Invert Look Y if vertical camera movement feels reversed.", why: "Camera comfort should be solved before a long close-range interaction.", check: "Vertical look now matches your preference.", problem: "The hotfix announcement asks for feedback about sponge inversion, so do not assume every action follows the same setting.", image: images.station, imageAlt: "Wash station view used to test camera direction" },
      { title: "Reduce sprayer motion", action: "Enable Sprayer Reduce Motion and test a short rinse pass.", why: "The option was added specifically to reduce discomfort from the sprayer movement.", check: "The sprayer is easier to track during a controlled pass.", problem: "The option does not promise to change every camera animation.", image: images.rinse, imageAlt: "Sprayer in use during a control comfort test" },
      { title: "Follow contextual prompts", action: "Use the button shown by the current build for pickup, interaction, dialogue and dismissal.", why: "Keyboard and controller prompts can differ, while later scenes use context-specific actions.", check: "The highlighted interaction responds once.", problem: "Put down held items and move closer before treating it as a control failure.", image: images.close, imageAlt: "Close interaction with a dragon and contextual controls" },
      { title: "Recover an actual lock", action: "Pause and use Unstick Kobold if the player cannot move or interact.", why: "The action was added for recovery; it does not complete dirt, dialogue or route conditions.", check: "Movement or interaction control returns.", problem: "If the same scene reproduces the lock, record the character, action and installed build.", image: images.story, imageAlt: "Later story scene where a player may need safe recovery" },
    ],
    reference: [["Full controller support", "Listed by Steam", "Base game"], ["Invert Look Y", "Added in Kobold Hotfix", "Mouse/camera preference"], ["Sprayer Reduce Motion", "Added in Kobold Hotfix", "Motion comfort"], ["Unstick Kobold", "Added in Kobold Hotfix", "Movement/interaction recovery"]],
    mistakes: [["Publishing guessed key bindings", "Use current prompts until verified per device."], ["Using Unstick during credits or normal waits", "Reserve it for a real lock."], ["Diagnosing a route problem as input failure", "Check whether the scene awaits dialogue or an item."], ["Testing with mods active", "Reproduce in the unmodified game first."]],
    faq: [["Does Drag'n Wash support controllers?", "Steam lists full controller support, including controller feature badges."], ["Is there an invert-Y option?", "Yes. It was added in the September 2026 Kobold Hotfix."], ["What if I spin on Steam Deck?", "The hotfix says it fixed touchscreen-triggered endless spinning; update before trying other workarounds."]],
    related: [{ label: "Stores & platforms", href: "/#buy" }, { label: "Launch & performance", href: "/troubleshooting/launch-performance" }, { label: "Softlock recovery", href: "/troubleshooting/stuck-softlock" }, { label: "Update timeline", href: "/updates#kobold-hotfix" }],
  },
  "cleaning-tips": {
    heroSubtitle: "Missed Spots & Stuck Progress",
    answer: "When progress appears stuck, stop scrubbing the same patch. Read the request, confirm the tool is ready, scan the reachable surface, rinse, reposition and check for a story interaction. Tail and neck edges are useful places to inspect, not guaranteed dirt locations.",
    purpose: "The important question is whether the wash is missing dirt, waiting for a rinse, waiting for another interaction or actually locked. Identify that state before restarting anything.",
    before: ["Identify whether the symptom is visual dirt, a static bar, soap residue, a waiting prompt or lost controls.", "Update before using an old workaround.", "Keep mods out of the first reproduction test."],
    steps: [
      { title: "Stop and classify the symptom", action: "Put down the current tool and read the prompt before making another pass.", why: "Different stalled states need different solutions.", check: "You can name the problem: missed dirt, rinse, request or lock.", problem: "Use the decision table below if the state is still unclear.", image: images.station, imageAlt: "Station view while checking the current cleaning objective" },
      { title: "Confirm tool feedback", action: "Wet the sponge or test the sprayer on a small relevant area.", why: "One responsive test separates a preparation problem from a larger scene problem.", check: "The surface or indicator changes.", problem: "If no feedback appears anywhere, verify the active request.", image: images.scrub, imageAlt: "Short cleaning pass used to test tool feedback" },
      { title: "Change angle and scan edges", action: "Inspect the far side, limbs, tail and neck boundaries without assuming any one location is always dirty.", why: "Small marks can blend into textures or sit behind the current camera angle.", check: "A newly visible patch responds to cleaning.", problem: "Do not scrub a permanent marking indefinitely if the bar never reacts.", image: images.wash, imageAlt: "Wide wash angle used to inspect missed areas" },
      { title: "Rinse after the dirt pass", action: "Cover cleaned areas with the sprayer and watch for soap that remains near edges or overlapping surfaces.", why: "A complete scrub and complete rinse are separate checks.", check: "Soap clears and the objective changes.", problem: "Use motion reduction or change viewpoint if the spray is difficult to control.", image: images.rinse, imageAlt: "Rinse pass used to remove remaining soap" },
      { title: "Check the non-wash request", action: "Look for dialogue, a reposition interaction, debris or a scene-specific item after cleaning stops changing progress.", why: "The story can advance through another task even when the dragon already looks clean.", check: "The next prompt appears or the scene closes.", problem: "Only use Unstick when controls are actually locked.", image: images.close, imageAlt: "Character reaction indicating a post-wash interaction" },
    ],
    reference: [["Bar moves, dirt remains", "Continue the current tool on responsive areas", "Normal cleaning"], ["Bar static, visible soap", "Rinse all cleaned surfaces", "Rinse state"], ["Bar looks full, prompt remains", "Follow the prompt or item interaction", "Scene state"], ["No movement or interaction", "Update and try Unstick", "Possible softlock"]],
    mistakes: [["Using one player's missed spot as a rule", "Locations can vary by scene and view."], ["Calling a dark texture dirt", "Watch for progress feedback."], ["Restarting before reading the prompt", "A post-wash request may be waiting."], ["Using Unstick for a cleaning problem", "It recovers control, not progress."]],
    faq: [["Where are the easiest spots to miss?", "Players mention tail and neck edges, but treat them as inspection suggestions rather than fixed spawn points."], ["Can a dragon arrive already clean?", "The official hotfix says it fixed a rare case where dragons came to the window fully cleaned."], ["When should I restart?", "After updating, checking the prompt, tools, angles, rinse state and safe recovery actions."]],
    related: [{ label: "Wash progress decision tree", href: "/troubleshooting/wash-progress" }, { label: "How to wash", href: "/guides/how-to-wash" }, { label: "Known issues", href: "/troubleshooting" }, { label: "Walkthrough", href: "/walkthrough" }],
  },
};

const headings: Record<string, GuideHeadings> = {
  "beginner-guide": {
    answer: "Your First Drag'n Wash Shift in Brief",
    purpose: "What This Beginner Guide Helps You Finish",
    before: "Before Your First Shift",
    steps: "First-Shift Walkthrough: Phone Call to Final Rinse",
    reference: "First-Run Progress Checks",
    mistakes: "Beginner Mistakes and Quick Corrections",
    sources: "What Can Change in a Future Build",
  },
  "how-to-wash": {
    answer: "The Drag'n Wash Cleaning Order",
    purpose: "What This Washing Guide Solves",
    before: "Before You Pick Up the Sponge",
    steps: "How to Wash a Dragon Step by Step",
    reference: "Wash Progress and Tool Checks",
    mistakes: "Washing Mistakes That Stall Progress",
    sources: "Wash Behavior That May Change",
  },
  "washing-tools": {
    answer: "Which Drag'n Wash Tool to Use",
    purpose: "What the Tool Guide Helps You Diagnose",
    before: "Before Testing a Washing Tool",
    steps: "Bucket, Sponge, Sprayer and Contextual Tools",
    reference: "Drag'n Wash Tool Reference",
    mistakes: "Tool Assumptions That Waste Time",
    sources: "Tools and Interactions That May Change",
  },
  controls: {
    answer: "Drag'n Wash Controls at a Glance",
    purpose: "What the Controls Guide Helps You Fix",
    before: "Before Changing Controls",
    steps: "Controller, Camera and Recovery Setup",
    reference: "Control and Comfort Options",
    mistakes: "Control Problems Commonly Misdiagnosed",
    sources: "Control Options That May Change",
  },
  "cleaning-tips": {
    answer: "How to Finish a Stubborn Wash",
    purpose: "What These Cleaning Tips Help You Find",
    before: "Before Repeating the Same Cleaning Pass",
    steps: "Missed-Spot and Rinse Checklist",
    reference: "Stalled Wash Symptom Table",
    mistakes: "Cleaning Habits That Hide the Real Problem",
    sources: "Missed-Spot Advice That May Change",
  },
};

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function GuideDetailPage({ slug }: { slug: string }) {
  const guide = guides.find((item) => item.slug === slug)!;
  const config = configs[slug];
  const sectionHeadings = headings[slug];
  const sectionLinks = [
    ["What this guide solves", "purpose"], ["Before you start", "before-starting"], ["Step-by-step", "step-by-step"],
    ["Quick check table", "reference"], ["Common mistakes", "mistakes"], ["FAQ", "faq"], ["What can change", "sources"],
  ];
  const jsonLd = [
    { "@context": "https://schema.org", "@type": "Article", headline: guide.title, description: guide.description, image: `${siteUrl}${guide.image}`, dateModified: guide.updatedAt, mainEntityOfPage: `${siteUrl}/guides/${slug}`, publisher: { "@type": "Organization", name: siteName } },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl }, { "@type": "ListItem", position: 2, name: "Guides", item: `${siteUrl}/guides` }, { "@type": "ListItem", position: 3, name: guide.title, item: `${siteUrl}/guides/${slug}` }] },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: config.faq.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
  ];

  return (
    <main className={`container inner-page ${styles.guidePage}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <InnerPageHero
        eyebrow={guide.category}
        keyword="DRAG'N WASH GUIDE"
        title={guide.title}
        subtitle={config.heroSubtitle}
        lead={guide.description}
        image={guide.image}
        imageAlt={guide.imageAlt}
        reviewedAt={guide.updatedAt}
        plate="STEP-BY-STEP MANUAL"
        stamp={"READY\nTO WASH"}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Guides", href: "/guides" }, { label: guide.title }]}
      />
      <div className={styles.articleGrid}>
        <article className={`${styles.article} ${styles.guideArticle}`}>
          <section className={styles.answer} id="quick-answer"><span className="badge">QUICK ANSWER</span><h2>{sectionHeadings.answer}</h2><p>{config.answer}</p></section>
          <section id="purpose"><h2>{sectionHeadings.purpose}</h2><p>{config.purpose}</p><div className={styles.inlineLinks}><Link href="/walkthrough">Complete story walkthrough →</Link><Link href="/troubleshooting">Find a specific fix →</Link></div></section>
          <section id="before-starting"><h2>{sectionHeadings.before}</h2><ul>{config.before.map((item) => <li key={item}>{item}</li>)}</ul></section>
          <section id="step-by-step">
            <h2>{sectionHeadings.steps}</h2>
            <div className={styles.guideSteps}>
              {config.steps.map((step, index) => <article className={styles.guideStep} id={`step-${index + 1}-${slugify(step.title)}`} key={step.title}>
                <Image src={step.image} width={520} height={293} alt={step.imageAlt} />
                <div><span className={styles.stepNumber}>{String(index + 1).padStart(2, "0")}</span><p className="eyebrow">NEXT STEP</p><h3>{step.title}</h3><p>{step.action}</p><dl><div><dt>Why it matters</dt><dd>{step.why}</dd></div><div><dt>What to look for</dt><dd>{step.check}</dd></div><div><dt>If it gets stuck</dt><dd>{step.problem}</dd></div></dl></div>
              </article>)}
            </div>
          </section>
          <section id="reference"><h2>{sectionHeadings.reference}</h2><div className={styles.compare}><div><strong>Item or state</strong><strong>What it means</strong><strong>What to do</strong></div>{config.reference.map(([name, meaning, action]) => <div key={name}><strong>{name}</strong><span>{meaning}</span><span>{action}</span></div>)}</div></section>
          <section id="mistakes"><h2>{sectionHeadings.mistakes}</h2><div className={styles.compare}><div><strong>Mistake</strong><strong>Correction</strong><strong>Related help</strong></div>{config.mistakes.map(([mistake, correction]) => <div key={mistake}><strong>{mistake}</strong><span>{correction}</span><Link href="/troubleshooting">Open Drag&apos;n Wash troubleshooting →</Link></div>)}</div></section>
          <section id="faq"><h2>{guide.title} FAQ</h2>{config.faq.map(([question, answer]) => <div className={styles.faqItem} key={question}><h3>{question}</h3><p>{answer}</p></div>)}</section>
          <section id="sources"><h2>{sectionHeadings.sources}</h2><p><span className="badge">CURRENT GAME</span> Platform features, the three-ending count and patch changes are checked against the game&apos;s store pages and announcements.</p><p><span className="badge muted">PLAYER-REPORTED</span> Opening actions and missed-area checks are practical observations, not universal hidden rules.</p><p>Exact affinity values, tool bonuses and ending thresholds are left out unless they can be repeated on a named build.</p><div className={styles.inlineLinks}><Link href="/sources">How changing details are checked →</Link><a href="https://gatordragongames.itch.io/dragnwash" target="_blank" rel="noreferrer">Official game page ↗</a></div></section>
        </article>
        <aside className={`${styles.sidebar} ${styles.guideSidebar}`}>
          <div className="panel"><p className="eyebrow">PAGE GUIDE</p><p className={styles.sidebarTitle}>On this page</p>{sectionLinks.map(([label, href]) => <a href={`#${href}`} key={href}>{label} →</a>)}</div>
          <div className="panel"><p className="eyebrow">KEEP PLAYING</p><p className={styles.sidebarTitle}>Continue the run</p>{config.related.map((item) => <Link href={item.href} key={item.href}>{item.label} →</Link>)}</div>
          <div className="panel"><p className="eyebrow">LAST CHECKED</p><p className={styles.sidebarTitle}>Current-build note</p><p>Reviewed {formatMonthYear(guide.updatedAt)}. Route claims reported by players stay labeled until they can be repeated on a named build.</p><Link href="/sources">How changing details are checked →</Link></div>
        </aside>
      </div>
    </main>
  );
}
