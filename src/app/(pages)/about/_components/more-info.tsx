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
          I'm Tilak Thapa, a Full-Stack Web & App Developer
        </CardTitle>
        <CardDescription className="flex flex-col gap-5 text-xs sm:text-lg">
          <p>
            Driven by curiosity and a passion for building meaningful digital experiences, I specialize in crafting scalable web and app solutions—going beyond the MERN stack and Next.js to deliver clean, efficient, and user-friendly products. 💻
          </p>
          <p>
            With hands-on development experience, I’ve designed and shipped impactful solutions that balance thoughtful UX with maintainable code. I thrive on iteration, continuous learning, and solving complex challenges with elegant, practical solutions.
          </p>
          <p>
            “Talk is cheap. Show me the code.” — Linus Torvalds
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

export { MoreInfo };
