import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { SKILLS } from "@/data/skills";

const AreaOfExpertise = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Area of Expertise</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center gap-4 flex-wrap">
        {SKILLS.filter((skill) => skill.showAsExpertise).map((a, i) => (
          <Link
            href={a.href}
            key={i}
            target="_blank"
            className="w-auto rounded-md bg-muted flex items-center justify-center px-5 py-3 flex-col gap-1 transition-all hover:shadow-md min-w-32"
          >
            <Image
              src={a.image}
              alt={a.name}
              height={50}
              width={50}
              className="object-contain object-center w-full h-6 sm:h-8 rounded-md"
              quality={100}
            />
            <span className="text-sm text-muted-foreground text-center">
              {a.name}
            </span>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
};

export default AreaOfExpertise;
