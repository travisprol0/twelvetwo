import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  const cover = project.images[1] ?? project.images[0];

  return (
    <article className="border border-line bg-raised">
      <Link href={`/work/${project.slug}`} className="group block">
        <div className="border-b border-line bg-canvas">
          <Image
            src={cover.src}
            alt={cover.alt}
            width={cover.width}
            height={cover.height}
            className="h-auto w-full transition-opacity group-hover:opacity-90"
            sizes="(min-width: 768px) 1080px, 100vw"
            priority
          />
        </div>
        <div className="flex items-start justify-between gap-6 p-6 sm:p-8">
          <div>
            <p className="font-mono text-[11px] tracking-[0.16em] text-faint uppercase">
              Selected work / {project.index}
            </p>
            <h2 className="mt-3 text-3xl font-medium tracking-[-0.03em] text-ink">{project.title}</h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">{project.subtitle}</p>
          </div>
          <span aria-hidden="true" className="mt-8 text-brass transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </div>
      </Link>
    </article>
  );
}
