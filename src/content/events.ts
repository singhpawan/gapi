export type EventItem = {
  id: string;
  title: string;
  date: string;
  location?: string;
  description: string;
  status: "upcoming" | "past";
  ctaHref?: string;
  image?: string;
};

export const featuredEvent = {
  id: "atlanta-regional-2026",
  title: "2026 Greater Atlanta GAPI Regional Meeting & MSRF Health Fair",
  date: "January 17, 2026",
  location: "Jade Banquets — 4675 River Green Parkway, Duluth, GA 30096",
  blurb: "Greater Atlanta GAPI Regional Meeting & MSRF Health Fair — a grand success.",
  images: [
    "/images/events/DJP04035.jpg",
    "/images/events/DJP04073.jpg",
    "/images/events/DJP04155.jpg",
    "/images/events/DJP04535.jpg",
    "/images/events/DJP04604.jpg",
    "/images/events/DJP04859.jpg",
    "/images/events/DJP05056.jpg",
    "/images/events/DJP05062.jpg",
  ],
} as const;

export const events: EventItem[] = [
  {
    id: "annual-convention-2026",
    title: "GAPI — 37th Annual Convention and Scientific Assembly",
    date: "July 31, 2026 – August 2, 2026",
    location: "GAS South Convention Center, Duluth, GA",
    status: "upcoming",
    ctaHref: "https://www.gapi.org",
    description:
      "A premier weekend of CME, networking, healthcare policy discussions, Bollywood entertainment, culinary experiences, and a talent showcase. Legislators, community leaders, and Indian Consulate representatives are expected to join.",
  },
  {
    id: "amazon-rainforest-2026",
    title: "GAPI Amazon Rainforest with Rio Tour 2026",
    date: "June 9, 2026",
    status: "upcoming",
    description:
      "3-day Amazon Rainforest with Rio de Janeiro tour — nature hike, monkey forest, Caboclo house visit, fishing, and evening canoe. Early bird from $3,400 USD (twin/double).",
  },
  {
    id: "south-atlanta-regional-2026",
    title: "South Atlanta GAPI Regional Meeting in Newnan, GA",
    date: "April 25, 2026",
    location: "Newnan, GA",
    status: "upcoming",
    description:
      "Saturday program from 4–10 PM with networking, sponsor introductions, guest speakers, cultural events, and dinner.",
  },
  {
    id: "mag-regional-2026",
    title: "Warner Robins GAPI/MAG Regional Meeting",
    date: "April 11, 2026",
    location: "Cary W Martin Conference Center, Warner Robins, GA",
    status: "upcoming",
    description: "Regional meeting bringing together GAPI and MAG members in Warner Robins.",
  },
  {
    id: "columbus-2026",
    title: "GAPI Regional Meeting — Columbus",
    date: "March 14, 2026",
    location: "Columbus, GA",
    status: "upcoming",
    description: "Regional gathering for physicians and families in the Columbus area.",
  },
  {
    id: "augusta-2026",
    title: "Augusta GAPI Regional Meeting",
    date: "February 21, 2026",
    location: "Augusta, GA",
    status: "upcoming",
    description: "Regional meeting connecting Augusta-area members and sponsors.",
  },
  {
    id: "atlanta-regional-2026",
    title: "2026 Greater Atlanta GAPI Regional Meeting & MSRF Health Fair",
    date: "January 17, 2026",
    location: "Jade Banquets, Duluth, GA",
    status: "past",
    image: "/images/events/DJP04035.jpg",
    description: "A grand success bringing together physicians, trainees, and community partners.",
  },
  {
    id: "savannah-2025",
    title: "GAPI Savannah Regional",
    date: "November 8, 2025",
    location: "Savannah, GA",
    status: "past",
    description: "Regional meeting with Savannah-area physicians and families.",
  },
  {
    id: "annual-2025",
    title: "GAPI Annual and Scientific Meeting 2025",
    date: "July 18–19, 2025",
    location: "Gas South Convention Center, Duluth, GA",
    status: "past",
    description: "36th Annual Convention & Scientific Assembly with CME and cultural programming.",
  },
];

export const galleryImages = [
  { src: "/images/gallery/gapi-1.jpg", alt: "GAPI members at a community gathering" },
  { src: "/images/gallery/gapi-2.jpg", alt: "GAPI scientific assembly audience" },
  { src: "/images/gallery/gapi-3.jpg", alt: "GAPI cultural celebration" },
  { src: "/images/gallery/gapi-4.png", alt: "GAPI annual meeting stage" },
  { src: "/images/gallery/gapi-5.jpg", alt: "GAPI physicians networking" },
  { src: "/images/gallery/gapi-6.jpg", alt: "GAPI community service moment" },
] as const;
