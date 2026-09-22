import guidesData from "@/data/guides/guides.json";
import dragonsData from "@/data/dragons/dragons.json";
import updatesData from "@/data/updates/updates.json";

export const guides = guidesData;
export const dragons = dragonsData;
export const updates = updatesData;
export const steamStore =
  "https://store.steampowered.com/app/4739660/Dragn_Wash/";
export const officialNews = "https://steamcommunity.com/app/4739660/allnews/";
export const updateSource: Record<string, string> = {
  "future-of-drag-n-wash": "https://steamcommunity.com/app/4739660/allnews/",
  "steam-deck-verified": "https://steamcommunity.com/app/4739660/allnews/",
  "kobold-hotfix": "https://steamcommunity.com/app/4739660/allnews/",
};
