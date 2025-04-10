"use client";
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/base/card";
import Link from "next/link";
import Image from "next/image";
import { SKILLS } from "@/constants/skills";
import { Button } from "@/components/base/button";
import { ChevronsUpIcon } from "lucide-react";
import { cn } from "@/lib/cn";

type Props = {
  expertiseOnly?: boolean;
  id?: string;
};

const Skills = ({ expertiseOnly, id }: Props) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <section className="container mx-auto" id={id ?? "skills"}>
      <Card>
        <CardHeader>
          <CardTitle>Area of Expertise 💼</CardTitle>
          {!expertiseOnly && (
            <CardDescription className="max-w-lg">
              Examine my expertise in modern frameworks and technologies that drive the development
              of powerful web applications.
            </CardDescription>
          )}
        </CardHeader>
        <CardContent className="xs:grid-cols-3 grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8">
          {SKILLS.filter((skill) => (showMore ? true : skill.showAsExpertise)).map((a, i) => (
            <Link
              href={a.href}
              key={i}
              target="_blank"
              className="bg-muted flex w-auto flex-col items-center justify-center gap-1 rounded-md px-5 py-3 transition-all hover:shadow-md sm:min-w-32"
            >
              <Image
                src={a.image}
                alt={a.name}
                height={50}
                width={50}
                className="h-6 w-full rounded-md object-contain object-center sm:h-8"
                quality={100}
              />
              <span className="text-muted-foreground text-center text-sm">{a.name}</span>
            </Link>
          ))}
          {!expertiseOnly && (
            <Button
              onClick={() => {
                setShowMore((prev) => !prev);
              }}
              className="h-full min-w-32 flex-col"
              variant={"outline"}
              wrapperClassName="flex flex-col items-center justify-center"
            >
              {showMore ? "Show less..." : "Show more..."}
              <ChevronsUpIcon className={cn("size-5 transition-all", !showMore && "rotate-180")} />
            </Button>
          )}
        </CardContent>
      </Card>
    </section>
  );
};

export default Skills;
