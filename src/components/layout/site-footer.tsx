import Image from "next/image";
import Link from "next/link";
import { footerLinks, site } from "@/content/site";
import { Container } from "@/components/ui/section";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Image
            src="/images/brand/gapi-logo.png"
            alt={`${site.shortName} logo`}
            width={140}
            height={28}
            className="mb-5 h-7 w-auto brightness-0 invert"
          />
          <p className="max-w-xs text-sm leading-relaxed text-ink-muted">{site.tagline}</p>
        </div>

        <div>
          <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-faint">
            Contact
          </h3>
          <p className="text-sm text-ink-muted">{site.address.line1}</p>
          <p className="text-sm text-ink-muted">{site.address.line2}</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-3 inline-block text-sm font-medium text-rausch transition hover:text-ink"
          >
            {site.email}
          </a>
        </div>

        <div>
          <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-faint">
            Explore
          </h3>
          <ul className="space-y-2.5">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-ink-muted transition hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-faint">
            Follow
          </h3>
          <div className="flex flex-col gap-2.5 text-sm text-ink-muted">
            <a
              href={site.social.facebook}
              className="transition hover:text-ink"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            <a
              href={site.social.twitter}
              className="transition hover:text-ink"
              target="_blank"
              rel="noreferrer"
            >
              X (Twitter)
            </a>
          </div>
        </div>
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-col gap-3 py-5 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.shortName}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="transition hover:text-ink">
              Privacy
            </Link>
            <Link href="/terms" className="transition hover:text-ink">
              Terms
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
