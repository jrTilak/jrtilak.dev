import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/base/card";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { EDUCATION } from "@/constants/education";
import { IMAGES } from "@/constants/images";
import { cn } from "@/lib/cn";
import { Separator } from "@/components/base/separator";

const Education = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Education 🎓</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {EDUCATION.map((education, index) => (
          <div className="relative grid grid-cols-[40px_1fr] gap-6 font-medium" key={index}>
            {index !== EDUCATION.length - 1 && (
              <Separator
                orientation="vertical"
                className="bg-muted-foreground absolute top-0 left-5 z-0 h-full min-h-14 w-0.5 rounded-full opacity-60"
              />
            )}
            <Link
              href={education.college.url ?? "#"}
              target={education.college.url ? "_blank" : undefined}
              className={cn(
                "bg-muted relative z-10 size-10 rounded-full p-2 shadow-md",
                !education.college.url && "pointer-events-none"
              )}
            >
              <img
                src={education.college.image ?? IMAGES.placeholders.college}
                alt={education.college.name}
                height={80}
                width={80}
                className={cn("aspect-square size-full", !education.college.image && "dark:invert")}
              />
            </Link>
            <div className="flex flex-col justify-between sm:flex-row sm:items-center">
              <div className="flex flex-col">
                <h4 className="flex items-center gap-4 text-lg">
                  <span>{education.title}</span>
                  <ChevronDown className="size-5 font-normal opacity-0 transition-all group-hover:opacity-100" />
                </h4>
                <Link
                  href={education.college.url ?? "#"}
                  className={cn(
                    "text-muted-foreground text-sm hover:underline",
                    !education.college.url && "pointer-events-none"
                  )}
                >
                  {education.college.name}
                </Link>
              </div>
              <span className="text-muted-foreground text-sm sm:text-right">
                {education.date.from} - {education.date.to} <br /> (
                <span
                  className={cn(
                    education.date.duration.toLowerCase() === "ongoing" && "text-primary"
                  )}
                >
                  {education.date.duration})
                </span>
              </span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default Education;
