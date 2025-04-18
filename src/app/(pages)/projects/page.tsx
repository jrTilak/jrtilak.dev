import WorksAndProjects from "@/components/blocks/work-and-projects";
import { getAllProjects } from "@/services/project";
import React from "react";

const Page = async () => {
  const projects = await getAllProjects();
  return <WorksAndProjects activeCategory="all" projects={projects} />;
};

export default Page;
