import type { Metadata } from "next";
import Link from "next/link";
import { news } from "@/content/news";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "News",
  description: "Announcements and member news from GAPI.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News"
        title="Latest from GAPI"
        description="Announcements, member updates, and program highlights."
      />
      <Section>
        <Container>
          <SectionHeading title="All stories" />
          <div className="mt-12 divide-y divide-line border-y border-line">
            {news.map((item) => (
              <article key={item.id} className="py-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-rausch">
                  {item.category} · {item.date}
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink">
                  {item.title}
                </h2>
                <p className="mt-3 max-w-3xl leading-relaxed text-ink-muted">{item.excerpt}</p>
                <p className="mt-4 text-sm text-ink-faint">By {item.author}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 text-sm text-ink-faint">
            Prefer email?{" "}
            <Link href="/newsletter" className="text-ink transition hover:text-rausch">
              Subscribe to the newsletter
            </Link>
          </p>
        </Container>
      </Section>
    </>
  );
}
