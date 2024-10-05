import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { Blog, BlogMetaData } from "@/types/blog.types";
import { MDXComponents } from "@/components/mdx/mdx-components";

const PATH_T0_BLOGS = "src/contents/blogs";

export const getAllBlogs = async (): Promise<
  Array<
    BlogMetaData & {
      slug: string;
    }
  >
> => {
  const fullPath = path.join(process.cwd(), PATH_T0_BLOGS);
  const files = fs
    .readdirSync(fullPath)
    ?.filter((file) => file.endsWith(".mdx"));

  if (!files || files?.length === 0) {
    return [];
  }

  return Promise.all(
    files.map(async (file) => {
      const slug = file.replace(".mdx", "");
      const content = fs.readFileSync(path.join(fullPath, file), "utf-8");

      const { frontmatter } = await compileMDX<BlogMetaData>({
        source: content,
        options: {
          parseFrontmatter: true,
        },
      });

      return {
        image: frontmatter.image,
        publishedAt: frontmatter.publishedAt,
        slug,
        summary: frontmatter.summary,
        tags: frontmatter.tags,
        title: frontmatter.title,
      };
    })
  );
};

export const getBlogBySlug = async (slug: string): Promise<Blog | null> => {
  const fullPath = path.join(process.cwd(), PATH_T0_BLOGS, `${slug}.mdx`);

  //check if file exits
  const isFileExist = fs.existsSync(fullPath);

  if (!isFileExist) return null;

  const file = fs.readFileSync(fullPath, "utf-8");

  if (!file) {
    return null;
  }

  const source = fs.readFileSync(fullPath, "utf-8");

  const { frontmatter, content } = await compileMDX<BlogMetaData>({
    source,
    components: MDXComponents,
    options: {
      parseFrontmatter: true,
    },
  });

  return {
    image: frontmatter.image,
    publishedAt: frontmatter.publishedAt,
    slug,
    summary: frontmatter.summary,
    tags: frontmatter.tags,
    title: frontmatter.title,
    content,
  };
};
