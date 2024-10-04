import React from "react";
import Hero from "./_components/hero";
import TrustedBy from "./_components/trusted-by";

const Page = () => {
  return (
    <div className="flex flex-col gap-6">
      <Hero />
      <div className="container mx-auto">
        <TrustedBy />
      </div>
    </div>
  );
};

export default Page;
