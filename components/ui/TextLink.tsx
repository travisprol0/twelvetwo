import Link from "next/link";
import type { ReactNode } from "react";

export function TextLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  const className =
    "group inline-flex items-center gap-2 text-sm text-ink";

  const content = (
    <>
      <span className="border-b border-line-strong pb-0.5 transition-colors group-hover:border-brass">
        {children}
      </span>
      <span aria-hidden="true" className="text-brass transition-transform group-hover:translate-x-0.5">
        →
      </span>
      {external ? <span className="sr-only"> (opens in a new tab)</span> : null}
    </>
  );

  if (external) {
    return (
      <a href={href} className={className} rel="noopener noreferrer" target="_blank">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
