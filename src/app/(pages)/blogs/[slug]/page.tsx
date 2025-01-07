import Error404 from "@/components/blocks/404";
import TableOfContents from "@/components/globals/table-of-contents";
import RenderMdx from "@/components/mdx/render-mdx";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/helpers/cn";
import { extractHeadings } from "@/helpers/extract-headings";
import { getAllBlogs, getBlogBySlug } from "@/services/blogs";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import readingTime from "reading-time";
import Reactions from "../_components/reactions";
import ReactionStats from "../_components/reaction-stats";

type Props = {
  params: {
    slug: string;
  };
};

const Page = async ({ params: { slug } }: Props) => {
  const blog = await getBlogBySlug(decodeURI(slug));

  const rTime = readingTime(blog?.rawContent ?? "");
  if (!blog) return <Error404 />;

  return (
    <div className="mt-12">
      <section className="flex flex-col container mx-auto items-center justify-center max-w-7xl">
        <div className="flex gap-3 flex-col items-center justify-center text-center max-w-5xl">
          <div className="flex gap-3 items-center">
            {blog.tags &&
              blog.tags.map((tag) => (
                <Link key={tag} href={`/blogs/tags/${tag}`} className="w-fit">
                  <Badge variant={"outline"}>{tag}</Badge>
                </Link>
              ))}
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold mt-1">
            {blog.title}
          </h1>
          {blog.summary && (
            <p className="text-sm md:text-base max-w-3xl" id="summary">
              {blog.summary}
            </p>
          )}
          <ReactionStats slug={slug} />
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="flex w-10 h-10 rounded-full overflow-hidden">
              <Image
                src={"/images/avatar.png"}
                alt="user"
                className="w-full h-full rounded-full object-center object-cover"
                height={80}
                width={80}
              />
            </div>
            <div className="text-left">
              <div className="font-medium text-base">Tilak Thapa</div>
              <div className="flex items-center gap-1.5 text-gray-600">
                <p>
                  {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    weekday: "short",
                  })}
                </p>
                <span className="flex w-[3px] h-[3px] rounded-full bg-gray-300" />
                <p>{rTime.text}</p>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={blog.image}
          alt="thumbnail"
          className={cn(
            "w-full border border-gray-300 h-auto object-center rounded-xl mt-6 max-h-[500px] shadow-md object-cover max-w-5xl"
          )}
          height={800}
          width={800}
        />
        <Separator className="mt-6 max-w-5xl" />
        <TableOfContents
          contents={extractHeadings(blog?.rawContent, blog.headingLevels!)}
          watchId="blog-content"
          className="w-full lg:hidden max-w-5xl static"
        />
        <div className="mt-12 w-full gap-16 mx-auto flex">
          <TableOfContents
            contents={extractHeadings(blog?.rawContent, blog.headingLevels!)}
            watchId="blog-content"
            className="w-[250px] max-lg:hidden"
          />
          <RenderMdx id="blog-content" className="max-w-3xl mx-auto">
            {blog.content}
          </RenderMdx>
          <Reactions slug={slug} />
        </div>
        <div className="sr-only">
          {blog.tags.map((tag) => (`${tag} , `))}
          {blog.metaTags?.map((tag) => (`${tag}, `))}
        </div>
      </section>
    </div>
  );
};

export default Page;

export const generateMetadata = async ({
  params: { slug },
}: Props): Promise<Metadata> => {
  const blog = await getBlogBySlug(decodeURI(slug));
  return {
    title: blog?.title,
    description: blog?.summary,
    authors: {
      name: "Tilak Thapa",
      url: process.env.NEXT_PUBLIC_WEB_URL,
    },
    keywords: [...(blog?.tags || []), "blog", "tilak thapa", "web development", ...(blog?.metaTags || [])],
    openGraph: {
      title: blog?.title,
      description: blog?.summary,
      url: `${process.env.NEXT_PUBLIC_WEB_URL} / blogs / ${slug}`,
      type: "article",
      images: [
        {
          url: blog?.image ?? "",
        },
      ],
    },
  };
};

export async function generateStaticParams() {
  const posts = await getAllBlogs();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
