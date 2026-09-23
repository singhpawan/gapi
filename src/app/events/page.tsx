import type { Metadata } from "next";
import Image from "next/image";
import { events } from "@/content/events";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Join GAPI for professional development, cultural celebrations, and community service events throughout the year.",
};

export default function EventsPage() {
  const upcoming = events.filter((e) => e.status === "upcoming");
  const past = events.filter((e) => e.status === "past");

  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Gather. Learn. Celebrate."
        description="Professional development, cultural celebrations, and community service across Georgia."
        imageSrc="/images/gallery/gapi-2.jpg"
      />

      <Section>
        <Container>
          <SectionHeading
            title="Upcoming"
            description={`${upcoming.length} scheduled programs`}
          />
          <div className="mt-12 divide-y divide-line border-y border-line">
            {upcoming.map((event) => (
              <article key={event.id} className="grid gap-4 py-10 lg:grid-cols-[12rem_1fr]">
                <div>
                  <p className="text-sm font-medium text-rausch">{event.date}</p>
                  {event.location ? (
                    <p className="mt-2 text-sm text-ink-faint">{event.location}</p>
                  ) : null}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-ink">
                    {event.title}
                  </h3>
                  <p className="mt-3 max-w-3xl leading-relaxed text-ink-muted">
                    {event.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="past" className="bg-surface">
        <Container>
          <SectionHeading title="Archive" description={`${past.length} recent programs`} />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {past.map((event) => (
              <article
                key={event.id}
                className="overflow-hidden rounded-[var(--radius)] border border-line bg-surface-elevated"
              >
                {event.image ? (
                  <div className="relative aspect-[16/9]">
                    <Image src={event.image} alt="" fill className="object-cover" sizes="50vw" />
                  </div>
                ) : null}
                <div className="p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-rausch">
                    {event.date}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink">
                    {event.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {event.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
