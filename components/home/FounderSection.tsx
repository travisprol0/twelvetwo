import { founderLinks, site } from "@/content/site";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function FounderSection() {
  const links = founderLinks();

  return (
    <section className="border-t border-line py-20 md:py-28" aria-labelledby="founder-heading">
      <Container className="grid gap-10 md:grid-cols-[180px_1fr] md:gap-16">
        <div
          className="flex size-36 items-end border border-line bg-raised p-4 md:size-44"
          aria-hidden="true"
        >
          <span className="font-mono text-3xl tracking-[-0.04em] text-brass">TP</span>
        </div>
        <div>
          <SectionHeader id="founder-heading" eyebrow="Founder" title="Built by an engineer." />
          <p className="mt-8 text-xl font-medium tracking-[-0.03em] text-ink">{site.founder.name}</p>
          <p className="mt-1 font-mono text-[12px] tracking-[0.12em] text-faint uppercase">
            {site.founder.title}
          </p>
          <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-muted">
            <p>
              TwelveTwo Technology is an independent software engineering firm focused on building practical, reliable software.
            </p>
            <p>
              Travis works directly with clients to understand the problem, design the system, write the software, and get it into production.
            </p>
          </div>
          {links.length > 0 ? (
            <ul className="mt-6 flex gap-6">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink underline decoration-line-strong underline-offset-4 hover:decoration-brass"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {link.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
