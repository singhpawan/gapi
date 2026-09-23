import Image from "next/image";
import { galleryImages } from "@/content/events";
import { Container, Section, SectionHeading } from "@/components/ui/section";

export function GalleryStrip() {
  return (
    <Section className="overflow-hidden !pb-0">
      <Container className="pb-12">
        <SectionHeading
          eyebrow="Community"
          title="GAPI in action"
          description="Conventions, regional meetings, and service across Georgia."
        />
      </Container>
      <div className="flex gap-3 overflow-x-auto px-5 pb-20 sm:px-8 [scrollbar-width:none]">
        {galleryImages.map((image) => (
          <div
            key={image.src}
            className="relative h-60 w-[min(78vw,24rem)] shrink-0 overflow-hidden rounded-[var(--radius)] sm:h-80"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition duration-700 ease-[var(--ease-apple)] hover:scale-105"
              sizes="384px"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/40 to-transparent" />
          </div>
        ))}
      </div>
    </Section>
  );
}
