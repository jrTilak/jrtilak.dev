import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";

const MoreInfo = () => {
  return (
    <Card className="flex-grow">
      <CardHeader>
        <CardDescription className="text-xs sm:text-lg">
          🙋‍♂️ Greetings! I&apos;m Tilak Thapa (jrTilak)
        </CardDescription>
        <CardTitle className="text-xl sm:text-4xl">
          Passionate dev with 1.8+ years of experience building apps with the
          MERN stack + Next.js, along with DevOps in AWS, Docker, and CI/CD
          pipelines.
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <h4 className="font-medium">Available For:</h4>
        <ul className="flex flex-col gap-1 ml-9 list-disc">
          <li>Freelancing 💼</li>
          <li>Job Offer 📨 </li>
        </ul>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button className="ml-auto">
          Download CV
          <DownloadIcon className="size-5 ml-3" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MoreInfo;
