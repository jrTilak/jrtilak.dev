import { IMAGES } from "./images";

export const CERTIFICATION = [
  {
    id: "neonshark",
    image: IMAGES.certifications["neonshark"],
    issuedAt: "Oct 1, 2024",
    link: "neonshark.co.in",
    title: "Web Developer Internship",
  },
  {
    id: "dev-11th-aces",
    image: IMAGES.certifications["aces-dev-11th"],
    issuedAt: "March 2025",
    link: "https://www.linkedin.com/posts/anurag-sharma-482a4b282_a-big-thank-you-to-everyone-as-my-tenure-activity-7296584463960956928-HtvH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEB1MrcBpMlX2jM9qpVM2VQn3my7eLJfIaA",
    title: "Developer of ACES 11th committee",
  },
  {
    id: "ctf-vc",
    image: IMAGES.certifications["ctf-vc"],
    issuedAt: "March 2025",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7278088655368253440",
    title: "Vice Coordinator of Capture The Flag",
  },
  {
    id: "techfest-organizer",
    image: IMAGES.certifications["techfest-organizer"],
    issuedAt: "March 2025",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7279506341021245441",
    title: "Organizer of Techfest 7.0",
  },
  {
    id: "html-css-tutor-at-susma",
    image: IMAGES.certifications["instructor-gcis"],
    issuedAt: "Dec 9, 2024",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7271551876477640706",
    title: "HTML/CSS Instructor at Susma College",
  },
  {
    id: "html-css-tutor-at-aces",
    image: IMAGES.certifications["html-css-tutor-at-aces"],
    issuedAt: "June 23, 2024",
    link: "https://www.aceserc.org/",
    title: "HTML/CSS Tutor at ACES",
  },
  {
    id: "web-dev-bootcamp",
    image: IMAGES.certifications["web-dev-bootcamp"],
    issuedAt: "July 7 2023",
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
