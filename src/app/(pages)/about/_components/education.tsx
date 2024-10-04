import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { EDUCATION } from "@/data/education";

const Education = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Education</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {EDUCATION.map((education, index) => (
          <div
            className="grid grid-cols-[40px_1fr] gap-6 font-medium"
            key={index}
          >
            <Link
              href={education.college.url}
              target={education.college.url ? "_blank" : undefined}
              className="bg-muted rounded-full p-2 shadow-md size-10 "
            >
              <Image
                src={education.college.image}
                alt={education.college.name}
                height={80}
                width={80}
                className="aspect-square size-full"
              />
            </Link>
            <div className="flex sm:items-center justify-between flex-col sm:flex-row">
              <div className="flex flex-col">
                <h4 className="text-lg flex items-center gap-4">
                  <span>{education.title}</span>
                  <ChevronDown className="size-5 opacity-0 group-hover:opacity-100 font-normal transition-all" />
                </h4>
                <h5 className="text-sm text-muted-foreground">
                  {education.college.name}
                </h5>
              </div>
              <span className="text-muted-foreground text-sm sm:text-right">
                {education.date.from} - {education.date.to} <br /> (
                {education.date.duration})
              </span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default Education;
