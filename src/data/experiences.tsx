import { CertificationId } from "./certification";
import { IMAGES } from "./images";

export type Experience = {
  position: string;
  company: {
    name: string;
    image: string;
    url: string;
  };
  date: {
    from: string;
    to: string;
    duration: string;
  };
  description: React.ReactNode[];
  certifications?: Array<CertificationId>;
};

export const EXPERIENCES: Array<Experience> = [
  {
    company: {
      name: "ACES",
      image: IMAGES["aces"],
      url: "https://www.aceserc.org/",
    },
    date: {
      from: "April 2024",
      to: "Present",
      duration: "Ongoing",
    },
    description: [
      "Developed and maintained the organization's portfolio website.",
      "Creating additional websites, including one for a tech fest.",
      "Coordinated various workshop sessions and served as an instructor.",
      "Hosted multiple events such as brainstorming quizzes, Internfest, and hackathons.",
      "Fostered collaboration among members to enhance learning and engagement.",
    ],
    position: "Developer",
    certifications: ["html-css-tutor-at-aces"],
  },
  {
    company: {
      name: "Neonshark",
      image: IMAGES["neon-shark"],
      url: "https://neonshark.co.in/",
    },
    date: {
      from: "Feb 2024",
      to: "Sep 2024",
      duration: "8 months",
    },
    description: [
      "Led a team on over 5 projects.",
      "Completed more than 10 projects successfully.",
      "Worked closely with clients to understand their needs.",
      "Collaborated with teammates and seniors to improve workflows.",
      "Ensured high code quality through reviews and best practices.",
      "Contributed ideas during brainstorming sessions for new solutions.",
    ],
    position: "Web Developer Intern",
    certifications: ["neonshark"]
  },
  {
    company: {
      name: "Prodigy InfoTech",
      image: IMAGES["prodigy-infotech2"],
      url: "https://prodigyinfotech.dev/",
    },
    date: {
      from: "Jan 2024",
      to: "Feb 2024",
      duration: "1 month",
    },
    description: [
      "Completed 4 web development projects.",
      "Earned a certificate of achievement and a LOR.",
      "Demonstrated adaptability and technical skills.",
    ],
    position: "Web Development Internship",
    certifications: ["lor-prodigy", "prodigy-internship"],
  },
];
