import Link from "next/link";
import { events } from "@/content/events";
import { ButtonLink } from "@/components/ui/button-link";
import { Container, Section, SectionHeading } from "@/components/ui/section";

export function EventsPreview() {
  const upcoming = events.filter((e) => e.status === "upcoming").slice(0, 3);

  return (
    <Section className="bg-surface">
      <Container>
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Calendar"
            title="Upcoming events"
            description="CME, culture, and community — across Georgia."
          />
          <ButtonLink href="/events" variant="outline">
            All events
          </ButtonLink>
        </div>

        <div className="divide-y divide-line border-y border-line">
          {upcoming.map((event) => (
            <article key={event.id} className="grid gap-3 py-8 sm:grid-cols-[11rem_1fr]">
              <p className="text-sm font-medium text-rausch">{event.date}</p>
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-ink">{event.title}</h3>
                {event.location ? (
                  <p className="mt-1 text-sm text-ink-faint">{event.location}</p>
                ) : null}
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-muted">
                  {event.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-sm text-ink-faint">
          Looking for past programs?{" "}
          <Link href="/events#past" className="text-ink transition hover:text-rausch">
            Browse the archive
          </Link>
        </p>
      </Container>
    </Section>
  );
}
