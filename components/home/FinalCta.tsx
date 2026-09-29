import { site } from "@/content/site";
import { Container } from "@/components/layout/Container";
import { LinkButton } from "@/components/ui/Button";

export function FinalCta() {
  return (
    <section className="border-t border-line" aria-labelledby="final-cta-heading">
      <Container className="py-20 md:py-32">
        <div className="border border-line bg-inset px-6 py-14 sm:px-12 sm:py-20">
          <p className="font-mono text-[11px] tracking-[0.18em] text-faint uppercase">
            Start / 07
          </p>
          <h2
            id="final-cta-heading"
            className="mt-5 max-w-3xl text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[0.98] font-medium tracking-[-0.04em] text-ink"
          >
            Have something that needs building?
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Tell us what you&apos;re working on. We&apos;ll figure out whether TwelveTwo is the right engineering partner.
          </p>
          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <LinkButton href="/contact">Start a project</LinkButton>
            <a
              href={`mailto:${site.email}`}
              className="font-mono text-sm text-ink underline decoration-line-strong underline-offset-4 hover:decoration-brass"
            >
              {site.email}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
