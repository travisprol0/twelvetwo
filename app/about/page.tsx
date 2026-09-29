import { principles } from "@/content/principles";
import { founderLinks, site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import { Container } from "@/components/layout/Container";
import { PageIntro } from "@/components/layout/PageIntro";
import { TextLink } from "@/components/ui/TextLink";

export const metadata = pageMetadata({
  title: "About",
  description:
    "TwelveTwo Technology is an independent software engineering firm. Clients work directly with Travis Prol, the engineer doing the work.",
  path: "/about",
});

export default function AboutPage() {
  const links = founderLinks();

  return (
    <>
      <PageIntro eyebrow="About" title="A small engineering firm with a simple philosophy.">
        <p>Build useful software. Keep the architecture understandable. Ship what matters.</p>
      </PageIntro>
      <Container className="grid gap-16 py-16 md:py-24">
        <section className="max-w-2xl space-y-5 text-base leading-relaxed text-muted sm:text-lg">
          <p>
            TwelveTwo Technology is an independent software engineering firm owned and operated by Travis Prol. The work is custom software, backend systems, APIs, integrations, internal tools, and product engineering.
          </p>
          <p>
            Clients work directly with the person doing the engineering. There is no account layer between the problem and the code.
          </p>
          <p>
            The proof is the software. Lattice Log is a product TwelveTwo built for greenhouse teams who need inventory and a live availability list to stay in sync.
          </p>
        </section>

        <section className="grid gap-8 border-t border-line pt-16 md:grid-cols-[180px_1fr]" aria-labelledby="about-founder">
          <div className="flex size-36 items-end border border-line bg-raised p-4" aria-hidden="true">
            <span className="font-mono text-3xl tracking-[-0.04em] text-brass">TP</span>
          </div>
          <div>
            <h2 id="about-founder" className="text-3xl font-medium tracking-[-0.03em] text-ink">
              {site.founder.name}
            </h2>
            <p className="mt-2 font-mono text-[12px] tracking-[0.12em] text-faint uppercase">
              {site.founder.title}
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
              Travis works with the people who have the problem: understanding the workflow, choosing a technical approach, writing the software, and getting it into production.
            </p>
            {links.length > 0 ? (
              <ul className="mt-5 flex gap-6">
                {links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-ink underline decoration-line-strong underline-offset-4" rel="noopener noreferrer" target="_blank">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </section>

        <section className="border-t border-line pt-16" aria-labelledby="principles-heading">
          <h2 id="principles-heading" className="text-3xl font-medium tracking-[-0.03em] text-ink">
            Principles
          </h2>
          <ol className="mt-8 divide-y divide-line border-y border-line">
            {principles.map((principle, index) => (
              <li key={principle.title} className="grid gap-3 py-6 md:grid-cols-[4rem_1fr] md:gap-8">
                <span className="font-mono text-[11px] text-brass">0{index + 1}</span>
                <div>
                  <h3 className="text-lg font-medium tracking-[-0.02em] text-ink">{principle.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">{principle.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <TextLink href="/contact">Start a project</TextLink>
      </Container>
    </>
  );
}
