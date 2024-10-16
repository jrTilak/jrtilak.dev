// import { ReplyIcon, ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
import { Comment } from "@/firebase/comments";
import { calculateTimeAgo } from "@/helpers/calculate-time-ago";
import { cn } from "@/helpers/cn";

type Props = {
  comment: Comment;
};
const CommentComponent = ({ comment: { user, createdAt, text } }: Props) => {
  return (
    <div
      className={cn(
        "text-sm flex items-start gap-4 p-2",
        user?.id === process.env.NEXT_PUBLIC_ADMIN_ACCOUNT_ID && "bg-muted"
      )}
    >
      <Avatar className="w-8 h-8 border">
        <AvatarImage
          src={
            user?.image ?? "https://www.svgrepo.com/show/393899/avatar-19.svg"
          }
          alt={user?.image}
        />
        <AvatarFallback>
          {user?.name
            ?.split(" ")
            ?.map((str) => str[0].toUpperCase())
            .filter((_, i) => i < 2)}
        </AvatarFallback>
      </Avatar>
      <div className="grid gap-1">
        <div className="flex items-center gap-2">
          <div
            className="font-semibold truncate"
            title={
              user?.id === process.env.NEXT_PUBLIC_ADMIN_ACCOUNT_ID
                ? "Say my name!"
                : ""
            }
          >
            {user?.name ?? `Guest ${user?.id ?? ""}`}
            {user.id === process.env.NEXT_PUBLIC_ADMIN_ACCOUNT_ID && " 👑"}
            <span></span>
          </div>
          <div className="text-gray-500 text-xs dark:text-gray-400">
            {calculateTimeAgo(createdAt)}
          </div>
        </div>
        <p>{text}</p>
        {/* <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            className="h-fit w-fit px-2.5 py-1.5"
          >
            <ThumbsUpIcon className="w-4 h-4 mr-1" />{" "}
            {comment?.likes > 0 && `(${comment?.likes})`}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-fit w-fit px-2.5 py-1.5"
          >
            <ThumbsDownIcon className="w-4 h-4 mr-1" />
            {comment?.dislikes > 0 && `(${comment?.dislikes})`}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-fit w-fit px-2.5 py-1.5"
          >
            <ReplyIcon className="w-4 h-4 mr-1" />
            {comment?.replies > 0 && `(${comment?.replies})`}
          </Button>
        </div> */}
      </div>
    </div>
  );
};
export default CommentComponent;
