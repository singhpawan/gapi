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
          description="We're grateful for the support of our generous sponsors who help make our mission possible."
          align="center"
        />
        <div className="mt-14 grid grid-cols-2 items-stretch gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {sponsors.map((sponsor) => (
            <a
              key={sponsor.name}
              href={sponsor.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit ${sponsor.name} website`}
              className="group flex h-28 flex-col items-center justify-center rounded-[var(--radius)] border border-line bg-white px-4 transition duration-300 hover:border-rausch/40 hover:shadow-[0_12px_40px_rgba(255,90,95,0.12)]"
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
        <div className="mt-12 text-center">
          <ButtonLink href="/sponsor" variant="outline">
            Become a sponsor
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
