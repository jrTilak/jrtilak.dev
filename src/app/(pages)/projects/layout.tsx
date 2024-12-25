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
    title: `Blogs | ${PERSONAL_DETAILS.name}`,
    description: "Explore my dynamic portfolio of innovative web development projects! Discover how I leverage the MERN stack and Next.js to create seamless, user-friendly experiences that elevate your digital presence.",
    images: [
      {
        url: "/blogs.png",
      }
    ]
  },
};
