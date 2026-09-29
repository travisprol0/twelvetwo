import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/layout/Container";
import { PageIntro } from "@/components/layout/PageIntro";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Start a project with TwelveTwo Technology. Tell us what you are building and what kind of engineering help you need.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="Contact" title="Let's talk about what you're building.">
        <p>
          A short note is enough. If email is easier, write directly to{" "}
          <a href={`mailto:${site.email}`} className="text-ink underline decoration-line-strong underline-offset-4 hover:decoration-brass">
            {site.email}
          </a>
          .
        </p>
      </PageIntro>
      <Container className="max-w-3xl py-14 md:py-20">
        <ContactForm />
      </Container>
    </>
  );
}
