export const SKILLS = [
  {
    name: "Next.js",
    href: "https://nextjs.org/",
    image: "https://www.svgrepo.com/show/368858/nextjs.svg",
    showAsExpertise: true,
  },
  {
    name: "React.js",
    href: "https://react.dev/",
    image: "https://www.svgrepo.com/show/374032/reactjs.svg",
    showAsExpertise: true,
  },
  {
    name: "MongoDb",
    href: "https://expressjs.com/",
    image: "https://www.svgrepo.com/show/373845/mongo.svg",
    showAsExpertise: true,
  },
  {
    name: "Express.js",
    href: "https://www.mongodb.com/",
    image: "https://www.svgrepo.com/show/330398/express.svg",
    showAsExpertise: true,
  },
  {
    name: "Docker",
    href: "https://www.docker.com/",
    image: "https://www.svgrepo.com/show/373557/docker2.svg",
    showAsExpertise: true,
  },
  {
    name: "AWS",
    href: "https://aws.amazon.com/",
    image: "https://www.svgrepo.com/show/448299/aws.svg",
    showAsExpertise: true,
  },
  {
    name: "Typescript",
    href: "https://www.typescriptlang.org/",
    image: "https://www.svgrepo.com/show/354478/typescript-icon.svg",
    showAsExpertise: true,
  },
  {
    name: "Javascript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    image: "https://www.svgrepo.com/show/353925/javascript.svg",
    showAsExpertise: true,
  },
  {
    name: "TailwindCSS",
    href: "https://tailwindcss.com/",
    image: "https://www.svgrepo.com/show/374118/tailwind.svg",
    showAsExpertise: true,
  },
  {
    name: "C Language",
    image: "https://www.svgrepo.com/show/373482/c.svg",
    href: "https://en.wikipedia.org/wiki/C_(programming_language)",
    showAsExpertise: false,
  },
  {
    name: "HTML",
    image: "https://www.svgrepo.com/show/452228/html-5.svg",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    showAsExpertise: false,
  },
] as const;

export type SkillNames = (typeof SKILLS)[number]["name"];
