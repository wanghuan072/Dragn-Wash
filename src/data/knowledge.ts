export type EvidenceLevel =
  | "Official"
  | "Developer reply"
  | "Community report"
  | "Community guide"
  | "Site verification needed";

export type WalkthroughStep = {
  number: number;
  title: string;
  action: string;
  success: string;
  ifStuck: string;
  image: string;
  imageAlt: string;
  evidence: EvidenceLevel;
};

export const walkthroughSteps: WalkthroughStep[] = [
  {
    number: 1,
    title: "Choose a progress slot",
    action: "Start a new run and use one slot for the outcome you want to track. A progress slot should not be treated as a manual checkpoint before every choice.",
    success: "The opening sequence begins and the current objective appears.",
    ifStuck: "Check the installed build and allow first-launch shader preparation to finish before force-closing the game.",
    image: "/images/guides/steam-5.webp",
    imageAlt: "Drag'n Wash gameplay at the start of a story run",
    evidence: "Developer reply",
  },
  {
    number: 2,
    title: "Answer the phone and follow the opening prompt",
    action: "Go downstairs, interact with the ringing phone, then follow the conversation and objective text instead of searching for wash tools immediately.",
    success: "The next customer-arrival instruction becomes available.",
    ifStuck: "Walk close to the highlighted interaction and put away any held object before trying again.",
    image: "/images/guides/steam-4.webp",
    imageAlt: "The Drag'n Wash station during an early story interaction",
    evidence: "Community guide",
  },
  {
    number: 3,
    title: "Speak through the window and open the gate",
    action: "Complete the window conversation, then use the gate control when the prompt directs you to admit the waiting dragon.",
    success: "The dragon enters the station and moves into the wash position.",
    ifStuck: "Finish every dialogue prompt and check the gate control again; do not restart before confirming the conversation has ended.",
    image: "/images/home/steam-6.webp",
    imageAlt: "Dragon arriving inside the Drag'n Wash station",
    evidence: "Community guide",
  },
  {
    number: 4,
    title: "Prepare the bucket and sponge",
    action: "Fill the bucket, wet the sponge and approach a visibly dirty area. Re-wet the sponge when cleaning stops registering.",
    success: "Scrubbing changes the dirt or wash-progress indicator.",
    ifStuck: "Confirm the sponge is wet and that the current prompt still asks for washing rather than dialogue or another interaction.",
    image: "/images/guides/steam-2.webp",
    imageAlt: "A bucket being filled inside the Drag'n Wash station",
    evidence: "Community guide",
  },
  {
    number: 5,
    title: "Scrub broad dirty areas",
    action: "Work methodically across the visible side instead of rubbing one patch indefinitely. Use the progress response to tell whether the action is registering.",
    success: "Visible dirt fades and wash progress continues to rise.",
    ifStuck: "Move to another marked area, re-wet the sponge and inspect the far side before assuming the scene is broken.",
    image: "/images/guides/steam-9.webp",
    imageAlt: "A dragon being scrubbed during the washing sequence",
    evidence: "Community guide",
  },
  {
    number: 6,
    title: "Reposition the dragon when prompted",
    action: "Use the available interaction to expose another side. Some remaining dirt may be hidden by the current pose or camera angle.",
    success: "A new surface becomes reachable and the wash can continue.",
    ifStuck: "Put down the current tool, read the objective and look for the interaction prompt rather than continuing to scrub.",
    image: "/images/home/steam-10.webp",
    imageAlt: "Dragon responding to a player interaction during a wash",
    evidence: "Community guide",
  },
  {
    number: 7,
    title: "Rinse soap and loosened grime",
    action: "Use the sprayer across every cleaned surface. Treat the soap layer and remaining dirt as separate things that may both need to disappear.",
    success: "Soap clears and the wash indicator reaches completion.",
    ifStuck: "Inspect the tail, neck edges, limbs and far side. Tail and neck spots are player reports, not guaranteed locations in every scene.",
    image: "/images/guides/steam-11.webp",
    imageAlt: "A dragon being rinsed with the wash-station sprayer",
    evidence: "Community report",
  },
  {
    number: 8,
    title: "Complete the post-wash interaction",
    action: "Read the new prompt, put away tools when necessary and finish any conversation, item or debris-removal task before expecting the scene to advance.",
    success: "The customer sequence closes or the next story objective appears.",
    ifStuck: "Use the wash-progress decision path first; use Unstick Kobold only for a movement or interaction lock.",
    image: "/images/guides/steam-1.webp",
    imageAlt: "Close-up interaction with a dragon after washing",
    evidence: "Community guide",
  },
];

export type SceneRecord = {
  id: string;
  title: string;
  character: "Shared" | "Alexander" | "Ryan" | "Conrad";
  category: "Story" | "Wash" | "Relationship" | "Ending";
  availability: string;
  replay: string;
  spoiler: "Low" | "Medium" | "High";
  evidence: EvidenceLevel;
  sourceUrl: string;
  notes: string;
};

export const sceneRecords: SceneRecord[] = [
  { id: "opening-call", title: "Opening phone call", character: "Shared", category: "Story", availability: "Opening sequence", replay: "Start another run", spoiler: "Low", evidence: "Community guide", sourceUrl: "https://guidexon.com/dragn-wash-how-to-wash-a-dragon/", notes: "Introduces the first customer flow and leads into the gate interaction." },
  { id: "first-arrival", title: "Window and gate arrival", character: "Shared", category: "Story", availability: "After the phone interaction", replay: "Start another run", spoiler: "Low", evidence: "Community guide", sourceUrl: "https://guidexon.com/dragn-wash-how-to-wash-a-dragon/", notes: "Conversation must finish before the gate interaction can advance." },
  { id: "alexander-wash", title: "Alexander wash visits", character: "Alexander", category: "Wash", availability: "Story progression", replay: "Another story run", spoiler: "Low", evidence: "Site verification needed", sourceUrl: "/dragons/alexander", notes: "Character-specific visit order and optional reactions are being documented without invented thresholds." },
  { id: "ryan-wash", title: "Ryan wash visits", character: "Ryan", category: "Wash", availability: "Story progression", replay: "Another story run", spoiler: "Low", evidence: "Site verification needed", sourceUrl: "/dragons/ryan", notes: "Linked to Ryan's character notes and current patch observations." },
  { id: "conrad-wash", title: "Conrad wash visits", character: "Conrad", category: "Wash", availability: "Story progression", replay: "Another story run", spoiler: "Low", evidence: "Site verification needed", sourceUrl: "/dragons/conrad", notes: "Official patch notes identify Conrad and fixes affecting later interactions." },
  { id: "ryan-picnic", title: "Ryan picnic sequence", character: "Ryan", category: "Relationship", availability: "Later story sequence", replay: "Another story run", spoiler: "Medium", evidence: "Official", sourceUrl: "https://steamcommunity.com/app/4739660/allnews/", notes: "Its existence is supported by official hotfix notes; exact choice requirements still need controlled testing." },
  { id: "conrad-level-eight", title: "Conrad level 8 interactions", character: "Conrad", category: "Relationship", availability: "Later story sequence", replay: "Another story run", spoiler: "Medium", evidence: "Official", sourceUrl: "https://steamcommunity.com/app/4739660/allnews/", notes: "Official hotfix notes mention interaction-order and window fixes for this sequence." },
  { id: "final-outcomes", title: "Final outcomes and credits", character: "Shared", category: "Ending", availability: "Complete a run", replay: "New run recommended", spoiler: "High", evidence: "Official", sourceUrl: "https://gatordragongames.itch.io/dragnwash", notes: "The developer lists three endings. This index does not invent names or exact requirements." },
];

export type IssueRecord = {
  id: string;
  title: string;
  symptoms: string[];
  platform: string;
  status: "Fixed" | "Community report" | "Check current build";
  firstAction: string;
  nextAction: string;
  evidence: EvidenceLevel;
  relatedHref: string;
  sourceUrl: string;
};

export const knownIssues: IssueRecord[] = [
  { id: "wash-full", title: "Clean bar is full but the scene does not end", symptoms: ["wash", "clean bar", "progress", "third dragon"], platform: "All", status: "Community report", firstAction: "Put away the tool and read the active request; washing may be complete while another interaction is waiting.", nextAction: "Inspect the far side, tail and neck edges, then follow the wash-progress decision path.", evidence: "Community report", relatedHref: "/troubleshooting/wash-progress", sourceUrl: "https://gatordragongames.itch.io/dragnwash" },
  { id: "missed-mark", title: "Small dirt or ink mark is hard to see", symptoms: ["wash", "tail", "neck", "dirt", "ink"], platform: "All", status: "Community report", firstAction: "Change camera angle and inspect the tail, behind the neck, limbs and body edges.", nextAction: "Do not treat every dark marking as dirt; confirm that the progress indicator responds.", evidence: "Community report", relatedHref: "/guides/cleaning-tips", sourceUrl: "https://gatordragongames.itch.io/dragnwash" },
  { id: "movement-lock", title: "Kobold cannot move or interact", symptoms: ["stuck", "softlock", "movement", "input"], platform: "All", status: "Check current build", firstAction: "Pause and use Unstick Kobold, which was added in the September 2026 hotfix.", nextAction: "If the same steps reproduce the lock after updating, record the scene, character and platform.", evidence: "Official", relatedHref: "/troubleshooting/stuck-softlock", sourceUrl: "https://steamcommunity.com/app/4739660/allnews/" },
  { id: "sponge-turn", title: "Turning locks while using sponge or hand", symptoms: ["sponge", "hand", "turning", "input"], platform: "All", status: "Fixed", firstAction: "Update the game before trying an older workaround.", nextAction: "Remove mods and reproduce in the base game if it still occurs.", evidence: "Official", relatedHref: "/updates#kobold-hotfix", sourceUrl: "https://steamcommunity.com/app/4739660/allnews/" },
  { id: "credits-unstick", title: "Credits screen lock after using Unstick", symptoms: ["credits", "ending", "unstick", "softlock"], platform: "All", status: "Community report", firstAction: "Avoid recovery controls during credits and allow the sequence to finish normally.", nextAction: "If Continue repeatedly returns to credits, preserve the slot and begin another run in a separate slot.", evidence: "Community report", relatedHref: "/endings#replay-all-endings", sourceUrl: "https://gatordragongames.itch.io/dragnwash" },
  { id: "slow-boot", title: "First boot appears frozen or very slow", symptoms: ["launch", "black screen", "startup", "shaders"], platform: "All", status: "Check current build", firstAction: "Allow shader preloading time to finish before terminating the process.", nextAction: "Verify the installation and test without mods if the menu never appears.", evidence: "Official", relatedHref: "/troubleshooting/launch-performance#startup", sourceUrl: "https://steamcommunity.com/app/4739660/allnews/" },
  { id: "linux-nvidia", title: "Native Linux graphics issue on Nvidia", symptoms: ["linux", "nvidia", "graphics", "launch"], platform: "Linux", status: "Fixed", firstAction: "Install the September 2026 hotfix or newer.", nextAction: "Check current drivers and test the unmodified game before reporting a regression.", evidence: "Official", relatedHref: "/troubleshooting/launch-performance#performance", sourceUrl: "https://steamcommunity.com/app/4739660/allnews/" },
  { id: "deck-spin", title: "Steam Deck touch input causes spinning", symptoms: ["steam deck", "touch", "spinning", "input"], platform: "Steam Deck", status: "Fixed", firstAction: "Update to the hotfix or newer build.", nextAction: "Use the current controller layout and verify no old input mod is active.", evidence: "Official", relatedHref: "/updates#steam-deck-verified", sourceUrl: "https://steamcommunity.com/app/4739660/allnews/" },
  { id: "ultrawide-offset", title: "Buttons and pointer do not line up after resolution changes", symptoms: ["ultrawide", "resolution", "buttons", "mouse", "ui"], platform: "Windows / ultrawide", status: "Community report", firstAction: "Restart after changing resolution and test a standard 16:9 mode.", nextAction: "Record display resolution, window mode and scaling if the offset returns.", evidence: "Community report", relatedHref: "/troubleshooting/launch-performance#display", sourceUrl: "https://gatordragongames.itch.io/dragnwash" },
  { id: "mod-not-loading", title: "Localization mod does not load", symptoms: ["mod", "translation", "language", "bepinex", "localization"], platform: "Windows / Linux / Steam Deck", status: "Check current build", firstAction: "Confirm that you installed a release asset rather than GitHub's source-code archive.", nextAction: "Check ModFramework/BepInEx logs and the author's current compatibility notes.", evidence: "Community guide", relatedHref: "/mods/localization#troubleshooting", sourceUrl: "https://github.com/TomXV/dragnwash-localization" },
];

export const evidenceDefinitions = [
  { label: "Official", meaning: "Published by the developer, an official store listing or official patch notes.", use: "May be stated as fact, with a checked date for details that can change." },
  { label: "Developer reply", meaning: "A direct developer response in an official community channel.", use: "Useful for current intent or feature status, but not a release guarantee." },
  { label: "Site verified", meaning: "Reproduced by this site's testing on a named build and platform.", use: "Must include the tested version and exact steps." },
  { label: "Community report", meaning: "A player describes an outcome or problem without official confirmation.", use: "Presented as a lead or workaround, never as a universal rule." },
  { label: "Community guide", meaning: "A third-party guide provides a repeatable process.", use: "Rewritten in our own structure and queued for current-build retesting." },
  { label: "Unconfirmed", meaning: "A claim lacks enough evidence or conflicts with stronger sources.", use: "Kept out of factual tables until verified." },
];

export const coreSources = [
  { name: "Official itch.io page", type: "Official", covers: "Price, direct downloads, platforms, content description, three endings and playtime estimate", href: "https://gatordragongames.itch.io/dragnwash" },
  { name: "Official Steam store", type: "Official", covers: "Store availability, feature badges, system requirements and controller support", href: "https://store.steampowered.com/app/4739660/Dragn_Wash/" },
  { name: "Official Steam news", type: "Official", covers: "Hotfixes, Steam Deck status and development announcements", href: "https://steamcommunity.com/app/4739660/allnews/" },
  { name: "Localization project", type: "Third-party author", covers: "Language packs, ModFramework, installers and platform-specific setup", href: "https://github.com/TomXV/dragnwash-localization" },
  { name: "Guidexon walkthrough", type: "Community guide", covers: "First-wash action order and screenshot-supported opening flow", href: "https://guidexon.com/dragn-wash-how-to-wash-a-dragon/" },
  { name: "GG Guides escape article", type: "Community guide", covers: "Escape and out-of-bounds experiments requiring version retesting", href: "https://ggguides.com/guide/dragn-wash-guide-how-to-wash-dragons-and-escape/" },
  { name: "itch.io player comments", type: "Community reports", covers: "Missed wash spots, resolution issues, save behavior and feature requests", href: "https://gatordragongames.itch.io/dragnwash" },
];

export type ScreenshotRecord = {
  id: string;
  title: string;
  category: "Washing" | "Characters" | "Station" | "Story";
  image: string;
  alt: string;
  caption: string;
  relatedHref: string;
  relatedLabel: string;
};

export const screenshotRecords: ScreenshotRecord[] = [
  { id: "pale-dragon-wash", title: "Pale dragon wash", category: "Washing", image: "/images/home/steam-0.webp", alt: "First-person sprayer washing a pale dragon inside the Drag'n Wash station", caption: "A close first-person view of the core washing loop and water tool.", relatedHref: "/walkthrough", relatedLabel: "Walkthrough" },
  { id: "close-interaction", title: "Close wash interaction", category: "Characters", image: "/images/home/steam-1.webp", alt: "Close-up of a pale dragon during a Drag'n Wash interaction", caption: "Character reactions are presented alongside the hands-on cleaning loop.", relatedHref: "/dragons/ryan", relatedLabel: "Ryan notes" },
  { id: "bucket-station", title: "Bucket and water station", category: "Station", image: "/images/home/steam-2.webp", alt: "A bucket being filled at the water tap inside the Drag'n Wash station", caption: "The bucket, tap and sponge form part of the basic preparation cycle.", relatedHref: "/guides/washing-tools", relatedLabel: "Washing tools" },
  { id: "station-interior", title: "Wash-station interior", category: "Station", image: "/images/home/steam-3.webp", alt: "Interior work area of the Drag'n Wash dragon washing station", caption: "The main station combines customer arrival, tool use and conversation spaces.", relatedHref: "/walkthrough", relatedLabel: "Opening flow" },
  { id: "red-dragon-dialogue", title: "Red dragon dialogue", category: "Story", image: "/images/home/steam-4.webp", alt: "Red dragon speaking to the player inside the Drag'n Wash station", caption: "Dialogue and requests continue around the washing sequences.", relatedHref: "/dragons/conrad", relatedLabel: "Conrad notes" },
  { id: "later-story-scene", title: "Later story atmosphere", category: "Story", image: "/images/home/steam-5.webp", alt: "A dragon in a dimly lit later Drag'n Wash story scene", caption: "Lighting and setting change as the short narrative moves beyond the first wash.", relatedHref: "/endings", relatedLabel: "Endings and replay" },
  { id: "purple-dragon-station", title: "Purple dragon at the station", category: "Characters", image: "/images/home/steam-6.webp", alt: "Purple dragon standing inside the Drag'n Wash station", caption: "A station view associated with Alexander's character appearances.", relatedHref: "/dragons/alexander", relatedLabel: "Alexander notes" },
  { id: "purple-dragon-wide", title: "Station-wide character view", category: "Characters", image: "/images/home/steam-7.webp", alt: "Purple dragon shown in a wide view of the washing station", caption: "A wider composition showing the scale of a dragon customer in the work area.", relatedHref: "/dragons", relatedLabel: "All dragons" },
  { id: "station-work-area", title: "Tools and work area", category: "Station", image: "/images/home/steam-8.webp", alt: "Tools and equipment arranged inside the Drag'n Wash work area", caption: "The environment places the wash tools close to the main customer position.", relatedHref: "/guides/washing-tools", relatedLabel: "Tool guide" },
  { id: "red-dragon-cleaning", title: "Red dragon cleaning", category: "Washing", image: "/images/home/steam-9.webp", alt: "First-person cleaning of a red dragon in Drag'n Wash", caption: "A hands-on cleaning pass before inspection and rinsing.", relatedHref: "/guides/how-to-wash", relatedLabel: "How to wash" },
  { id: "character-reaction", title: "Character reaction", category: "Story", image: "/images/home/steam-10.webp", alt: "Pale dragon reacting during a Drag'n Wash story conversation", caption: "Story prompts and character reactions can signal the next objective after washing.", relatedHref: "/dragons#story-moments", relatedLabel: "Dragon story moments" },
  { id: "red-dragon-rinse", title: "Red dragon rinse", category: "Washing", image: "/images/home/steam-11.webp", alt: "First-person sprayer rinsing a red dragon inside the station", caption: "Rinsing removes remaining soap and completes the visible wash cycle.", relatedHref: "/troubleshooting/wash-progress", relatedLabel: "Wash progress" },
];
