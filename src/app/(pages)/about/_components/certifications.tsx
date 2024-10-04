import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CERTIFICATION } from "@/data/certification";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const Certifications = () => {
  return (
    <section className="container mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Certifications</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {CERTIFICATION.map((certification, i) => (
            <Card
              key={i}
              className="group cursor-pointer hover:shadow-md transition-colors"
            >
              <Link
                target="_blank"
                href={certification.image}
                className="w-full h-fit"
              >
                <Image
                  src={certification.image}
                  alt={certification.title}
                  width={300}
                  height={200}
                  className="w-full h-auto object-cover object-top sm:h-[200px]"
                />
              </Link>
              <CardHeader className="pt-2">
                <div className="flex justify-between">
                  <div className="flex flex-wrap gap-2.5">
                    <Badge
                      variant={"outline"}
                      key={i}
                      className="font-normal w-fit rounded-lg capitalize text-xs"
                    >
                      {certification.issuedAt}
                    </Badge>
                  </div>
                </div>
                <Link
                  href={certification.link}
                  target="_blank"
                  className="hover:underline"
                >
                  <CardTitle className="truncate text-base text-left">
                    {certification.title}
                  </CardTitle>
                </Link>
              </CardHeader>
            </Card>
          ))}
        </CardContent>
      </Card>
    </section>
  );
};

export default Certifications;
