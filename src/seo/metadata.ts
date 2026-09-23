import type { Metadata } from "next";
import { siteName, siteUrl } from "@/config/site";
import { getPageTdk, pageTdk } from "@/seo/tdk.js";

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  image = "/images/og-image.png",
): Metadata {
  const url = `${siteUrl}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      title,
      description,
      url,
      siteName,
      images: [
        {
          url: `${siteUrl}${image}`,
          width: 1731,
          height: 909,
          alt: "Drag'n Wash player field manual",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}${image}`],
    },
  };
}

export function metadataFor(
  key: keyof typeof pageTdk,
  path: string,
): Metadata {
  const entry = getPageTdk(key);
  return pageMetadata(entry.title, entry.description, path);
}
