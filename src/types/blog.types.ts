import { JSXElementConstructor, ReactElement } from "react";

export type BlogMetaData = {
  title: string;
  publishedAt: string;
  summary: string;
  tags: string[];
  image: string;
  metaTags?: string[];
  headingLevels?: number[];
};

export interface Blog extends BlogMetaData {
  content: ReactElement<unknown, string | JSXElementConstructor<unknown>>;
  slug: string;
  readingTime: string;
}
