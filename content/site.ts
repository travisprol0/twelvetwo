const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://twelvetwo.com").replace(
  /\/$/,
  "",
);

export const site = {
  name: "TwelveTwo Technology",
  shortName: "TwelveTwo",
  url: siteUrl,
  email: "travis@twelvetwo.com",
  availableForProjects: true,
  positioning: "Software engineering for businesses that need to build.",
  secondary:
    "Custom software. Backend systems. APIs. Integrations. Product engineering.",
  homeTitle:
    "TwelveTwo Technology — Software Engineering for Businesses That Need to Build",
  homeDescription:
    "TwelveTwo Technology builds custom software, backend systems, APIs, integrations, internal tools, and products for businesses that need experienced engineering.",
  founder: {
    name: "Travis Prol",
    title: "Founder & Software Engineer",
    linkedin: "",
    github: "",
  },
  latticeLogUrl: "https://latticelog.com",
  copyrightYear: 2026,
} as const;

export const technologies = [
  "Python",
  "Django",
  "JavaScript",
  "TypeScript",
  "React",
  "PostgreSQL",
  "Docker",
  "REST APIs",
] as const;

export function founderLinks(): { label: string; href: string }[] {
  const links: { label: string; href: string }[] = [];
  const linkedin: string = site.founder.linkedin;
  const github: string = site.founder.github;
  if (linkedin) links.push({ label: "LinkedIn", href: linkedin });
  if (github) links.push({ label: "GitHub", href: github });
  return links;
}
