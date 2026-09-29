import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";

export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="border-b border-line pt-28 pb-14 sm:pt-36 sm:pb-20">
      <Container>
        <p className="font-mono text-[11px] tracking-[0.18em] text-faint uppercase">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-[clamp(2.6rem,6vw,4.75rem)] leading-[0.98] font-medium tracking-[-0.04em] text-balance text-ink">
          {title}
        </h1>
        {children ? (
          <div className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{children}</div>
        ) : null}
      </Container>
    </header>
  );
}
