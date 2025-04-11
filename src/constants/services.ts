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
      "Crafting dynamic, responsive web applications with an emphasis on seamless user experiences, modern design, and performance.",
    features: [
      "Cutting-Edge Tech Stack",
      "High Code Quality Standards",
      "Privacy & Security First",
      "Scalable and User-Centric Design",
      "On-Time Delivery with Thorough Testing",
      "Innovative & Efficient Solutions",
      "...and more!",
    ],
    skills: [
      "React.js",
      "Next.js",
      "TailwindCSS",
      "Express.js",
      "MongoDb",
      "Framer Motion (Motion)",
      "Typescript",
      "Three.js",
    ],
  },
  {
    title: "Backend Development",
    icon: "https://www.svgrepo.com/show/375397/compute-engine.svg",
    description:
      "Building robust, secure, and scalable backends and APIs to power high-performance web applications.",
    features: [
      "Modular & Scalable Architecture",
      "Optimized Performance",
      "Data Security & Compliance",
      "Robust REST API Development",
      "Reliable Testing Practices",
      "Advanced Error Handling & Logging",
      "Dockerization & Cloud Deployments",
      "...and more!",
    ],
    skills: ["Express.js", "Nest.js", "MongoDb", "Node.js", "Firebase"],
  },
  {
    title: "Mobile App Development",
    icon: "https://www.svgrepo.com/show/397517/mobile-phone.svg",
    description:
      "Delivering modern, performant, and cross-platform mobile applications using React Native — from development to Play Store publishing.",
    features: [
      "Cross-Platform Compatibility",
      "Smooth Native-Like Performance",
      "Modern UI/UX with Responsive Layouts",
      "Push Notifications & Offline Support",
      "App Store & Play Store Deployment",
      "Rapid Iteration & OTA Updates (via Expo)",
      "...and more!",
    ],
    skills: ["React Native", "Expo", "Firebase"],
  },
];
