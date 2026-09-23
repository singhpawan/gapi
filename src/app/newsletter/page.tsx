import type { Metadata } from "next";
import { NewsletterSignup } from "@/components/sections/newsletter-signup";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Newsletter",
  description: "Subscribe for GAPI news, events, and member updates.",
};

export default function NewsletterPage() {
  return (
    <>
      <PageHero
        eyebrow="Newsletter"
        title="Stay close to the community"
        description="Event announcements, clinic updates, and member news — delivered quietly."
      />
      <NewsletterSignup />
    </>
  );
}
