export type Service = {
  slug: string;
  index: string;
  title: string;
  summary: string;
  onHomepage: boolean;
  problems: string[];
  deliverables: string[];
};

export const services: Service[] = [
  {
    slug: "custom-software",
    index: "01",
    title: "Custom Software",
    summary:
      "Applications built around your business instead of forcing your business into someone else's workflow.",
    onHomepage: true,
    problems: [
      "A workflow lives in spreadsheets, inboxes, and side conversations.",
      "An off-the-shelf tool almost fits, and the gaps cost time every week.",
      "The business has a specific way of working that generic software ignores.",
    ],
    deliverables: [
      "A working application shaped around the real workflow.",
      "The data model and core screens the team actually uses.",
      "Deployment and a clear handoff.",
    ],
  },
  {
    slug: "backend-apis",
    index: "02",
    title: "Backend & APIs",
    summary:
      "Business logic, data models, APIs, services, authentication, integrations, and the infrastructure behind the product.",
    onHomepage: true,
    problems: [
      "The product needs a backend that can be trusted in production.",
      "Permissions, data, and business rules are tangled together.",
      "Other systems need a stable way to read and write your data.",
    ],
    deliverables: [
      "API and service design.",
      "Implementation of the business logic and data model.",
      "Authentication and the integration points other systems depend on.",
    ],
  },
  {
    slug: "product-engineering",
    index: "03",
    title: "Product Engineering",
    summary:
      "Take a product from concept or prototype through architecture, implementation, deployment, and iteration.",
    onHomepage: true,
    problems: [
      "There is a prototype, and it needs to become software people can rely on.",
      "The product direction is clear, and the engineering is not staffed.",
      "A first version needs to ship without painting the team into a corner.",
    ],
    deliverables: [
      "Architecture for the first version that can be extended.",
      "Implementation through deployment.",
      "A path for the next iteration.",
    ],
  },
  {
    slug: "internal-tools",
    index: "04",
    title: "Internal Tools",
    summary:
      "Purpose-built systems that replace spreadsheets, manual processes, and disconnected workflows.",
    onHomepage: true,
    problems: [
      "The same data is copied between spreadsheets.",
      "A process depends on one person who knows the steps.",
      "Reporting takes longer than the work it describes.",
    ],
    deliverables: [
      "A tool built around the team's actual steps.",
      "The records, statuses, and exports the operation needs.",
      "A handoff the team can run without a developer in the room.",
    ],
  },
  {
    slug: "integrations",
    index: "05",
    title: "Integrations",
    summary:
      "Connect CRMs, ERPs, SaaS platforms, databases, third-party APIs, and internal systems.",
    onHomepage: true,
    problems: [
      "Two systems that should share data are updated by hand.",
      "A vendor API exists, and nobody has wired it into the workflow.",
      "Failures between systems are silent until a customer notices.",
    ],
    deliverables: [
      "A defined contract between the systems involved.",
      "A working integration with failure handling.",
      "A way to see when the connection breaks.",
    ],
  },
  {
    slug: "legacy-modernization",
    index: "06",
    title: "Legacy Modernization",
    summary:
      "Refactor, stabilize, migrate, or incrementally replace software that has become difficult to maintain.",
    onHomepage: true,
    problems: [
      "A change that should be small is risky.",
      "The system works, and nobody wants to touch it.",
      "A rewrite is tempting, and a careful replacement would be safer.",
    ],
    deliverables: [
      "An honest read of what should be stabilized, refactored, or replaced.",
      "Incremental changes that keep the business running.",
      "Clearer structure for the next person who has to change it.",
    ],
  },
  {
    slug: "contract-engineering",
    index: "07",
    title: "Contract Engineering",
    summary:
      "Bring TwelveTwo in when your team needs additional engineering capacity.",
    onHomepage: false,
    problems: [
      "The backlog is real, and hiring a full-time engineer would take too long.",
      "A project needs a senior engineer for a defined stretch of work.",
      "The team is strong, and it is short one person who can ship.",
    ],
    deliverables: [
      "Engineering capacity inside your existing workflow.",
      "Working software, not a stack of recommendations.",
      "A clean handoff when the engagement ends.",
    ],
  },
  {
    slug: "technical-consulting",
    index: "08",
    title: "Technical Consulting",
    summary:
      "Architecture reviews, technical direction, system design, modernization planning, and implementation guidance.",
    onHomepage: false,
    problems: [
      "A technical decision is about to get expensive to reverse.",
      "The team wants a second read on the architecture before building.",
      "Modernization needs a plan, not a slogan.",
    ],
    deliverables: [
      "A written recommendation tied to the actual system.",
      "Architecture or modernization direction the team can execute.",
      "Implementation guidance, and build work when you want it done.",
    ],
  },
];

export const homepageServices = services.filter((service) => service.onHomepage);
