import { technologies } from "@/content/site";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function TechList() {
  return (
    <section className="border-t border-line py-20 md:py-28" aria-labelledby="tech-heading">
      <Container>
        <SectionHeader id="tech-heading" eyebrow="Specification" title="Technologies we work with." />
        <ul className="mt-10 grid grid-cols-2 gap-px bg-line sm:grid-cols-4">
          {technologies.map((name) => (
            <li key={name} className="bg-canvas px-4 py-5 font-mono text-sm tracking-wide text-ink">
              {name}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
