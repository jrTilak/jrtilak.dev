import { SkillNames } from "@/constants/skills";

export type Category = "web" | "mobile" | "game" | "other" | "package/lib" | "extension" | "ai";

export type ProjectMetaData = {
  title: string;
  publishedAt: string;
  summary: React.ReactNode;
  image: string;
  techs: SkillNames[];
  categories: Category[];
  urls?: {
    liveUrl?: string;
    sourceUrl?: string;
    otherUrls?: {
      label?: string;
      url: string;
      image?: string;
    }[];
  };
  type: string;
};
