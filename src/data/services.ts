import { SkillNames } from "./skills";

export type Service = {
  title: string;
  icon: string;
  description: string;
  features: React.ReactNode[];
  skills: SkillNames[];
};

export const SERVICES: Service[] = [
  {
    title: "Web Development",
    icon: "https://www.svgrepo.com/show/485018/web-page-browser-analysis-screen.svg",
    description:
      "I build fast, responsive, and SEO-friendly websites using modern technologies.",
    features: [
      "Responsive Design",
      "SEO Optimization",
      "Fast Loading",
      "Modern Technologies",
    ],
    skills: ["HTML"],
  },
];
