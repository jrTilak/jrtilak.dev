"use client";
import { Separator } from "@/components/ui/separator";
import { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import { GetStatsReturn, getStats } from "@/firebase/get-stats";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  slug: string;
};

const ReactionStats = ({ slug }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [statsData, setStatsData] = useState<GetStatsReturn>({
    comments: 0,
    likes: 0,
    share: 0,
    views: 0,
    likedBy: [],
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

  const stats = useMemo(() => {
    return [
      {
        label: "👀",
        value: statsData?.views,
      },
      {
        label: "💝",
        value: statsData?.likes,
      },
      {
        label: "💬",
        value: statsData?.comments,
      },
      {
        label: "🖇️",
        value: statsData?.share,
      },
    ];
  }, [statsData]);

  return (
    <div className="flex items-center justify-center gap-4">
      {stats.map((stat, i) => {
        return (
          <Fragment key={i}>
            {i !== 0 && <Separator orientation="vertical" className="h-6" />}
            {isLoading ? (
              <Skeleton className="w-12 h-6 rounded-md" />
            ) : (
              <div className="flex gap-1.5 items-center justify-center text-center">
                <span>{stat.value}</span>
                <span className="text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            )}
          </Fragment>
        );
      })}
    </div>
  );
};
export default ReactionStats;
