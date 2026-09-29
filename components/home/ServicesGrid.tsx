import { homepageServices } from "@/content/services";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TextLink } from "@/components/ui/TextLink";

export function ServicesGrid() {
  return (
    <section className="border-t border-line py-20 md:py-28" aria-labelledby="builds-heading">
      <Container>
        <Reveal>
          <div>
            <SectionHeader id="builds-heading" eyebrow="Services / Engineering" title="From architecture to production.">
              <p>
                TwelveTwo works across the stack, with an emphasis on backend systems, APIs, integrations, and software that has to work reliably in the real world.
              </p>
            </SectionHeader>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {homepageServices.map((service) => (
            <article
              key={service.slug}
              className="bg-canvas p-6 transition-colors hover:bg-raised sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-medium tracking-[-0.02em] text-ink">{service.title}</h3>
                <span className="font-mono text-[11px] text-faint">{service.index}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">{service.summary}</p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <TextLink href="/services">See how engagements work</TextLink>
        </div>
      </Container>
    </section>
  );
}
