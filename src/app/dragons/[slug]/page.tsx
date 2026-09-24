import { dragons } from "@/lib/content";
import DragonDetailPage from "@/page/dragons/DragonDetailPage";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { pageMetadata } from "@/seo/metadata";
export function generateStaticParams() {
  return dragons.map(({ slug }) => ({ slug }));
}
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = dragons.find((d) => d.slug === slug);
  return item
    ? pageMetadata(
        item.seoTitle,
        item.seoDescription,
        `/dragons/${slug}`,
      )
    : {};
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (!dragons.some((d) => d.slug === slug)) notFound();
  return <DragonDetailPage slug={slug} />;
}
