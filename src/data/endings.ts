export type EndingEvidence =
  | "official"
  | "video"
  | "multi-report"
  | "single-report"
  | "unverified";

export type EndingCharacter = "shared" | "alexander" | "ryan" | "conrad";
export type SceneChoiceEffect =
  | "route-lock"
  | "cross-character"
  | "scene-variation"
  | "dialogue-change"
  | "unknown";

export type SceneChoice = {
  text: string;
  systemText?: string;
  result: string;
  effect: SceneChoiceEffect;
  targetSceneId?: string;
  evidence: EndingEvidence;
  selectedInSource?: boolean;
};

export type SceneMedia = {
  image: string;
  width: number;
  height: number;
  alt: string;
  sourceVideoId: string;
  sourceUrl: string;
  timestampSeconds: number;
};

export type DragonScene = {
  id: string;
  character: EndingCharacter;
  order: number;
  stage: string;
  title: string;
  description: string;
  evidence: EndingEvidence;
  routeRole: "shared" | "route-lock" | "relationship" | "scene" | "ending";
  media?: SceneMedia;
  choices: SceneChoice[];
};

export const evidenceLabels: Record<EndingEvidence, string> = {
  official: "Official game information",
  video: "Shown in a recorded run",
  "multi-report": "Repeated player reports",
  "single-report": "One recorded result",
  unverified: "Outcome not yet verified",
};

export const effectLabels: Record<SceneChoiceEffect, string> = {
  "route-lock": "Locks a route",
  "cross-character": "Continues with another dragon",
  "scene-variation": "Same route continues",
  "dialogue-change": "Changes the conversation",
  unknown: "Effect not demonstrated",
};

const source = (videoId: string, timestampSeconds: number): string =>
  `https://www.youtube.com/watch?v=${videoId}&t=${timestampSeconds}s`;

export const dragonScenes: DragonScene[] = [
  {
    id: "shared-story",
    character: "shared",
    order: 0,
    stage: "Shared opening",
    title: "Meet all three dragons in one run",
    description:
      "We do not pick a character campaign at the title screen. Alexander, Ryan and Conrad all enter the same story, and the relationship decisions arrive later.",
    evidence: "video",
    routeRole: "shared",
    choices: [],
  },
  {
    id: "conrad-first-visits",
    character: "conrad",
    order: 1,
    stage: "Early Conrad visits",
    title: "Clean Conrad and follow his recovery",
    description:
      "Conrad's first visits establish his connection to Ryan and lead into the later conversation that actually changes our route. The ordinary replies here change the tone, not the ending path we can verify.",
    evidence: "video",
    routeRole: "scene",
    choices: [],
  },
  {
    id: "conrad-introduction-choice",
    character: "conrad",
    order: 2,
    stage: "First relationship fork",
    title: "Choose Conrad or introduce him to Ryan",
    description:
      "This is the first choice we need to track. The menu tells us what both answers do before we select one.",
    evidence: "video",
    routeRole: "route-lock",
    media: {
      image: "/images/endings/scenes/conrad-introduction-choice.webp",
      width: 1280,
      height: 720,
      alt: "Drag'n Wash dialogue menu showing the Conrad romance option and the option to introduce Conrad to Ryan",
      sourceVideoId: "-zm-eJGaFFQ",
      sourceUrl: source("-zm-eJGaFFQ", 1440),
      timestampSeconds: 1440,
    },
    choices: [
      {
        text: "I wouldn't mind hanging out...",
        systemText: "Unlock Conrad Romance",
        result: "We offer to spend time with Conrad ourselves. His romance route opens and later Conrad scenes treat us as his date.",
        effect: "route-lock",
        targetSceneId: "conrad-romance-state",
        evidence: "video",
      },
      {
        text: "I know a dragon, Ryan. I could get you two in contact?",
        systemText: "Unlocks Conrad/Ryan hookup OR Ryan romance",
        result: "We keep Conrad available for Ryan. The relationship is not settled yet; the deciding choice appears later at Ryan's picnic.",
        effect: "cross-character",
        targetSceneId: "ryan-picnic-choice",
        evidence: "video",
        selectedInSource: true,
      },
    ],
  },
  {
    id: "conrad-romance-state",
    character: "conrad",
    order: 3,
    stage: "Relationship state",
    title: "Continue Conrad's romance scenes",
    description:
      "After choosing Conrad, we continue his visits as the person he is dating. The game does not publish a hidden score or a separate Good Ending label, so we follow the visible relationship state instead.",
    evidence: "video",
    routeRole: "relationship",
    choices: [],
  },
  {
    id: "conrad-date-planning",
    character: "conrad",
    order: 4,
    stage: "Date planning",
    title: "Pick a place for Conrad's date",
    description:
      "A later conversation lets us suggest where the date should happen. The recording demonstrates a scene variation, but not a second route lock, so we do not turn this menu into another ending branch.",
    evidence: "single-report",
    routeRole: "scene",
    choices: [
      {
        text: "Suggest the club downtown",
        result: "The date planning conversation continues on the same Conrad route.",
        effect: "scene-variation",
        evidence: "single-report",
      },
      {
        text: "Suggest an old favorite",
        result: "The conversation changes, but a different ending is not demonstrated in the available run.",
        effect: "unknown",
        evidence: "single-report",
      },
    ],
  },
  {
    id: "conrad-ending",
    character: "conrad",
    order: 5,
    stage: "Route finish",
    title: "Finish the Conrad-focused run",
    description:
      "Follow the locked relationship through the remaining Conrad scenes and credits. We call this the Conrad route for clarity; the developer has not published an official ending name.",
    evidence: "video",
    routeRole: "ending",
    choices: [],
  },
  {
    id: "ryan-picnic-arrival",
    character: "ryan",
    order: 1,
    stage: "Picnic opening",
    title: "React when Ryan brings the picnic inside",
    description:
      "Ryan's picnic starts with a lighter dialogue choice. Both replies continue to the relationship question, so this is a tone change rather than a route lock.",
    evidence: "video",
    routeRole: "scene",
    media: {
      image: "/images/endings/scenes/ryan-picnic-arrival.webp",
      width: 1280,
      height: 720,
      alt: "Drag'n Wash Ryan picnic dialogue menu with both arrival responses visible",
      sourceVideoId: "OJoVDSP1DGc",
      sourceUrl: source("OJoVDSP1DGc", 759),
      timestampSeconds: 759,
    },
    choices: [
      { text: "You brought food in?", result: "Ryan answers and the picnic continues to the same dating question.", effect: "dialogue-change", evidence: "video" },
      { text: "Ryan! this is so sweet.", result: "Ryan reacts warmly and the same picnic route continues.", effect: "dialogue-change", evidence: "video" },
    ],
  },
  {
    id: "ryan-picnic-choice",
    character: "ryan",
    order: 2,
    stage: "Second relationship fork",
    title: "Choose Ryan or complete the Ryan–Conrad pairing",
    description:
      "Ryan asks whether we know someone he could date. This menu is the second real fork: one answer locks Ryan's romance, while the other completes the cross-character pairing opened in Conrad's scene.",
    evidence: "video",
    routeRole: "route-lock",
    media: {
      image: "/images/endings/scenes/ryan-picnic-choice.webp",
      width: 1280,
      height: 720,
      alt: "Drag'n Wash Ryan picnic choice showing the red dragon pairing and player romance options in full",
      sourceVideoId: "OJoVDSP1DGc",
      sourceUrl: source("OJoVDSP1DGc", 837),
      timestampSeconds: 837,
    },
    choices: [
      {
        text: "I know this one red dragon. I think you'd like him!",
        systemText: "Hooks up Ryan with Conrad!",
        result: "Ryan and Conrad become the active pairing. Because we remain unattached, Alexander's later invitation can still open.",
        effect: "cross-character",
        targetSceneId: "ryan-conrad-pairing",
        evidence: "video",
      },
      {
        text: "Oh. Uhm... I wouldn't mind... if I was that someone.",
        systemText: "Locks in Ryan romance!",
        result: "We volunteer ourselves as Ryan's date. The following picnic and relationship scenes continue on Ryan's route.",
        effect: "route-lock",
        targetSceneId: "ryan-romance-state",
        evidence: "video",
        selectedInSource: true,
      },
    ],
  },
  {
    id: "ryan-watermelon-choice",
    character: "ryan",
    order: 3,
    stage: "Picnic conversation",
    title: "Ask Ryan about the watermelon",
    description:
      "This follow-up changes Ryan's immediate answer. It does not undo the relationship choice we just made.",
    evidence: "video",
    routeRole: "scene",
    media: {
      image: "/images/endings/scenes/ryan-watermelon-choice.webp",
      width: 1280,
      height: 720,
      alt: "Drag'n Wash Ryan picnic menu showing both watermelon dialogue choices",
      sourceVideoId: "OJoVDSP1DGc",
      sourceUrl: source("OJoVDSP1DGc", 953),
      timestampSeconds: 953,
    },
    choices: [
      { text: "You didn't even open the watermelon.", result: "Ryan responds to the joke and the same route continues.", effect: "scene-variation", evidence: "video" },
      { text: "How did it taste?", result: "Ryan gives the alternate response and the same route continues.", effect: "scene-variation", evidence: "video" },
    ],
  },
  {
    id: "ryan-feelings-choice",
    character: "ryan",
    order: 4,
    stage: "Relationship conversation",
    title: "Tell Ryan how we feel about the picnic",
    description:
      "The answers change how directly we return Ryan's affection, but the recorded scene does not show a new route unlock here.",
    evidence: "video",
    routeRole: "scene",
    media: {
      image: "/images/endings/scenes/ryan-feelings-choice.webp",
      width: 1280,
      height: 720,
      alt: "Drag'n Wash Ryan relationship dialogue showing the two feelings responses",
      sourceVideoId: "OJoVDSP1DGc",
      sourceUrl: source("OJoVDSP1DGc", 1060),
      timestampSeconds: 1060,
    },
    choices: [
      { text: "I like you a lot.", result: "We answer more directly; the existing Ryan relationship route continues.", effect: "scene-variation", evidence: "video" },
      { text: "Yeah, this has been super nice.", result: "We give the softer response; no separate ending effect is demonstrated.", effect: "scene-variation", evidence: "video" },
    ],
  },
  {
    id: "ryan-romance-state",
    character: "ryan",
    order: 5,
    stage: "Relationship state",
    title: "Continue Ryan's romance scenes",
    description:
      "Once the picnic menu displays “Locks in Ryan romance,” later Ryan scenes proceed with us as his date. Ordinary replies can alter dialogue without replacing that lock.",
    evidence: "video",
    routeRole: "relationship",
    choices: [],
  },
  {
    id: "ryan-conrad-pairing",
    character: "ryan",
    order: 6,
    stage: "Cross-character result",
    title: "Ryan and Conrad become a pair",
    description:
      "This result needs both menus: first introduce Conrad to Ryan, then recommend the red dragon at the picnic. It is a relationship state inside the shared story, not a fourth official ending.",
    evidence: "video",
    routeRole: "relationship",
    choices: [],
  },
  {
    id: "ryan-ending",
    character: "ryan",
    order: 7,
    stage: "Route finish",
    title: "Finish the Ryan-focused run",
    description:
      "Continue the locked Ryan relationship through its remaining scenes and credits. “Ryan route” is our navigation label, not a developer-published ending title.",
    evidence: "video",
    routeRole: "ending",
    choices: [],
  },
  {
    id: "alexander-ink-choice",
    character: "alexander",
    order: 1,
    stage: "Early conversation",
    title: "Ask Alexander about the ink",
    description:
      "The first menu changes how we open the conversation. Both answers continue Alexander's visit and neither is shown locking a relationship.",
    evidence: "video",
    routeRole: "scene",
    media: {
      image: "/images/endings/scenes/alexander-ink-choice.webp",
      width: 1280,
      height: 720,
      alt: "Drag'n Wash Alexander ink conversation showing both opening responses",
      sourceVideoId: "-zm-eJGaFFQ",
      sourceUrl: source("-zm-eJGaFFQ", 321),
      timestampSeconds: 321,
    },
    choices: [
      { text: "I never expected you to be the type to be so messy!", result: "Alexander answers the teasing line and the same visit continues.", effect: "dialogue-change", evidence: "video" },
      { text: "How come you're covered in ink?", result: "Alexander explains the situation and the same visit continues.", effect: "dialogue-change", evidence: "video" },
    ],
  },
  {
    id: "alexander-question-time",
    character: "alexander",
    order: 2,
    stage: "Question menu",
    title: "Use Alexander's full question list",
    description:
      "We can ask several optional questions before choosing the final “That's all” line. These build the scene and character, but the recording does not present them as route points.",
    evidence: "video",
    routeRole: "scene",
    media: {
      image: "/images/endings/scenes/alexander-question-menu.webp",
      width: 1280,
      height: 720,
      alt: "Drag'n Wash Alexander question menu showing the complete list of optional questions",
      sourceVideoId: "-zm-eJGaFFQ",
      sourceUrl: source("-zm-eJGaFFQ", 1681),
      timestampSeconds: 1681,
    },
    choices: [
      { text: "Do you like purple?", result: "Opens Alexander's answer, then returns us to the question list.", effect: "scene-variation", evidence: "video" },
      { text: "Do you like being big?", result: "Opens a size-related answer, then returns to the same list.", effect: "scene-variation", evidence: "video" },
      { text: "What does the number 7 taste like?", result: "Opens the unusual sensory question; the route remains unchanged.", effect: "scene-variation", evidence: "video" },
      { text: "What do you think of me?", result: "Changes this conversation only; no relationship lock appears.", effect: "dialogue-change", evidence: "video" },
      { text: "Are you happy?", result: "Opens Alexander's answer and returns to the same scene flow.", effect: "scene-variation", evidence: "video" },
      { text: "Your crest is cool. What is it?", result: "Adds character background without demonstrating an ending effect.", effect: "scene-variation", evidence: "video" },
      { text: "That's all I want to ask.", result: "Closes the question menu and continues the shared story.", effect: "dialogue-change", evidence: "video" },
    ],
  },
  {
    id: "alexander-existing-date",
    character: "alexander",
    order: 3,
    stage: "Relationship check",
    title: "Alexander notices an existing date",
    description:
      "If we arrive already attached, Alexander's conversation acknowledges that relationship. This is why a Ryan or Conrad romance should not be presented as the same setup as Alexander's invitation.",
    evidence: "video",
    routeRole: "scene",
    media: {
      image: "/images/endings/scenes/alexander-existing-date.webp",
      width: 1280,
      height: 720,
      alt: "Drag'n Wash Alexander menu asking about an existing Conrad date",
      sourceVideoId: "-zm-eJGaFFQ",
      sourceUrl: source("-zm-eJGaFFQ", 2692),
      timestampSeconds: 2692,
    },
    choices: [
      { text: "How was your date with Conrad?", result: "Alexander responds to the existing relationship and the conversation continues.", effect: "dialogue-change", evidence: "video" },
      { text: "TELL ME ABOUT YOU AND CONRAD!", result: "We ask more enthusiastically; the same existing-relationship scene continues.", effect: "scene-variation", evidence: "video" },
    ],
  },
  {
    id: "alexander-final-invitation",
    character: "alexander",
    order: 4,
    stage: "Final relationship fork",
    title: "Accept or decline Alexander's invitation",
    description:
      "The clearest filmed setup pairs Ryan with Conrad and leaves us unattached. Alexander then gives us a menu that explicitly labels romance and no-romance outcomes.",
    evidence: "video",
    routeRole: "route-lock",
    media: {
      image: "/images/endings/scenes/alexander-final-invitation.webp",
      width: 1280,
      height: 720,
      alt: "Drag'n Wash Alexander invitation showing the romance and no-romance choices in full",
      sourceVideoId: "-zm-eJGaFFQ",
      sourceUrl: source("-zm-eJGaFFQ", 3115),
      timestampSeconds: 3115,
    },
    choices: [
      { text: "I wouldn't mind!", systemText: "Will lead to Alexander romance!", result: "Alexander's romance becomes the active relationship route for the ending sequence.", effect: "route-lock", targetSceneId: "alexander-romance-state", evidence: "video", selectedInSource: true },
      { text: "I'm going to be busy tonight. Sorry.", systemText: "Will lead to no romance!", result: "We remain unattached. The screen confirms the state, but not a fourth official ending.", effect: "route-lock", targetSceneId: "no-romance-state", evidence: "video" },
    ],
  },
  {
    id: "alexander-romance-state",
    character: "alexander",
    order: 5,
    stage: "Relationship state",
    title: "Continue Alexander's romance scene",
    description:
      "Accepting the invitation opens Alexander's relationship sequence. We can still see later conversational variations without treating each reply as another route.",
    evidence: "video",
    routeRole: "relationship",
    choices: [],
  },
  {
    id: "alexander-late-choice",
    character: "alexander",
    order: 6,
    stage: "Late-scene variation",
    title: "Choose how Alexander should continue",
    description:
      "A late menu offers a gentler or more direct response. Both appear after the relationship path is already established, and the available run does not prove separate endings here.",
    evidence: "video",
    routeRole: "scene",
    media: {
      image: "/images/endings/scenes/alexander-late-choice.webp",
      width: 1280,
      height: 720,
      alt: "Drag'n Wash late Alexander scene showing both continuation choices",
      sourceVideoId: "-zm-eJGaFFQ",
      sourceUrl: source("-zm-eJGaFFQ", 3270),
      timestampSeconds: 3270,
    },
    choices: [
      { text: "Hold on a little longer for me?", result: "The scene uses the more restrained response and continues on Alexander's route.", effect: "scene-variation", evidence: "video" },
      { text: "Go for it!", result: "The scene uses the direct response; no new ending lock is demonstrated.", effect: "scene-variation", evidence: "video" },
    ],
  },
  {
    id: "no-romance-state",
    character: "alexander",
    order: 7,
    stage: "Unattached result",
    title: "Remain unattached after declining Alexander",
    description:
      "The invitation menu explicitly says this answer leads to no romance. We record it as a relationship state, not an extra ending, because the developer still lists only three endings.",
    evidence: "video",
    routeRole: "relationship",
    choices: [],
  },
  {
    id: "alexander-ending",
    character: "alexander",
    order: 8,
    stage: "Route finish",
    title: "Finish the Alexander-focused run",
    description:
      "Continue Alexander's locked relationship through the final scene and credits. The site uses “Alexander route” as a practical label, not an official ending title.",
    evidence: "video",
    routeRole: "ending",
    choices: [],
  },
];

export const sceneById = Object.fromEntries(dragonScenes.map((scene) => [scene.id, scene])) as Record<string, DragonScene>;

export const scenesByCharacter = (character: Exclude<EndingCharacter, "shared">): DragonScene[] =>
  dragonScenes.filter((scene) => scene.character === character).sort((a, b) => a.order - b.order);

export const endingFaq = [
  { question: "How many Drag'n Wash endings are confirmed?", answer: "Three. The official description also estimates approximately 90 minutes of content for each ending." },
  { question: "Which choices actually lock a route?", answer: "The filmed locks are Conrad's spend-time choice, Ryan's picnic dating choice and Alexander's late invitation. Other menus on this page are marked as dialogue or scene variations unless a later result is demonstrated." },
  { question: "How do I start Conrad's romance?", answer: "When Conrad asks who he should spend time with, choose the answer that offers to hang out with him. The menu displays Unlock Conrad Romance." },
  { question: "How do Ryan and Conrad end up together?", answer: "First introduce Conrad to Ryan. Later, at Ryan's picnic, recommend the red dragon instead of volunteering yourself as Ryan's date." },
  { question: "How do I keep Alexander's romance available?", answer: "The clearest filmed route introduces Conrad to Ryan, completes their pairing at the picnic and reaches Alexander's final visit while the player remains unattached." },
  { question: "Is no romance a fourth ending?", answer: "Not from the evidence available. It is a visible relationship state after declining Alexander, while the developer continues to list three endings." },
];
