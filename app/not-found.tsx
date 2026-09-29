import { pageMetadata } from "@/lib/metadata";
import { Container } from "@/components/layout/Container";
import { LinkButton } from "@/components/ui/Button";

export const metadata = pageMetadata({
  title: "Page not found",
  description: "This page is not part of the TwelveTwo Technology site.",
  path: "/404",
});

export default function NotFound() {
  return (
    <Container className="py-36 sm:py-44">
      <p className="font-mono text-[11px] tracking-[0.18em] text-faint uppercase">System / 404</p>
      <h1 className="mt-5 max-w-xl text-4xl font-medium tracking-[-0.04em] text-ink sm:text-6xl">
        This page isn&apos;t part of the system.
      </h1>
      <p className="mt-5 max-w-md text-base text-muted">
        The address does not match a page on the TwelveTwo site.
      </p>
      <div className="mt-8">
        <LinkButton href="/">Back to the homepage</LinkButton>
      </div>
    </Container>
  );
}
