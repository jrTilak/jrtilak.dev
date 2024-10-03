import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { CopyIcon, PhoneCallIcon } from "lucide-react";
import { CONTACTS } from "@/data/contact";
import Link from "next/link";

const DetailsCard = () => {
  return (
    <div className="text-center">
      <Card>
        <CardHeader>
          <div className="p-6">
            <Image
              src={"/images/avatar.png"}
              alt=""
              height={600}
              width={600}
              className="w-full h-fit object-cover object-center"
            />
          </div>
          <CardTitle className="text-3xl">Tilak Thapa 👋</CardTitle>
          <CardDescription>
            A Passionate Full Stack Developer 🖥️
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex items-center justify-center gap-4">
          {CONTACTS.map((contact) => (
            <Link
              href={contact.href}
              target="_blank"
              key={contact.href}
              className={buttonVariants({
                variant: "outline",
                size: "icon",
                className: "aspect-square h-5 group",
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
