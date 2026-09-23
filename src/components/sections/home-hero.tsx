import Image from "next/image";
import Link from "next/link";
import { events } from "@/content/events";
import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/section";

export function HomeHero() {
  const nextEvent =
    events.find((event) => event.status === "upcoming") ?? events[0];

  return (
    <section className="relative isolate min-h-[calc(100svh-var(--header-h))] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/events/DJP05056.jpg"
          alt="GAPI community gathering"
          fill
          priority
          className="object-cover animate-slow-zoom"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-void/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-void/85 via-void/45 to-void/10" />
        <div className="absolute inset-0 bg-void/20" />
      </div>

      <Container className="relative flex min-h-[calc(100svh-var(--header-h))] flex-col justify-end pb-16 pt-28 sm:pb-24">
        <p className="animate-fade-up mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-rausch">
          {site.shortName}
        </p>
        <h1 className="animate-fade-up delay-1 max-w-4xl font-display text-5xl font-semibold leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-7xl">
          {site.shortName}
        </h1>
        <p className="animate-fade-up delay-2 mt-6 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl">
          {site.tagline}
        </p>

        <div className="animate-fade-up delay-3 mt-10 flex flex-wrap items-center gap-3">
          <ButtonLink href="/memberships" variant="primary">
            Become a Member
          </ButtonLink>
          <ButtonLink href="/events" variant="outline">
            Upcoming events
          </ButtonLink>
        </div>

        {nextEvent ? (
          <Link
            href="/events"
            className="animate-fade-up delay-4 group mt-12 inline-flex max-w-xl flex-col gap-1 border-t border-line pt-6 sm:flex-row sm:items-baseline sm:gap-6"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-faint">
              Next
            </span>
            <span className="text-sm text-ink-muted transition group-hover:text-ink sm:text-base">
              <span className="font-medium text-ink">{nextEvent.title}</span>
              <span className="text-ink-faint"> · {nextEvent.date}</span>
            </span>
          </Link>
        ) : null}
      </Container>
    </section>
  );
}
