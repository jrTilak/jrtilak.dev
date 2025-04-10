import React from "react";
import DetailsCard from "./details-card";
import MoreInfo from "./more-info";
import Stats from "./stats";
import GithubStats from "./github-stats";

const Hero = () => {
  return (
    <section
      id="hero"
      className="container mx-auto grid grid-cols-1 gap-6 lg:grid-cols-[400px_1fr]"
    >
      <DetailsCard />
      <div className="flex flex-col gap-6">
        <MoreInfo />
        <GithubStats />
      </div>
      <div className="col-span-2">
        <Stats />
      </div>
    </section>
  );
};

export default Hero;
