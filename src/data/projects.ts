import { SkillNames } from "./skills";

// always write the category in lowercase
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
    category: ["other"],
    createdAt: "Jul 20, 2023",
    description:
      "C Games is a collection of interactive games developed as the 1st-semester project for the C programming subject at the IOE, Purwanchal Campus, Dharan. The program aims to provide a fun and engaging experience for users, allowing them to play various games. It also includes features like user account creation, login, game history tracking, and high-score recording.",
    image: "/images/projects/c-games.png",
    techs: ["C Language"],
    type: "academic",
    liveUrl: "https://github.com/jrTilak/C-Games",
    sourceCode: "https://github.com/jrTilak/C-Games",
  },
  {
    title: "Stringify - Effortless Text Manipulation",
    category: ["web"],
    createdAt: "Jul 20, 2023",
    description:
      "Stringify is a user-friendly web app that simplifies text manipulation. With its intuitive interface, you can effortlessly perform tasks like case conversions, find and replace, URL encoding, and much more.",
    image: "/images/projects/stringify.png",
    techs: ["HTML"],
    type: "personal",
    liveUrl: "https://stringify.thapatilak.com.np/",
    sourceCode: "https://github.com/jrTilak/Stringify",
  },
];
