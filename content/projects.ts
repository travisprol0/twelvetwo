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
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
