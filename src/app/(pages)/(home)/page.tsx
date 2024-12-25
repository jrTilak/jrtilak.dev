import React from "react";
import Hero from "./_components/hero";
import TrustedBy from "./_components/trusted-by";
import AreaOfExpertise from "./_components/area-of-expertise";
import WorksAndProjects from "@/components/globals/works-and-projects";
import AreYouReady from "@/components/globals/are-you-ready";
import Testimonials from "@/components/globals/testimonials";
import { getAllProjects } from "@/services/projects";

const Page = async () => {
  const projects = await getAllProjects()
  return (
    <div className="flex flex-col gap-9 sm:gap-12">
      <Hero />
      <section id="trusted-by" className="container mx-auto">
        <TrustedBy />
      </section>
      <div id="area-of-expertise" className="container mx-auto">
        <AreaOfExpertise />
      </div>
      <WorksAndProjects
        projects={projects}
        activeCategory="all"
        limit={9}
      />
      <Testimonials />
      <AreYouReady />
    </div>
  );
};

export default Page;
