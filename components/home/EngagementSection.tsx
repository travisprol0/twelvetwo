import { engagements } from "@/content/engagements";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TextLink } from "@/components/ui/TextLink";

export function EngagementSection() {
  return (
    <section className="border-t border-line py-20 md:py-28" aria-labelledby="partner-heading">
      <Container>
        <Reveal>
          <SectionHeader id="partner-heading" eyebrow="Engagement / 04" title="Need an engineer, not an agency?">
            <p>
              Sometimes you don&apos;t need a 20-person agency. You need an experienced engineer who can understand the system, make good technical decisions, and get the work done.
            </p>
            <p className="mt-4">
              TwelveTwo can work alongside your existing team—or own an entire project from architecture through deployment.
            </p>
          </SectionHeader>
        </Reveal>
        <div className="mt-12 grid gap-px bg-line sm:grid-cols-2">
          {engagements.map((item) => (
            <article key={item.title} className="bg-canvas p-6 transition-colors hover:bg-raised sm:p-8">
              <p className="font-mono text-[11px] text-faint">{item.index}</p>
              <h3 className="mt-4 text-xl font-medium tracking-[-0.03em] text-ink">{item.title}</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">{item.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <TextLink href="/contact">Talk about your project</TextLink>
        </div>
      </Container>
    </section>
  );
}
