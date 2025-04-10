import { calculateTimeAgo } from "@/lib/calculate-time-ago";
import { cn } from "@/lib/cn";
import { Blog } from "@/types/blog.types";
import Image from "next/image";
import Link from "next/link";

type Props = Omit<Blog, "content"> & {
  className?: string;
  style?: React.CSSProperties;
};

const PrimaryBlogCard = (props: Props) => {
  return (
    <div
      className={cn(
        "w-full flex flex-col lg:flex-row lg:items-center gap-7.5 lg:gap-11 bg-card shadow-lg rounded-xl p-4 lg:p-2.5 lg:py-4",
        props.className
      )}
      style={props.style}
    >
      <div className="lg:max-w-[536px] w-full lg:max-h-[320px] flex items-center justify-center overflow-hidden rounded-md">
        <Link href={`/blogs/${props.slug}`} className="w-full h-full">
          <Image
            className="w-full rounded-md object-cover object-center h-full max-h-72"
            src={props.image}
            alt="hero"
            height={600}
            width={600}
          />
        </Link>
      </div>
      <div className="lg:max-w-[540px] w-full">
        <div className="flex gap-2 flex-wrap mt-3">
          {props.tags?.map((tag) => (
            <Link
              key={tag}
              href={`/blogs/tags/${tag}`}
              className="inline-flex text-purple-500 bg-purple-400/[0.08] font-medium text-sm py-1 px-3 rounded-full opacity-70"
            >
              {tag}
            </Link>
          ))}
        </div>
        <Link href={`/blogs/${props.slug}`} className="hover:underline">
          <h1 className="font-bold text-lg sm:text-xl md:text-2xl xl:text-3xl mb-4">
            {props.title}
          </h1>
        </Link>
        <p className="max-w-[524px] text-sm xl:text-base">
          {props.summary.substring(0, 130)}
          {props.summary.length > 130 ? "..." : ""}
        </p>
        <div className="flex items-center gap-2.5 mt-5">
          <div className="flex items-center gap-3">
            <div className="flex w-6 h-6 rounded-full overflow-hidden">
              <Image
                src={"/images/avatar.png"}
                alt="user"
                className="w-full h-full object-cover object-center"
                height={80}
                width={80}
              />
            </div>
            <p className="text-sm">Tilak Thapa</p>
          </div>
          <span className="flex w-[3px] h-[3px] rounded-full bg-gray-300" />
          <p className="text-sm">
            {calculateTimeAgo(props.publishedAt)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrimaryBlogCard;
