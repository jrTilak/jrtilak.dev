import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/base/card";
import Link from "next/link";
import { TRUSTED_BY } from "@/constants/trusted-by";
import Image from 'next-export-optimize-images/image';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";


const TrustedBy = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Trusted By 🪄</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap items-center gap-4">
        {TRUSTED_BY.map((trustedBy, i) => (
          <TooltipProvider
            key={i}
            delayDuration={0}
          >
            <Tooltip
            >
              <TooltipTrigger>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={trustedBy.href}
                  className="bg-muted flex h-10 w-auto items-center justify-center rounded-md px-4 py-2 grayscale transition-all hover:shadow-md hover:grayscale-0"
                >
                  <Image
                    src={trustedBy.image}
                    alt={trustedBy.label}
                    height={50}
                    width={50}
                    className="h-full w-full object-contain object-center"
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  {trustedBy.label}
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </CardContent>
    </Card>
  );
};

export default TrustedBy;
