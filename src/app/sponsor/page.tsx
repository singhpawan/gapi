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
          <SectionHeading
            title="Current partners"
            description={`${sponsors.length} organizations standing with GAPI.`}
          />
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {sponsors.map((sponsor) => (
              <a
                key={sponsor.name}
                href={sponsor.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${sponsor.name} website`}
                className="flex h-28 flex-col items-center justify-center rounded-[var(--radius)] border border-line bg-white px-4 transition hover:border-rausch/40"
              >
                <Image
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  width={160}
                  height={64}
                  className="max-h-12 w-auto object-contain"
                />
              </a>
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
