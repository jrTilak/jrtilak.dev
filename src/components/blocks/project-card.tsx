import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/base/card";
import Image from "next/image";
import { Badge } from "../base/badge";
import { Button } from "../base/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/base/dialog";
import Link from "next/link";
import { GithubIcon, TrendingUpIcon } from "lucide-react";
import { ProjectMetaData } from "@/types/project.types";
import { getSkillDetails } from "@/lib/get-skill";

const ProjectCard = (props: ProjectMetaData) => {
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
            <Link
              href={props.urls?.liveUrl ?? props.urls?.sourceUrl ?? "#"}
              target="_blank"
            >
              <Image
                src={props.image}
                alt=""
                width={1200}
                height={800}
                quality={100}
                className="w-full h-auto object-contain object-center bg-muted max-h-[300px] shadow-md rounded-md"
              />
            </Link>
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
          {props.urls?.otherUrls?.map((url, i) => (
            <Link href={url.url} target="_blank" title={url.label} key={i}>
              <Button variant={"outline"} size={url.image ? "icon" : "default"}>
                {url.image && (
                  <Image
                    src={url.image}
                    alt={url.label ?? ""}
                    width={20}
                    height={20}
                    className="size-4"
                  />
                )}
                {url.label && <span>{url.label}</span>}
              </Button>
            </Link>
          ))}
          {props.urls?.sourceUrl && (
            <Link
              href={props.urls?.sourceUrl}
              target="_blank"
              title="Source Code"
            >
              <Button variant={"outline"} size={"sm"} className="w-full">
                <GithubIcon />
              </Button>
            </Link>
          )}
          {props.urls?.liveUrl && (
            <Link
              href={props.urls?.liveUrl}
              target="_blank"
              className="flex-grow"
            >
              <Button variant={"outline"} size={"sm"} className="w-full">
                <span className="max-sm:hidden">View Live</span>{" "}
                <TrendingUpIcon className="size-5 sm:ml-2.5" />
              </Button>
            </Link>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectCard;
