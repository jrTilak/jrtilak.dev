import { getAllPages, notionToMD } from "@/lib/notion";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { Project, ProjectMetaData } from "@/types/project.types";

export const getAllProjects = async (): Promise<Array<Project>> => {
  try {
    const projects = await getAllPages({
      database_id: process.env.NOTION_PROJECT_DATABASE_ID as string,
    });

    if (!projects || projects?.length === 0) {
      return [];
    }

    const files = await Promise.all(
      projects.map(async (project) => {
        if (!project) return null;
        const properties = extractProjectProperties(project);
        const content = await notionToMD(project.id);
        return {
          ...properties,
          content,
        };
      })
    );
    if (!files || files?.length === 0) {
      return [];
    }

    return files.filter((project) => project !== null).reverse() as Project[];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const extractProjectProperties = (data: PageObjectResponse): ProjectMetaData | null => {
  const title =
    data.properties["title"] && data.properties["title"].type === "title"
      ? (data.properties["title"].title[0]?.plain_text ?? "")
      : "";
  if (!title) return null;

  const publishedAt =
    data.properties["published_date"] && data.properties["published_date"].type === "date"
      ? (data.properties["published_date"].date?.start ?? "")
      : "";

  const categories =
    data.properties["categories"] && data.properties["categories"].type === "multi_select"
      ? data.properties["categories"].multi_select.map((tag) => tag.name)
      : [];

  const techs =
    data.properties["techs"] && data.properties["techs"].type === "multi_select"
      ? data.properties["techs"].multi_select.map((tag) => tag.name)
      : [];

  const type =
    data.properties["type"] && data.properties["type"].type === "select"
      ? (data.properties["type"].select?.name ?? "")
      : "";

  const image =
    data.properties["image"] && data.properties["image"].type === "files"
      ? data.properties["image"].files[0]?.type === "file"
        ? data.properties["image"].files[0].file.url
        : ""
      : "";

  if (!image) return null;

  const liveUrl =
    data.properties["live_url"] && data.properties["live_url"].type === "url"
      ? data.properties["live_url"].url
      : "";

  const githubUrl =
    data.properties["github_url"] && data.properties["github_url"].type === "url"
      ? data.properties["github_url"].url
      : "";

  const playstoreUrl =
    data.properties["playstore_url"] && data.properties["playstore_url"].type === "url"
      ? data.properties["playstore_url"].url
      : "";

  const appstoreUrl =
    data.properties["appstore_url"] && data.properties["appstore_url"].type === "url"
      ? data.properties["appstore_url"].url
      : "";

  const webstoreUrl =
    data.properties["webstore_url"] && data.properties["webstore_url"].type === "url"
      ? data.properties["webstore_url"].url
      : "";

  const obj = {
    title,
    publishedAt,
    categories: categories ?? [],
    techs: techs ?? [],
    type,
    image,
    liveUrl: liveUrl ?? "",
    githubUrl: githubUrl ?? "",
    playstoreUrl: playstoreUrl ?? "",
    appstoreUrl: appstoreUrl ?? "",
    webstoreUrl: webstoreUrl ?? "",
  };

  return obj;
};
