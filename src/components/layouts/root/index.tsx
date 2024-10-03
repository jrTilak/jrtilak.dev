import React from "react";
import Header from "./header";

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <main className="my-28">{children}</main>
    </div>
  );
};

export default RootLayout;
