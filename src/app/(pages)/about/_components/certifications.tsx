import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/base/card";
import { CERTIFICATION } from "@/constants/certification";
import Image from "next/image";
import { Badge } from "@/components/base/badge";
import Link from "next/link";

import ImageViewer from "@/components/blocks/image-viewer";

const Certifications = () => {
  return (
    <section className="container mx-auto" id="certifications">
      <Card>
        <CardHeader>
          <CardTitle>Badges of Honor 🎖️</CardTitle>
          <CardDescription>
            These credentials symbolize my dedication to quality and excellence in building robust
            web applications.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {CERTIFICATION.map((certification, i) => (
            <Card key={i} className="group cursor-pointer transition-colors hover:shadow-md">
              <ImageViewer
                src={certification.image}
                title={certification.title}
                trigger={{
                  className: "w-full h-fit cursor-pointer",
                }}
              >
                <Image
                  src={certification.image}
                  alt={certification.title}
                  width={600}
                  quality={100}
                  height={400}
                  className="h-auto w-full object-cover object-top sm:h-[200px]"
                />
              </ImageViewer>

              <CardHeader className="pt-2">
                <div className="flex justify-between">
                  <div className="flex flex-wrap gap-2.5">
                    <Badge
                      variant={"outline"}
                      key={i}
                      className="w-fit rounded-lg text-xs font-normal capitalize"
                    >
                      {certification.issuedAt}
                    </Badge>
                  </div>
                </div>
                <Link href={certification.link} target="_blank" className="hover:underline">
                  <CardTitle className="truncate text-left text-base">
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
