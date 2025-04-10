import React from "react";
import { Metadata } from "next";
import DetailsCard from "./_components/details-card";
import MoreInfo from "./_components/more-info";
import Skills from "@/components/blocks/skills";
import Experience from "./_components/experience";
import Education from "./_components/education";
import Certifications from "./_components/certifications";
import Testimonials from "@/components/blocks/testimonials";
import AreYouReady from "@/components/blocks/are-you-ready";

const Page = () => {
  return (
    <div className="flex flex-col gap-9 sm:gap-12">
      <section
        id="about"
        className="container mx-auto grid grid-cols-1 gap-6 lg:grid-cols-[400px_1fr]"
      >
        <DetailsCard />
        <MoreInfo />
      </section>
      <section className="container mx-auto grid grid-cols-1 gap-x-6 gap-y-9 sm:gap-y-12 lg:grid-cols-2">
        <Experience />
        <Education />
      </section>
      <Skills />
      <Certifications />
      <Testimonials />
      <AreYouReady />
    </div>
  );
};

export default Page;

export const metadata: Metadata = {
  title: `About`,
};
