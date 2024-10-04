import React from "react";
import DetailsCard from "./details-card";
import MoreInfo from "./more-info";
import Stats from "./stats";

const Hero = () => {
  return (
    <section
      id="hero"
      className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-6 container mx-auto"
    >
      <DetailsCard />
      <div className="flex flex-col gap-6">
        <MoreInfo />
        <Stats />
      </div>
    </section>
  );
};

export default Hero;
