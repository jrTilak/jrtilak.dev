import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { EXPERIENCES } from "@/data/experiences";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { getCertificationDetails } from "@/helpers/get-certification.details";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/helpers/cn";

const Experience = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Work Experience 💥</CardTitle>
      </CardHeader>
      <Accordion type="single" collapsible>
        <CardContent className="flex flex-col gap-4">
          {EXPERIENCES.map((experience, index) => (
            <AccordionItem
              value={index.toString()}
              key={index}
              className="w-full border-none relative z-10"
            >
              {index !== EXPERIENCES.length - 1 && (
                <Separator
                  orientation="vertical"
                  className="min-h-14 h-full w-0.5 absolute bg-muted-foreground rounded-full z-0 top-0 left-5 opacity-60"
                />
              )}
              <div className="grid grid-cols-[40px_1fr] gap-6 font-medium relative z-10">
                <Link
                  href={experience.company.url}
                  target="_blank"
                  className="bg-muted rounded-full p-2 shadow-md size-10 "
                >
                  <Image
                    src={experience.company.image}
                    alt={experience.company.name}
                    height={80}
                    width={80}
                    className="aspect-square size-full object-cover object-center"
                  />
                </Link>
                <div className="flex flex-col gap-2.5">
                  <AccordionTrigger
                    className="flex items-start sm:items-center justify-between text-left py-0 group flex-col sm:flex-row hover:no-underline"
                    hideChevron
                  >
                    <div className="flex flex-col">
                      <h4 className="text-lg flex items-center gap-4">
                        <span>{experience.position}</span>
                        <ChevronDown className="size-5 opacity-0 group-hover:opacity-100 font-normal transition-all" />
                      </h4>
                      <Link
                        href={experience.company.url}
                        target="_blank"
                        className="text-sm text-muted-foreground hover:underline"
                      >
                        {experience.company.name}
                      </Link>
                    </div>
                    <span className="text-muted-foreground text-sm sm:text-right">
                      {experience.date.from} - {experience.date.to} <br />(
                      <span
                        className={cn(
                          experience.date.duration.toLowerCase() ===
                            "ongoing" && "text-primary"
                        )}
                      >
                        {experience.date.duration})
                      </span>
                    </span>
                  </AccordionTrigger>

                  <AccordionContent className="font-normal flex flex-col gap-4">
                    <ul>
                      {experience.description.map((desc, i) => (
                        <li
                          key={i}
                          className="grid grid-cols-[10px_1fr] gap-1 items-center"
                        >
                          <div className="bg-foreground size-1.5 rounded-full" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2.5">
                      {experience.certifications?.map((certification, i) => {
                        const certificationData =
                          getCertificationDetails(certification);
                        return (
                          <Link
                            key={i}
                            href={certificationData.image}
                            target="_blank"
                            className="hover:scale-110 transition-all max-h-20 aspect-square"
                            title={certificationData.title}
                          >
                            <Image
                              src={certificationData.image}
                              alt={certificationData.title}
                              height={200}
                              width={200}
                              key={i}
                              className="rounded-md object-cover object-center h-full"
                            />
                          </Link>
                        );
                      })}
                    </div>
                  </AccordionContent>
                </div>
              </div>
            </AccordionItem>
          ))}
        </CardContent>
      </Accordion>
    </Card>
  );
};

export default Experience;
