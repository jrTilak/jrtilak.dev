import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/base/card";
import { Button } from "@/components/base/button";
import { DownloadIcon } from "lucide-react";
import Link from "next/link";

const MoreInfo = () => {
  return (
    <Card className="flex-grow">
      <CardHeader className="pb-3">
        <CardDescription className="text-xs sm:text-lg">
          🙋‍♂️ Greetings! I&apos;m Tilak Thapa (jrTilak)
        </CardDescription>
        <CardTitle className="text-xl sm:text-4xl">
          Full-Stack Web/App Developer Turning Complex Problems into Clean, Scalable Solutions. </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <p>
          I build scalable apps, clean architectures, and refined interfaces across web and mobile. Open to collaborations and opportunities that value strong problem-solving and craftsmanship.
        </p>
      </CardContent>
      <CardFooter className="mt-auto">
        <Link
          href={"/pdf/jrtilak-cv.pdf"}
          download
          target="_blank"
          className="ml-auto flex items-center justify-center gap-1.5"
        >
          <Button>
            Download Resume
            <DownloadIcon />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export { MoreInfo };
