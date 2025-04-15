"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/base/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/base/accordion";
import { EXPERIENCES } from "@/constants/experience";
import Image from "next/image";
import Link from "next/link";
import { getCertificationDetails } from "@/lib/get-certification";
import { Separator } from "@/components/base/separator";
import { cn } from "@/lib/cn";
import ImageViewer from "@/components/blocks/image-viewer";

const Experience = () => {
  const [open, setOpen] = useState("");
  return (
    <Card>
      <CardHeader>
        <CardTitle>Work Experience 💥</CardTitle>
      </CardHeader>
      <Accordion value={open} onValueChange={setOpen} triggerIcon={false} type="single" collapsible>
        <CardContent className="flex flex-col gap-4">
          {EXPERIENCES.map((experience, index) => (
            <AccordionItem
              value={index.toString()}
              key={index}
              className="relative z-10 w-full border-none"
              onMouseOver={() => setOpen(index.toString())}
            >
              {index !== EXPERIENCES.length - 1 && (
                <Separator
                  orientation="vertical"
                  className="bg-muted-foreground absolute top-0 left-5 z-0 h-full min-h-14 w-0.5 rounded-full opacity-60"
                />
              )}
              <div className="relative z-10 grid grid-cols-[40px_1fr] gap-6 font-medium">
                <Link
                  href={experience.company.url}
                  target="_blank"
                  className="bg-muted size-10 rounded-full p-2 shadow-md"
                >
                  <img
                    src={experience.company.image}
                    alt={experience.company.name}
                    height={80}
                    width={80}
                    className="aspect-square size-full object-cover object-center"
                  />
                </Link>
                <div className="flex flex-col gap-2.5">
                  <AccordionTrigger className="group flex flex-col items-start justify-between py-0 text-left hover:no-underline sm:flex-row sm:items-center">
                    <div className="flex flex-col">
                      <h4 className="flex items-center gap-4 text-lg">
                        <span>{experience.position}</span>
                      </h4>
                      <Link
                        href={experience.company.url}
                        target="_blank"
                        className="text-muted-foreground text-sm hover:underline"
                      >
                        {experience.company.name}
                      </Link>
                    </div>
                    <span className="text-muted-foreground text-sm sm:text-right">
                      {experience.date.from} - {experience.date.to} <br />(
                      <span
                        className={cn(
                          experience.date.duration.toLowerCase() === "ongoing" && "text-primary"
                        )}
                      >
                        {experience.date.duration})
                      </span>
                    </span>
                  </AccordionTrigger>

                  <AccordionContent className="flex flex-col gap-4 font-normal">
                    <ul className="list-disc">
                      {experience.description.map((desc, i) => (
                        <li key={i} className="list-inside">
                          {desc}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2.5">
                      {experience.certifications?.map((certification, i) => {
                        const certificationData = getCertificationDetails(certification);
                        return (
                          <imgViewer
                            key={i}
                            src={certificationData.image}
                            title={certificationData.title}
                            trigger={{
                              className:
                                "hover:scale-110 transition-all max-h-20 aspect-square bg-muted border border-muted rounded-md cursor-pointer",
                            }}
                          >
                            <img
                              src={certificationData.image}
                              alt={certificationData.title}
                              height={200}
                              width={200}
                              key={i}
                              className="h-full rounded-md object-cover object-center"
                            />
                          </ImageViewer>
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
