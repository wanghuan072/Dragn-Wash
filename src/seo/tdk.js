// @ts-check

/** Public-page metadata. Detail-page metadata stays with its content record. */
export const pageTdk = {
  home: { title: "DRAG'N WASH - Walkthroughs, Endings & Game Help", description: "Use this Drag'n Wash guide for gameplay, walkthroughs, dragon stories, endings, screenshots, official stores, content answers, mods, fixes and updates." },
  guides: { title: "DRAG'N WASH Guides - Washing, Controls & First Run", description: "Use our Drag'n Wash guides to finish your first shift, learn every washing tool, clear missed spots, recover stuck scenes, and plan a smoother replay." },
  walkthrough: { title: "DRAG'N WASH Walkthrough - First Shift to All Endings", description: "Follow the Drag'n Wash walkthrough from the opening phone call through washing, conversations, dragon visits, route choices, credits, and your next run." },
  dragons: { title: "DRAG'N WASH Wiki - Alexander, Ryan & Conrad", description: "Meet every Drag'n Wash dragon with practical profiles for Alexander, Ryan, and Conrad, including their visits, interactions, relationships, and route notes." },
  endings: { title: "DRAG'N WASH Endings - Choices, Routes & Replay", description: "Understand all three Drag'n Wash endings, the choices that shape each route, what the game confirms, how replay works, and where community reports differ." },
  troubleshooting: { title: "DRAG'N WASH Troubleshooting - Fix Stuck Washes & Softlocks", description: "Fix Drag'n Wash launch errors, softlocks, a full clean bar that will not advance, missing audio, save trouble, and performance issues with symptom-first steps." },
  updates: { title: "DRAG'N WASH Updates - Patches, Fixes & News", description: "Track Drag'n Wash updates in release order, with readable patch summaries, confirmed fixes, gameplay changes, current build notes, and links to official posts." },
  romance: { title: "DRAG'N WASH Romance - Character Choices & Routes", description: "Follow Drag'n Wash romance and relationship threads across Alexander, Ryan, and Conrad without invented meters, including route choices and replay context." },
  mods: { title: "DRAG'N WASH Mods - Localization, VR & Workshop", description: "Check the Drag'n Wash mod landscape before installing, including localization, VR and Workshop status, compatibility cautions, and trusted download rules." },
  localization: { title: "DRAG'N WASH Translation Mod - Languages & Setup", description: "Install the third-party Drag'n Wash translation mod on Windows or Steam Deck, review supported languages, remove it safely, and troubleshoot version conflicts." },
  sources: { title: "DRAG'N WASH Standards - How Game Facts Are Checked", description: "See how this Drag'n Wash fan guide checks official facts, labels developer comments and player reports, handles conflicts, dates reviews, and corrects mistakes." },
  launchPerformance: { title: "DRAG'N WASH Launch Fixes - Startup & Performance", description: "Troubleshoot Drag'n Wash startup, black screens, shader delays, low frame rates, audio problems, and graphics issues with safe checks before reinstalling." },
  stuckSoftlock: { title: "DRAG'N WASH Softlock Fix - Recover a Stuck Run", description: "Recover a stuck Drag'n Wash run by matching the symptom to dialogue, interaction, gate, save, and scene checks while protecting your current progress." },
  washProgress: { title: "DRAG'N WASH Clean Bar Fix - Missed Spots & Rinsing", description: "Finish a stubborn Drag'n Wash cleaning scene with a practical decision path for missed spots, soap that will not rinse, a full bar, tail, neck, and tool checks." },
  privacyPolicy: { title: "DRAG'N WASH Privacy Policy - Fan Guide Data Practices", description: "Read the Drag'n Wash fan guide privacy policy covering routine server logs, cookies, external links, email contact, data retention, and your privacy choices." },
  termsOfService: { title: "DRAG'N WASH Terms of Service - Fan Site Rules", description: "Read the Drag'n Wash fan guide terms for acceptable use, informational content, external links, intellectual property, disclaimers, and changes to this website." },
  copyright: { title: "DRAG'N WASH Copyright - Ownership, Fair Use & Notices", description: "Review copyright terms for this independent Drag'n Wash fan guide, including game ownership, original site writing, limited media use, and notice requests." },
  aboutUs: { title: "About DRAG'N WASH Guide - Independent Player Resource", description: "Learn why this independent Drag'n Wash fan guide was built, how we organize walkthroughs and fixes, what we verify, and how players can report corrections." },
  contactUs: { title: "Contact DRAG'N WASH Guide - Questions & Corrections", description: "Contact the independent Drag'n Wash fan guide about factual corrections, broken links, accessibility, privacy, or copyright notices using our published email." },
};

/** @param {keyof typeof pageTdk} key */
export function getPageTdk(key) {
  return pageTdk[key];
}
