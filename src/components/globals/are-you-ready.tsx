import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

const AreYouReady = () => {
  return (
    <section className="container mx-auto text-center" id="are-you-ready">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl sm:text-4xl max-w-[800px] mx-auto">
            Ready for Some Web Magic? 🪄
          </CardTitle>
          <CardDescription className="text-base max-w-4xl mx-auto pt-2">
            Whether it&apos;s crafting innovative web solutions or pushing the
            limits of what&apos;s possible, I&apos;m here to make it happen.
            Open to freelance work, collaborations, or even full-time
            roles—let&apos;s create something extraordinary together!
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex items-center justify-center w-full">
          <Link
            href="/contact"
            className={buttonVariants({ className: "min-w-48" })}
          >
            Let&apos;s Make Magic 💫
          </Link>
        </CardFooter>
      </Card>
    </section>
  );
};

export default AreYouReady;
