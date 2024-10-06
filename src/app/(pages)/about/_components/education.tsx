import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { EDUCATION } from "@/data/education";
import { IMAGES } from "@/data/images";
import { cn } from "@/helpers/cn";
import { Separator } from "@/components/ui/separator";

const Education = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Education 🎓</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {EDUCATION.map((education, index) => (
          <div
            className="grid grid-cols-[40px_1fr] gap-6 font-medium relative"
            key={index}
          >
            {index !== EDUCATION.length - 1 && (
              <Separator
                orientation="vertical"
                className="min-h-14 h-full w-0.5 absolute bg-muted-foreground rounded-full z-0 top-0 left-5 opacity-60"
              />
            )}
            <Link
              href={education.college.url ?? "#"}
              target={education.college.url ? "_blank" : undefined}
              className={cn(
                "bg-muted rounded-full p-2 shadow-md size-10 relative z-10",
                !education.college.url && "pointer-events-none"
              )}
            >
              <Image
                src={education.college.image ?? IMAGES.placeholders.college}
                alt={education.college.name}
                height={80}
                width={80}
                className={cn(
                  "aspect-square size-full",
                  !education.college.image && "dark:invert"
                )}
              />
            </Link>
            <div className="flex sm:items-center justify-between flex-col sm:flex-row">
              <div className="flex flex-col">
                <h4 className="text-lg flex items-center gap-4">
                  <span>{education.title}</span>
                  <ChevronDown className="size-5 opacity-0 group-hover:opacity-100 font-normal transition-all" />
                </h4>
                <Link
                  href={education.college.url ?? "#"}
                  className={cn(
                    "text-sm text-muted-foreground hover:underline",
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
                    education.date.duration.toLowerCase() === "ongoing" &&
                      "text-primary"
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
