import { collection, query, where, getDocs } from "firebase/firestore";
import { fireStore } from "../config/firebase";

export type GetStatsReturn = {
  views: number;
  comments: number;
  likes: number;
  share: number;
  likedBy: string[];
};

export const getStats = async (slug: string) => {
  try {
    const blogsCollection = collection(fireStore, "blogs");
    const slugQuery = query(blogsCollection, where("slug", "==", slug));
    const querySnapshot = await getDocs(slugQuery);

    if (!querySnapshot.empty) {
      // Extract stats from the first matching document
      const docData = querySnapshot.docs[0].data();
      const stats: GetStatsReturn = {
        views: docData.views ?? 0,
        comments: docData.comments ?? 0,
        likes: docData.likes ?? 0,
        share: docData.share ?? 0,
        likedBy: docData?.likedBy ?? [],
      };

      return stats;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};
