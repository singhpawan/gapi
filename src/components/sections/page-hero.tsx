import Image from "next/image";
import { Container } from "@/components/ui/section";

export function PageHero({
  eyebrow,
  title,
  description,
  imageSrc,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  imageSrc?: string;
}) {
  if (imageSrc) {
    return (
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image src={imageSrc} alt="" fill className="object-cover" sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/70 to-void/40" />
        </div>
        <Container className="relative py-24 sm:py-32">
          {eyebrow ? (
            <p className="animate-fade-up mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-rausch">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="animate-fade-up delay-1 max-w-3xl font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description ? (
            <p className="animate-fade-up delay-2 mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
              {description}
            </p>
          ) : null}
        </Container>
      </section>
    );
  }

  return (
    <section className="border-b border-line">
      <Container className="py-20 sm:py-24">
        {eyebrow ? (
          <p className="animate-fade-up mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-rausch">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="animate-fade-up delay-1 max-w-3xl font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="animate-fade-up delay-2 mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
