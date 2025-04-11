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
          Curiosity-driven full-stack web/app developer, constantly pushing the boundaries of
          what&apos;s possible to create innovative and seamless digital solutions.
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <p>
          I&apos;m currently open to freelance projects, full-time opportunities, and meaningful
          collaborations. If you&apos;ve got an idea worth building or a challenge worth solving,
          let&apos;s connect and make it happen. 💼📝🤝
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

export default MoreInfo;
