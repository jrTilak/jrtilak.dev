import { JSXElementConstructor, ReactElement } from "react";

export type ProjectMetaData = {
  title: string;
  publishedAt: string;
  summary: string;
  tags?: string[];
  image: string;
  metaTags?: string[];
  techs: string[];
  categories: string[];
  liveUrl?: string;
  sourceUrl?: string;
  index: number;
  type: string;
};

export interface Project extends ProjectMetaData {
  content: ReactElement<any, string | JSXElementConstructor<any>>;
  slug: string;
}
