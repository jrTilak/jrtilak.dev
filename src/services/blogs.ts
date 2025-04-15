import { Blog } from "@/types/blog.types";

export const getAllBlogs = async () => {
  const blogs = await fetch(process.env.NEXT_PUBLIC_WEB_URL + "/api/blogs", {
    next: {
      revalidate: 60,
    },
    cache: "force-cache",
  }).then((res) => res.json() as Promise<{ data: Blog[] }>);

  return blogs.data;
};

export const getBlogBySlug = async (slug: string) => {
  const blog = await fetch(process.env.NEXT_PUBLIC_WEB_URL + "/api/blogs" + "?slug=" + slug, {
    next: {
      revalidate: 60,
    },
    cache: "force-cache",
  }).then((res) => res.json() as Promise<{ data: Blog }>);

  return blog.data;
};
