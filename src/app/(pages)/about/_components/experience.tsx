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
import { getCertificationDetails } from "@/helpers/get-certification.details";

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
              className="w-full border-none"
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
                  <AccordionTrigger
                    className="flex items-start sm:items-center justify-between text-left py-0 group flex-col sm:flex-row hover:no-underline"
                    hideChevron
                  >
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

                  <AccordionContent className="font-normal flex flex-col gap-4">
                    <div> {experience.description}</div>

                    <div className="flex flex-wrap gap-2.5">
                      {experience.certifications?.map((certification, i) => {
                        const certificationData =
                          getCertificationDetails(certification);
                        return (
                          <Link
                            key={i}
                            href={certificationData.image}
                            target="_blank"
                            className="hover:scale-110 transition-all"
                          >
                            <Image
                              src={certificationData.image}
                              alt={certificationData.title}
                              height={60}
                              width={60}
                              key={i}
                              className="rounded-md object-cover object-center"
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
