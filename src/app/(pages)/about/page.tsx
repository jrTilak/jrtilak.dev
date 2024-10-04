import React from "react";
import MoreInfo from "./_components/more-info";
import DetailsCard from "./_components/details-card";
import Testimonials from "@/components/globals/testimonials";
import AreYouReady from "@/components/globals/are-you-ready";
import Experience from "./_components/experience";
import Education from "./_components/education";

const Page = () => {
  return (
    <div className="flex flex-col gap-9 sm:gap-12">
      <section
        id="about"
        className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-6 container mx-auto"
      >
        <DetailsCard />
        <MoreInfo />
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-9 sm:gap-y-12 container mx-auto">
        <Experience />
        <Education />
      </section>
      <Testimonials />
      <AreYouReady />
    </div>
  );
};

export default Page;
