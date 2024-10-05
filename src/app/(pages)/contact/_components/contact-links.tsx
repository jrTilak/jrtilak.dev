"use client";
import React, { Fragment } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CONTACTS } from "@/data/contact";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import toast from "react-hot-toast";
import { CopyIcon } from "lucide-react";

const ContactLinks = () => {
  return (
    <Card className="relative mt-[89px] h-fit">
      <CardHeader className="absolute -top-[89px] left-1/2 -translate-x-1/2 w-full">
        <CardTitle className="flex flex-col items-center justify-center gap-2.5">
          <Image
            src={"/images/avatar.png"}
            alt="Avatar"
            width={200}
            height={200}
            className="rounded-lg size-28 sm:size-36 shadow-lg border border-muted select-none"
          />
          <span>Tilak Thapa</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="bg-muted flex flex-col m-6 mt-28 sm:mt-[140px] rounded-lg gap-1.5 p-0">
        {CONTACTS.map((contact, index) => (
          <Fragment key={index}>
            {index > 0 && <Separator />}
            <Link
              href={contact.href}
              target={contact.type === "mail" ? "_self" : "_blank"}
              className="flex items-center gap-2.5 group p-4 border hover:border-primary border-muted rounded-lg transition-all duration-500"
            >
              <div className="p-1.5 border bg-background shadow-md border-muted rounded-lg">
                <Image
                  src={contact.image}
                  alt={contact.type}
                  width={28}
                  height={28}
                  className="size-6 sm:size-7 object-contain object-center"
                />
              </div>
              <div className="flex flex-col">
                <span className="capitalize text-sm text-muted-foreground">
                  {contact.type}
                </span>
                <span className="text-base font-medium">{contact.label}</span>
              </div>
            </Link>
          </Fragment>
        ))}
      </CardContent>
      <CardFooter className="w-full">
        <Button
          onClick={() => {
            const email = CONTACTS.find((c) => c.type === "mail")?.label;
            try {
              navigator.clipboard.writeText(email ?? "");
              toast.success(`Email copied to clipboard: ${email}`);
            } catch (error) {
              toast.error("Failed to copy email to clipboard");
            }
          }}
          variant={"outline"}
          className="w-full"
        >
          Copy Email <CopyIcon className="size-5 ml-3" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ContactLinks;
