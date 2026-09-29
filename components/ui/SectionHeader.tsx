import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  children,
  id,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  id?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="font-mono text-[11px] tracking-[0.18em] text-faint uppercase">{eyebrow}</p>
      <h2
        id={id}
        className="mt-4 text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] font-medium tracking-[-0.035em] text-balance text-ink"
      >
        {title}
      </h2>
      {children ? (
        <div className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {children}
        </div>
      ) : null}
    </div>
  );
}
