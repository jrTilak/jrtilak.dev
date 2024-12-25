import React from "react";
import { getAllProjects } from "@/services/projects";
import WorksAndProjects from "@/components/globals/works-and-projects";

const Page = async () => {
  const projects = await getAllProjects();

  return (
    <WorksAndProjects
      activeCategory="all"
      projects={projects}
    />
  );
};

export default Page;
