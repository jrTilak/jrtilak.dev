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

const MoreInfo = () => {
  return (
    <Card className="flex-grow">
      <CardHeader>
        <CardTitle className="text-xl sm:text-4xl">
          I&apos;m Bentos Walker, a product designer.
        </CardTitle>
        <CardDescription className="text-xs sm:text-lg flex flex-col gap-5">
          <p>
            I am a San francisco-based product designer with a focus on web
            design, illustration, a visual development. I have a diverse range
            of experience having worked across various fields and industries.
          </p>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source.
          </p>
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
