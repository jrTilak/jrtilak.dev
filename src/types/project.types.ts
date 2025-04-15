export type ProjectMetaData = {
  title: string;
  publishedAt?: string;
  image: string;
  techs: string[];
  categories: string[];
  liveUrl?: string;
  githubUrl?: string;
  playstoreUrl?: string;
  appstoreUrl?: string;
  webstoreUrl?: string;
  type: string;
};

export interface Project extends ProjectMetaData {
  content: string;
}
