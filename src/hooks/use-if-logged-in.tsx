import { Button } from "@/components/ui/button";
import useDialog from "./use-dialog";
import Image from "next/image";
import toast from "react-hot-toast";
import { loginAsGuest } from "@/firebase/signin-as-guest";
import { loginWithGoogle } from "@/firebase/login-with-google";
import { User } from "firebase/auth";
import useAuth from "./use-auth";
import { useState } from "react";

export const useIfLoggedIn = <P extends Array<unknown>, R>(
  fn: (user: User, ...props: P) => R,
  config?: { skipModal?: boolean }
) => {
  const { user } = useAuth();
  const [fnProps, setFnProps] = useState<P>();
  const modal = useDialog(({ close }) => {
    return {
      title: "Please login!",
      description: "You need to be logged in to perform this action",
      body: (
        <div className="flex flex-col items-center justify-center gap-2.5 mt-2.5">
          <Button
            variant={"outline"}
            style={{
              width: "14rem",
            }}
            className="gap-2.5"
            onClick={() => {
              close();
              loginWithGoogle()
                .then((user) => {
                  toast.success(`Welcome ${user.displayName} to the app!`);
                  fn(user, ...fnProps!);
                })
                .catch(() => {
                  toast.error("Failed to log in. Please try again.");
                });
            }}
          >
            <Image
              src={"https://www.svgrepo.com/show/448227/google.svg"}
              className="h-5 w-5 object-contain object-center"
              alt=""
              height={24}
              width={24}
            />
            Google
          </Button>
          <Button
            style={{
              width: "14rem",
            }}
            variant={"outline"}
            className="gap-2.5"
            onClick={() => {
              close();
              toast.promise(loginAsGuest(), {
                loading: "Logging in as guest...",
                success: (user) => {
                  fn(user, ...fnProps!);
                  return "Welcome to the app!";
                },
                error: () => {
                  return "Failed to log in as guest. Please try again.";
                },
              });
            }}
          >
            <Image
              src={"https://www.svgrepo.com/show/509009/avatar-thinking-3.svg"}
              className="h-6 w-6 object-contain object-center"
              alt=""
              height={24}
              width={24}
            />
            Guest
          </Button>
        </div>
      ),
    };
  });

  const withAuth = (...props: P) => {
    if (user) {
      return fn(user, ...props);
    }

    if (config?.skipModal) {
    } else {
      modal.open();
      setFnProps(props);
    }
  };

  return {
    modal,
    withAuth,
  };
};
