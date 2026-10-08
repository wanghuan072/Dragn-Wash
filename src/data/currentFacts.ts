export const contentReview = {
  checkedAt: "2026-10-08",
  gameUpdateCheckedAt: "2026-10-08",
  localizationCheckedAt: "2026-10-08",
} as const;

export const characterNameStatus = {
  alexander: "Used in the game interface and established player route records; not found in the official store copy reviewed here.",
  ryan: "Used in the game interface and established player route records; not found in the official store copy reviewed here.",
  conrad: "Used directly in the official Kobold Hotfix notes.",
} as const;

export const gameStatus = {
  endings: 3,
  estimatedMinutesPerEnding: 90,
  steamDeck: "Verified",
  workshop: "Named by the developer as the first development priority; no released Workshop integration or release date was found in the official news checked on October 8, 2026.",
  nativeVr: "Not listed as a base-game feature. A separate third-party VR project exists.",
  gallery: "No released scene gallery or chapter-select feature was found in the official information checked on October 8, 2026.",
} as const;

export const localizationStatus = {
  version: "1.6.0",
  languageCount: 18,
  releasedAt: "2026-09-26",
  reviewedAt: contentReview.localizationCheckedAt,
  frameworkVersion: "1.6.0",
  quality: {
    supervised: ["Japanese", "Simplified Chinese"],
    nativeReviewed: ["Korean", "Turkish"],
    converted: ["Traditional Chinese"],
    communityExtras: ["Esperanto", "Toki Pona"],
  },
  windows: "Supported through Install.exe or the documented manual installation.",
  linux: "Supported through install-steamdeck.sh for Steam Deck and native Linux.",
  macos: "Experimental repository script; it uses an unreleased Doorstop build and Rosetta and is not included in the release ZIP.",
  updates: "The launcher and the in-game Mods screen can check for and install later releases after v1.6.0 is installed.",
} as const;
