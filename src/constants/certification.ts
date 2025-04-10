import { IMAGES } from "./images";

export const CERTIFICATION = [
  {
    id: "neonshark",
    image: IMAGES.certifications["neonshark"],
    issuedAt: "Oct 1 2024",
    link: "neonshark.co.in",
    title: "Web Developer Internship",
  },
  {
    id: "html-css-tutor-at-aces",
    image: IMAGES.certifications["html-css-tutor-at-aces"],
    issuedAt: "June 23 2024",
    link: "https://www.aceserc.org/",
    title: "HTML/CSS Tutor at ACES",
  },
  {
    id: "prodigy-internship",
    image: IMAGES.certifications["prodigy-internship"],
    issuedAt: "February 14 2024",
    link: "https://prodigyinfotech.dev/",
    title: "Web Development Internship at Prodigy InfoTech",
  },
  {
    id: "lor-prodigy",
    image: IMAGES.certifications["lor-prodigy"],
    issuedAt: "February 14 2024",
    link: "https://prodigyinfotech.dev/",
    title: "Letter of Recommendation - Prodigy InfoTech",
  },
  {
    id: "web-dev-bootcamp",
    image: IMAGES.certifications["web-dev-bootcamp"],
    issuedAt: "July 7 20203",
    link: "https://www.udemy.com/certificate/UC-82d64509-0c71-4480-b6a2-f51ec8a3dc1a/",
    title: "The Complete 2023 Web Development Bootcamp",
  },
  {
    id: "fsu-webdev-competition",
    image: IMAGES.certifications["fsu-webdev-competition"],
    issuedAt: "July 12 2023",
    link: "https://fsu.thapatilak.com.np/",
    title: "FSU WebDev Competition",
  },
] as const;

export type CertificationId = (typeof CERTIFICATION)[number]["id"];
