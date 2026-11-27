export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  summary: string;
  caseStudyTitle: string;
  caseStudyDescription: string;
  externalUrl: string;
  externalLabel: string;
  stack: string[];
  flow: string[];
  images: ProjectImage[];
};

export const projects: Project[] = [
  {
    slug: "lattice-log",
    index: "001",
    title: "Lattice Log",
    subtitle:
      "Greenhouse inventory software built around the way nurseries actually work.",
    summary:
      "Lattice Log gives greenhouse teams one place to manage plant inventory while keeping a live availability list in sync for customers.",
    caseStudyTitle: "Greenhouse inventory software, built from the ground up.",
    caseStudyDescription:
      "A system for managing greenhouse inventory and giving customers a live view of what is available.",
    externalUrl: "https://latticelog.com",
    externalLabel: "LatticeLog.com",
    stack: ["Python", "Django", "PostgreSQL"],
    flow: ["Catalog", "Inventory", "Availability", "Customer"],
    images: [
      {
        src: "/work/lattice-log/catalog.png",
        alt: "Lattice Log catalog listing the plant items a nursery team sells.",
        width: 2560,
        height: 690,
        caption: "Catalog — items the team sells.",
      },
      {
        src: "/work/lattice-log/inventory.png",
        alt: "Lattice Log inventory table showing plant batches and counts by status.",
        width: 2574,
        height: 1354,
        caption: "Inventory — batches on the bench.",
      },
      {
        src: "/work/lattice-log/availability.png",
        alt: "Lattice Log public availability list that customers can filter without logging in.",
        width: 2542,
        height: 1206,
        caption: "Availability — what buyers see.",
      },
    ],
  },
  {
    slug: "taylor-barry",
    index: "002",
    title: "Taylor Barry",
    subtitle:
      "A teaching portfolio that shows principals what a first grade classroom looks like in practice.",
    summary:
      "A fast, accessible static site for a first grade teacher, built around a gallery of project-based Learning on Display case studies she can update without touching code.",
    caseStudyTitle: "A teacher portfolio built to be read in five minutes.",
    caseStudyDescription:
      "A portfolio site that gives hiring committees a clear, warm picture of a teacher's classroom, with her project-based work at the center.",
    externalUrl: "https://taylorbarry.onrender.com",
    externalLabel: "taylorbarry.onrender.com",
    stack: ["Astro", "TypeScript", "Markdown", "Static hosting"],
    flow: ["Project file", "Photos", "Case study", "Principal"],
    images: [
      {
        src: "/work/taylor-barry/home.png",
        alt: "Taylor Barry portfolio home page with her name, tagline, and a portrait.",
        width: 2560,
        height: 1600,
        caption: "Home — who she is, at a glance.",
      },
      {
        src: "/work/taylor-barry/projects.png",
        alt: "Learning on Display project gallery with photo cards for each classroom project.",
        width: 2560,
        height: 1600,
        caption: "Projects — the Learning on Display gallery.",
      },
      {
        src: "/work/taylor-barry/postcard.png",
        alt: "Postcard Adventures case study page describing a habitat project led by the class mascot.",
        width: 2560,
        height: 1600,
        caption: "Case study — one project, in depth.",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
