import Error404 from "@/components/blocks/404";
import TableOfContents from "@/components/globals/table-of-contents";
import RenderMdx from "@/components/mdx/render-mdx";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/helpers/cn";
import { extractHeadings } from "@/helpers/extract-headings";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import readingTime from "reading-time";
import { getAllProjects, getProjectBySlug } from "@/services/projects";
import { getSkillDetails } from "@/helpers/get-skill-detail";
import { buttonVariants } from "@/components/ui/button";
import { GithubIcon, TrendingUpIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";

type Props = {
  params: {
    slug: string;
  };
};

const Page = async ({ params: { slug } }: Props) => {
  const project = await getProjectBySlug(decodeURI(slug));

  const rTime = readingTime(project?.rawContent ?? "");
  if (!project) return <Error404 />;


  const removeMetadataRegex = /---[\s\S]*?---/;
  const hasContent = project.rawContent.replace(removeMetadataRegex, "").trim().length > 0;

  return (
    <div className="mt-12">
      <section className="flex flex-col container mx-auto items-center justify-center max-w-7xl">
        <div className="flex gap-3 flex-col items-center justify-center text-center max-w-5xl">
          <div className="flex gap-3 items-center">
            {project.categories &&
              project.categories.map((category) => (
                <Link key={category} href={`/projects/categories/${category}`} className="w-fit">
                  <Badge variant={"outline"}>{category}</Badge>
                </Link>
              ))}
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold mt-1">
            {project.title}
          </h1>
          {project.summary && (
            <p className="text-sm md:text-base max-w-3xl" id="summary">
              {project.summary}
            </p>
          )}
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="flex w-10 h-10 rounded-full overflow-hidden">
              <Image
                src={"/images/avatar.png"}
                alt="user"
                className="w-full h-full rounded-full object-center object-cover"
                height={80}
                width={80}
              />
            </div>
            <div className="text-left">
              <div className="font-medium text-base">Tilak Thapa</div>
              <div className="flex items-center gap-1.5 text-gray-600">
                <p>
                  {new Date(project.publishedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    weekday: "short",
                  })}
                </p>
                <span className="flex w-[3px] h-[3px] rounded-full bg-gray-300" />
                <p>{rTime.text}</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-center justify-center mt-3 flex-wrap">
            {project.sourceUrl && (
              <Link
                href={project.sourceUrl}
                target="_blank"
                title="Source Code"
                className={buttonVariants({ variant: "outline", className: "w-44 max-sm:w-full" })}
              >
                Source Code <GithubIcon className="size-5 ml-2.5" />
              </Link>
            )}
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                title="View Live"
                className={buttonVariants({ variant: "outline", className: "w-44 max-sm:w-full" })}
              >
                Live URL <TrendingUpIcon className="size-5 ml-2.5" />
              </Link>
            )}
          </div>
        </div>
        <Image
          src={project.image}
          alt="thumbnail"
          className={cn(
            "w-full border border-gray-300 h-auto object-center rounded-xl mt-6 max-h-[500px] shadow-md object-cover max-w-5xl"
          )}
          height={800}
          width={800}
          quality={100}
        />
        <div className="flex flex-wrap gap-x-4 gap-y-2 mt-4">
          {project.techs.map((tech, i) => {
            const skill = getSkillDetails(tech);
            if (!skill) return null;
            return (
              <Link key={i} target="_blank" href={skill?.href}>
                <Badge
                  variant={"outline"}
                  key={i}
                  className="font-normal w-fit rounded-lg capitalize text-sm"
                >
                  <Image
                    src={skill?.image}
                    alt={tech}
                    width={20}
                    height={20}
                    className="size-4"
                  />
                  <span className="ml-2.5">{tech}</span>
                </Badge>
              </Link>
            );
          })}
        </div>
        {
          hasContent && (
            <>
              <Separator className="w-full max-w-5xl my-3" />
              <TableOfContents
                contents={extractHeadings(project?.rawContent, [1, 2, 3])}
                watchId="project-content"
                className="w-full lg:hidden max-w-5xl static"
                congratulationText="You've read the entire content."
              />
              <div className="mt-12 w-full gap-16 mx-auto flex">
                <TableOfContents
                  congratulationText="You've read the entire content."
                  contents={extractHeadings(project?.rawContent, [1, 2, 3])}
                  watchId="project-content"
                  className="w-[250px] max-lg:hidden"
                />
                <div>
                  <RenderMdx id="project-content" className="max-w-3xl mx-auto">
                    {project.content}
                  </RenderMdx>
                  <div className="flex gap-4 items-center justify-center mt-6 flex-wrap">
                    {project.sourceUrl && (
                      <Link
                        href={project.sourceUrl}
                        target="_blank"
                        title="Source Code"
                        className={buttonVariants({ variant: "outline", className: "w-44 max-sm:w-full" })}
                      >
                        Source Code <GithubIcon className="size-5 ml-2.5" />
                      </Link>
                    )}
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        title="View Live"
                        className={buttonVariants({ variant: "outline", className: "w-44 max-sm:w-full" })}
                      >
                        Live URL <TrendingUpIcon className="size-5 ml-2.5" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </>
          )
        }
        <div className="sr-only">
          {project.tags?.map((category) => (`${category} , `))}
          {project.metaTags?.map((category) => (`${category}, `))}
        </div>
      </section>
    </div>
  );
};

export default Page;

export const generateMetadata = async ({
  params: { slug },
}: Props): Promise<Metadata> => {
  const project = await getProjectBySlug(decodeURI(slug));
  return {
    title: project?.title,
    description: project?.summary,
    authors: {
      name: "Tilak Thapa",
      url: process.env.NEXT_PUBLIC_WEB_URL,
    },
    keywords: [...(project?.metaTags || []), "project", "tilak thapa", "web development", ...(project?.metaTags || [])],
    openGraph: {
      title: project?.title,
      description: project?.summary,
      url: `${process.env.NEXT_PUBLIC_WEB_URL}/projects/${slug}`,
      type: "article",
      images: [
        {
          url: project?.image ?? "",
        },
      ],
    },
  };
};

export async function generateStaticParams() {
  const posts = await getAllProjects();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
