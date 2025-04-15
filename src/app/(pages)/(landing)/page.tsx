import React from "react";
import Hero from "./_components/hero-section";
import TrustedBy from "./_components/trusted-by";
import Skills from "@/components/blocks/skills";
import Testimonials from "@/components/blocks/testimonials";
import AreYouReady from "@/components/blocks/are-you-ready";
import WorksAndProjects from "@/components/blocks/work-and-projects";
import { getAllProjects } from "@/lib/project";

const Page = async () => {
  const projects = await getAllProjects();
  return (
    <div className="flex flex-col gap-9 sm:gap-12">
      <Hero />
      <section id="trusted-by" className="container mx-auto">
        <TrustedBy />
      </section>
      <Skills id="area-of-expertise" expertiseOnly />
      <WorksAndProjects projects={projects} activeCategory="all" limit={9} />
      <Testimonials />
      <AreYouReady />
    </div>
  );
};

export default Page;
