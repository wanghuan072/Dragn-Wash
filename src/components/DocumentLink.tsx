import type { AnchorHTMLAttributes, ReactNode } from "react";

type DocumentLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  children: ReactNode;
};

/** Uses a normal anchor so a new content URL performs a full document navigation. */
export default function DocumentLink({ href, children, ...props }: DocumentLinkProps) {
  return <a href={href} {...props}>{children}</a>;
}
