import Image from "next/image";
import { sponsors } from "@/content/sponsors";
import { ButtonLink } from "@/components/ui/button-link";
import { Container, Section, SectionHeading } from "@/components/ui/section";

export function SponsorsStrip() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Partners"
          title="Our sponsors"
          description="Organizations that help make the mission possible."
          align="center"
        />
        <div className="mt-14 grid grid-cols-2 items-center gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex h-24 items-center justify-center rounded-[var(--radius)] border border-line bg-surface px-4"
            >
              <Image
                src={sponsor.logo}
                alt={`${sponsor.name} logo`}
                width={150}
                height={56}
                className="max-h-10 w-auto object-contain brightness-0 invert opacity-70"
              />
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <ButtonLink href="/sponsor" variant="outline">
            Become a sponsor
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
