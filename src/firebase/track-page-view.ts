import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { fireStore } from "../config/firebase";

export const trackPageView = async (slug: string) => {
  try {
    const blogsCollection = collection(fireStore, "blogs");
    const slugQuery = query(blogsCollection, where("slug", "==", slug));
    const querySnapshot = await getDocs(slugQuery);

    if (!querySnapshot.empty) {
      // If a document with this slug already exists, update its views count

      if (process.env.NODE_ENV === "development") return;

      const docRef = querySnapshot.docs[0].ref;
      await updateDoc(docRef, {
        views: querySnapshot.docs[0].data().views + 1,
      });
    } else {
      // If no document exists with this slug, create a new one
      await addDoc(collection(fireStore, "blogs"), {
        slug: slug,
        views: 1,
        comments: 0,
        likes: 0,
        share: 0,
        likedBy: [],
      });
    }
  } catch (error) {}
};
