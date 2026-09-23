import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Container, Section } from "@/components/ui/section";

export function MembershipCta() {
  return (
    <Section className="bg-surface">
      <Container>
        <div className="relative overflow-hidden rounded-[calc(var(--radius)+4px)] border border-line bg-void px-8 py-14 sm:px-14">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-rausch/20 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-rausch">
                Membership
              </p>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Belong to Georgia&apos;s physician community of Indian heritage
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted">
                {site.tagline}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <ButtonLink href="/memberships" variant="primary">
                Become a Member
              </ButtonLink>
              <ButtonLink href="/contact" variant="outline">
                Contact us
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
