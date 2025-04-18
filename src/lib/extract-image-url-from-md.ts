export const extractImageUrlFromMd = (md: string) => {
  try {
    const urls: string[] = [];
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
    return [];
  }
};
