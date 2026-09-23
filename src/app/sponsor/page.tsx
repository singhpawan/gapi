import type { Metadata } from "next";
import Image from "next/image";
import { sponsors } from "@/content/sponsors";
import { ButtonLink } from "@/components/ui/button-link";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Sponsor Us",
  description: "Partner with GAPI to support physicians and community health across Georgia.",
};

export default function SponsorPage() {
  return (
    <>
      <PageHero
        eyebrow="Sponsorship"
        title="Support a mission that reaches physicians and families"
        description="Power CME, regional meetings, cultural events, and free clinic care."
      />

      <Section>
        <Container>
          <SectionHeading title="Current partners" />
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.name}
                className="flex h-28 items-center justify-center rounded-[var(--radius)] border border-line bg-surface px-4"
              >
                <Image
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  width={150}
                  height={56}
                  className="max-h-12 w-auto object-contain brightness-0 invert opacity-75"
                />
              </div>
            ))}
          </div>
          <div className="mt-14 rounded-[var(--radius)] border border-line bg-surface p-8 sm:p-12">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">
              Become a sponsor
            </h2>
            <p className="mt-3 max-w-2xl text-ink-muted">
              Reach engaged physician audiences across Georgia while supporting education,
              advocacy, and community health.
            </p>
            <div className="mt-8">
              <ButtonLink href="/contact" variant="primary">
                Talk with us
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
