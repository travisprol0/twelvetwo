import { LinkButton } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { SystemDiagram } from "./SystemDiagram";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="drawing-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <Container className="relative grid items-end gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="font-mono text-[11px] tracking-[0.18em] text-faint uppercase">
            Software engineering / TwelveTwo Technology
          </p>
          <h1 className="mt-6 max-w-4xl text-[clamp(2.7rem,6.6vw,5.6rem)] leading-[0.94] font-medium tracking-[-0.045em] text-balance text-ink">
            Software engineering for businesses that need to build.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            TwelveTwo designs and builds reliable software, APIs, integrations, and internal systems—from the first architecture decision to production.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/contact">Start a project</LinkButton>
            <LinkButton href="/work" variant="secondary">
              See our work
            </LinkButton>
          </div>
          <p className="mt-8 flex flex-wrap gap-x-2 gap-y-1 font-mono text-[11px] tracking-[0.12em] text-faint uppercase">
            {["Custom software", "Backend systems", "APIs", "Integrations", "Product engineering"].map(
              (item, index) => (
                <span key={item} className="whitespace-nowrap">
                  {index > 0 ? <span aria-hidden="true">· </span> : null}
                  {item}
                </span>
              ),
            )}
          </p>
        </div>
        <SystemDiagram />
      </Container>
    </section>
  );
}
