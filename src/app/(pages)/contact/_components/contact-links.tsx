"use client";
import React, { Fragment, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/base/card";
import Image from "next/image";
import { Button } from "@/components/base/button";
import Link from "next/link";
import { Separator } from "@/components/base/separator";
import toast, { CheckmarkIcon } from "react-hot-toast";
import { CopyIcon, X } from "lucide-react";
import { IMAGES } from "@/constants/images";
import { CONTACTS_LINKS } from "@/constants/contact-links";

const ContactLinks = () => {
  const [icon, setIcon] = useState(<CopyIcon className="ml-3 size-5" />);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  return (
    <Card className="relative mt-[89px] h-fit">
      <CardHeader className="absolute -top-[89px] left-1/2 w-full -translate-x-1/2">
        <CardTitle className="flex flex-col items-center justify-center gap-2.5">
          <Image
            src={IMAGES.avatar}
            alt="Avatar"
            width={200}
            height={200}
            className="border-muted size-28 rounded-lg border shadow-lg select-none sm:size-36"
          />
          <span>Tilak Thapa</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="bg-muted m-6 mt-28 flex flex-col gap-1.5 rounded-lg p-0 sm:mt-[140px]">
        {CONTACTS_LINKS.map((contact, index) => (
          <Fragment key={index}>
            {index > 0 && <Separator />}
            <Link
              href={contact.href}
              target={contact.type === "mail" ? "_self" : "_blank"}
              className="group hover:border-primary border-muted flex items-center gap-2.5 rounded-lg border p-4 transition-all duration-500"
            >
              <div className="bg-background border-muted rounded-lg border p-1.5 shadow-md">
                <Image
                  src={contact.image}
                  alt={contact.type}
                  width={28}
                  height={28}
                  className="size-6 object-contain object-center sm:size-7 dark:invert"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground text-sm capitalize">{contact.type}</span>
                <span className="text-base font-medium">{contact.label}</span>
              </div>
            </Link>
          </Fragment>
        ))}
      </CardContent>
      <CardFooter className="w-full">
        <Button
          onClick={() => {
            setIsBtnDisabled(true);
            const email = CONTACTS_LINKS.find((c) => c.type === "mail")?.label;
            try {
              navigator.clipboard.writeText(email ?? "");
              toast.success(`Email copied to clipboard: ${email}`);
              setIcon(<CheckmarkIcon className="ml-3 size-5" />);
            } catch {
              toast.error("Failed to copy email to clipboard");
              setIcon(<X className="ml-3 size-5" />);
            } finally {
              setTimeout(() => {
                setIcon(<CopyIcon className="ml-3 size-5" />);
                setIsBtnDisabled(false);
              }, 3000);
            }
          }}
          disabled={isBtnDisabled}
          variant={"outline"}
          className="w-full"
        >
          Copy Email {icon}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ContactLinks;
