import unique from "@/lib/unique";
import { PROJECTS } from "@/constants/projects";
import WorksAndProjects from "@/components/blocks/work-and-projects";

type Props = {
  params: {
    category: string;
  };
};

const ProjectByTag = async ({ params: { category } }: Props) => {
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
    ]?.flat()
  );

  return tags.map((tag) => ({
    tag,
  }));
}
