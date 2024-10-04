import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { CONTACTS } from "@/data/contact";
import Link from "next/link";

const DetailsCard = () => {
  return (
    <div className="text-center">
      <Card className="h-[60vh] md:h-[40vh] flex items-center justify-center flex-col lg:h-auto">
        <CardHeader>
          <div className="p-6 hidden lg:block">
            <Image
              src={"/images/avatar.png"}
              alt=""
              height={600}
              width={600}
              className="w-full h-fit object-cover object-center rounded-full"
            />
          </div>
          <CardTitle className="text-4xl">Tilak Thapa 👋</CardTitle>
          <CardDescription className="text-base">
            Full Stack Web/App Developer 💻 with more than 2 year of experience.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex items-center justify-center gap-4">
          {CONTACTS.map((contact) => (
            <Link
              href={contact.href}
              target={contact.type !== "mail" ? "_blank" : undefined}
              key={contact.href}
              className={buttonVariants({
                variant: "outline",
                size: "icon",
                className: "aspect-square group",
              })}
              title={contact.label}
            >
              <Image
                src={contact.image}
                className="size-4 group-hover:scale-[1.10] transition-all"
                alt=""
                width={20}
                height={20}
              />
            </Link>
          ))}
        </CardFooter>
      </Card>
    </div>
  );
};

export default DetailsCard;
