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
      'Developed and maintained the organization"s portfolio website, enhancing online presence and user experience.',
      'Designed and launched additional websites for a tech fest and Aces Lab, driving engagement and event participation.',
      'Coordinated and led workshops as an instructor, empowering members with valuable skills and fostering professional development.',
      'Organized and hosted key events such as brainstorming quizzes, Internfest, and hackathons, driving innovation and collaboration.',
      "Cultivated a collaborative environment, enhancing learning and engagement within the team."
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
      'Led and managed a team on 5+ projects, driving successful outcomes through strategic planning and effective execution.',
      'Delivered 10+ projects on time, collaborating seamlessly with cross-functional teams to meet client requirements and exceed expectations.',
      'Cultivated strong client relationships by actively engaging with them to understand their needs and provide tailored solutions.',
      'Streamlined workflows by collaborating with team members and senior leadership.',
      'Contributed innovative ideas during brainstorming sessions, driving the development of new solutions and enhancing project outcomes.'
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
      "Delivered 4 web development projects within a one-month period, showcasing strong technical proficiency and adaptability.",
      "Earned a Certificate of Achievement and a Letter of Recommendation for exceptional performance and consistent quality.",
      "Demonstrated problem-solving abilities, delivering results-oriented solutions in a fast-paced, deadline-driven environment.",
    ],
    position: "Web Development Internship",
    certifications: ["lor-prodigy", "prodigy-internship"],
  },
];
