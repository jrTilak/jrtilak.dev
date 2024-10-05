import React from "react";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MailPlusIcon } from "lucide-react";
import { PERSONAL_DETAILS } from "@/data/personal-details";

const MoreInfo = () => {
  return (
    <Card className="flex-grow">
      <CardHeader>
        <CardTitle className="text-xl sm:text-4xl">
          {PERSONAL_DETAILS.aboutMe.header}
        </CardTitle>
        <CardDescription className="text-xs sm:text-lg flex flex-col gap-5">
          {PERSONAL_DETAILS.aboutMe.more.map((c, i) => (
            <p key={i}>{c}</p>
          ))}
        </CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto">
        <Button className="ml-auto">
          Get in Touch
          <MailPlusIcon className="size-5 ml-3" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MoreInfo;
