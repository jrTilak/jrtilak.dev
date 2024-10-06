"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { SKILLS } from "@/data/skills";
import { Button } from "@/components/ui/button";
import { ChevronsUpIcon } from "lucide-react";
import { cn } from "@/helpers/cn";

const Skills = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <section className="container mx-auto" id="skills">
      <Card>
        <CardHeader>
          <CardTitle>Area of Expertise 💼</CardTitle>
          <CardDescription className="max-w-lg">
            Examine my expertise in modern frameworks and technologies that
            drive the development of powerful web applications.
          </CardDescription>
        </CardHeader>
        <CardContent className="gap-4 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8">
          {SKILLS.filter((skill) =>
            showMore ? true : skill.showAsExpertise
          ).map((a, i) => (
            <Link
              href={a.href}
              key={i}
              target="_blank"
              className="w-auto rounded-md bg-muted flex items-center justify-center px-5 py-3 flex-col gap-1 transition-all hover:shadow-md sm:min-w-32"
            >
              <Image
                src={a.image}
                alt={a.name}
                height={50}
                width={50}
                className="object-contain object-center w-full h-6 sm:h-8 rounded-md"
                quality={100}
              />
              <span className="text-sm text-muted-foreground text-center">
                {a.name}
              </span>
            </Link>
          ))}
          <Button
            onClick={() => {
              setShowMore((prev) => !prev);
            }}
            className="h-full flex-col min-w-32"
            variant={"outline"}
          >
            {showMore ? "Show less..." : "Show more..."}
            <ChevronsUpIcon
              className={cn(
                "size-5 mt-2.5 transition-all",
                !showMore && "rotate-180"
              )}
            />
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};

export default Skills;
