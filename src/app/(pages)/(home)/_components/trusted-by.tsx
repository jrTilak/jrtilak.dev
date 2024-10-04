import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TRUSTED_BY } from "@/data/trusted-by";
import Link from "next/link";
import Image from "next/image";

const TrustedBy = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Trusted By</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center gap-4">
        {TRUSTED_BY.map((trustedBy, i) => (
          <Link
            href={trustedBy.href}
            key={i}
            title={trustedBy.label}
            className="h-9 w-auto rounded-md bg-muted flex items-center justify-center px-3 py-1 grayscale"
          >
            <Image
              src={trustedBy.image}
              alt={trustedBy.label}
              height={50}
              width={50}
              className="object-contain object-center w-full h-full"
              quality={100}
            />
          </Link>
        ))}
      </CardContent>
    </Card>
  );
};

export default TrustedBy;
