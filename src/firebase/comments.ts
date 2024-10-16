import { fireStore } from "@/config/firebase";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  orderBy,
  updateDoc,
} from "firebase/firestore";

export type Comment = {
  slug: string;
  text: string;
  user: {
    id: string;
    name?: string;
    image?: string;
  };
  createdAt: string;
};
export type User = {
  uid: string;
  displayName?: string;
  photoURL?: string;
};
export const addComment = async ({
  commentText,
  slug,
  user,
}: {
  slug: string;
  commentText: string;
  user: {
    id: string;
    name?: string;
    image?: string;
  };
}) => {
  const commentsCollection = collection(fireStore, "comments");
  const comment: Comment = {
    slug,
    text: commentText,
    createdAt: new Date().toISOString(),
    user,
  };

  await addDoc(commentsCollection, comment);

  const blogsCollection = collection(fireStore, "blogs");
  const slugQuery = query(blogsCollection, where("slug", "==", slug));
  const querySnapshot = await getDocs(slugQuery);

  if (!querySnapshot.empty) {
    // If document exists, update the share count
    const docRef = querySnapshot.docs[0].ref;
    const currentComments = querySnapshot.docs[0].data().comments ?? 0;
    await updateDoc(docRef, {
      comments: currentComments + 1,
    });
  }
};

export const getAllComments = async (slug: string) => {
  const commentsCollection = collection(fireStore, "comments");
  const commentsQuery = query(
    commentsCollection,
    where("slug", "==", slug),
    orderBy("createdAt", "desc")
  );
  const querySnapshot = await getDocs(commentsQuery);

  const comments: Comment[] = [];
  querySnapshot.forEach(async (doc) => {
    const data = doc.data();

    comments.push({
      ...data,
    } as Comment);
  });

  return comments ?? [];
};
