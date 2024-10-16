import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { fireStore } from "../config/firebase";

export const trackShare = async (slug: string) => {
  try {
    const blogsCollection = collection(fireStore, "blogs");
    const slugQuery = query(blogsCollection, where("slug", "==", slug));
    const querySnapshot = await getDocs(slugQuery);

    if (!querySnapshot.empty) {
      // If document exists, update the share count
      const docRef = querySnapshot.docs[0].ref;
      const currentShares = querySnapshot.docs[0].data().share ?? 0;
      await updateDoc(docRef, {
        share: currentShares + 1,
      });
    } else {
      // If no document exists with the given slug, create a new document
      await addDoc(collection(fireStore, "blogs"), {
        slug: slug,
        views: 1, // Initialize views to 0 if it's a new document
        comments: 0, // Initialize comments to 0
        likes: 0, // Initialize likes to 0
        share: 1, // Set shares to 1 since it's the first share
      });
    }
  } catch (error) {}
};
