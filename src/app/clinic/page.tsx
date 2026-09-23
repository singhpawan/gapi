import type { Metadata } from "next";
import { clinic } from "@/content/clinic";
import { ButtonLink } from "@/components/ui/button-link";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "GAPI Clinic",
  description: clinic.summary,
};

export default function ClinicPage() {
  return (
    <>
      <PageHero
        eyebrow="Community care"
        title={clinic.headline}
        description={clinic.summary}
        imageSrc="/images/gallery/gapi-5.jpg"
      />

      <Section>
        <Container>
          <div className="grid gap-3 sm:grid-cols-3">
            {clinic.schedule.map((item) => (
              <div
                key={item.label}
                className="rounded-[var(--radius)] border border-line bg-surface p-6"
              >
                <p className="text-xl font-semibold tracking-tight text-ink">{item.label}</p>
                <p className="mt-1 text-sm text-ink-muted">{item.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <ButtonLink href={clinic.mapsUrl} external variant="outline">
              Open in Google Maps
            </ButtonLink>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <SectionHeading title="Services available" />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {clinic.services.map((service) => (
              <li
                key={service}
                className="flex items-center gap-3 rounded-[var(--radius)] border border-line bg-surface-elevated px-5 py-4 text-ink"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-rausch" />
                {service}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-2">
          <article>
            <SectionHeading title={clinic.fluProgram.title} />
            <p className="mt-5 leading-relaxed text-ink-muted">{clinic.fluProgram.body}</p>
            <ul className="mt-5 space-y-2">
              {clinic.fluProgram.dates.map((date) => (
                <li key={date} className="font-medium text-ink">
                  {date}
                </li>
              ))}
            </ul>
            <p className="mt-6 leading-relaxed text-ink-muted">{clinic.fluProgram.thanks}</p>
          </article>
          <article className="rounded-[var(--radius)] border border-line bg-void p-8">
            <h3 className="text-xl font-semibold text-ink">What to expect</h3>
            <ul className="mt-6 space-y-4">
              {clinic.highlights.map((item) => (
                <li key={item} className="flex gap-3 text-ink-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rausch" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </Container>
      </Section>
    </>
  );
}
