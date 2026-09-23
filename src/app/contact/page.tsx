import type { Metadata } from "next";
import { site } from "@/content/site";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { PageHero } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach the GAPI team for membership, sponsorship, events, and clinic questions.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We'd love to hear from you"
        description="Membership, sponsorship, events, or the free clinic — send a note. We respond within 24–48 hours."
      />

      <Section>
        <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading title="Direct lines" />
            <div className="mt-8 space-y-8 text-sm leading-relaxed text-ink-muted">
              <div>
                <p className="mb-1 font-medium text-ink">Email</p>
                <a href={`mailto:${site.email}`} className="text-rausch transition hover:text-ink">
                  {site.email}
                </a>
              </div>
              <div>
                <p className="mb-1 font-medium text-ink">Mailing address</p>
                <p>{site.address.line1}</p>
                <p>{site.address.line2}</p>
              </div>
            </div>
          </div>
          <ContactForm />
        </Container>
      </Section>
    </>
  );
}
