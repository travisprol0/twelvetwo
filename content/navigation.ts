export const primaryNav = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
] as const;

export const footerNav = [
  ...primaryNav,
  { href: "/contact", label: "Contact" },
] as const;
