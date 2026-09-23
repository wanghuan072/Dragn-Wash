export type EndingEvidence =
  | "official"
  | "video"
  | "multi-report"
  | "single-report"
  | "unverified";

export type EndingCharacter = "shared" | "alexander" | "ryan" | "conrad";

export type EndingMedia = {
  youtubeId: string;
  startSeconds: number;
  title: string;
  sourceUrl: string;
  duration: string;
  alt: string;
  poster?: string;
};

export type EndingNode = {
  id: string;
  stage: string;
  character: EndingCharacter;
  title: string;
  choiceText?: string;
  unlockText?: string;
  result: string;
  evidence: EndingEvidence;
  next: string[];
  media?: EndingMedia;
};

export const evidenceLabels: Record<EndingEvidence, string> = {
  official: "Official",
  video: "On-screen video",
  "multi-report": "Multiple player reports",
  "single-report": "Single run report",
  unverified: "Not yet verified",
};

export const endingNodes: EndingNode[] = [
  {
    id: "shared-run",
    stage: "Shared story",
    character: "shared",
    title: "Meet all three dragons in one run",
    result:
      "We meet Alexander, Ryan and Conrad during the same story. The decisions that lock a relationship come later, so we do not need to choose a separate character campaign before starting.",
    evidence: "video",
    next: ["conrad-lock", "ryan-picnic"],
    media: {
      youtubeId: "LaxpF-RUb3c",
      startSeconds: 0,
      title: "One complete Drag'n Wash run",
      sourceUrl: "https://www.youtube.com/watch?v=LaxpF-RUb3c",
      duration: "64:00",
      alt: "Video preview of a complete Drag'n Wash run featuring all three dragons",
    },
  },
  {
    id: "conrad-lock",
    stage: "Conrad route lock",
    character: "conrad",
    title: "Conrad asks who he should spend time with",
    choiceText: "Introduce Conrad to Ryan — or offer to spend time with Conrad yourself.",
    unlockText: "The recording shows separate pairing and Conrad romance unlocks.",
    result:
      "This is the easiest fork to verify while playing because the game tells us what we unlocked instead of treating the answer like ordinary dialogue.",
    evidence: "video",
    next: ["conrad-romance", "ryan-conrad"],
    media: {
      youtubeId: "-zm-eJGaFFQ",
      startSeconds: 1440,
      title: "Conrad's on-screen route choice",
      sourceUrl: "https://www.youtube.com/watch?v=-zm-eJGaFFQ&t=1440s",
      duration: "24:00",
      alt: "Drag'n Wash Conrad choice showing the Ryan pairing and Conrad romance options in full",
      poster: "/images/endings/conrad-choice.jpg",
    },
  },
  {
    id: "ryan-picnic",
    stage: "Ryan picnic fork",
    character: "ryan",
    title: "Ryan asks whether you know someone for him",
    choiceText:
      "Choose “I know this one red dragon. I think you'd like him!” or “I wouldn't mind... if I was that someone.”",
    result:
      "The menu labels the first answer as the Ryan–Conrad hookup and the second as the Ryan romance lock, so we can see the route consequence before confirming either line.",
    evidence: "video",
    next: ["ryan-romance", "ryan-conrad"],
    media: {
      youtubeId: "OJoVDSP1DGc",
      startSeconds: 837,
      title: "Ryan's picnic relationship choice",
      sourceUrl: "https://www.youtube.com/watch?v=OJoVDSP1DGc&t=837s",
      duration: "13:57",
      alt: "Drag'n Wash Ryan picnic choice showing the Conrad pairing and Ryan romance options in full",
      poster: "/images/endings/ryan-picnic-choice.jpg",
    },
  },
  {
    id: "conrad-romance",
    stage: "Relationship result",
    character: "conrad",
    title: "Conrad agrees to a date with the player",
    choiceText: "Choose the player-and-Conrad option at the route-lock conversation.",
    unlockText: "Unlock Conrad Romance",
    result:
      "If we choose Conrad for ourselves, the two characters acknowledge the interest immediately and arrange a date. Later Conrad scenes continue from that relationship state.",
    evidence: "video",
    next: ["ending-count"],
    media: {
      youtubeId: "-zm-eJGaFFQ",
      startSeconds: 1440,
      title: "Conrad romance route lock",
      sourceUrl: "https://www.youtube.com/watch?v=-zm-eJGaFFQ&t=1440s",
      duration: "24:00",
      alt: "Drag'n Wash choice screen with the full Unlock Conrad Romance option visible",
      poster: "/images/endings/conrad-romance-lock.jpg",
    },
  },
  {
    id: "ryan-romance",
    stage: "Relationship result",
    character: "ryan",
    title: "Ryan route continues with the player",
    choiceText: "Use Ryan's player-facing answer instead of recommending Conrad.",
    result:
      "If we tell Ryan that we like him, later opportunities with Conrad and Alexander can change. Players consistently describe this as the Ryan romance, although the game does not publish an official ending name for it.",
    evidence: "multi-report",
    next: ["alexander-locked", "ending-count"],
    media: {
      youtubeId: "OJoVDSP1DGc",
      startSeconds: 837,
      title: "Ryan romance route lock",
      sourceUrl: "https://www.youtube.com/watch?v=OJoVDSP1DGc&t=837s",
      duration: "13:57",
      alt: "Drag'n Wash picnic choice with the full Locks in Ryan romance option visible",
      poster: "/images/endings/ryan-romance-lock.jpg",
    },
  },
  {
    id: "ryan-conrad",
    stage: "Pairing result",
    character: "shared",
    title: "Ryan and Conrad are paired with each other",
    choiceText:
      "Introduce Conrad to Ryan at Conrad's fork, or recommend Conrad during Ryan's picnic conversation.",
    result:
      "We can point Conrad toward Ryan or recommend Conrad during Ryan's picnic. Both entries support the same pairing route, while leaving us free to watch for Alexander's later invitation.",
    evidence: "video",
    next: ["alexander-open", "ending-count"],
    media: {
      youtubeId: "OJoVDSP1DGc",
      startSeconds: 837,
      title: "Ryan and Conrad pairing route choice",
      sourceUrl: "https://www.youtube.com/watch?v=OJoVDSP1DGc&t=837s",
      duration: "13:57",
      alt: "Drag'n Wash picnic choice with the full Hooks up Ryan with Conrad option visible",
      poster: "/images/endings/ryan-conrad-pairing.jpg",
    },
  },
  {
    id: "alexander-open",
    stage: "Late Alexander visit",
    character: "alexander",
    title: "Alexander's invitation remains available",
    choiceText: "Reach Alexander's final visit without dating Ryan or Conrad.",
    result:
      "If we reach Alexander's last visit without dating Ryan or Conrad, multiple players report receiving his date invitation. Other unlisted choices may still matter, so this is not a guaranteed official formula.",
    evidence: "video",
    next: ["alexander-romance", "ending-count"],
    media: {
      youtubeId: "-zm-eJGaFFQ",
      startSeconds: 3115,
      title: "Alexander's romance or no-romance choice",
      sourceUrl: "https://www.youtube.com/watch?v=-zm-eJGaFFQ&t=3115s",
      duration: "51:55",
      alt: "Drag'n Wash Alexander choice showing the romance and no-romance outcomes in full",
      poster: "/images/endings/alexander-romance-choice.jpg",
    },
  },
  {
    id: "alexander-locked",
    stage: "Late Alexander visit",
    character: "alexander",
    title: "An existing date changes Alexander's dialogue",
    choiceText: "Arrive while already dating Ryan or Conrad.",
    result:
      "If we already dated Ryan or Conrad, the gate conversation can acknowledge that date instead of opening Alexander's invitation in the same way.",
    evidence: "multi-report",
    next: ["ending-count"],
  },
  {
    id: "alexander-romance",
    stage: "Relationship result",
    character: "alexander",
    title: "Accept Alexander's late invitation",
    result:
      "Accepting the late invitation continues an Alexander-focused outcome. We still need one uncut current-build recording that shows every choice from the invitation through the ending.",
    evidence: "single-report",
    next: ["ending-count"],
  },
  {
    id: "ending-count",
    stage: "Final outcome",
    character: "shared",
    title: "Finish the run and record what the credits follow",
    result:
      "Once the run reaches the credits, we can compare the result with the other routes. The developer confirms three endings and about 90 minutes of content per ending, but does not publish names for them.",
    evidence: "official",
    next: [],
  },
];

export const endingFaq = [
  {
    question: "How many Drag'n Wash endings are confirmed?",
    answer:
      "Three. The official game description also estimates approximately 90 minutes of content for each ending.",
  },
  {
    question: "Does each dragon have a separately named ending?",
    answer:
      "The game has character-focused relationship outcomes, but the developer has not published official ending names or a complete one-dragon-to-one-ending chart.",
  },
  {
    question: "How do I start the Conrad romance route?",
    answer:
      "When Conrad asks who he should spend time with, choose to spend time with him yourself rather than introducing him to Ryan. The game then displays Unlock Conrad Romance.",
  },
  {
    question: "Can Ryan and Conrad end up together?",
    answer:
      "Yes. We can introduce Conrad to Ryan during Conrad's choice, or recommend Conrad when Ryan asks about a possible date at the picnic.",
  },
  {
    question: "How does the Alexander route stay open?",
    answer:
      "Multiple players receive Alexander's late invitation when they reach his final visit without starting a romance with Ryan or Conrad. The full prerequisite list is not officially published.",
  },
  {
    question: "Are there official Good, Bad or True Ending names?",
    answer:
      "No. Those labels and claimed trust percentages are excluded because the official description and reproducible video evidence do not establish them.",
  },
];
