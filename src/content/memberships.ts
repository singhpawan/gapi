export const membershipTiers = [
  {
    id: "physician",
    name: "Physician Member",
    description:
      "Full membership for practicing physicians of Indian heritage in Georgia — CME events, networking, and advocacy.",
    perks: ["Annual convention access", "Regional meetings", "Member directory", "Advocacy updates"],
  },
  {
    id: "yppi",
    name: "YPPI / Trainee",
    description:
      "Membership for residents, fellows, and young physicians building their careers in Georgia.",
    perks: ["Discounted or free registration", "Mentorship opportunities", "Career networking"],
  },
  {
    id: "student",
    name: "Medical Student",
    description: "Complimentary pathway for medical students to engage with GAPI programming.",
    perks: ["Event invitations", "Community service opportunities", "Peer network"],
  },
] as const;
