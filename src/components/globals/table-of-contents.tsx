"use client";
import React, { useEffect, useRef, useState } from "react";

import { ChevronsUp, LockKeyholeIcon, LockKeyholeOpenIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { generateHeadingId } from "@/helpers/generate-headingId";
import { Heading } from "@/helpers/extract-headings";
import { cn } from "@/helpers/cn";

type Props = {
  contents: Heading[];
  watchId: string;
  className?: string;
  congratulationText?: string;
};

const TableOfContents = ({ contents, watchId, className, congratulationText = "You've thoroughly explored this topic!" }: Props) => {
  const [isHeightFull, setIsHeightFull] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState("0px");
  const [innerIndicatorHeight, setInnerIndicatorHeight] = useState(4);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(`${contentRef.current.scrollHeight}px`);
    }
  }, [isHeightFull]);

  const updateIndicator = () => {
    const content = document.getElementById(watchId);
    if (!content) return;

    // Get the total height of the document and the visible height
    const contentHeight = document.documentElement.scrollHeight; // Total scrollable height
    const visibleHeight = window.innerHeight; // Height of the visible area

    // Get the current scroll position from the top
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Calculate the percentage scrolled
    let percentageScrolled =
      (scrollTop / (contentHeight - visibleHeight)) * 100;

    // If the user has scrolled to the bottom or beyond, set percentageScrolled to 100%
    if (scrollTop + visibleHeight >= contentHeight || percentageScrolled > 98) {
      percentageScrolled = 100;
    }

    // Update the indicator's width based on the percentage scrolled
    setInnerIndicatorHeight(Math.ceil(percentageScrolled));
  };

  useEffect(() => {
    const handleScroll = () => {
      updateIndicator();
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Card
      className={cn("min-w-64 h-fit static lg:sticky top-28 z-10", className)}
    >
      <CardHeader
        role="button"
        className="flex items-center justify-between flex-row p-3.5 cursor-pointer"
        onClick={() => setIsHeightFull((prev) => !prev)}
      >
        <CardTitle className="text-lg">Table of Contents</CardTitle>
        <ChevronsUp
          className={cn("size-5 transition-all", !isHeightFull && "rotate-180")}
        />
      </CardHeader>
      <CardContent className="p-2 pt-0 pb-0 grid grid-cols-[50px_1fr] gap-2.5">
        {/* indicator */}
        <div className="flex items-center justify-center w-full h-full">
          <div className="relative h-full w-[3px] bg-muted-foreground/50 rounded-lg">
            <div
              className="bg-primary w-ful h-1 rounded-lg transition-all duration-500"
              style={{
                height: `${innerIndicatorHeight}%`,
              }}
            />
          </div>
        </div>
        <div
          ref={contentRef}
          className={cn(
            "max-h-[calc(100vh-300px)] overflow-y-auto transition-all duration-700 pb-2 scrollbar"
          )}
          style={{ height: isHeightFull ? contentHeight : "240px" }}
        >
          <div className="flex flex-col gap-1.5 text-muted-foreground overflow-hidden pr-4">
            {contents.map((content, i) => (
              <TOCLink key={i} content={content} indexLevel={0} />
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-2 pt-0">
        <div
          className={cn(
            "grid grid-cols-[40px_1fr] gap-2.5 p-2 rounded-lg transition-colors",
            innerIndicatorHeight >= 100 ? "bg-primary/10" : " bg-muted/70"
          )}
        >
          <div
            className={cn(
              "aspect-square rounded-full border-[3px]  p-1.5 flex items-center justify-center size-fit transition-colors",
              innerIndicatorHeight >= 100
                ? "border-primary text-primary"
                : "text-muted-foreground border-muted-foreground/10"
            )}
          >
            {innerIndicatorHeight >= 100 ? (
              <LockKeyholeOpenIcon className="size-4" />
            ) : (
              <LockKeyholeIcon className="size-4" />
            )}
          </div>
          <div className="flex flex-col">
            <h4 className="font-semibold text-sm">Congratulations!</h4>
            <p className="text-xs text-muted-foreground">
              {congratulationText}
            </p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TableOfContents;

const TOCLink = ({
  content,
  indexLevel,
}: {
  content: Heading;
  indexLevel: number;
}) => {
  if (!content.children || content.children.length === 0) {
    return (
      <Link
        style={{
          marginLeft: `${indexLevel * 8}px`,
          fontSize: indexLevel === 0 ? "15px" : "14px",
        }}
        href={`#${generateHeadingId(content.label)}`}
        className="hover:text-primary hover:underline transition-all truncate"
      >
        {content.label}
      </Link>
    );
  } else {
    return (
      <div className="flex flex-col gap-1">
        <Link
          style={{
            marginLeft: `${indexLevel * 8}px`,
            fontSize: indexLevel === 0 ? "15px" : "14px",
          }}
          href={`#${generateHeadingId(content.label)}`}
          className="hover:text-primary hover:underline transition-all truncate"
        >
          {content.label}
        </Link>
        {content.children.map((childContent, i) => (
          <TOCLink key={i} content={childContent} indexLevel={indexLevel + 1} />
        ))}
      </div>
    );
  }
};
