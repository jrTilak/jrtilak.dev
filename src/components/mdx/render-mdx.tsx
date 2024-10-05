import React from "react";

type Props = {
  children: React.ReactNode;
};

const RenderMdx = ({ children }: Props) => {
  return (
    <div className="prose prose-p:mb-0 prose-p:mt-0 prose-p:w-full w-full prose-thead:text-left prose-hr:mt-3 prose-hr:mb-3 prose-a:text-blue-600">
      <div className="w-full">{children}</div>
    </div>
  );
};

export default RenderMdx;
