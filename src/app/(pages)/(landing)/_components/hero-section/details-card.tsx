import React from "react";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/base/card";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/base/button";
import Link from "next/link";
import { CONTACTS_LINKS } from "@/constants/contact-links";
import { IMAGES } from "@/constants/images";
import OrbitingCirclesLg from "./orbiting-circles-lg";

const DetailsCard = () => {
  return (
    <div className="text-center">
      <Card className="relative flex h-[60vh] flex-col items-center justify-center overflow-hidden md:h-[40vh] lg:h-auto">
        <CardHeader>
          <div className="relative hidden h-[350px] items-center justify-center rounded-full p-6 lg:flex">
            <OrbitingCirclesLg />
            <Image
              src={IMAGES.avatar}
              alt=""
              height={600}
              width={600}
              className="h-fit w-full rounded-full object-cover object-center"
            />
          </div>
          <CardTitle className="text-4xl">Tilak Thapa 👋</CardTitle>
          <CardDescription className="text-base">
            Crafting Web Solutions with 2.4+ Years of Expertise 🔥
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex items-center justify-center gap-4">
          {CONTACTS_LINKS.map((contact) => (
            <Link
              href={contact.href}
              target={contact.type !== "mail" ? "_blank" : undefined}
              className={"flex items-center justify-center"}
              title={contact.label}
            >
              <Button
                key={contact.href}
                variant={"outline"}
                size={"icon"}
                className="group aspect-square"
              >
                <Image
                  src={contact.image}
                  className="size-4 transition-all group-hover:scale-[1.10] dark:invert"
                  alt=""
                  width={20}
                  height={20}
                />
              </Button>
            </Link>
          ))}
        </CardFooter>
      </Card>
    </div>
  );
};

export default DetailsCard;
