import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/base/card";
import Link from "next/link";
import { Button } from "../base/button";

const AreYouReady = () => {
  return (
    <section className="container mx-auto text-center" id="are-you-ready">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl sm:text-4xl max-w-[800px] mx-auto">
            Ready to Build Something Exceptional? 🚀
          </CardTitle>
          <CardDescription className="text-base max-w-4xl mx-auto pt-2">
            Got a bold idea or a project that needs a touch of magic? Whether
            it&apos;s web, app, or something in between—I&apos;m all in. Open to
            freelance work, collaborations, or full-time roles. Let&apos;s bring
            something extraordinary to life.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex items-center justify-center w-full">
          <Link href="/contact">
            <Button className="min-w-48">Let&apos;s Build Together 💫</Button>
          </Link>
        </CardFooter>
      </Card>
    </section>
  );
};

export default AreYouReady;
