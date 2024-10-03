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
        <CardDescription className="text-lg">Hello There!</CardDescription>
        <CardTitle className="text-4xl">
          I’m Bentos Walker, a product designer crafting user-centric design
          with pixel-perfect precision.
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <h4 className="font-medium">Available For:</h4>
        <ul className="flex flex-col gap-1 ml-9 list-disc">
          <li>Freelancing</li>
          <li>Job Offer</li>
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
