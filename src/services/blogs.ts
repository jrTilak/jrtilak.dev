import { Blog, BlogMetaData } from "@/types/blog.types";
import { getMdxContent } from "@/lib/get-mdx-content";
import readingTime from "reading-time";
import { getAllPages, getSinglePage } from "@/lib/notion";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const getAllBlogs = async (): Promise<Array<Blog>> => {
  try {
    const blogs = await getAllPages();

    if (!blogs || blogs?.length === 0) {
      return [];
    }

    const files = blogs.map((blog) => {
      if (!blog) return null;
      const properties = extractBlogProperties(blog);
      if (!properties) return null;
      return properties;
    });

    if (!files || files?.length === 0) {
      return [];
    }

    const result = await Promise.all(files);

    return result.filter((blog) => blog !== null) as Blog[];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getBlogBySlug = async (slug: string): Promise<Blog | null> => {
  try {
    const blog = await getSinglePage(slug);

    if (!blog) return null;

    const { mdxSource, raw } = await getMdxContent(blog.markdown);

    const properties = extractBlogProperties(blog.post);

    if (!properties) return null;

    return {
      slug,
      content: mdxSource.content,
      readingTime: readingTime(raw).text,
      ...properties,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};

const extractBlogProperties = (data: PageObjectResponse): BlogMetaData | null => {
  const title =
    data.properties["title"] && data.properties["title"].type === "title"
      ? (data.properties["title"].title[0]?.plain_text ?? "")
      : "";

  if (!title) return null;

  const description =
    data.properties["description"] && data.properties["description"].type === "rich_text"
      ? (data.properties["description"].rich_text[0]?.plain_text ?? "")
      : "";

  if (!description) return null;

  const publishedAt =
    data.properties["published_date"] && data.properties["published_date"].type === "date"
      ? (data.properties["published_date"].date?.start ?? "")
      : "";

  if (!publishedAt) return null;

  const tags =
    data.properties["tags"] && data.properties["tags"].type === "multi_select"
      ? data.properties["tags"].multi_select.map((tag) => tag.name)
      : [];

  const coverImage =
    data.properties["cover_image"] && data.properties["cover_image"].type === "files"
      ? data.properties["cover_image"].files[0]?.type === "file"
        ? data.properties["cover_image"].files[0].file.url
        : ""
      : "";

  const slug =
    data.properties["slug"] && data.properties["slug"].type === "rich_text"
      ? data.properties["slug"].rich_text[0]?.plain_text ?? ""
      : "";

  if (!slug) return null;

  if (!coverImage) return null;

  const obj = {
    title,
    description,
    publishedAt,
    tags,
    coverImage,
    slug,
  };

  return obj;
};
