import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AreYouReady from "@/components/globals/are-you-ready";
import Image from "next/image";
import { SERVICES } from "@/data/services";
import { getSkillDetails } from "@/helpers/get-skill-detail";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/helpers/cn";
import { Metadata } from "next";
import { PERSONAL_DETAILS } from "@/data/personal-details";

const Page = () => {
  return (
    <div className="flex flex-col gap-9 sm:gap-12">
      <section id="services" className="container mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-2xl sm:text-4xl">
              Quality Services
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {SERVICES.map(({ available = true, ...service }, index) => (
              <Card
                className={cn(
                  "border-accent-foreground/50 border relative",
                  !available
                    ? "opacity-80 pointer-events-none"
                    : "hover:border-primary"
                )}
                key={index}
              >
                {!available && (
                  <Badge
                    title="This service is not available for now!"
                    variant={"destructive"}
                    className="absolute top-3 right-3"
                  >
                    Not Available 🙅
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="flex flex-col gap-2">
                    <Image
                      className="size-12"
                      src={service.icon}
                      height={48}
                      width={48}
                      alt=""
                    />
                    <span>{service.title}</span>
                  </CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="ml-4 list-disc list-inside">
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2.5">
                  {service.skills.map((s, index) => {
                    const skill = getSkillDetails(s);
                    return (
                      <Link key={index} target="_blank" href={skill?.href}>
                        <Badge
                          variant={"outline"}
                          className="font-normal w-fit rounded-lg capitalize  hover:shadow-md transition-colors text-xs"
                        >
                          <Image
                            src={skill?.image}
                            alt={""}
                            width={20}
                            height={20}
                            className="size-3"
                          />
                          <span className="ml-2.5">{skill?.name}</span>
                        </Badge>
                      </Link>
                    );
                  })}
                </CardFooter>
              </Card>
            ))}
          </CardContent>
        </Card>
      </section>
      <AreYouReady />
    </div>
  );
};

export default Page;


export const metadata: Metadata = {
  title: `Services | ${PERSONAL_DETAILS.name}`,
  description: "Transform your online presence with expert web development services. Specializing in Next.js, MERN stack, and cutting-edge technologies to build fast, secure, and scalable solutions. Let's create something great together!",
  authors: [
    {
      name: "Tilak Thapa",
    },
  ],
  category: "Personal Website",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: `Services | ${PERSONAL_DETAILS.name}`,
    description: "Transform your online presence with expert web development services. Specializing in Next.js, MERN stack, and cutting-edge technologies to build fast, secure, and scalable solutions. Let's create something great together!",
  },
};
