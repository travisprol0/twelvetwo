import { pageMetadata } from "@/lib/metadata";
import { projects } from "@/content/projects";
import { Container } from "@/components/layout/Container";
import { PageIntro } from "@/components/layout/PageIntro";
import { ProjectCard } from "@/components/work/ProjectCard";

export const metadata = pageMetadata({
  title: "Work",
  description:
    "Software built by TwelveTwo Technology, including Lattice Log greenhouse inventory software and a teacher portfolio site.",
  path: "/work",
});

export default function WorkPage() {
  const [featured, ...rest] = projects;

  return (
    <>
      <PageIntro eyebrow="Work" title="Software we've built.">
        <p>Real systems, real workflows, real software.</p>
      </PageIntro>
      <Container className="py-16 md:py-24">
        <ProjectCard project={featured} />
        {rest.length > 0 ? (
          <div className="mt-8 grid gap-8">
            {rest.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : null}
      </Container>
    </>
  );
}
