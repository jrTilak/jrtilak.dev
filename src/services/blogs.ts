import fs from "fs";
import path from "path";
import { Blog, BlogMetaData } from "@/types/blog.types";
import { getMdxContent } from "@/lib/get-mdx-content";
import readingTime from "reading-time";

const PATH_T0_BLOGS = "src/contents/blogs";

export const getAllBlogs = async (): Promise<Array<Blog>> => {
  try {
    const fullPath = path.join(process.cwd(), PATH_T0_BLOGS);
    const allSlugs = fs.readdirSync(fullPath);

    const files = allSlugs
      .map((slug) => {
        return getBlogBySlug(slug.replace(".mdx", ""));
      })
      .filter((file) => file !== null) as Promise<Blog>[];

    if (!files || files?.length === 0) {
      return [];
    }

    return (await Promise.all(files)).sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getBlogBySlug = async (slug: string): Promise<Blog | null> => {
  try {
    const fullPath = path.join(process.cwd(), PATH_T0_BLOGS, `${slug}.mdx`);

    //check if file exits
    const isFileExist = fs.existsSync(fullPath);

    if (!isFileExist) return null;

    const file = fs.readFileSync(fullPath, "utf-8");

    if (!file) {
      return null;
    }

    const { mdxSource, raw } = await getMdxContent<BlogMetaData>(fullPath);

    return {
      ...mdxSource.frontmatter,
      slug,
      content: mdxSource.content,
      readingTime: readingTime(raw).text,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};
