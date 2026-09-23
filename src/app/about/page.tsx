import type { Metadata } from "next";
import { aboutCopy, missionPoints } from "@/content/about";
import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "About",
  description: aboutCopy.summary,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={site.name}
        title={aboutCopy.headline}
        description={aboutCopy.summary}
        imageSrc="/images/gallery/gapi-1.jpg"
      />

      <Section>
        <Container>
          <div className="mb-16 grid gap-8 border-y border-line py-10 sm:grid-cols-3">
            {site.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-4xl font-semibold text-ink">{stat.value}</p>
                <p className="mt-1 text-sm text-ink-muted">{stat.label}</p>
              </div>
            ))}
          </div>

          <SectionHeading title="Our mission" />
          <ul className="mt-12 max-w-3xl space-y-6">
            {missionPoints.map((point) => (
              <li key={point} className="flex gap-4 text-base leading-relaxed text-ink-muted">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rausch" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container className="grid gap-4 lg:grid-cols-2">
          <article className="rounded-[var(--radius)] border border-line bg-surface-elevated p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-ink">
              {aboutCopy.pac.title}
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">{aboutCopy.pac.body}</p>
          </article>
          <article className="rounded-[var(--radius)] border border-line bg-surface-elevated p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-ink">
              {aboutCopy.bylaws.title}
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">{aboutCopy.bylaws.body}</p>
            <div className="mt-6">
              <ButtonLink href="/contact" variant="outline">
                Request documents
              </ButtonLink>
            </div>
          </article>
        </Container>
      </Section>

      <Section>
        <Container className="flex flex-wrap gap-3">
          <ButtonLink href="/memberships">Join GAPI</ButtonLink>
          <ButtonLink href="/contact" variant="outline">
            Contact leadership
          </ButtonLink>
        </Container>
      </Section>
    </>
  );
}
