"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ForwardIcon, HeartPulseIcon, MessageCircleMoreIcon } from "lucide-react";
import { shareWebpage } from "@/helpers/share-webpage";
import { useCallback, useEffect, useState } from "react";
import { trackPageView } from "@/firebase/track-page-view";
import { getStats, GetStatsReturn } from "@/firebase/get-stats";
import { Skeleton } from "@/components/ui/skeleton";
import { useIfLoggedIn } from "@/hooks/use-if-logged-in";
import { toggleLike } from "@/firebase/toggle-like";
import { cn } from "@/helpers/cn";
import useAuth from "@/hooks/use-auth";
import CommentsSheet from "./comments-sheet";

type Props = {
  slug: string;
};

const Reactions = ({ slug }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();
  const [isCommentSectionOpen, setIsCommentSectionOpen] = useState(false);
  const [isLikingBlog, setIsLikingBlog] = useState(false);
  const [statsData, setStatsData] = useState<GetStatsReturn>({
    comments: 0,
    likes: 0,
    share: 0,
    views: 0,
    likedBy: [],
  });

  const {
    modal: { Comp: LoginComp },
    withAuth: likePost,
  } = useIfLoggedIn(async (user) => {
    setIsLikingBlog(true);
    await toggleLike(slug, user);
    setIsLikingBlog(false);
    if (!(typeof window === "undefined" || !("localStorage" in window))) {
      const event = new Event("blog.stats.update");
      window.dispatchEvent(event);
    }
  });

  const retrieveStats = useCallback(async () => {
    const stats = await getStats(slug);
    if (stats) setStatsData(stats);
    setIsLoading(false);
  }, [slug]);

  useEffect(() => {
    if (!slug) return;
    retrieveStats();

    window.addEventListener("blog.stats.update", retrieveStats);

    return () => {
      window.removeEventListener("blog.stats.update", retrieveStats);
    };
  }, [slug]);

  useEffect(() => {
    if (!slug) return;
    trackPageView(slug);
  }, [slug]);

  return (
    <>
      {LoginComp}
      <CommentsSheet isOpen={isCommentSectionOpen} seIsOpen={setIsCommentSectionOpen} slug={slug} />
      <aside className="bg-background/60 border-muted fixed z-10 flex h-fit w-full min-w-[50px] items-center gap-0 rounded-md border backdrop-blur-[2px] max-md:right-0 max-md:bottom-0 max-md:left-0 md:sticky md:top-28 md:w-[50px] md:flex-col">
        <Button
          className="group flex h-fit w-full flex-col items-center gap-0 py-2"
          variant={"ghost"}
          size={"icon"}
          disabled={isLoading}
          onClick={() => likePost()}
          isLoading={isLikingBlog}
        >
          <HeartPulseIcon
            className={cn(
              "size-6 transition-all",
              statsData.likedBy.includes(user?.uid ?? "")
                ? "fill-destructive text-destructive"
                : "group-hover:fill-destructive group-hover:text-destructive"
            )}
          />
          {isLoading ? (
            <Skeleton className="h-4 w-full max-w-8" />
          ) : (
            <span className="text-muted-foreground group-hover:text-destructive text-sm transition-all">
              {statsData?.likes ?? 0}
            </span>
          )}
        </Button>
        <Separator className="max-md:hidden" />
        <Separator className="h-8 md:hidden" orientation="vertical" />
        <Button
          className="group flex h-fit w-full flex-col items-center gap-0 py-2"
          variant={"ghost"}
          size={"icon"}
          disabled={isLoading}
          onClick={() => setIsCommentSectionOpen(true)}
        >
          <MessageCircleMoreIcon className="size-6" />
          {isLoading ? (
            <Skeleton className="h-4 w-full max-w-8" />
          ) : (
            <span className="text-muted-foreground text-sm">{statsData?.comments ?? 0}</span>
          )}
        </Button>
        <Separator className="h-8 md:hidden" orientation="vertical" />
        <Separator className="max-md:hidden" />
        <Button
          className="group flex h-fit w-full flex-col items-center gap-0 py-2"
          variant={"ghost"}
          size={"icon"}
          onClick={() => shareWebpage(slug)}
          disabled={isLoading}
        >
          <ForwardIcon className="size-6" />
          {isLoading ? (
            <Skeleton className="h-4 w-full max-w-8" />
          ) : (
            <span className="text-muted-foreground text-sm">{statsData?.share ?? 0}</span>
          )}
        </Button>
        <Separator className="h-8 md:hidden" orientation="vertical" />
        <Separator className="max-md:hidden" />
        <Button
          disabled={isLoading}
          className="group pointer-events-none flex h-fit w-full flex-col items-center gap-0 py-2"
          variant={"ghost"}
          size={"icon"}
        >
          <span>👀</span>
          {isLoading ? (
            <Skeleton className="h-4 w-full max-w-8" />
          ) : (
            <span className="text-muted-foreground text-sm">{statsData?.views ?? 0}</span>
          )}
        </Button>
      </aside>
    </>
  );
};
export default Reactions;
