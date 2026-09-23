import { site } from "@/content/site";
import { Container, Section } from "@/components/ui/section";

export function StatsRow() {
  return (
    <Section className="!py-0">
      <Container>
        <div className="grid grid-cols-1 divide-y divide-line border-y border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {site.stats.map((stat, index) => (
            <div
              key={stat.label}
              className="animate-fade-up px-2 py-10 text-center sm:px-8 sm:text-left"
              style={{ animationDelay: `${0.08 * index}s` }}
            >
              <p className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-ink-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
