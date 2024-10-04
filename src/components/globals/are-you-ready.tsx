import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { HandshakeIcon } from "lucide-react";
import { buttonVariants } from "../ui/button";
import { section } from "framer-motion/client";

const AreYouReady = () => {
  return (
    <section className="container mx-auto text-center" id="are-you-ready">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl sm:text-4xl max-w-[800px] mx-auto">
            Are You Ready for magic?
          </CardTitle>
          <CardDescription className="text-base max-w-4xl mx-auto pt-2">
            Reach out and let's make it happen ✨. I'm also available for
            full-time or Part-time opportunities to push the boundaries of
            design and deliver exceptional work.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex items-center justify-center w-full">
          <Link
            href="/contact"
            className={buttonVariants({ className: "min-w-48" })}
          >
            Let&apos;s Talk <HandshakeIcon className="ml-2.5 size-5" />
          </Link>
        </CardFooter>
      </Card>
    </section>
  );
};

export default AreYouReady;
