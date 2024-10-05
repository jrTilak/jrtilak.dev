"use client";
import React from "react";

import ContactLinks from "./_components/contact-links";
import ContactForm from "./_components/contact-form";
import FAQs from "./_components/faq";

const Page = () => {
  return (
    <section className="mx-auto container grid grid-cols-[400px_1fr] gap-9 sm:gap-12">
      <ContactLinks />
      <div className="flex flex-col gap-9 sm:gap-12">
        <ContactForm />
        <FAQs />
      </div>
    </section>
  );
};

export default Page;
