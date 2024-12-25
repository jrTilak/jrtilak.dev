import { cn } from "@/helpers/cn";
import { Blog } from "@/types/blog.types";
import Image from "next/image";
import Link from "next/link";

type Props = Omit<Blog, "content"> & {
  className?: string;
};

const SecondaryBlogCard = (props: Props) => {
  return (
    <div
      className={cn(
        "w-full flex flex-col sm:flex-row sm:items-center gap-6 bg-card shadow-md rounded-xl p-2.5",
        props.className
      )}
    >
      <div className="lg:max-w-[238px] w-full flex items-center justify-center overflow-hidden lg:max-h-[238px] rounded-md">
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
      <div className="lg:max-w-[272px] w-full">
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
        <div className="flex items-center gap-2.5">
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

export default SecondaryBlogCard;
