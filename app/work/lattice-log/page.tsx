import Image from "next/image";
import { notFound } from "next/navigation";
import { getProject } from "@/content/projects";
import { pageMetadata } from "@/lib/metadata";
import { Container } from "@/components/layout/Container";
import { LinkButton } from "@/components/ui/Button";
import { Flow } from "@/components/ui/Flow";
import { TextLink } from "@/components/ui/TextLink";

const project = getProject("lattice-log");

export const metadata = pageMetadata({
  title: "Lattice Log",
  description:
    "A TwelveTwo case study: Lattice Log is greenhouse inventory software that keeps staff inventory and a public availability list in sync.",
  path: "/work/lattice-log",
});

const surfaces = [
  {
    title: "Catalog",
    body: "Items your team sells. Varieties, containers, and programs live in one list the nursery can import or build itself.",
    image: 0,
  },
  {
    title: "Inventory",
    body: "Batches on the bench. Staff track counts by status as plants move through the season.",
    image: 1,
  },
  {
    title: "Availability",
    body: "What buyers see. A filterable public list, with no login required, stays aligned with sellable inventory.",
    image: 2,
  },
  {
    title: "Customer requests",
    body: "Capture buyer interest when enabled. Wish-list requests sit on the public availability experience instead of in a separate inbox.",
  },
  {
    title: "Exports",
    body: "CSV and PDF output for operational use, so the same availability can leave the screen when the team needs a file.",
  },
];

export default function LatticeLogPage() {
  if (!project) {
    notFound();
  }

  return (
    <>
      <header className="border-b border-line pt-28 pb-14 sm:pt-36 sm:pb-20">
        <Container>
          <p className="font-mono text-[11px] tracking-[0.18em] text-faint uppercase">Lattice Log</p>
          <h1 className="mt-5 max-w-4xl text-[clamp(2.5rem,5.6vw,4.6rem)] leading-[0.98] font-medium tracking-[-0.04em] text-balance text-ink">
            {project.caseStudyTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {project.caseStudyDescription}
          </p>
          <div className="mt-8">
            <LinkButton href={project.externalUrl} external>
              Visit {project.externalLabel}
            </LinkButton>
          </div>
        </Container>
      </header>

      <Container className="grid gap-16 py-16 md:py-24">
        <section className="grid gap-8 md:grid-cols-2" aria-labelledby="problem-title">
          <h2 id="problem-title" className="text-3xl font-medium tracking-[-0.03em] text-ink">
            The problem
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-muted">
            <p>Greenhouse inventory is operationally complex.</p>
            <p>Staff need to know what&apos;s actually available.</p>
            <p>Customers need a simple way to see what can be purchased.</p>
            <p>Those two needs need to stay synchronized.</p>
          </div>
        </section>

        <section className="grid gap-8 border-t border-line pt-16 md:grid-cols-2" aria-labelledby="solution-title">
          <h2 id="solution-title" className="text-3xl font-medium tracking-[-0.03em] text-ink">
            The solution
          </h2>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-muted">
              Lattice Log connects the internal inventory workflow to a public availability experience. Inventory and availability are two views of the same sellable counts.
            </p>
            <Flow steps={project.flow} />
            <p className="font-mono text-[11px] tracking-[0.12em] text-faint uppercase">
              Built with {project.stack.join(", ")}
            </p>
          </div>
        </section>

        <section className="border-t border-line pt-16" aria-labelledby="surfaces-title">
          <h2 id="surfaces-title" className="text-3xl font-medium tracking-[-0.03em] text-ink">
            Product surfaces
          </h2>
          <div className="mt-10 space-y-14">
            {surfaces.map((surface) => {
              const image = surface.image !== undefined ? project.images[surface.image] : undefined;
              return (
                <article key={surface.title} className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
                  <div>
                    <h3 className="text-xl font-medium tracking-[-0.02em] text-ink">{surface.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{surface.body}</p>
                  </div>
                  {image ? (
                    <figure className="border border-line bg-raised">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        className="h-auto w-full"
                        sizes="(min-width: 1024px) 640px, 100vw"
                      />
                      <figcaption className="border-t border-line px-3 py-2 font-mono text-[10px] tracking-[0.12em] text-faint uppercase">
                        {image.caption}
                      </figcaption>
                    </figure>
                  ) : null}
                </article>
              );
            })}
          </div>
        </section>

        <div className="flex flex-col items-start gap-4 border-t border-line pt-12 sm:flex-row sm:gap-8">
          <TextLink href={project.externalUrl} external>
            Visit LatticeLog.com
          </TextLink>
          <TextLink href="/contact">Start a project</TextLink>
        </div>
      </Container>
    </>
  );
}
