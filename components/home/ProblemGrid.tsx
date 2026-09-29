import { problems } from "@/content/problems";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ProblemGrid() {
  return (
    <section className="border-t border-line py-20 md:py-28" aria-labelledby="problem-heading">
      <Container>
        <Reveal>
          <SectionHeader id="problem-heading" eyebrow="Problem / 02" title="Software should remove complexity, not add to it.">
            <p>
              Businesses rarely need more software. They need the right software—built around the way their business actually works.
            </p>
          </SectionHeader>
        </Reveal>
        <div className="mt-12 grid gap-px bg-line md:grid-cols-2">
          {problems.map((problem) => (
            <article
              key={problem.label}
              className="bg-canvas p-6 transition-colors hover:bg-raised sm:p-8"
            >
              <p className="font-mono text-[11px] tracking-[0.16em] text-faint uppercase">
                {problem.label}
              </p>
              <h3 className="mt-4 text-xl leading-snug font-medium tracking-[-0.03em] text-ink">
                {problem.title}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                {problem.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
