import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProjectCard from "./project-card";
import { buttonVariants } from "../ui/button";
import unique from "@/helpers/unique";
import { ProjectMetaData } from "@/types/project.types";
import Link from "next/link";
import Error404 from "../blocks/404";

type Props = {
  projects: (ProjectMetaData & {
    slug: string
  })[]
  activeCategory: string
  limit?: number
}

const WorksAndProjects = async ({ projects, activeCategory, limit = Infinity }: Props) => {

  const categories = unique(["all", ...projects.map((p) => p.categories).flat().map(c => c.toLowerCase()).sort()])

  const filteredProjects = activeCategory === "all" ? projects : projects.filter(p => p.categories.includes(decodeURIComponent(activeCategory)))

  if (filteredProjects.length === 0) {
    return <Error404 />
  }

  return (
    <section id="work-and-projects" className="container mx-auto">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl sm:text-4xl">
            Works & Projects 💻
          </CardTitle>
          <CardDescription className="max-w-xl m-auto sm:text-base">
            Discover a selection of projects I&apos;ve crafted with precision
            and passion, showcasing creativity and technical prowess in every
            detail.
          </CardDescription>
        </CardHeader>
        <div className="flex gap-2 flex-wrap px-6 py-2">
          {categories
            .map((c, i) => (
              <Link
                href={`/projects/categories/${encodeURIComponent(c)}`}
                key={i}
                className={
                  buttonVariants({
                    className: "text-xs capitalize min-w-16 h-fit py-1",
                    variant: activeCategory === c?.toLowerCase() ? "default" : "outline",
                    size: "sm",
                  })
                }
              >
                {c}
              </Link>
            ))}
        </div>
        <CardContent className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {
            filteredProjects
              .slice(0, limit)
              .map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
        </CardContent>
      </Card>
    </section>
  );
};

export default WorksAndProjects;
