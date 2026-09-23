"use client";

import { FormEvent, useState } from "react";
import { Container, Section, SectionHeading } from "@/components/ui/section";

export function NewsletterSignup() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <Section>
      <Container className="max-w-2xl">
        <SectionHeading
          eyebrow="Stay close"
          title="News in your inbox"
          description="Events, clinic updates, and member news — unsubscribe anytime."
          align="center"
        />
        {submitted ? (
          <p className="mt-10 text-center text-base font-medium text-ink animate-fade-in">
            You&apos;re on the list. Welcome.
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              className="h-12 flex-1 rounded-full border border-line bg-surface px-5 text-sm text-ink outline-none transition placeholder:text-ink-faint focus:border-rausch/60"
            />
            <button
              type="submit"
              className="h-12 rounded-full bg-rausch px-6 text-sm font-semibold text-white transition duration-300 hover:bg-rausch-dark"
            >
              Subscribe
            </button>
          </form>
        )}
      </Container>
    </Section>
  );
}
