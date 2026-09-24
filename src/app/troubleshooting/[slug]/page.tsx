import HelpDetailPage from "@/page/troubleshooting/HelpDetailPage";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { metadataFor } from "@/seo/metadata";

export function generateStaticParams() {
  return [{ slug: "stuck-softlock" }, { slug: "wash-progress" }];
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return slug === "stuck-softlock"
    ? metadataFor("stuckSoftlock", "/troubleshooting/stuck-softlock")
    : metadataFor("washProgress", "/troubleshooting/wash-progress");
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (slug !== "stuck-softlock" && slug !== "wash-progress") notFound();
  return <HelpDetailPage slug={slug === "stuck-softlock" ? "stuck" : slug} />;
}
