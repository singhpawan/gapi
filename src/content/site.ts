export const site = {
  shortName: "GAPI",
  name: "Georgia Association of Physicians of Indian Heritage",
  tagline:
    "Empowering physicians of Indian origin in Georgia through professional development, cultural celebration, and community service.",
  url: "https://www.gapi.org",
  email: "info@gapi.org",
  address: {
    line1: "106 Erin Lee Court",
    line2: "Warner Robins, GA 31008",
  },
  social: {
    twitter: "https://twitter.com/gapi",
    facebook: "https://www.facebook.com/gapi",
  },
  stats: [
    { value: "30+", label: "Years serving Georgia" },
    { value: "2k+", label: "Physicians reached" },
    { value: "50+", label: "Events & programs" },
  ],
} as const;

/** Always-visible primary navigation */
export const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
  { href: "/clinic", label: "Clinic" },
  { href: "/memberships", label: "Memberships" },
] as const;

/** Nested under More / hamburger overflow */
export const moreNav = [
  { href: "/news", label: "News" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/sponsor", label: "Sponsor Us" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/clinic", label: "Clinic" },
  { href: "/memberships", label: "Memberships" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
] as const;
