export const CERTIFICATION = [
  {
    id: "lor-prodigy",
    image: "/images/certifications/lor-prodigy.png",
    issuedAt: "2024 Jan 14",
    link: "https://prodigyinfotech.dev/",
    title: "Letter of Recommendation - Prodigy InfoTech",
  },
] as const;

export type CertificationId = (typeof CERTIFICATION)[number]["id"];
