import React from "react";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/base/card";
import Link from "next/link";
import { Button } from "../base/button";

const AreYouReady = () => {
  return (
    <section className="container mx-auto text-center" id="are-you-ready">
      <Card>
        <CardHeader>
          <CardTitle className="mx-auto max-w-[800px] text-2xl sm:text-4xl">
            Ready to Build Something Exceptional? 🚀
          </CardTitle>
          <CardDescription className="mx-auto max-w-4xl pt-2 text-base">
            Got a bold idea or a project that needs a touch of magic? Whether it&apos;s web, app, or
            something in between—I&apos;m all in. Open to freelance work, collaborations, or
            full-time roles. Let&apos;s bring something extraordinary to life.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex w-full items-center justify-center">
          <Link href="/contact">
            <Button className="min-w-48">Let&apos;s Build Together 💫</Button>
          </Link>
        </CardFooter>
      </Card>
    </section>
  );
};

export default AreYouReady;
