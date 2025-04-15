import { Client } from "@notionhq/client";
import { config } from "dotenv";
import path from "path";
import { extractBlogProperties } from "@/lib/blogs";
import { extractProjectProperties } from "@/lib/project";
import fs from "fs";
import { DefaultExporter } from "notion-to-md/plugins/exporter";
import { NotionConverter } from "notion-to-md";

// Load environment variables from .env file
try {
  config({
    path: path.resolve(process.cwd(), ".env"),
  });
  console.log("process.env.NOTION_API_KEY: ", process.env.NOTION_API_KEY);
} catch (error) {
  console.error("Failed to load environment variables:", error);
  process.exit(1);
}

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const IMAGES: string[] = [];

const main = async () => {
  try {
    // Query blogs
    const blogs = await notion.databases.query({
      database_id: process.env.NOTION_BLOG_DATABASE_ID as string,
      filter: {
        property: "draft",
        checkbox: {
          equals: false,
        },
      },
    });

    const allBlogs = blogs.results.filter((blog): blog is any => blog.object === "page");
    console.log(`Found ${allBlogs.length} blogs`);

    // Process blogs
    for (const blog of allBlogs) {
      try {
        const properties = extractBlogProperties(blog);

        if (properties?.coverImage) {
          IMAGES.push(properties.coverImage);
        }

        const md = await notionToMD(blog.id);
        const urls = extractImageUrlFromMd(md);

        for (const url of urls) {
          IMAGES.push(url);
        }

        console.log(`Found ${urls.length} images in ${properties?.title}`);
      } catch (error) {
        console.error("Error processing blog:", error);
        process.exit(1);
      }
    }

    // Query projects
    const projects = await notion.databases.query({
      database_id: process.env.NOTION_PROJECT_DATABASE_ID as string,
      filter: {
        property: "draft",
        checkbox: {
          equals: false,
        },
      },
    });

    const allProjects = projects.results.filter(
      (project): project is any => project.object === "page"
    );
    console.log(`Found ${allProjects.length} projects`);

    // Process projects
    for (const project of allProjects) {
      try {
        const properties = extractProjectProperties(project);
        if (properties?.image) {
          IMAGES.push(properties.image);
        }
        const md = await notionToMD(project.id);
        const urls = extractImageUrlFromMd(md);

        for (const url of urls) {
          IMAGES.push(url);
        }

        console.log(`Found ${urls.length} images in ${properties?.title}`);
      } catch (error) {
        console.error("Error processing project:", error);
        process.exit(1);
      }
    }

    console.log(`Found ${IMAGES.length} images`);
  } catch (error) {
    console.error("Main process failed:", error);
    process.exit(1);
  }

  fs.writeFileSync("remoteOptimizedImages.js", `module.exports = ${JSON.stringify(IMAGES)}`);
};

main();

const extractImageUrlFromMd = (md: string) => {
  try {
    let urls: string[] = [];
    const regex = /!\[.*\]\((.*?)\)/g;
    const matches = md.match(regex);
    if (matches) {
      for (const match of matches) {
        const url = match.match(/\((.*?)\)/)?.[1];
        if (url) {
          urls.push(url);
        }
      }
    }
    return urls;
  } catch (error) {
    console.error("Error extracting image URLs from markdown:", error);
    process.exit(1);
  }
};

export const notionToMD = async (pageId: string): Promise<string> => {
  try {
    const markdownBuffer: Record<string, string> = {};
    const exporter = new DefaultExporter({
      outputType: "buffer",
      buffer: markdownBuffer,
    });

    const n2m = new NotionConverter(notion).withExporter(exporter);
    await n2m.convert(pageId);

    return markdownBuffer[pageId] || "";
  } catch (error) {
    console.error("Markdown conversion failed:", error);
    return "";
  }
};
