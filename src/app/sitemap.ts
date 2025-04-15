import { getAllBlogs } from "@/lib/blogs";
import { MetadataRoute } from "next";

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const URL = process.env.NEXT_PUBLIC_SELF_URL;

  const staticURLs = ["/", "/about", "/projects", "/services", "/contact", "/projects", "/blogs"];

  const blogs = await getAllBlogs();
  const blogsUrl = blogs.map((blog) => `/blogs/${blog.slug}/`);

  const result: MetadataRoute.Sitemap = [...staticURLs, ...blogsUrl].map((url) => ({
    url: `${URL}${url}`,
    lastModified: new Date(),
    priority: 1.0,
    changeFrequency: "weekly",
  }));

  return result;
};

export default sitemap;
