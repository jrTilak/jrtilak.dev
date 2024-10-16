import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { fireStore } from "../config/firebase"; // Adjust the import path as needed
import { User } from "firebase/auth"; // Import User type from Firebase auth
import toast from "react-hot-toast";

export const toggleLike = async (slug: string, user: User) => {
  try {
    const blogsCollection = collection(fireStore, "blogs");
    const slugQuery = query(blogsCollection, where("slug", "==", slug));
    const postSnapshot = await getDocs(slugQuery);

    if (!postSnapshot.empty) {
      const postData = postSnapshot.docs[0].data();
      const likedBy = postData.likedBy || [];
      const hasLiked = likedBy.includes(user.uid);
      const docRef = postSnapshot.docs[0].ref;

      if (hasLiked) {
        // User has already liked the post, so remove their like
        await updateDoc(docRef, {
          likes: postData.likes - 1,
          likedBy: arrayRemove(user.uid),
        });
      } else {
        // User hasn't liked the post, so add their like
        await updateDoc(docRef, {
          likes: postData.likes + 1,
          likedBy: arrayUnion(user.uid),
        });
        toast.success("You liked this blog! Thanks for your support!");
      }
    } else {
      toast.error("Failed to like this blog!");
    }
  } catch (error) {
    toast.error("Failed to like this blog!");
  }
};
