export const SKILLS = [
  {
    name: "C",
    image: "https://www.svgrepo.com/show/373482/c.svg",
    href: "https://en.wikipedia.org/wiki/C_(programming_language)",
  },
] as const;

export type SkillNames = (typeof SKILLS)[number]["name"];
