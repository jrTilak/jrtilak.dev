import WorksAndProjects from "@/components/blocks/work-and-projects";
import { PROJECTS } from "@/constants/projects";
import React from "react";

const Page = async () => {
  return <WorksAndProjects activeCategory="all" projects={PROJECTS} />;
};

export default Page;
