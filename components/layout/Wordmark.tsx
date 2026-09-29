import Link from "next/link";
import { cn } from "@/lib/cn";

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-baseline gap-2.5", className)}>
      <span className="text-[1.05rem] font-medium tracking-[-0.03em] text-ink">
        TwelveTwo
      </span>
      <span className="hidden font-mono text-[10px] tracking-[0.18em] text-faint sm:inline">
        TECHNOLOGY
      </span>
    </span>
  );
}

export function WordmarkLink({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("rounded-sm", className)} aria-label="TwelveTwo Technology, home">
      <Wordmark />
    </Link>
  );
}
