"use client";
import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { buttonVariants } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { ArrowRightIcon, GithubIcon, TrendingUpIcon } from "lucide-react";
import { getSkillDetails } from "@/helpers/get-skill-detail";
import { ProjectMetaData } from "@/types/project.types";

const ProjectCard = (props: ProjectMetaData & {
  slug: string;
}) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Card className="group cursor-pointer hover:shadow-md transition-colors hover:bg-muted">
          <div className="w-full h-fit">
            <Image
              src={props.image}
              alt={props.title}
              width={300}
              height={200}
              className="w-full h-auto object-cover object-top sm:h-[200px]"
              quality={100}
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
                      className="font-normal w-fit rounded-lg capitalize text-xs"
                    >
                      {tech}
                    </Badge>
                  );
                })}
              </div>
            </div>
            <CardTitle className="truncate text-left text-lg">
              {props.title}
            </CardTitle>
          </CardHeader>
        </Card>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <span> {props.title}</span> -{" "}
            <Badge className="capitalize font-normal" variant={"outline"}>
              {props.type}
            </Badge>
          </DialogTitle>
          <DialogDescription>
            <Image
              src={props.image}
              alt=""
              width={1200}
              height={800}
              quality={100}
              className="w-full h-auto object-contain object-center bg-muted max-h-[300px] shadow-md rounded-md"
            />
            <div className="flex flex-wrap gap-x-4 gap-y-2 my-5">
              {props.techs.map((tech, i) => {
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
            <div className="flex flex-col gap-1">{props.summary}</div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex !flex-row items-center justify-end gap-2">
          {props.sourceUrl && (
            <Link
              href={props.sourceUrl}
              target="_blank"
              title="Source Code"
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              <GithubIcon />
            </Link>
          )}
          {props.liveUrl && (
            <Link
              href={props.liveUrl}
              target="_blank"
              className={buttonVariants({
                variant: "outline",
                size: "sm",
                className: "flex-grow",
              })}
            >
              <span className="max-sm:hidden">View Live</span> <TrendingUpIcon className="size-5 sm:ml-2.5" />
            </Link>
          )}
          <Link
            href={`/projects/${props.slug}`}
            className={buttonVariants({
              variant: "default",
              size: "sm",
              className: "min-w-32 flex-grow",
            })}
          >
            Know More <ArrowRightIcon className="size-5 ml-2.5" />
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectCard;
