import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TESTIMONIALS } from "@/data/testimonials";
import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IMAGES } from "@/data/images";

const Testimonials = () => {
  return (
    <section id="testimonials" className="container mx-auto">
      <Carousel>
        <Card>
          <CardHeader>
            <CardTitle>Testimonials</CardTitle>
            <CardDescription>
              Peace in this life is based upon faith and testimony, See what
              people say about me.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CarouselContent className="">
              {TESTIMONIALS.map((testimony, i) => (
                <CarouselItem key={i} className="md:basis-1/2 group">
                  <div className="flex flex-col gap-9 p-4 bg-muted group-hover:shadow-lg border hover:border-primary border-muted rounded-md select-none">
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
                          href={testimony.contactUrl}
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
                        <DialogTrigger
                          className={buttonVariants({
                            variant: "outline",
                            size: "sm",
                            className: "h-fit py-1",
                          })}
                        >
                          See More
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
                                  href={testimony.contactUrl}
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
