"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "@/hooks/use-form";
import { SendIcon } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

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
      const res = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_API_KEY || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_KEY || "",
        { ...data, date: new Date().toLocaleString() },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      );
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
            I&apos;d love to hear from you! Whether you have a question, want to
            discuss a project, or just want to connect, feel free to reach out
            through any of the following channels:
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            <div className="flex flex-col gap-1.5 col-span-2 sm:col-span-1 lg:col-span-2 xl:col-span-1">
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
              {errors.name && (
                <span className="text-destructive text-sm">{errors.name}</span>
              )}
            </div>
            <div className="flex flex-col gap-1.5 col-span-2 sm:col-span-1 lg:col-span-2 xl:col-span-1">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                placeholder="Eg: contact@example.com"
                {...register("email", {
                  required: true,
                  validate(value) {
                    const emailRegex =
                      /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim;
                    if (!emailRegex.test(value)) {
                      return "Please enter a valid email address";
                    }
                  },
                })}
              />
              {errors.email && (
                <span className="text-destructive text-sm">{errors.email}</span>
              )}
            </div>
            <div className="flex flex-col gap-1.5 col-span-2">
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
              {errors.subject && (
                <span className="text-destructive text-sm">
                  {errors.subject}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-1.5 col-span-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                placeholder="I am glad to..."
                {...register("message", {
                  required: true,
                  validate(value) {
                    if (value?.length < 10) {
                      return "Message must be at least 10 characters";
                    }
                  },
                })}
              />
              {errors.message && (
                <span className="text-destructive text-sm">
                  {errors.message}
                </span>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter className="w-full flex justify-end items-end gap-4">
          <Button type="reset" variant={"outline"} onClick={reset}>
            Cancel
          </Button>
          <Button
            isLoading={isFormSubmitting}
            type="submit"
            className="sm:min-w-48 min-w-32"
          >
            Send Message <SendIcon className="size-5 ml-3" />
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default ContactForm;
