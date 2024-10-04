import { SkillNames } from "./skills";

type Category =
  | "web"
  | "mobile"
  | "game"
  | "other"
  | "package/lib"
  | "extension";

export type Project = {
  title: string;
  description: React.ReactNode;
  image: string;
  type: "personal" | "professional" | "academic";
  liveUrl?: string;
  sourceCode?: string;
  category: Array<Category>;
  techs: Array<SkillNames>;
  createdAt: string;
};

export const PROJECTS: Project[] = [
  {
    title: "C Games - 1st sem Project",
    category: ["other", "extension"],
    createdAt: "Jul 20, 2023",
    description:
      "C Games is a collection of interactive games developed as the 1st-semester project for the C programming subject at the IOE, Purwanchal Campus, Dharan. The program aims to provide a fun and engaging experience for users, allowing them to play various games. It also includes features like user account creation, login, game history tracking, and high-score recording.",
    image: "/images/projects/c-games.png",
    techs: ["C"],
    type: "academic",
    liveUrl: "https://github.com/jrTilak/C-Games",
    sourceCode: "https://github.com/jrTilak/C-Games",
  },
];
