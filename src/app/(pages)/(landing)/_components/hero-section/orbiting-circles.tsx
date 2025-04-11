"use client";
import React from "react";
import Image from "next/image";
import { getUniqueRandomNumbers } from "@/lib/get-random-numbers";
import { SKILLS } from "@/constants/skills";
import { OrbitingCircles as OC } from "@/components/base/orbiting-circles";

type Props = {
  className?: string;
  svgClassName?: string;
  radius?: [number, number];
};

const OrbitingCircles = ({ className, svgClassName, radius }: Props) => {
  const indexes = getUniqueRandomNumbers(0, SKILLS.length - 1, 4);

  const skills = indexes.map((index) => SKILLS[index]);

  return (
    <>
      <OC
        iconSize={40}
        radius={radius ? radius[0] : 170}
        className={className}
        svgClassName={svgClassName}
      >
        {skills.slice(0, 2).map((skill, index) => (
          <Image key={index} src={skill.image} className="size-4" alt="" height={40} width={40} />
        ))}
      </OC>
      <OC
        iconSize={40}
        reverse
        radius={radius ? radius[1] : 160}
        className={className}
        svgClassName={svgClassName}
      >
        {skills
          .slice(2, 4)
          .reverse()
          .filter((skill) => skill.image)
          .map((skill, index) => (
            <Image key={index} src={skill.image} className="size-4" alt="" height={40} width={40} />
          ))}
      </OC>
    </>
  );
};

export default OrbitingCircles;
