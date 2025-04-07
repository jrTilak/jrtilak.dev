import { ProjectMetaData } from "@/types/project.types";
import { IMAGES } from "./images";

export const PROJECTS: ProjectMetaData[] = [
  {
    title: "Techfest Web - ACES",
    categories: ["web"],
    publishedAt: "Nov 5, 2024",
    summary:
      "Get ready for v7.0 - where tech enthusiasts compete, create, and connect in events like Hackathons, UI/UX Showdowns, and more. Experience the future of innovation!",
    image: IMAGES.projects["techfest"],
    techs: ["Next.js", "Three.js", "TailwindCSS"],
    type: "professional",
    urls: {
      liveUrl: "https://techfest.aceserc.org/",
    },
  },
  {
    title: "ACES Web - IOE",
    categories: ["web"],
    publishedAt: "May 5, 2024",
    summary:
      "ACES web is a platform for the Association of Computer Engineering Students (ACES) of the IOE, Purwanchal Campus, Dharan. It is a full stack web application with client-side, admin-panel and apis. It is built using Next.js, Tailwind CSS, and Vercel.",
    image: IMAGES.projects["aces-website"],
    techs: ["Next.js", "TailwindCSS"],
    type: "professional",
    urls: {
      liveUrl: "https://www.aceserc.org/",
    },
  },
  {
    title: "Lazykit - Trim the fat",
    categories: ["web", "package/lib"],
    publishedAt: "March 17, 2024",
    summary:
      "Trim the fat, keep the function! Refine your JavaScript workflows with Lazykit. A concentrated collection of lean utility functions, not a bloated library. Lazykit has many utility functions that can help you in your day-to-day coding tasks that you can just copy-paste or add as an NPM package.",
    image: IMAGES.projects["lazykit"],
    techs: ["Next.js", "Vitest", "TailwindCSS", "Markdown"],
    type: "personal",
    urls: {
      liveUrl: "https://lazykit.thapatilak.com.np/",
      sourceUrl: "https://github.com/jrTilak/lazykit",
    },
  },
  {
    title: "Javasports - E-commerce Platform",
    categories: ["web"],
    publishedAt: "February 5, 2024",
    summary:
      "Javasports is an e-commerce platform that offers a wide range of sports goods and equipment. The platform provides a seamless shopping experience with a user-friendly interface and secure payment options. It was a organizational project where I was responsible for the front-end development of the website with my team, where I was involved in the completion of more than 70% of the front-end development with an admin panel and api integration.",
    image: IMAGES.projects["java-sports"],
    techs: ["React.js", "TailwindCSS"],
    type: "professional",
    urls: {
      liveUrl: "https://javasports.in/",
    },
  },
  {
    title: "Bumblebee 2.0 - AI Powered Chatbot",
    categories: ["web", "ai"],
    publishedAt: "Jan 18, 2024",
    summary:
      "Bumblebee is an AI powered chatbot that can help you with your queries. It is a web based application that can be accessed from anywhere. It is built using MERN Stack and based on Google's gemini AI model with the profile of the transformer character Bumblebee.",
    image: IMAGES.projects.bumblebee,
    techs: ["Express.js", "MongoDb", "React.js", "TailwindCSS"],
    type: "personal",
    urls: {
      liveUrl: "https://bumblebee.thapatilak.com.np/",
      sourceUrl: "https://github.com/jrTilak/bumbleBee",
    },
  },
];
