"use client";
import { type Project } from "@/data/projects";
import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button, buttonVariants } from "../ui/button";
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
import { GithubIcon, TrendingUpIcon } from "lucide-react";
import toast from "react-hot-toast";
import { getSkillDetails } from "@/helpers/get-skill-detail";

const ProjectCard = (props: Project) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Card
          role="button"
          className="group cursor-pointer hover:shadow-md transition-colors hover:bg-muted"
        >
          <div className="w-fit h-fit">
            <Image
              src={props.image}
              alt={props.title}
              width={300}
              height={200}
              className="w-full h-auto object-cover object-left-top sm:h-[200px]"
            />
          </div>
          <CardHeader className="pt-2">
            <div className="flex justify-between">
              <div className="flex flex-wrap gap-2.5">
                {props.techs.map((tech, i) => (
                  <Badge
                    variant={"outline"}
                    key={i}
                    className="font-normal w-fit rounded-lg capitalize text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <CardTitle className="truncate text-lg text-left">
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
              width={300}
              height={200}
              quality={100}
              className="w-full h-auto object-contain object-center bg-muted max-h-[300px] shadow-md rounded-md"
            />
            <div className="flex flex-wrap gap-4 my-5">
              {props.techs.map((tech, i) => {
                const skill = getSkillDetails(tech);
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
            <div className="">{props.description}</div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex !flex-row items-center justify-end">
          {props.sourceCode ? (
            <Link
              href={props.sourceCode}
              target="_blank"
              title="Source Code"
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              <GithubIcon />
            </Link>
          ) : (
            <Button
              onClick={() => {
                toast.error("Sorry, This project is not open source yet!");
              }}
              variant={"secondary"}
              size={"sm"}
              title="Source Code"
            >
              <GithubIcon />
            </Button>
          )}
          {props.liveUrl ? (
            <Link
              href={props.liveUrl}
              target="_blank"
              className={buttonVariants({
                variant: "default",
                size: "sm",
                className: "flex-grow min-w-32",
              })}
            >
              View Live <TrendingUpIcon className="size-5 ml-2.5" />
            </Link>
          ) : (
            <Button
              onClick={() => {
                toast.error(
                  "Sorry, The live link for this project is not available yet!"
                );
              }}
              size={"sm"}
              className="flex-grow min-w-32"
            >
              View Live <TrendingUpIcon className="size-5 ml-2.5" />
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectCard;
