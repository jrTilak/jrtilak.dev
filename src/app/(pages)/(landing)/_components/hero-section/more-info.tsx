import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/base/card";
import { Button, buttonVariants } from "@/components/base/button";
import { DownloadIcon } from "lucide-react";
import Link from "next/link";

const MoreInfo = () => {
  return (
    <Card className="flex-grow">
      <CardHeader>
        <CardDescription className="text-xs sm:text-lg">
          🙋‍♂️ Greetings! I&apos;m Tilak Thapa (jrTilak)
        </CardDescription>
        <CardTitle className="text-xl sm:text-4xl">
          Curiosity-driven developer with 2.4+ years of expertise building robust web apps using the
          MERN stack and Next.js, paired with hands-on experience in Docker and cloud deployment on
          AWS.
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <h4 className="font-medium">Available For:</h4>
        <ul className="ml-9 flex list-disc flex-col gap-1">
          {["Freelancing 💼", "Job Offer 📨", "Collaborations 🤝"].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="mt-auto">
        <Link
          href={"/pdf/jrtilak-cv.pdf"}
          download
          target="_blank"
          className="ml-auto flex items-center justify-center gap-1.5"
        >
          <Button>
            Download CV
            <DownloadIcon className="ml-3 size-5" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default MoreInfo;
