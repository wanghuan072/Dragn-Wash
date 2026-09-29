import type { MetadataRoute } from "next";
import { dragons, guides } from "@/lib/content";
import { siteUrl } from "@/config/site";
import {
  lastModifiedFor,
  lastModifiedForJsonEntry,
} from "@/seo/lastModified";

type StaticPage = {
  path: string;
  fallback: string;
  priority: number;
  contentPaths: readonly string[];
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: StaticPage[] = [
    { path: "", fallback: "2026-09-23", priority: 1, contentPaths: ["src/app/page.tsx", "src/page/home/HomePage.tsx", "src/data/guides/guides.json", "src/data/dragons/dragons.json", "src/data/updates/updates.json"] },
    { path: "/guides", fallback: "2026-09-23", priority: .9, contentPaths: ["src/app/guides/page.tsx", "src/page/guides/GuidesPage.tsx", "src/data/guides/guides.json"] },
    { path: "/walkthrough", fallback: "2026-09-22", priority: .9, contentPaths: ["src/app/walkthrough/page.tsx", "src/page/guides/WalkthroughPage.tsx"] },
    { path: "/dragons", fallback: "2026-09-23", priority: .9, contentPaths: ["src/app/dragons/page.tsx", "src/page/dragons/DragonsPage.tsx", "src/data/dragons/dragons.json"] },
    { path: "/endings", fallback: "2026-09-29", priority: .9, contentPaths: ["src/app/endings/page.tsx", "src/page/endings/EndingsPage.tsx", "src/page/endings/EndingRouteMap.tsx", "src/data/endings.ts"] },
    { path: "/troubleshooting", fallback: "2026-09-21", priority: .85, contentPaths: ["src/app/troubleshooting/page.tsx", "src/page/troubleshooting/KnownIssuesPage.tsx", "src/data/knowledge.ts"] },
    { path: "/troubleshooting/stuck-softlock", fallback: "2026-09-23", priority: .8, contentPaths: ["src/app/troubleshooting/[slug]/page.tsx", "src/page/troubleshooting/HelpDetailPage.tsx"] },
    { path: "/troubleshooting/wash-progress", fallback: "2026-09-23", priority: .8, contentPaths: ["src/app/troubleshooting/[slug]/page.tsx", "src/page/troubleshooting/HelpDetailPage.tsx"] },
    { path: "/troubleshooting/launch-performance", fallback: "2026-09-23", priority: .8, contentPaths: ["src/app/troubleshooting/launch-performance/page.tsx", "src/page/troubleshooting/LaunchPerformancePage.tsx"] },
    { path: "/updates", fallback: "2026-09-23", priority: .8, contentPaths: ["src/app/updates/page.tsx", "src/page/updates/UpdatesPage.tsx", "src/data/updates/updates.json"] },
    { path: "/romance", fallback: "2026-09-29", priority: .8, contentPaths: ["src/app/romance/page.tsx", "src/page/romance/RomancePage.tsx", "src/data/endings.ts"] },
    { path: "/mods", fallback: "2026-09-22", priority: .85, contentPaths: ["src/app/mods/page.tsx", "src/page/mods/ModsPage.tsx"] },
    { path: "/mods/localization", fallback: "2026-09-22", priority: .8, contentPaths: ["src/app/mods/localization/page.tsx", "src/page/mods/LocalizationPage.tsx"] },
    { path: "/sources", fallback: "2026-09-21", priority: .5, contentPaths: ["src/app/sources/page.tsx", "src/page/about/SourcesPage.tsx", "src/data/knowledge.ts"] },
    ...legalPages(),
  ];
  const detailPages = [
    ...guides.map((item) => ({
      path: `/guides/${item.slug}`,
      modified: lastModifiedForJsonEntry(
        "src/data/guides/guides.json",
        item.slug,
        ["src/app/guides/[slug]/page.tsx", "src/page/guides/GuideDetailPage.tsx"],
        item.updatedAt,
      ),
      priority: .8,
    })),
    ...dragons.map((item) => ({
      path: `/dragons/${item.slug}`,
      modified: lastModifiedForJsonEntry(
        "src/data/dragons/dragons.json",
        item.slug,
        ["src/app/dragons/[slug]/page.tsx", "src/page/dragons/DragonDetailPage.tsx"],
        item.updatedAt,
      ),
      priority: .8,
    })),
  ];
  return [
    ...staticPages.map(({ path, fallback, priority, contentPaths }) => ({
      path,
      modified: lastModifiedFor(contentPaths, fallback),
      priority,
    })),
    ...detailPages,
  ].map(({ path, modified, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified: modified,
    changeFrequency: path === "/updates" ? "weekly" as const : "monthly" as const,
    priority,
  }));
}

function legalPages(): StaticPage[] {
  const pages = [
    ["privacy-policy", .3],
    ["terms-of-service", .3],
    ["copyright", .3],
    ["about-us", .5],
    ["contact-us", .4],
  ] as const;

  return pages.map(([slug, priority]) => ({
    path: `/legal/${slug}`,
    fallback: "2026-09-23",
    priority,
    contentPaths: [
      `src/app/legal/${slug}/page.tsx`,
      "src/page/legal/LegalPage.tsx",
    ],
  }));
}
