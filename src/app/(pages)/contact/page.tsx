"use client";
import React from "react";

import ContactLinks from "./_components/contact-links";
import ContactForm from "./_components/contact-form";
import FAQs from "./_components/faq";
import { PERSONAL_DETAILS } from "@/data/personal-details";
import { Metadata } from "next";

const Page = () => {
  return (
    <section className="mx-auto container grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-9 sm:gap-12">
      <ContactLinks />
      <div className="flex flex-col gap-9 sm:gap-12">
        <ContactForm />
        <FAQs />
      </div>
    </section>
  );
};

export default Page;


export const metadata: Metadata = {
  title: `Contact | ${PERSONAL_DETAILS.name}`,
  description: "Get in touch with me for expert web development services! Whether you have questions or need a custom solution, I am ready to assist you. Contact me now!",
  authors: [
    {
      name: "Tilak Thapa",
    },
  ],
  category: "Personal Website",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: `Contact | ${PERSONAL_DETAILS.name}`,
    description: "Get in touch with me for expert web development services! Whether you have questions or need a custom solution, I am ready to assist you. Contact me now!",
  },
};
