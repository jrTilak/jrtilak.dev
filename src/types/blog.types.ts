import { JSXElementConstructor, ReactElement } from "react";

export type BlogMetaData = {
  title: string;
  publishedAt: string;
  summary: string;
  tags: string[];
  image: string;
  metaTags?: string[];
};

export interface Blog extends BlogMetaData {
  content: ReactElement<any, string | JSXElementConstructor<any>>;
  slug: string;
}
