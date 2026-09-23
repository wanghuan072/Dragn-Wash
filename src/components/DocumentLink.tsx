import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type DocumentLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
  children: ReactNode;
};

export default function DocumentLink({ href, children, ...props }: DocumentLinkProps) {
  return <Link href={href} {...props}>{children}</Link>;
}
