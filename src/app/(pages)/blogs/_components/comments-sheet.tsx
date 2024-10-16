"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import CommentComponent from "./comment-component";
import { Textarea } from "@/components/ui/textarea";
import { SendIcon } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { addComment, Comment, getAllComments } from "@/firebase/comments";
import useAuth from "@/hooks/use-auth";
import toast from "react-hot-toast";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  slug: string;
  isOpen: boolean;
  seIsOpen: (open: boolean) => void;
};
const CommentsSheet = ({ slug, isOpen, seIsOpen }: Props) => {
  const [value, setValue] = useState("");
  const [isCommentAdding, setIsCommentAdding] = useState(false);
  const [isCommentsLoading, setIsCommentsLoading] = useState(true);
  const [comments, setComments] = useState<Comment[]>([]);
  const { loading, user } = useAuth();

  const fetchComments = useCallback(async () => {
    const data = await getAllComments(slug);
    setComments(data);
    setIsCommentsLoading(false);
  }, [slug]);

  useEffect(() => {
    fetchComments();
    window.addEventListener("blogs.comments.update", fetchComments);
    return () => {
      window.removeEventListener("blogs.comments.update", fetchComments);
    };
  }, [slug]);

  return (
    <Sheet open={isOpen} onOpenChange={seIsOpen}>
      <SheetContent className="w-[350px] flex flex-col gap-4 p-0">
        <div className="flex flex-col gap-3 flex-grow overflow-y-auto scrollbar p-6 pb-0">
          <SheetHeader className="mb-4">
            <SheetTitle>Share Your Thoughts</SheetTitle>
            <SheetDescription className="text-xs">
              Leave a comment below for any questions, suggestions, or thoughts
              you have regarding this post.
            </SheetDescription>
          </SheetHeader>
          {isCommentsLoading ? (
            <>
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
            </>
          ) : comments.length === 0 ? (
            <p className="h-full min-h-12 w-full text-muted-foreground text-sm">
              No comments yet!
              <br />
              Start by writing your thoughts. 💬
            </p>
          ) : (
            comments?.map((comment, i) => (
              <CommentComponent key={i} comment={comment} />
            ))
          )}
        </div>
        <SheetFooter className="flex !flex-col w-full gap-2 p-6 pt-0">
          <Textarea
            placeholder="Leave your thoughts here..."
            className="w-full resize-none"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button
            isLoading={isCommentAdding}
            className="w-full"
            disabled={value.trim().length < 1}
            onClick={async () => {
              if (loading) {
                return toast.error("Wait a bit before adding a comment!");
              }
              if (!user) {
                return toast.error("Please login before adding a comment");
              }
              try {
                setIsCommentAdding(true);
                await addComment({
                  commentText: value.trim(),
                  slug,
                  user: {
                    id: user.uid,
                    image: user.photoURL ?? "",
                    name: user?.displayName ?? "",
                  },
                });
                toast.success("Thanks for sharing your thoughts!");
                setValue("");

                if (
                  !(
                    typeof window === "undefined" || !("localStorage" in window)
                  )
                ) {
                  const e1 = new Event("blogs.comments.update");
                  window.dispatchEvent(e1);
                  const e2 = new Event("blog.stats.update");
                  window.dispatchEvent(e2);
                }
              } catch (error) {
                toast.error("Failed to sharing your thoughts!");
                console.log(error);
              } finally {
                setIsCommentAdding(false);
              }
            }}
          >
            Chime In!
            <SendIcon className="ml-2.5 size-5" />
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
export default CommentsSheet;
