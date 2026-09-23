import type { Metadata } from "next";
import { site } from "@/content/site";
import { Container, Section } from "@/components/ui/section";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        description={`How ${site.shortName} handles information on this site.`}
      />
      <Section>
        <Container className="max-w-3xl space-y-4 leading-relaxed text-ink-muted">
          <p>
            This website may collect information you voluntarily submit through contact and
            newsletter forms, such as your name and email address. We use that information only to
            respond to inquiries and share organizational updates.
          </p>
          <p>
            We do not sell personal information. Access to submitted data is limited to GAPI
            administrators who need it to operate the organization.
          </p>
          <p>
            For privacy questions, contact{" "}
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
