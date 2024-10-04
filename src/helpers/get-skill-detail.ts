import { SkillNames, SKILLS } from "@/data/skills";

export const getSkillDetails = (name: SkillNames) => {
  const skill = SKILLS.find((skill) => skill.name === name);
  return skill!;
};
