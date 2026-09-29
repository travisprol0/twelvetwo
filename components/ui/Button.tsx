import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const styles = {
  primary:
    "inline-flex h-12 items-center justify-center bg-brass px-5 text-sm font-medium text-brass-ink transition-colors hover:bg-[#d4b67a]",
  secondary:
    "inline-flex h-12 items-center justify-center border border-line-strong px-5 text-sm text-ink transition-colors hover:border-ink",
} as const;

export function Button({
  children,
  variant = "primary",
  className,
  type = "button",
  disabled,
}: {
  children: ReactNode;
  variant?: keyof typeof styles;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(styles[variant], "disabled:cursor-not-allowed disabled:opacity-60", className)}
    >
      {children}
    </button>
  );
}

export function LinkButton({
  href,
  children,
  variant = "primary",
  className,
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof styles;
  className?: string;
  external?: boolean;
}) {
  const classNames = cn(styles[variant], className);

  if (external) {
    return (
      <a href={href} className={classNames} rel="noopener noreferrer" target="_blank">
        {children}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }

  return (
    <Link href={href} className={classNames}>
      {children}
    </Link>
  );
}
