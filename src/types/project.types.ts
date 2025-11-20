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
  projectType: string;
  priority: number
};

export interface Project extends ProjectMetaData {
  content: string;
}
