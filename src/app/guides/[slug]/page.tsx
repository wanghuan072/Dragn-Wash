import { guides } from "@/lib/content";
import GuideDetailPage from "@/page/guides/GuideDetailPage";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { pageMetadata } from "@/seo/metadata";
export function generateStaticParams() {
  return guides.map(({ slug }) => ({ slug }));
}
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = guides.find((g) => g.slug === slug);
  return item
    ? pageMetadata(
        item.seoTitle,
        item.seoDescription,
        `/guides/${slug}`,
      )
    : {};
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (!guides.some((g) => g.slug === slug)) notFound();
  return <GuideDetailPage slug={slug} />;
}
