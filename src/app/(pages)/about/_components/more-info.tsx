import React from "react";

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/base/card";
import { Button } from "@/components/base/button";
import { MailPlusIcon } from "lucide-react";
import Link from "next/link";

const MoreInfo = () => {
  return (
    <Card className="flex-grow">
      <CardHeader>
        <CardTitle className="text-xl sm:text-4xl">
          I&apos;m Tilak Thapa, a full-stack web developer.
        </CardTitle>
        <CardDescription className="flex flex-col gap-5 text-xs sm:text-lg">
          I'm a curiosity-driven developer with over 2 years of expertise in building robust web
          applications using the MERN stack and Next.js. 💻 My hands-on experience extends to Docker
          and cloud deployment on AWS, allowing me to deliver high-quality solutions that meet
          diverse needs. As a firm believer in the power of continuous improvement, I resonate with
          the quote: "The only way to do great work is to love what you do." — Steve Jobs. This
          passion drives me to participate in hackathons, share insights through blogging, and
          create meaningful user experiences that extend beyond just writing code. 📚 "Code is like
          humor. When you have to explain it, it's bad." — Cory House.
        </CardDescription>
      </CardHeader>
      <CardFooter>
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
