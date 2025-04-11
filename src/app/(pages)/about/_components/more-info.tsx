import React from "react";

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/base/card";
import { Button } from "@/components/base/button";
import { MailPlusIcon } from "lucide-react";
import Link from "next/link";
import { EXPERIENCE_IN_YEARS } from "@/constants/stats";

const MoreInfo = () => {
  return (
    <Card className="flex-grow">
      <CardHeader>
        <CardTitle className="text-xl sm:text-4xl">
          I&apos;m Tilak Thapa, a full-stack web/app developer.
        </CardTitle>
        <CardDescription className="flex flex-col gap-5 text-xs sm:text-lg">
          <p>
            Driven by curiosity and a relentless pursuit of growth, I specialize in building
            powerful, scalable web applications—going beyond the MERN stack and Next.js to craft
            seamless digital experiences. 💻
          </p>
          <p>
            With over {EXPERIENCE_IN_YEARS} years of hands-on experience, I’ve built and shipped
            impactful digital solutions that blend clean code with thoughtful user experience. My
            work reflects a belief in constant iteration, continuous learning, and purposeful
            creation.
          </p>
          <p>
            “Any fool can write code that a computer can understand. Good programmers write code
            that humans can understand.” — Martin Fowler
          </p>
        </CardDescription>
      </CardHeader>
      <CardFooter className="self-end">
        <Link href={"/contact"} className="ml-auto">
          <Button>
            Get in Touch
            <MailPlusIcon className="ml-3 size-5" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default MoreInfo;
