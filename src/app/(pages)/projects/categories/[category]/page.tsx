import unique from "@/helpers/unique";
import { getAllProjects } from "@/services/projects";
import WorksAndProjects from "@/components/globals/works-and-projects";

type Props = {
  params: {
    category: string;
  };
};

const ProjectByTag = async ({ params: { category } }: Props) => {
  const projects = await getAllProjects();

  return (
    <WorksAndProjects
      activeCategory={category}
      projects={projects}
    />
  );
};

export default ProjectByTag;

export async function generateStaticParams() {
  const allProjects = await getAllProjects();
  const tags = unique(
    ["all", allProjects
      ?.map((project) => {
        return project.categories;
      })]
      ?.flat()
  );

  return tags.map((tag) => ({
    tag,
  }));
}
