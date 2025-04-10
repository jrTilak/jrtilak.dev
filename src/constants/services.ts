import { SkillNames } from "./skills";

export type Service = {
  title: string;
  icon: string;
  description: string;
  features: React.ReactNode[];
  skills: SkillNames[];
  available?: boolean;
};

export const SERVICES: Service[] = [
  {
    title: "Web Development",
    icon: "https://www.svgrepo.com/show/485018/web-page-browser-analysis-screen.svg",
    description:
      "I build dynamic and responsive web applications that not only look great but also provide seamless user experiences. ",
    features: [
      "Cutting-Edge Technologies",
      "No Compromise on Quality",
      "Privacy and Security Focused",
      "User-Centric Design and scalable solutions",
      "Timely Delivery and Comprehensive Testing",
      "Innovative Problem-Solving",
      "and much more...",
    ],
    skills: [
      "React.js",
      "Next.js",
      "TailwindCSS",
      "Express.js",
      "MongoDb",
      "Framer Motion",
      "Typescript",
    ],
  },
  {
    title: "Backend Development",
    icon: "https://www.svgrepo.com/show/375397/compute-engine.svg",
    description:
      "I specialize in creating scalable APIs and server-side architectures that ensure your web applications run smoothly and securely.",
    features: [
      "Scalable Architecture",
      "Performance Optimization",
      "Data Security and Compliance",
      "Robust API Development",
      "Error-free Testing",
      "Error Handling and Monitoring",
      "Dockerization and Cloud Deployment",
      "CI/CD pipelines",
      "and much more...",
    ],
    skills: ["Express.js", "MongoDb", "AWS", "Docker", "Node.js", "Firebase"],
  },
  {
    title: "Mobile App Development",
    icon: "https://www.svgrepo.com/show/397517/mobile-phone.svg",
    description: "I build cross-platform mobile apps using React Native.",
    features: ["Cross-Platform", "Native Performance", "Modern Technologies"],
    skills: ["React.js"],
  },
];
