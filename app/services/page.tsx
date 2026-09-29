import { services } from "@/content/services";
import { pageMetadata } from "@/lib/metadata";
import { Container } from "@/components/layout/Container";
import { PageIntro } from "@/components/layout/PageIntro";
import { TextLink } from "@/components/ui/TextLink";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Custom software, backend systems, APIs, product engineering, internal tools, integrations, modernization, contract engineering, and technical consulting from TwelveTwo.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageIntro eyebrow="Services" title="Engineering when you need it.">
        <p>
          Whether you need a product built, a backend stabilized, systems integrated, or additional engineering capacity, TwelveTwo can step in where you need it.
        </p>
      </PageIntro>
      <Container className="divide-y divide-line py-4 md:py-8">
        {services.map((service) => (
          <article key={service.slug} id={service.slug} className="grid gap-8 py-14 md:grid-cols-[0.8fr_1.2fr] md:py-16">
            <div>
              <p className="font-mono text-[11px] tracking-[0.16em] text-faint">{service.index}</p>
              <h2 className="mt-3 text-3xl font-medium tracking-[-0.03em] text-ink">{service.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted">{service.summary}</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="font-mono text-[11px] tracking-[0.16em] text-faint uppercase">Typical problems</h3>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
                  {service.problems.map((problem) => (
                    <li key={problem}>{problem}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-mono text-[11px] tracking-[0.16em] text-faint uppercase">Deliverables</h3>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
                  {service.deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="sm:col-span-2">
                <TextLink href="/contact">Talk about this work</TextLink>
              </div>
            </div>
          </article>
        ))}
      </Container>
    </>
  );
}
