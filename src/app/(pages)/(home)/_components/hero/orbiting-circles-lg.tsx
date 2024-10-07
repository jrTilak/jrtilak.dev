"use client";
import React from "react";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { SKILLS } from "@/data/skills";
import Image from "next/image";
import { getUniqueRandomNumbers } from "@/helpers/get-random-numbers";

const OrbitingCirclesLg = () => {
  const indexes = getUniqueRandomNumbers(0, SKILLS.length - 4, 4);

  const skills = indexes.map((index) => SKILLS[index]);

  return (
    <>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent max-lg:hidden"
        radius={170}
        duration={20}
        svgClassName="max-lg:hidden"
      >
        <Image
          src={skills[0]?.image}
          className="size-4"
          alt=""
          height={40}
          width={40}
        />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent max-lg:hidden"
        radius={170}
        duration={20}
        svgClassName="max-lg:hidden"
        delay={20}
      >
        <Image
          src={skills[1]?.image}
          className="size-4"
          alt=""
          height={40}
          width={40}
        />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent max-lg:hidden"
        radius={160}
        duration={20}
        svgClassName="max-lg:hidden"
        reverse
      >
        <Image
          src={skills[2]?.image}
          className="size-4"
          alt=""
          height={40}
          width={40}
        />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent max-lg:hidden"
        radius={160}
        duration={20}
        svgClassName="max-lg:hidden"
        delay={20}
        reverse
      >
        <Image
          src={skills[3]?.image}
          className="size-4"
          alt=""
          height={40}
          width={40}
        />
      </OrbitingCircles>
    </>
  );
};

export default OrbitingCirclesLg;
