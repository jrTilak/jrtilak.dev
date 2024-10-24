import { PERSONAL_DETAILS } from "@/data/personal-details";
import { Metadata } from "next";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return <>{children}</>;
};

export default Layout;

export const metadata: Metadata = {
  title: `Blogs | ${PERSONAL_DETAILS.name}`,
  description: "Explore my blog where I share valuable tips, tutorials, and personal experiences in web development and programming. Let's grow together in this ever-evolving tech landscape!",
  authors: [
    {
      name: "Tilak Thapa",
    },
  ],
  category: "Personal Website",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: `Blogs | ${PERSONAL_DETAILS.name}`,
    description: "Explore my blog where I share valuable tips, tutorials, and personal experiences in web development and programming. Let's grow together in this ever-evolving tech landscape!",
    images: [
      {
        url: "/blogs.png",
      }
    ]
  },
};
