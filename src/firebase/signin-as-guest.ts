import { auth } from "@/config/firebase";
import { signInAnonymously, User } from "firebase/auth";

/**
 * Function to login as a guest using Firebase anonymous authentication.
 */
export const loginAsGuest = (): Promise<User> => {
  return new Promise(async (resolve, reject) => {
    try {
      const userCredential = await signInAnonymously(auth);
      const user = userCredential.user;
      resolve(user);
    } catch (error) {
      reject(null);
    }
  });
};
