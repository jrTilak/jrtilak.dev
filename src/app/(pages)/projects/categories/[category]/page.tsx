import { PROJECTS } from "@/constants/projects";
import WorksAndProjects from "@/components/blocks/work-and-projects";
import unique from "@/lib/unique";

type Props = {
  params: Promise<{
    category: string;
  }>;
};

const ProjectByTag = async ({ params }: Props) => {
  const { category } = await params;

  return <WorksAndProjects activeCategory={category} projects={PROJECTS} />;
};

export default ProjectByTag;

export async function generateStaticParams() {
  const tags = unique(
    [
      "all",
      PROJECTS?.map((project) => {
        return project.categories;
      }),
    ]?.flat().flat()
  );

  return tags.map((tag) => ({
    category: tag,
  }));
}
