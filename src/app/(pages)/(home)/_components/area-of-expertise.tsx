import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { AREA_OF_EXPERTISE } from "@/data/area-of-expertise";

const AreaOfExpertise = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Area of Expertise</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center gap-4 flex-wrap">
        {AREA_OF_EXPERTISE.map((a, i) => (
          <Link
            href={a.href}
            key={i}
            className="w-auto rounded-md bg-muted flex items-center justify-center px-5 py-3 flex-col gap-1 transition-all hover:shadow-md min-w-32"
          >
            <Image
              src={a.image}
              alt={a.label}
              height={50}
              width={50}
              className="object-contain object-center w-full h-6 sm:h-8 rounded-md"
              quality={100}
            />
            <span className="text-sm text-muted-foreground text-center">
              {a.label}
            </span>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
};

export default AreaOfExpertise;
