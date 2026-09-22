import type { MetadataRoute } from "next";
import { dragons, guides } from "@/lib/content";
import { screenshotRecords } from "@/data/knowledge";
import { siteUrl } from "@/config/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    ["", "2026-09-22", 1], ["/guides", "2026-09-21", .9], ["/walkthrough", "2026-09-22", .9],
    ["/dragons", "2026-09-22", .9], ["/endings", "2026-09-22", .9], ["/troubleshooting", "2026-09-21", .85],
    ["/troubleshooting/stuck-softlock", "2026-09-21", .8], ["/troubleshooting/wash-progress", "2026-09-21", .8],
    ["/troubleshooting/launch-performance", "2026-09-21", .8], ["/updates", "2026-09-22", .8],
    ["/romance", "2026-09-21", .8], ["/mods", "2026-09-22", .85], ["/mods/localization", "2026-09-22", .8],
    ["/sources", "2026-09-21", .5],
    ["/legal/privacy-policy", "2026-09-22", .3], ["/legal/terms-of-service", "2026-09-22", .3],
    ["/legal/copyright", "2026-09-22", .3], ["/legal/about-us", "2026-09-22", .5],
    ["/legal/contact-us", "2026-09-22", .4],
  ] as const;
  const detailPages = [
    ...guides.map((item) => ({ path: `/guides/${item.slug}`, modified: item.updatedAt, priority: .8 })),
    ...dragons.map((item) => ({ path: `/dragons/${item.slug}`, modified: item.updatedAt, priority: .8 })),
  ];
  return [
    ...staticPages.map(([path, modified, priority]) => ({ path, modified, priority })),
    ...detailPages,
  ].map(({ path, modified, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(`${modified}T00:00:00Z`),
    changeFrequency: path === "/updates" ? "weekly" as const : "monthly" as const,
    priority,
    ...(path === ""
      ? { images: screenshotRecords.map((item) => `${siteUrl}${item.image}`) }
      : {}),
  }));
}
