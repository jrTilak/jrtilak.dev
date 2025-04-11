import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/base/card";
import AreYouReady from "@/components/blocks/are-you-ready";
import Image from "next/image";
import { SERVICES } from "@/constants/services";
import { getSkillDetails } from "@/lib/get-skill";
import Link from "next/link";
import { Badge } from "@/components/base/badge";
import { cn } from "@/lib/cn";
import { Metadata } from "next";

const Page = () => {
  return (
    <div className="flex flex-col gap-9 sm:gap-12">
      <section id="services" className="container mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-2xl sm:text-4xl">Quality Services</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {SERVICES.map(({ available = true, ...service }, index) => (
              <Card
                className={cn(
                  "border-accent-foreground/50 relative border",
                  !available ? "pointer-events-none opacity-80" : "hover:border-primary"
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
                    <Image className="size-12" src={service.icon} height={48} width={48} alt="" />
                    <span>{service.title}</span>
                  </CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="ml-4 list-inside list-disc">
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2.5">
                  {service.skills.map((s, index) => {
                    const skill = getSkillDetails(s);
                    if (!skill) return null;
                    return (
                      <Link key={index} target="_blank" href={skill?.href}>
                        <Badge
                          variant={"outline"}
                          className="w-fit rounded-lg text-xs font-normal capitalize transition-colors hover:shadow-md"
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
  title: `Services`,
  description:
    "Transform your online presence with expert web development services. Specializing in Next.js, MERN stack, and cutting-edge technologies to build fast, secure, and scalable solutions. Let's create something great together!",
  authors: [
    {
      name: "Tilak Thapa",
    },
  ],
  category: "Personal Website",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: `Services | Tilak Thapa`,
    description:
      "Transform your online presence with expert web development services. Specializing in Next.js, MERN stack, and cutting-edge technologies to build fast, secure, and scalable solutions. Let's create something great together!",
  },
};
