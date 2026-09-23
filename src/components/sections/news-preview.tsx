import Link from "next/link";
import { news } from "@/content/news";
import { ButtonLink } from "@/components/ui/button-link";
import { Container, Section, SectionHeading } from "@/components/ui/section";

export function NewsPreview() {
  return (
    <Section className="bg-surface">
      <Container>
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Updates" title="Latest news" />
          <ButtonLink href="/news" variant="outline">
            All news
          </ButtonLink>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {news.map((item) => (
            <Link
              key={item.id}
              href="/news"
              className="group rounded-[var(--radius)] border border-line bg-surface-elevated p-6 transition duration-300 ease-[var(--ease-apple)] hover:border-line-strong hover:bg-white/[0.03]"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-rausch">
                {item.category}
              </p>
              <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight text-ink transition group-hover:text-rausch">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.excerpt}</p>
              <p className="mt-6 text-xs text-ink-faint">
                {item.date} · {item.author}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
