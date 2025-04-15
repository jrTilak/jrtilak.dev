import { Blog } from "@/types/blog.types";

export const getAllBlogs = async () => {
  const blogs = await fetch(process.env.NEXT_PUBLIC_WEB_URL + "/api/blogs", {
    next: {
      revalidate: 60,
    },
    cache: "force-cache",
  }).then((res) => {
    try {
      return res.json() as Promise<{ data: Blog[] }>;
    } catch (e) {
      console.log(e);
      return { data: [] };
    }
  });

  return blogs.data;
};

export const getBlogBySlug = async (slug: string) => {
  const blog = await fetch(process.env.NEXT_PUBLIC_WEB_URL + "/api/blogs" + "?slug=" + slug, {
    next: {
      revalidate: 60,
    },
    cache: "force-cache",
  }).then(async (res) => {
    try {
      return (await res.json()) as { data: Blog };
    } catch (e) {
      console.log(e);
      return { data: null } as { data: Blog | null };
    }
  });

  return blog.data;
};
