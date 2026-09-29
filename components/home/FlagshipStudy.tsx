import Image from "next/image";
import { projects } from "@/content/projects";
import { Container } from "@/components/layout/Container";
import { Flow } from "@/components/ui/Flow";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/TextLink";

export function FlagshipStudy() {
  const project = projects[0];

  return (
    <section className="border-t border-line bg-raised py-20 md:py-28" aria-labelledby="flagship-heading">
      <Container>
        <Reveal>
          <p className="font-mono text-[11px] tracking-[0.18em] text-faint uppercase">
            Selected work / {project.index}
          </p>
          <h2
            id="flagship-heading"
            className="mt-4 text-[clamp(2.4rem,5vw,4.25rem)] leading-[0.98] font-medium tracking-[-0.04em] text-ink"
          >
            Built by TwelveTwo
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="font-mono text-[11px] tracking-[0.16em] text-brass uppercase">
              {project.title}
            </p>
            <h3 className="mt-3 text-2xl leading-snug font-medium tracking-[-0.03em] text-ink sm:text-3xl">
              {project.subtitle}
            </h3>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
              {project.summary}
            </p>
            <div className="mt-8">
              <Flow steps={project.flow} />
            </div>
            <p className="mt-8 font-mono text-[11px] tracking-[0.12em] text-faint uppercase">
              {project.stack.join(" · ")}
            </p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:gap-8">
              <TextLink href={`/work/${project.slug}`}>View the Lattice Log case study</TextLink>
              <TextLink href={project.externalUrl} external>
                Visit LatticeLog.com
              </TextLink>
            </div>
          </div>

          <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:snap-none sm:overflow-visible sm:px-0">
            {project.images.map((image) => (
              <figure
                key={image.src}
                className="w-[82%] shrink-0 snap-start border border-line bg-canvas sm:w-auto"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="h-auto w-full"
                  sizes="(min-width: 1024px) 34vw, 82vw"
                />
                <figcaption className="border-t border-line px-3 py-2 font-mono text-[10px] tracking-[0.12em] text-faint uppercase">
                  {image.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
