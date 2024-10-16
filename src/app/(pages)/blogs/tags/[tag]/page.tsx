import { getAllBlogs } from "@/services/blogs";
import AllTags from "../../_components/all-tags";
import unique from "@/helpers/unique";
import BlogCard from "../../_components/blog-card";
import Error404 from "@/components/blocks/404";

type Props = {
  params: {
    tag: string;
  };
};

const BlogByTag = async ({ params: { tag } }: Props) => {
  const allBlogs = await getAllBlogs();
  const tags = unique(
    allBlogs
      ?.map((blog) => {
        return blog.tags;
      })
      ?.flat()
  );

  const blogs = allBlogs?.filter((blog) => blog.tags?.includes(decodeURI(tag)));

  return (
    <section className="container mx-auto">
      <div className="mt-7 sm:mt-12">
        <div className="flex gap-5 md:gap-7 flex-col lg:flex-row xl:gap-24">
          {/* sidebar */}
          <div className="flex flex-col gap-3 px-6 py-7 bg-card shadow-md h-fit rounded-md w-full lg:w-72">
            <AllTags
              data={tags.map((t) => ({
                label: t,
                href: `/blogs/tags/${t}`,
              }))}
            />
          </div>

          {/* all remaining blogs */}
          <div className="flex flex-col gap-6 w-full">
            {blogs.length === 0 ? (
              <Error404
                title="No blogs found for this tag"
                subtitle="Please check back later, or try a different page."
              />
            ) : (
              blogs.map((blog) => {
                return <BlogCard key={blog.slug} {...blog} />;
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogByTag;

export async function generateStaticParams() {
  const allBlogs = await getAllBlogs();
  const tags = unique(
    allBlogs
      ?.map((blog) => {
        return blog.tags;
      })
      ?.flat()
  );

  return tags.map((tag) => ({
    tag,
  }));
}
