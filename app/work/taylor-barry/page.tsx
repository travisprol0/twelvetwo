import Image from "next/image";
import { notFound } from "next/navigation";
import { getProject } from "@/content/projects";
import { pageMetadata } from "@/lib/metadata";
import { Container } from "@/components/layout/Container";
import { LinkButton } from "@/components/ui/Button";
import { Flow } from "@/components/ui/Flow";
import { TextLink } from "@/components/ui/TextLink";

const project = getProject("taylor-barry");

export const metadata = pageMetadata({
  title: "Taylor Barry",
  description:
    "A TwelveTwo case study: a fast, accessible teacher portfolio where each project-based learning case study is one content file plus photos.",
  path: "/work/taylor-barry",
});

const surfaces = [
  {
    title: "Home",
    body: "A principal sees who Taylor is and what she believes about how six- and seven-year-olds learn, without digging through menus.",
    image: 0,
  },
  {
    title: "Learning on Display gallery",
    body: "Her project-based work sits at the center. A curated gallery of cards, each linking to its own case study, with featured and ordering controls.",
    image: 1,
  },
  {
    title: "Project case studies",
    body: "Postcard Adventures is the first one written up: goals, standards, photos, and the story of how the class mascot sent postcards from habitats around the world.",
    image: 2,
  },
  {
    title: "Everything a hiring committee asks for",
    body: "Philosophy, classroom management, lesson plans, family partnership, resume, and an easy way to get in touch.",
  },
];

export default function TaylorBarryPage() {
  if (!project) {
    notFound();
  }

  return (
    <>
      <header className="border-b border-line pt-28 pb-14 sm:pt-36 sm:pb-20">
        <Container>
          <p className="font-mono text-[11px] tracking-[0.18em] text-faint uppercase">Taylor Barry</p>
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
            <p>A resume can&apos;t show what a classroom feels like.</p>
            <p>Hiring committees and principals give each candidate only a few minutes.</p>
            <p>A teacher needs to keep the site current herself, season after season.</p>
          </div>
        </section>

        <section className="grid gap-8 border-t border-line pt-16 md:grid-cols-2" aria-labelledby="solution-title">
          <h2 id="solution-title" className="text-3xl font-medium tracking-[-0.03em] text-ink">
            The solution
          </h2>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-muted">
              A warm, fast, static site that puts her project-based classroom work first. Each project is one content file plus photos, so adding, hiding, or reordering a project never means touching code. Accessibility (WCAG 2.1 AA) is the baseline, and hosting is free or low cost.
            </p>
            <Flow steps={project.flow} />
            <p className="font-mono text-[11px] tracking-[0.12em] text-faint uppercase">
              Built with {project.stack.join(", ")}
            </p>
          </div>
        </section>

        <section className="border-t border-line pt-16" aria-labelledby="surfaces-title">
          <h2 id="surfaces-title" className="text-3xl font-medium tracking-[-0.03em] text-ink">
            Site highlights
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
            Visit {project.externalLabel}
          </TextLink>
          <TextLink href="/contact">Start a project</TextLink>
        </div>
      </Container>
    </>
  );
}
