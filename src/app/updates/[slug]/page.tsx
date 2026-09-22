import { updates } from "@/lib/content";
import { notFound, permanentRedirect } from "next/navigation";

export function generateStaticParams() {
  return updates.map(({ slug }) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (!updates.some((item) => item.slug === slug)) notFound();
  permanentRedirect(`/updates#${slug}`);
}
