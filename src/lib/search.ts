import { dragons, guides, updates } from "@/lib/content";

export type SearchItem = {
  title: string;
  description: string;
  href: string;
  category: string;
  keywords?: string;
};

export const searchIndex: SearchItem[] = [
  { title: "What is Drag'n Wash?", description: "Game overview, official facts and where to start.", href: "/", category: "Game", keywords: "dragn wash dragwash DragNWash drag n wash drag_n wash" },
  ...guides.map((item) => ({ title: item.title, description: item.description, href: `/guides/${item.slug}`, category: "Guide" })),
  ...dragons.map((item) => ({ title: `${item.name} Route`, description: item.description, href: `/dragons/${item.slug}`, category: "Dragon" })),
  ...updates.map((item) => ({ title: item.title, description: item.description, href: `/updates#${item.slug}`, category: "Update" })),
  { title: "Drag'n Wash Ending Choice Tree", description: "Filmed route locks for Conrad, Ryan, Alexander and the Ryan–Conrad pairing, plus all-three-endings replay steps.", href: "/endings#choice-tree", category: "Ending", keywords: "dragn wash endings choice tree routes conrad romance ryan romance alexander ending ryan conrad pairing all scenes gallery chapter select credits save" },
  { title: "Complete Walkthrough", description: "Phone, window, gate, wash, rinse and post-wash steps.", href: "/walkthrough", category: "Guide", keywords: "walkthrough playthrough first shift phone open door gate bucket sponge refill" },
  { title: "Romance & Relationships", description: "Character choices and community observations.", href: "/romance", category: "Dragon" },
  { title: "Ryan and Conrad Pairing", description: "Player reports and what remains unverified.", href: "/romance#ryan-conrad", category: "Dragon", keywords: "ryan x conrad" },
  { title: "Gameplay, Stores & Content", description: "How the game plays, where to buy it and what to expect.", href: "/#gameplay", category: "Game", keywords: "gameplay what is it download full game free Steam itch GOG platforms Windows macOS Linux adult porn nudity vore uncensored SFW censored screenshots" },
  { title: "Mods & VR", description: "Workshop plans, community projects and compatibility.", href: "/mods", category: "Mod", keywords: "dragwash mods 3d models custom dragons workshop VR" },
  { title: "Localization Mod", description: "Chinese, Japanese and community language packs.", href: "/mods/localization", category: "Mod", keywords: "translation Chinese Japanese BepInEx Steam Deck Linux language" },
  { title: "Drag'n Wash Screenshots", description: "Gameplay, dragons, tools and wash-station images.", href: "/#screenshots", category: "Game", keywords: "dragn wash screenshots images pictures gallery" },
  { title: "Out of Bounds & Escape", description: "Version-sensitive movement find and recovery advice.", href: "/troubleshooting/stuck-softlock#out-of-bounds", category: "Fix" },
  { title: "Wash Progress Won't Finish", description: "Check missed spots and the current request.", href: "/troubleshooting/wash-progress", category: "Fix", keywords: "clean bar full third dragon soap rinse tail neck" },
  { title: "Stuck or Softlock", description: "Try Unstick before restarting.", href: "/troubleshooting/stuck-softlock", category: "Fix" },
  { title: "Troubleshooting", description: "Match a symptom to the safest fix and current patch status.", href: "/troubleshooting", category: "Fix", keywords: "known issues bug fixes credits ultrawide resolution Steam Deck Linux Nvidia mod not loading" },
  { title: "Launch & Performance", description: "Slow first boot, stutter and platform graphics.", href: "/troubleshooting/launch-performance", category: "Fix" },
  { title: "How We Check Information", description: "How changing game details, player reports and updates are checked.", href: "/sources", category: "About", keywords: "sources methodology verified official community evidence" },
];
