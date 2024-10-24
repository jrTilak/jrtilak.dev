import React from "react";
import MoreInfo from "./_components/more-info";
import DetailsCard from "./_components/details-card";
import Testimonials from "@/components/globals/testimonials";
import AreYouReady from "@/components/globals/are-you-ready";
import Experience from "./_components/experience";
import Education from "./_components/education";
import Certifications from "./_components/certifications";
import Skills from "./_components/skills";
import { Metadata } from "next";
import { PERSONAL_DETAILS } from "@/data/personal-details";

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
      <Skills />
      <Certifications />
      <Testimonials />
      <AreYouReady />
    </div>
  );
};

export default Page;

export const metadata: Metadata = {
  title: `About | ${PERSONAL_DETAILS.name}`,
  description: PERSONAL_DETAILS.aboutMe.inShort,
  authors: [
    {
      name: "Tilak Thapa",
    },
  ],
  category: "Personal Website",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: `About | ${PERSONAL_DETAILS.name}`,
    description: PERSONAL_DETAILS.aboutMe.inShort,
    images: [
      {
        url: "/about.png",
      },
    ],
  },
};
