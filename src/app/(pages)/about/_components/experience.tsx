import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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

const Experience = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Work Experience</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <Accordion type="single" collapsible>
        <CardContent className="flex flex-col gap-4">
          {EXPERIENCES.map((experience, index) => (
            <AccordionItem
              value={index.toString()}
              key={index}
              className="w-full"
            >
              <div className="grid grid-cols-[40px_1fr] gap-6 font-medium">
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
                    className="aspect-square size-full"
                  />
                </Link>
                <div className="flex flex-col gap-2.5">
                  <AccordionTrigger className="flex items-start sm:items-center justify-between text-left py-0 group flex-col sm:flex-row">
                    <div className="flex flex-col">
                      <h4 className="text-lg flex items-center gap-4">
                        <span>{experience.position}</span>
                        <ChevronDown className="size-5 opacity-0 group-hover:opacity-100 font-normal transition-all" />
                      </h4>
                      <h5 className="text-sm text-muted-foreground">
                        {experience.company.name}
                      </h5>
                    </div>
                    <span className="text-muted-foreground text-sm sm:text-right">
                      {experience.date.from} - {experience.date.to} <br />(
                      {experience.date.duration})
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="font-normal">
                    {experience.description}
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
