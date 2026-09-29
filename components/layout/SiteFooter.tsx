import Link from "next/link";
import { footerNav } from "@/content/navigation";
import { founderLinks, site } from "@/content/site";
import { Availability } from "./Availability";
import { Container } from "./Container";

export function SiteFooter() {
  const socials = founderLinks();

  return (
    <footer className="border-t border-line">
      <Container className="grid gap-12 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:py-16">
        <div>
          <p className="text-lg font-medium tracking-[-0.03em] text-ink">
            {site.name}
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            {site.positioning}
          </p>
          <Availability className="mt-6" />
        </div>

        <nav aria-label="Footer">
          <p className="font-mono text-[11px] tracking-[0.16em] text-faint uppercase">
            Navigate
          </p>
          <ul className="mt-4 space-y-2.5">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-muted hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-mono text-[11px] tracking-[0.16em] text-faint uppercase">
            Elsewhere
          </p>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a
                href={site.latticeLogUrl}
                className="text-sm text-muted hover:text-ink"
                rel="noopener noreferrer"
                target="_blank"
              >
                Lattice Log
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            {socials.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted hover:text-ink"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {link.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${site.email}`} className="text-sm text-muted hover:text-ink">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <Container className="border-t border-line py-5">
        <p className="font-mono text-[11px] tracking-[0.08em] text-faint">
          © {site.copyrightYear} {site.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
