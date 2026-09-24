"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { moreNav, primaryNav, site } from "@/content/site";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/section";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
    setMoreOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!moreRef.current?.contains(event.target as Node)) {
        setMoreOpen(false);
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  const moreActive = moreNav.some((link) => pathname === link.href);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-void/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[var(--header-h)] w-full max-w-7xl items-center gap-4 px-5 sm:px-8 lg:gap-6">
        <Link
          href="/"
          aria-label={site.name}
          className="relative z-10 block shrink-0"
          style={{ width: 240, height: 36 }}
        >
          <Image
            src="/images/brand/gapi-wordmark.png"
            alt={site.name}
            fill
            className="object-contain object-left"
            sizes="240px"
            priority
          />
        </Link>

        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-1.5 xl:flex"
          aria-label="Main"
        >
          {primaryNav.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition duration-300",
                  active ? "text-ink" : "text-ink-muted hover:text-ink",
                )}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="relative" ref={moreRef}>
            <button
              type="button"
              className={cn(
                "whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition duration-300",
                moreActive || moreOpen ? "text-ink" : "text-ink-muted hover:text-ink",
              )}
              aria-expanded={moreOpen}
              aria-haspopup="menu"
              onClick={() => setMoreOpen((v) => !v)}
            >
              More
            </button>
            {moreOpen ? (
              <div
                role="menu"
                className="absolute left-1/2 top-[calc(100%+0.5rem)] min-w-[11rem] -translate-x-1/2 animate-fade-in rounded-2xl border border-line bg-surface-elevated p-1.5 shadow-[var(--shadow-soft)]"
              >
                {moreNav.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    role="menuitem"
                    className={cn(
                      "block rounded-xl px-3.5 py-2.5 text-sm transition",
                      pathname === link.href
                        ? "bg-white/5 text-ink"
                        : "text-ink-muted hover:bg-white/5 hover:text-ink",
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </nav>

        <div className="hidden shrink-0 xl:block">
          <ButtonLink
            href="/memberships"
            variant="primary"
            className="!whitespace-nowrap !px-4 !py-2.5"
          >
            Become a Member
          </ButtonLink>
        </div>

        <button
          type="button"
          className="ml-auto inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line xl:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="space-y-1.5">
            <span
              className={cn(
                "block h-0.5 w-4 bg-ink transition duration-300",
                open && "translate-y-2 rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-4 bg-ink transition duration-300",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-4 bg-ink transition duration-300",
                open && "-translate-y-2 -rotate-45",
              )}
            />
          </div>
        </button>
      </div>

      {open ? (
        <div className="animate-fade-in border-t border-line bg-void xl:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {[...primaryNav, ...moreNav].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-xl px-3 py-3 text-base font-medium transition",
                  pathname === link.href ? "bg-white/5 text-ink" : "text-ink-muted",
                )}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <ButtonLink href="/memberships" className="mt-3 w-full" variant="primary">
              Become a Member
            </ButtonLink>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
