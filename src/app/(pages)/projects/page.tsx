import WorksAndProjects from "@/components/globals/works-and-projects";
import { PERSONAL_DETAILS } from "@/data/personal-details";
import { Metadata } from "next";
import React from "react";

const Page = () => {
  return <WorksAndProjects />;
};

export default Page;

export const metadata: Metadata = {
  title: `Projects | ${PERSONAL_DETAILS.name}`,
  description: "Explore my dynamic portfolio of innovative web development projects! Discover how I leverage the MERN stack and Next.js to create seamless, user-friendly experiences that elevate your digital presence.",
  authors: [
    {
      name: "Tilak Thapa",
    },
  ],
  category: "Personal Website",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: `Projects | ${PERSONAL_DETAILS.name}`,
    description: "Explore my dynamic portfolio of innovative web development projects! Discover how I leverage the MERN stack and Next.js to create seamless, user-friendly experiences that elevate your digital presence.",
    images: [
      {
        url: "/projects.png",
      }
    ]
  },
};
