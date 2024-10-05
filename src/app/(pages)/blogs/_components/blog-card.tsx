import { cn } from "@/helpers/cn";
import { Blog } from "@/types/blog.types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = Omit<Blog, "content"> & {
  lessDescription?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

const BlogCard = (props: Props) => {
  const descriptionLength = props.lessDescription ? 80 : 150;
  return (
    <div
      className={cn(
        "w-full flex h-full flex-col sm:flex-row sm:items-center gap-6 bg-white shadow-md rounded-xl px-3.5 py-3 sm:px-5 sm:py-5",
        props.className
      )}
      style={props.style}
    >
      <div className="lg:max-w-[238px] lg:max-h-[160px] w-full overflow-hidden flex items-center justify-center">
        <Link href={`/blogs/${props.slug}`} className="w-full h-full">
          <Image
            className="w-full rounded-md object-cover object-center h-full max-h-40"
            src={props.image}
            alt="hero"
            height={600}
            width={600}
          />
        </Link>
      </div>
      <div className="w-full">
        <div className="flex gap-2">
          {props.tags?.map((tag) => (
            <Link
              key={tag}
              href={`/blogs/tags/${tag}`}
              className="inline-flex text-purple-500 bg-purple-400/[0.08] font-medium text-xs py-1 px-3 rounded-full mb-4 opacity-70"
            >
              {tag}
            </Link>
          ))}
        </div>
        <Link href={`/blogs/${props.slug}`} className="hover:underline">
          <h2 className="font-semibold text-base mb-3">{props.title}</h2>
        </Link>
        <p className="text-sm text-gray-600">
          {props.summary?.substring(0, descriptionLength)}
          {props.summary?.length > descriptionLength ? "..." : ""}
        </p>
        <div className="flex items-center gap-2.5 mt-2">
          <p className="text-sm">
            <div>By Tilak Thapa</div>
          </p>
          <span className="flex w-[3px] h-[3px] rounded-full bg-gray-300" />
          <p className="text-sm">
            {new Date(props.publishedAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
