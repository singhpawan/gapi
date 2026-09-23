import type { Metadata } from "next";
import { site } from "@/content/site";
import { Container, Section } from "@/components/ui/section";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Terms & Conditions",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms & Conditions"
        description={`Guidelines for using the ${site.shortName} website.`}
      />
      <Section>
        <Container className="max-w-3xl space-y-4 leading-relaxed text-ink-muted">
          <p>
            Content on this website is provided for general informational purposes about GAPI
            programs, membership, and community services. Event details may change; always confirm
            dates and registration with organizers.
          </p>
          <p>
            Clinic information describes community services offered subject to volunteer
            availability and capacity. Services are not a substitute for emergency care.
          </p>
          <p>
            Questions about these terms can be sent to{" "}
            <a className="text-rausch transition hover:text-ink" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </p>
        </Container>
      </Section>
    </>
  );
}
