"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/base/card";
import { Label } from "@/components/base/label";
import { Input } from "@/components/base/input";
import { Textarea } from "@/components/base/text-area";
import { Button } from "@/components/base/button";
import { useForm } from "@/hooks/use-form";
import { SendIcon } from "lucide-react";
import toast from "react-hot-toast";
import { NEW_MESSAGE_HTML } from "@/html-templates/new-message.html";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const { errors, handleSubmit, register, reset } = useForm<FormValues>({
    defaultValues: {
      email: "",
      message: "",
      name: "",
      subject: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    setIsFormSubmitting(true);
    const contact: Promise<any> = new Promise(async (resolve, reject) => {
      const refinedMessage = NEW_MESSAGE_HTML.replaceAll("{{NAME}}", data.name)
        .replaceAll("{{EMAIL}}", data.email)
        .replaceAll("{{SUBJECT}}", data.subject)
        .replaceAll("{{MESSAGE}}", data.message)
        .replaceAll("{{DATE}}", new Date().toDateString());

      const res = await fetch(process.env.NEXT_PUBLIC_SEND_NO_REPLY_EMAIL_URL as string, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          body: refinedMessage,
          to: process.env.NEXT_PUBLIC_SEND_NO_REPLY_EMAIL_TO,
          subject: `New Message from ${data.name}`,
        }),
      });

      if (res.status === 200) {
        resolve(res);
      } else {
        reject(res);
      }
    });

    toast.promise(contact, {
      error: () => {
        setIsFormSubmitting(false);
        return "Something went wrong. Please try again later.";
      },
      success: () => {
        setIsFormSubmitting(false);
        reset();
        return "Thank you for your message. I will get back to you as soon as possible.";
      },
      loading: "Sending message..., Please wait!",
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="lg:mt-[50px]">
      <Card>
        <CardHeader>
          <CardTitle>Let&apos;s 👋 Work Together</CardTitle>
          <CardDescription>
            I&apos;d love to hear from you! Whether you have a question, want to discuss a project,
            or just want to connect, feel free to reach out through any of the following channels:
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            <div className="col-span-2 flex flex-col gap-1.5 sm:col-span-1 lg:col-span-2 xl:col-span-1">
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                {...register("name", {
                  required: true,
                  validate(value) {
                    if (value?.length < 3) {
                      return "Name must be at least 3 characters";
                    }
                  },
                })}
                placeholder="Eg: John Doe"
              />
              {errors.name && <span className="text-destructive text-sm">{errors.name}</span>}
            </div>
            <div className="col-span-2 flex flex-col gap-1.5 sm:col-span-1 lg:col-span-2 xl:col-span-1">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                placeholder="Eg: contact@example.com"
                {...register("email", {
                  required: true,
                  validate(value) {
                    const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2, 4}/gim;
                    if (!emailRegex.test(value)) {
                      return "Please enter a valid email address";
                    }
                  },
                })}
              />
              {errors.email && <span className="text-destructive text-sm">{errors.email}</span>}
            </div>
            <div className="col-span-2 flex flex-col gap-1.5">
              <Label htmlFor="subject">Subject</Label>
              <Input
                type="text"
                placeholder="I am planning to..."
                {...register("subject", {
                  required: true,
                  validate(value) {
                    if (value?.length < 3) {
                      return "Subject must be at least 3 characters";
                    }
                  },
                })}
              />
              {errors.subject && <span className="text-destructive text-sm">{errors.subject}</span>}
            </div>
            <div className="col-span-2 flex flex-col gap-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea
                placeholder="I am glad to..."
                {...register("message", {
                  validate(value) {
                    if (value?.length < 10) {
                      return "Message must be at least 10 characters";
                    }
                  },
                })}
              />
              {errors.message && <span className="text-destructive text-sm">{errors.message}</span>}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex w-full items-end justify-end gap-4">
          <Button type="reset" variant={"outline"} onClick={reset}>
            Cancel
          </Button>
          <Button loading={isFormSubmitting} type="submit" className="min-w-32 sm:min-w-48">
            Send Message <SendIcon className="ml-3 size-5" />
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default ContactForm;
