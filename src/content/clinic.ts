export const clinic = {
  headline: "Free Healthcare for Families in Need",
  summary:
    "Providing compassionate medical care to families without insurance. Professional healthcare services at no cost.",
  schedule: [
    { label: "1st & 3rd Saturday", detail: "of each month" },
    { label: "1:00 PM – 4:00 PM", detail: "3-hour window" },
    { label: "Global Mall, Norcross", detail: "Suite 736" },
  ],
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Global+Mall+Norcross+Suite+736",
  services: [
    "Dentist consultation",
    "Minimal cost for lab work",
    "Discounted rate for medications and flu shots (in season)",
    "Referral to specialists at discounted fees",
  ],
  highlights: [
    "Free primary consultation for families with no insurance",
    "Volunteer physicians serving the community",
    "Walk-in friendly during clinic hours",
  ],
  fluProgram: {
    title: "Recent Flu Vaccination Program",
    body: "Free flu vaccinations for individuals aged 18 and above were administered on:",
    dates: ["September 21, 2024", "October 5, 2024"],
    thanks:
      "GAPI thanks Walgreens Pharmacy for collaborating to provide preventive services to GAPI clinic patients.",
  },
} as const;
