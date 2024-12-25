import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { MDXComponents } from "@/components/mdx/mdx-components";
import { insertHeadingIndexes } from "@/helpers/insert-heading-indexes";
import remarkGfm from "remark-gfm";
import { Project, ProjectMetaData } from "@/types/project.types";

const PATH_T0_PROJECTS = "src/contents/projects";

export const getAllProjects = async (): Promise<
  Array<
    ProjectMetaData & {
      slug: string;
    }
  >
> => {
  try {
    const fullPath = path.join(process.cwd(), PATH_T0_PROJECTS);
    const files = fs
      .readdirSync(fullPath)
      ?.filter((file) => file.endsWith(".mdx"));

    if (!files || files?.length === 0) {
      return [];
    }

    const projects = await Promise.all(
      files.map(async (file) => {
        const slug = file.replace(".mdx", "");
        const content = fs.readFileSync(path.join(fullPath, file), "utf-8");

        const { frontmatter } = await compileMDX<ProjectMetaData>({
          source: content,
          options: {
            parseFrontmatter: true,
          },
        });

        return {
          slug,
          ...frontmatter,
        };
      })
    );

    return projects.sort((a, b) => {
      return new Date(b.index).getTime() - new Date(a.index).getTime();
    });
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getProjectBySlug = async (
  slug: string
): Promise<
  | (Project & {
      rawContent: string;
    })
  | null
> => {
  try {
    const fullPath = path.join(process.cwd(), PATH_T0_PROJECTS, `${slug}.mdx`);

    //check if file exits
    const isFileExist = fs.existsSync(fullPath);

    if (!isFileExist) return null;

    const file = fs.readFileSync(fullPath, "utf-8");

    if (!file) {
      return null;
    }
    const source = insertHeadingIndexes(
      fs.readFileSync(fullPath, "utf-8"),
      [1, 2, 3]
    );

    const { frontmatter, content } = await compileMDX<ProjectMetaData>({
      source,
      // @ts-expect-error error
      components: MDXComponents,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      },
    });

    return {
      slug,
      content,
      rawContent: source,
      ...frontmatter,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};
