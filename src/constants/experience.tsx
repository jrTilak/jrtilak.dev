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
      name: "Association of Computer Engineering Students (ACES)",
      image: IMAGES["aces"],
      url: "https://www.aceserc.org/",
    },
    date: {
      from: "April 2024",
      to: "Present",
      duration: "Ongoing",
    },
    description: [
      "Engineered and optimized the organization's portfolio website, boosting online presence and engagement by 107.6 %.",
      "Built and launched custom websites for major initiatives like Tech Fest and ACES Lab, enhancing event participation and attracting sponsorships from prominent brands.",
      "Led hands-on workshops as an instructor, empowering members with practical skills and contributing to their professional development.",
      "Coordinated and executed flagship events such as InternFest, hackathons, and quizzes, driving innovation and collaboration.",
    ],
    position: "Developer / Technical Team",
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
      "Led and directed a team across 5+ projects, ensuring precise planning and impactful execution, enhancing team synergy, and driving high-quality outcomes.",
      "Delivered 10+ projects within deadlines, collaborating effectively with cross-functional teams to fulfill client objectives. Notable projects included an e-commerce platform for cricket gear, a course-selling platform, and a job listing platform similar to Internshala, all of which earned client trust and fostered long-term engagement.",
      "Built strong client rapport by actively listening to their needs and offering bespoke solutions that added significant value.",
      "Optimized workflows through collaboration with senior leadership and team members, improving efficiency and streamlining processes.",
    ],
    position: "Web Developer Intern",
    certifications: ["neonshark"],
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
      "Delivered 4 web development projects within a one-month period, showcasing strong technical proficiency and adaptability.",
      "Earned a Certificate of Achievement and a Letter of Recommendation for exceptional performance and consistent quality.",
      "Demonstrated problem-solving abilities, delivering results-oriented solutions in a fast-paced, deadline-driven environment.",
    ],
    position: "Web Development Internship",
    certifications: ["lor-prodigy", "prodigy-internship"],
  },
];
