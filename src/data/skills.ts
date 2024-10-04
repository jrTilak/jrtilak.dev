export const SKILLS = [
  {
    name: "C Language",
    image: "https://www.svgrepo.com/show/373482/c.svg",
    href: "https://en.wikipedia.org/wiki/C_(programming_language)",
  },
  {
    name: "HTML",
    image: "https://www.svgrepo.com/show/452228/html-5.svg",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
] as const;

export type SkillNames = (typeof SKILLS)[number]["name"];
