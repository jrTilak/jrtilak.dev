import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/base/card";
import unique from "@/lib/unique";
import { Project } from "@/types/project.types";
import Link from "next/link";
import ProjectCard from "./project-card";
import { Button } from "../base/button";

type Props = {
  projects: Project[];
  activeCategory: string;
  limit?: number;
};

const WorksAndProjects = async ({ projects, activeCategory, limit = Infinity }: Props) => {
  const categories = unique([
    "all",
    ...projects
      .map((p) => p.categories)
      .flat()
      .map((c) => c.toLowerCase())
      .sort(),
  ]);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.categories.includes(decodeURIComponent(activeCategory)));

  if (filteredProjects.length === 0) {
    return null;
  }

  return (
    <section id="work-and-projects" className="container mx-auto">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl sm:text-4xl">Works & Projects 💻</CardTitle>
          <CardDescription className="m-auto max-w-xl sm:text-base">
            Discover a selection of projects I&apos;ve crafted with precision and passion.
          </CardDescription>
        </CardHeader>
        <div className="flex flex-wrap gap-2 px-6 py-2">
          {categories.map((c, i) => (
            <Link href={`/projects/categories/${encodeURIComponent(c)}`} key={i}>
              <Button
                className="h-fit min-w-16 py-1 text-xs capitalize"
                size={"sm"}
                variant={activeCategory === c?.toLowerCase() ? "default" : "outline"}
              >
                {c}
              </Button>
            </Link>
          ))}
        </div>
        <CardContent className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.slice(0, limit).map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </CardContent>
      </Card>
    </section>
  );
};

export default WorksAndProjects;
