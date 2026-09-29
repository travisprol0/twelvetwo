import { site } from "@/content/site";

export function Availability({ className = "" }: { className?: string }) {
  if (!site.availableForProjects) {
    return null;
  }

  return (
    <p className={`inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] text-muted uppercase ${className}`}>
      <span className="inline-block size-1.5 rounded-full bg-brass" aria-hidden="true" />
      Available for projects
    </p>
  );
}
