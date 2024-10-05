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
import { PERSONAL_DETAILS } from "@/data/personal-details";

const MoreInfo = () => {
  return (
    <Card className="flex-grow">
      <CardHeader>
        <CardDescription className="text-xs sm:text-lg">
          🙋‍♂️ Greetings! I&apos;m {PERSONAL_DETAILS.name} (
          {PERSONAL_DETAILS.nickname})
        </CardDescription>
        <CardTitle className="text-xl sm:text-4xl">
          {PERSONAL_DETAILS.aboutMe.inShort}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <h4 className="font-medium">Available For:</h4>
        <ul className="flex flex-col gap-1 ml-9 list-disc">
          {PERSONAL_DETAILS.availableFor.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
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
