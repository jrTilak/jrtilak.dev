import WorksAndProjects from "@/components/blocks/work-and-projects";
import { getAllProjects } from "@/services/project";
import unique from "@/lib/unique";

type Props = {
  params: Promise<{
    category: string;
  }>;
};

const ProjectByTag = async ({ params }: Props) => {
  const { category } = await params;
  const projects = await getAllProjects();
  return (
    <WorksAndProjects
      activeCategory={category}
      projects={
        category === "all" ? projects : projects.filter((p) => p.categories.includes(category))
      }
    />
  );
};

export default ProjectByTag;

export async function generateStaticParams() {
  const projects = await getAllProjects();
  const tags = unique(
    [
      "all",
      projects?.map((project) => {
        return project.categories;
      }),
    ]
      ?.flat()
      .flat()
  );

  return tags.map((tag) => ({
    category: tag,
  }));
}
