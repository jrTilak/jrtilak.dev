import { SKILLS } from "@/constants/skills";

export const getSkillDetails = (name: string) => {
  const skill = SKILLS.find((skill) => skill.name === name);
  return skill || null;
};
