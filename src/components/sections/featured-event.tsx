import Image from "next/image";
import { featuredEvent } from "@/content/events";
import { ButtonLink } from "@/components/ui/button-link";
import { Container, Section, SectionHeading } from "@/components/ui/section";

export function FeaturedEvent() {
  return (
    <Section>
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-up">
            <SectionHeading
              eyebrow="Spotlight"
              title={featuredEvent.title}
              description={`${featuredEvent.date} · ${featuredEvent.location}`}
            />
            <p className="mt-5 text-base leading-relaxed text-ink-muted">
              {featuredEvent.blurb}
            </p>
            <div className="mt-8">
              <ButtonLink href="/events" variant="outline">
                View all events
              </ButtonLink>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {featuredEvent.images.slice(0, 4).map((src, i) => (
              <div
                key={src}
                className={`relative overflow-hidden rounded-[var(--radius)] ${i === 0 ? "col-span-2 aspect-[16/9]" : "aspect-[4/3]"}`}
              >
                <Image
                  src={src}
                  alt={`${featuredEvent.title} photo ${i + 1}`}
                  fill
                  className="object-cover transition duration-700 ease-[var(--ease-apple)] hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
