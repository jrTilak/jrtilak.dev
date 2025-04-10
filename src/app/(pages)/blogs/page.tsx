import { getAllBlogs } from "@/services/blogs";
import React from "react";
import PrimaryBlogCard from "./_components/primary-blog-card";
import SecondaryBlogCard from "./_components/secondary-blog-card";
import AllTags from "./_components/all-tags";
import BlogCard from "./_components/blog-card";
import unique from "@/lib/unique";
import Error404 from "@/components/screens/404";

const Page = async () => {
  const blogs = await getAllBlogs();
  const tags = unique(
    blogs
      ?.map((blog) => {
        return blog.tags;
      })
      ?.flat()
  );
  return (
    <section className="flex flex-col gap-6 md:gap-12 xl:gap-24 container m-auto max-w-7xl">
      {blogs.length === 0 && (
        <Error404
          title="No blogs found"
          subtitle="Please check back later, or try a different page."
        />
      )}
      <div className="flex flex-col gap-y-4 md:gap-y-7 xl:gap-y-9">
        {/* first blog */}
        {blogs.length > 0 && (
          <PrimaryBlogCard {...blogs[0]} className="animate-in-from-bottom" />
        )}
        {/* second and third blogs */}
        <div className="grid gap-x-7 gap-y-9 grid-cols-1 lg:grid-cols-2">
          {blogs.length > 1 && (
            <SecondaryBlogCard
              {...blogs[1]}
              className="animate-in-from-bottom delay-75"
            />
          )}
          {blogs.length > 2 && (
            <SecondaryBlogCard
              {...blogs[2]}
              className="animate-in-from-bottom delay-150"
            />
          )}
        </div>
      </div>
      {blogs.length > 3 && (
        <div className="flex gap-5 md:gap-7 flex-col lg:flex-row xl:gap-24">
          {/* sidebar */}
          <div className="flex flex-col gap-3 px-6 py-7 bg-card shadow-md h-fit rounded-md w-full lg:w-72 animate-in-from-left delay-200">
            <AllTags
              data={tags.map((t) => ({
                label: t,
                href: `/blogs/tags/${t}`,
              }))}
            />
          </div>

          {/* all remaining blogs */}
          <div className="flex flex-col gap-6 w-full">
            {blogs.map((blog, i) => {
              if (i < 3) return null;
              return (
                <BlogCard
                  className="animate-in-from-right"
                  style={{
                    animationDelay: `${i * 50 + 200}ms`,
                  }}
                  key={blog.slug}
                  {...blog}
                />
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default Page;
