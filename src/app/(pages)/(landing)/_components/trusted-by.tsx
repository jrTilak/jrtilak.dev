import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/base/card";
import Link from "next/link";
import Image from "next/image";
import { TRUSTED_BY } from "@/constants/trusted-by";

const TrustedBy = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Trusted By 🪄</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap items-center gap-4">
        {TRUSTED_BY.map((trustedBy, i) => (
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={trustedBy.href}
            key={i}
            title={trustedBy.label}
            className="bg-muted flex h-10 w-auto items-center justify-center rounded-md px-4 py-2 grayscale transition-all hover:shadow-md hover:grayscale-0"
          >
            <Image
              src={trustedBy.image}
              alt={trustedBy.label}
              height={50}
              width={50}
              className="h-full w-full object-contain object-center"
              quality={100}
            />
          </Link>
        ))}
      </CardContent>
    </Card>
  );
};

export default TrustedBy;
