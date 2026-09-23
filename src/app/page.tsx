import { EventsPreview } from "@/components/sections/events-preview";
import { FeaturedEvent } from "@/components/sections/featured-event";
import { GalleryStrip } from "@/components/sections/gallery-strip";
import { HomeHero } from "@/components/sections/home-hero";
import { MembershipCta } from "@/components/sections/membership-cta";
import { NewsPreview } from "@/components/sections/news-preview";
import { NewsletterSignup } from "@/components/sections/newsletter-signup";
import { SponsorsStrip } from "@/components/sections/sponsors-strip";
import { StatsRow } from "@/components/sections/stats-row";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <StatsRow />
      <FeaturedEvent />
      <EventsPreview />
      <MembershipCta />
      <GalleryStrip />
      <NewsPreview />
      <SponsorsStrip />
      <NewsletterSignup />
    </>
  );
}
