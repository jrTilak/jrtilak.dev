import { JSXElementConstructor, ReactElement } from "react";

export type BlogMetaData = Partial<{
  title: string;
  publishedAt: string;
  description: string;
  tags: string[];
  coverImage: string;
  series: string[];
}>;

export interface Blog extends BlogMetaData {
  content: ReactElement<unknown, string | JSXElementConstructor<unknown>>;
  slug: string;
  readingTime: string;
}
