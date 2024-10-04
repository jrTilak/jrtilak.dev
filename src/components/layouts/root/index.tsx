import React from "react";
import Header from "./header";
import Footer from "./footer";

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <main className="mt-28">{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
