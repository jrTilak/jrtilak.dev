"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProjectCard from "./project-card";
import { PROJECTS } from "@/data/projects";
import { Button } from "../ui/button";

const WorksAndProjects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
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
          {[
            "All",
            ...Array.from(new Set(PROJECTS.map((p) => p.category)))
              .flat()
              .sort(),
          ].map((c, i) => (
            <Button
              variant={
                activeCategory === c?.toLowerCase() ? "default" : "outline"
              }
              size={"sm"}
              key={i}
              onClick={() => {
                setActiveCategory(c?.toLowerCase());
              }}
              className="text-sm capitalize min-w-12"
            >
              {c}
            </Button>
          ))}
        </div>
        <CardContent className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {PROJECTS.filter((project) =>
            activeCategory === "all"
              ? true
              : project.category.includes(activeCategory?.toLowerCase() as any)
          ).map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </CardContent>
      </Card>
    </section>
  );
};

export default WorksAndProjects;
