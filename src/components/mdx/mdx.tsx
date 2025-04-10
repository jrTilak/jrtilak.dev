import { cn } from "@/lib/cn";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  id: string;
};

const MDX = ({ children, className, id }: Props) => {
  return (
    <div
      id={id}
      className={cn("prose prose-table:overflow-hidden", className)}
    >
      <div
        className={cn(
          "prose-p:font-body prose-ol:font-body prose-ul:font-body prose-li:font-body",
          "prose-blockquote:font-body prose-strong:font-body prose-em:font-body",
          "prose-headings:font-body prose-code:font-body prose-pre:font-body",
          "prose-table:font-body prose-th:font-body prose-td:font-body"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default MDX;
