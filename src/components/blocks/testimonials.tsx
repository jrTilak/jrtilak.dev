import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/base/carousel";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/base/card";
import { TESTIMONIALS } from "@/constants/testimonials";
import { Button } from "@/components/base/button";

import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/base/dialog";
import { IMAGES } from "@/constants/images";
import Link from "next/link";
import Image from 'next-export-optimize-images/image'

const Testimonials = () => {
  return (
    <section id="testimonials" className="container mx-auto">
      <Carousel>
        <Card>
          <CardHeader>
            <CardTitle>Words of Appreciation 💬</CardTitle>
            <CardDescription>
              Discover the experiences and feedback from those who&apos;ve collaborated with me.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CarouselContent className="">
              {TESTIMONIALS.map((testimony, i) => (
                <CarouselItem key={i} className="group md:basis-1/2">
                  <div className="bg-muted hover:border-primary border-muted relative flex flex-col gap-9 rounded-md border p-4 select-none group-hover:shadow-lg">
                    <img
                      src={
                        testimony.platform === "linkedin"
                          ? "https://www.svgrepo.com/show/475661/linkedin-color.svg"
                          : "https://www.svgrepo.com/show/473616/freelancer.svg"
                      }
                      title={`This recommendation was given on ${testimony.platform}.`}
                      height={40}
                      width={40}
                      alt=""
                      className="absolute top-4 right-4 size-4 md:size-5"
                    />
                    <div className="flex items-center gap-2.5">
                      <Image
                        src={testimony.image ?? IMAGES.placeholders.avatar}
                        alt={testimony.name}
                        className="size-12 rounded-full object-cover object-center sm:size-16"
                        height={80}
                        width={80}
                      />
                      <div className="flex flex-col justify-center">
                        <span className="text-xs">⭐⭐⭐⭐⭐</span>
                        <Link
                          href={testimony.href}
                          target="_blank"
                          className="hover:text-primary text-base font-medium underline sm:text-lg"
                        >
                          {testimony.name}
                        </Link>
                        <span className="text-muted-foreground text-xs sm:text-sm">
                          {testimony.position}
                        </span>
                      </div>
                    </div>
                    <p>
                      {testimony.inShort.substring(0, 200)} ... &nbsp;&nbsp;&nbsp;&nbsp;
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="h-fit py-1" variant={"outline"} size={"sm"}>
                            See More
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <div className="flex items-center gap-2.5">
                              <Image
                                src={testimony.image ?? IMAGES.placeholders.avatar}
                                alt={testimony.name}
                                className="size-12 rounded-full object-cover object-center sm:size-16"
                                height={80}
                                width={80}
                              />
                              <div className="flex flex-col justify-center">
                                <span className="text-xs">⭐⭐⭐⭐⭐</span>
                                <Link
                                  href={testimony.href}
                                  target="_blank"
                                  className="hover:text-primary text-base font-medium underline sm:text-lg"
                                >
                                  {testimony.name}
                                </Link>
                                <span className="text-muted-foreground text-xs sm:text-sm">
                                  {testimony.position}
                                </span>
                              </div>
                            </div>
                          </DialogHeader>
                          <p>{testimony.content}</p>
                        </DialogContent>
                      </Dialog>
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </CardContent>
          <CardFooter className="flex items-center justify-center gap-4">
            <CarouselPrevious className="static w-12 rounded-md" />
            <CarouselNext className="static w-12 rounded-md" />
          </CardFooter>
        </Card>
      </Carousel>
    </section>
  );
};

export default Testimonials;
