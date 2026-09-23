# GAPI.org rebuild

A from-scratch rebuild of [gapi.org](https://www.gapi.org) — the Georgia Association of Physicians of Indian Heritage — with an Airbnb-inspired design system and a content-driven architecture for easy updates.

## Purpose (from the current site)

GAPI is a professional association for physicians of Indian origin in Georgia. The site supports:

- Membership and community networking
- Events / CME / cultural programming
- Free clinic information
- News and newsletter signup
- Sponsorship partnerships

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS v4 design tokens (Rausch coral, no purple)
- Content modules in `src/content/*` (edit copy/events/news/sponsors without touching layout code)
- Extracted brand, gallery, event, and sponsor images in `public/images/`

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Updating content

| What | Where |
|------|--------|
| Org name, nav, contact | `src/content/site.ts` |
| Mission / about | `src/content/about.ts` |
| Events & gallery paths | `src/content/events.ts` |
| News | `src/content/news.ts` |
| Sponsors | `src/content/sponsors.ts` |
| Clinic | `src/content/clinic.ts` |
| Membership tiers | `src/content/memberships.ts` |
| Images | `public/images/**` |

## Design notes

- **Mood:** Dark cinematic (Tesla/Apple) with Airbnb-warm coral CTAs and photography
- **Nav:** Primary — Home, Events, About, Clinic, Memberships · More — News, Newsletter, Sponsor, Contact
- **Hero job:** Brand + purpose → Become a Member (primary) · Upcoming events (secondary) · Next event proof line
- **Motion:** Subtle Apple-like fades (`animate-fade-up` / `animate-fade-in`)
- Section components under `src/components/sections`
- Shared chrome in `src/components/layout`
