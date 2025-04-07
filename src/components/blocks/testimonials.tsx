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
import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/base/button";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/base/dialog";
import { IMAGES } from "@/constants/images";

const Testimonials = () => {
  return (
    <section id="testimonials" className="container mx-auto">
      <Carousel>
        <Card>
          <CardHeader>
            <CardTitle>Words of Appreciation 💬</CardTitle>
            <CardDescription>
              Discover the experiences and feedback from those who&apos;ve
              collaborated with me.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CarouselContent className="">
              {TESTIMONIALS.map((testimony, i) => (
                <CarouselItem key={i} className="md:basis-1/2 group">
                  <div className="flex flex-col gap-9 p-4 bg-muted group-hover:shadow-lg border hover:border-primary border-muted rounded-md select-none relative">
                    <Image
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
                        className="rounded-full size-12 sm:size-16 object-cover object-center"
                        height={80}
                        width={80}
                      />
                      <div className="flex flex-col justify-center">
                        <span className="text-xs">⭐⭐⭐⭐⭐</span>
                        <Link
                          href={testimony.href}
                          target="_blank"
                          className="font-medium text-base sm:text-lg underline hover:text-primary"
                        >
                          {testimony.name}
                        </Link>
                        <span className="text-muted-foreground text-xs sm:text-sm">
                          {testimony.position}
                        </span>
                      </div>
                    </div>
                    <p>
                      {testimony.inShort.substring(0, 200)} ...
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            className="h-fit py-1"
                            variant={"outline"}
                            size={"sm"}
                          >
                            See More
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <div className="flex items-center gap-2.5">
                              <Image
                                src={
                                  testimony.image ?? IMAGES.placeholders.avatar
                                }
                                alt={testimony.name}
                                className="rounded-full size-12 sm:size-16 object-cover object-center"
                                height={80}
                                width={80}
                              />
                              <div className="flex flex-col justify-center">
                                <span className="text-xs">⭐⭐⭐⭐⭐</span>
                                <Link
                                  href={testimony.href}
                                  target="_blank"
                                  className="font-medium text-base sm:text-lg underline hover:text-primary"
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
            <CarouselPrevious className="static rounded-md w-12" />
            <CarouselNext className="static rounded-md w-12" />
          </CardFooter>
        </Card>
      </Carousel>
    </section>
  );
};

export default Testimonials;
