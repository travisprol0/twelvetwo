import { processSteps } from "@/content/process";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ProcessSection() {
  return (
    <section className="border-t border-line py-20 md:py-28" aria-labelledby="process-heading">
      <Container>
        <Reveal>
          <SectionHeader id="process-heading" eyebrow="Process / 01—05" title="A straightforward way to build software." />
        </Reveal>
        <ol className="mt-12 grid gap-px bg-line lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <li key={step.index} className="bg-canvas p-6">
              <Reveal delay={index * 0.05}>
                <p className="font-mono text-[11px] tracking-[0.14em] text-brass">{step.index}</p>
                <h3 className="mt-5 text-lg font-medium tracking-[-0.02em] text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
