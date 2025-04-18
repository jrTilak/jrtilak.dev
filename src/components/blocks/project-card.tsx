import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/base/card";
import { Badge } from "../base/badge";
import { Button } from "../base/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/base/dialog";
import Link from "next/link";
import { GithubIcon, TrendingUpIcon } from "lucide-react";
import { Project } from "@/types/project.types";
import { getSkillDetails } from "@/lib/get-skill";
import { getMdxContent } from "@/lib/get-mdx-content";
import MDX from "../mdx/mdx";
import ExportedImage from "next-image-export-optimizer";

const ProjectCard = async (props: Project) => {
  const {
    mdxSource: { content },
  } = await getMdxContent(props.content);
  return (
    <Dialog>
      <DialogTrigger>
        <Card className="group hover:bg-muted cursor-pointer transition-colors hover:shadow-md">
          <div className="h-fit w-full">
            <ExportedImage
              src={props.image}
              alt={props.title}
              width={300}
              height={200}
              className="h-auto w-full object-cover object-top sm:h-[200px]"
            />
          </div>
          <CardHeader className="pt-2">
            <div className="flex justify-between">
              <div className="flex gap-2.5 overflow-hidden">
                {props.techs.map((tech, i) => {
                  if (i > 3) return null;
                  return (
                    <Badge
                      variant={"outline"}
                      key={i}
                      className="w-fit rounded-lg text-xs font-normal capitalize"
                    >
                      {tech}
                    </Badge>
                  );
                })}
              </div>
            </div>
            <CardTitle className="truncate text-left text-lg">{props.title}</CardTitle>
          </CardHeader>
        </Card>
      </DialogTrigger>
      <DialogContent>
        <DialogClose />
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <span> {props.title}</span> -{" "}
            <Badge className="font-normal capitalize" variant={"outline"}>
              {props.type}
            </Badge>
          </DialogTitle>
          <DialogDescription>
            <Link
              href={props.liveUrl ?? props?.githubUrl ?? "#"}
              target="_blank"
              className="relative"
            >
              <ExportedImage
                src={props.image}
                alt=""
                width={1200}
                height={800}
                className="bg-muted h-auto max-h-[300px] w-full rounded-md object-contain object-center shadow-md"
              />
              <Badge
                position={"top-right"}
                variant={"secondary"}
                className="w-fit rounded-lg text-sm font-normal capitalize"
              >
                Around {props.publishedAt}
              </Badge>
            </Link>
            <div className="my-5 flex flex-wrap gap-x-4 gap-y-2">
              {props.techs.map((tech, i) => {
                const skill = getSkillDetails(tech);
                if (!skill) return null;
                return (
                  <Link key={i} target="_blank" href={skill?.href}>
                    <Badge
                      variant={"outline"}
                      key={i}
                      className="w-fit rounded-lg text-sm font-normal capitalize"
                    >
                      <img
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
            <div className="flex flex-col gap-1">
              <MDX id="project" className="[&_p]:!leading-5">
                {content}
              </MDX>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex !flex-row items-center justify-end gap-2">
          {[
            {
              url: props?.playstoreUrl,
              image: "https://www.svgrepo.com/show/485039/google-play-style.svg",
            },
            {
              url: props?.appstoreUrl,
              image: "https://www.svgrepo.com/show/447868/apple-store.svg",
            },
            {
              url: props?.webstoreUrl,
              image: "https://www.svgrepo.com/show/378781/chrome.svg",
            },
          ]
            .filter((url) => url.url !== "" && url.url !== undefined)
            ?.map((url, i) => (
              <Link href={url.url as string} target="_blank" key={i}>
                <Button variant={"outline"} size={url.image ? "icon" : "default"}>
                  {url.image && (
                    <img
                      src={url.image}
                      alt={""}
                      width={20}
                      height={20}
                      className="size-6 rounded-md"
                    />
                  )}
                </Button>
              </Link>
            ))}
          {props.githubUrl && (
            <Link href={props?.githubUrl} target="_blank" title="Source Code">
              <Button variant={"outline"} size={"sm"} className="w-full">
                <GithubIcon />
              </Button>
            </Link>
          )}
          {props?.liveUrl && (
            <Link href={props?.liveUrl} target="_blank" className="flex-grow">
              <Button variant={"outline"} size={"sm"} className="w-full">
                <span>View Live</span> <TrendingUpIcon className="size-5 sm:ml-2.5" />
              </Button>
            </Link>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectCard;
