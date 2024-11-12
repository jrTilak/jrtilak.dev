import { IMAGES } from "./images";
import { SkillNames } from "./skills";

// always write the category in lowercase
type Category =
  | "web"
  | "mobile"
  | "game"
  | "other"
  | "package/lib"
  | "extension"
  | "ai";

export type Project = {
  title: string;
  description: React.ReactNode;
  image: string;
  type: "personal" | "professional" | "academic" | "competition";
  liveUrl?: string;
  sourceCode?: string;
  category: Array<Category>;
  techs: Array<SkillNames>;
  createdAt: string;
  collaborators?: Array<{
    name: string;
    contactUrl: string;
  }>;
};

export const PROJECTS: Project[] = [
  {
    title: "Techfest Web - ACES",
    category: ["web"],
    createdAt: "Nov 5, 2024",
    description:
      "Get ready for v7.0 - where tech enthusiasts compete, create, and connect in events like Hackathons, UI/UX Showdowns, and more. Experience the future of innovation!",
    image: IMAGES.projects["techfest"],
    techs: ["Next.js", "Three.js", "TailwindCSS"],
    type: "professional",
    liveUrl: "https://techfest.aceserc.org/",
  },
  {
    title: "ACES Web - IOE",
    category: ["web"],
    createdAt: "May 5, 2024",
    description:
      "ACES web is a platform for the Association of Computer Engineering Students (ACES) of the IOE, Purwanchal Campus, Dharan. It is a full stack web application with client-side, admin-panel and apis. It is built using Next.js, Tailwind CSS, and Vercel.",
    image: IMAGES.projects["aces-website"],
    techs: ["Next.js", "TailwindCSS"],
    type: "professional",
    liveUrl: "https://www.aceserc.org/",
  },
  {
    title: "Lazykit - Trim the fat",
    category: ["web", "package/lib"],
    createdAt: "March 17, 2024",
    description:
      "Trim the fat, keep the function! Refine your JavaScript workflows with Lazykit. A concentrated collection of lean utility functions, not a bloated library. Lazykit has many utility functions that can help you in your day-to-day coding tasks that you can just copy-paste or add as an NPM package.",
    image: IMAGES.projects["lazykit"],
    techs: ["Next.js", "Vitest", "TailwindCSS", "Markdown"],
    type: "personal",
    liveUrl: "https://lazykit.thapatilak.com.np/",
    sourceCode: "https://github.com/jrTilak/lazykit",
  },
  {
    title: "Javasports - E-commerce Platform",
    category: ["web"],
    createdAt: "February 5, 2024",
    description:
      "Javasports is an e-commerce platform that offers a wide range of sports goods and equipment. The platform provides a seamless shopping experience with a user-friendly interface and secure payment options. It was a organizational project where I was responsible for the front-end development of the website with my team, where I was involved in the completion of more than 70% of the front-end development with an admin panel and api integration.",
    image: IMAGES.projects["java-sports"],
    techs: ["React.js", "TailwindCSS"],
    type: "professional",
    liveUrl: "https://javasports.in/",
  },
  {
    title: "Bumblebee 2.0 - AI Powered Chatbot",
    category: ["web", "ai"],
    createdAt: "Jan 18, 2024",
    description:
      "Bumblebee is an AI powered chatbot that can help you with your queries. It is a web based application that can be accessed from anywhere. It is built using MERN Stack and based on Google's gemini AI model with the profile of the transformer character Bumblebee.",
    image: IMAGES.projects.bumblebee,
    techs: ["Express.js", "MongoDb", "React.js", "TailwindCSS"],
    type: "personal",
    liveUrl: "https://bumblebee.thapatilak.com.np/",
    sourceCode: "https://github.com/jrTilak/bumbleBee",
  },
  {
    title: "Travellian - Travel Across the Globe",
    category: ["web"],
    createdAt: "Feb 8, 2024",
    description:
      "Travellian is a travel agency Web App that provides the best travel experience for your journey. It is built with Vite, React, and Tailwind CSS as a front-end internship assignment.",
    image: IMAGES.projects.travellian,
    techs: ["React.js", "TailwindCSS"],
    type: "professional",
    liveUrl: "https://travellian.thapatilak.com.np/",
    sourceCode: "https://github.com/jrTilak/travellian-frontend",
  },
  {
    title: "FSU - WebDev Competition",
    category: ["web"],
    createdAt: "June 22, 2023",
    description:
      "Welcome to the FSU Free Student Union IOE ERC Nepal Web App! This Web App has been developed as part of a web development competition using Next.js, React.js, Tailwind CSS, and Email.js, ensuring a seamless and responsive user experience.",
    image: IMAGES.projects.fsu,
    techs: ["Next.js", "TailwindCSS"],
    type: "competition",
    liveUrl: "https://fsu.thapatilak.com.np/",
    sourceCode: "https://github.com/jrTilak/FSU",
    collaborators: [
      {
        name: "jrTilak",
        contactUrl: "https://github.com/jrTilak/",
      },
      {
        contactUrl: "https://github.com/AnuragDahal",
        name: "AnuragDahal",
      },
      {
        contactUrl: "https://github.com/kaleUtsab",
        name: "kaleUtsab",
      },
    ],
  },
  {
    title: "Stringify - Effortless Text Manipulation",
    category: ["web"],
    createdAt: "Jul 20, 2023",
    description:
      "Stringify is a user-friendly web app that simplifies text manipulation. With its intuitive interface, you can effortlessly perform tasks like case conversions, find and replace, URL encoding, and much more.",
    image: IMAGES.projects.stringify,
    techs: ["React.js", "HTML", "CSS"],
    type: "personal",
    liveUrl: "https://stringify.thapatilak.com.np/",
    sourceCode: "https://github.com/jrTilak/Stringify",
  },
  {
    title: "GemQuiz",
    category: ["other"],
    createdAt: "Aug 11, 2024",
    description: "A MCQ Quiz app build using cpp with QT-Creator",
    image: IMAGES.projects.gemquiz,
    techs: ["C++"],
    type: "academic",
    sourceCode: "https://github.com/jrTilak/gem-quiz",
  },
  {
    title: "C Games - 1st sem Project",
    category: ["other"],
    createdAt: "Jul 20, 2023",
    description:
      "C Games is a collection of interactive games developed as the 1st-semester project for the C programming subject at the IOE, Purwanchal Campus, Dharan. The program aims to provide a fun and engaging experience for users, allowing them to play various games. It also includes features like user account creation, login, game history tracking, and high-score recording.",
    image: IMAGES.projects["c-games"],
    techs: ["C Language"],
    type: "academic",
    sourceCode: "https://github.com/jrTilak/C-Games",
  },
];
