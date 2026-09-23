import type { Metadata } from "next";
import { membershipTiers } from "@/content/memberships";
import { ButtonLink } from "@/components/ui/button-link";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Memberships",
  description: "Join GAPI and connect with physicians of Indian heritage across Georgia.",
};

export default function MembershipsPage() {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Belong here."
        description="CME, regional meetings, mentorship, advocacy, and cultural celebration — for physicians building community in Georgia."
        imageSrc="/images/gallery/gapi-3.jpg"
      />

      <Section>
        <Container>
          <SectionHeading title="Pathways" />
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {membershipTiers.map((tier) => (
              <article
                key={tier.id}
                className="flex flex-col rounded-[var(--radius)] border border-line bg-surface p-7"
              >
                <h3 className="text-xl font-semibold tracking-tight text-ink">{tier.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                  {tier.description}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex gap-2 text-sm text-ink-muted">
                      <span className="text-rausch">✓</span>
                      {perk}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            <ButtonLink href="/contact">Start your membership</ButtonLink>
            <ButtonLink href="/about" variant="outline">
              Learn about GAPI
            </ButtonLink>
          </div>
        </Container>
      </Section>
    </>
  );
}
