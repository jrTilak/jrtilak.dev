import { IMAGES } from "./images";

export const SKILLS = [
  {
    name: "Next.js",
    href: "https://nextjs.org/",
    image: "/icons/nextjs.svg",
    showAsExpertise: true,
  },
  {
    name: "React.js",
    href: "https://react.dev/",
    image: "/icons/react.svg",
    showAsExpertise: true,
  },
  {
    name: "React Native",
    href: "https://reactnative.dev/",
    image: "/icons/reactts.svg",
    showAsExpertise: true,
  }, {
    name: "Expo",
    href: "https://expo.dev/",
    image: "/icons/expo.svg",
    showAsExpertise: true,
  },
  {
    name: "Express.js",
    href: "https://expressjs.com/",
    image: "/icons/express.svg",
    showAsExpertise: true,
  },
  {
    name: "Nest.js",
    href: "https://nestjs.com/",
    image: "/icons/nestjs.svg",
    showAsExpertise: true,
  },
  {
    name: "MongoDb",
    href: "https://www.mongodb.com/",
    image: "/icons/mongo.svg",
    showAsExpertise: true,
  },
  {
    name: "Prisma",
    href: "https://www.prisma.io/",
    image: "/icons/prisma.svg",
    showAsExpertise: true,
  },
  {
    name: "Redis",
    href: "https://redis.io/",
    image: "/icons/redis.svg",
    showAsExpertise: false,
  },
  {
    image: IMAGES.icons["threejs"],
    name: "Three.js",
    showAsExpertise: false,
    href: "https://threejs.org/",
  },
  {
    image: "https://avatars.githubusercontent.com/u/96090470?s=200&v=4",
    name: "Plasmo",
    showAsExpertise: false,
    href: "https://www.plasmo.com/",
  },
  {
    name: "Typescript",
    href: "https://www.typescriptlang.org/",
    image: "/icons/typescript-icon.svg",
    showAsExpertise: true,
  },
  {
    image: IMAGES.icons["react-query"],
    name: "React Query",
    showAsExpertise: true,
    href: "https://tanstack.com/query/v3/",
  },
  {
    image: IMAGES.icons["react-hook-form"],
    name: "React Hook Form",
    showAsExpertise: true,
    href: "https://react-hook-form.com/",
  },
  {
    name: "Node.js",
    href: "https://nodejs.org/en",
    image: "/icons/nodejs-icon.svg",
    showAsExpertise: false,
  },
  {
    name: "Javascript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    image: "/icons/javascript.svg",
    showAsExpertise: false,
  },
  {
    name: "TailwindCSS",
    href: "https://tailwindcss.com/",
    image: "/icons/tailwind.svg",
    showAsExpertise: true,
  },
  {
    name: "C/C++",
    image: "/icons/cpp.svg",
    href: "https://cplusplus.com/",
    showAsExpertise: false,
  },
] as const;

export type SkillNames = (typeof SKILLS)[number]["name"];
