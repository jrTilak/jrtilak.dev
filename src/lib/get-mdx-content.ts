import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import MDXComponents from "@/components/mdx/mdx-components";

export async function getMdxContent<T extends Record<string, unknown>>(path: string) {
  const source = fs.readFileSync(path, "utf-8");

  const mdxSource = await compileMDX<T>({
    source: source,
    //@ts-expect-error: using own components gives error
    components: MDXComponents,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          rehypeAutolinkHeadings,
          () => rehypePrettyCode({ theme: "github-dark", keepBackground: true }),
        ],
      },
    },
  });

  return { mdxSource: mdxSource, raw: source };
}
