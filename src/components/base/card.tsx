import { cn } from "@/lib/cn";

const Card = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(" bg-card/30 backdrop-blur-xl text-card-foreground rounded-xl border shadow", className)}
    {...props}
  />
);

const CardHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-1.5 p-3 sm:p-6", className)} {...props} />
);

const CardTitle = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <h3 className={cn("text-2xl leading-none font-semibold tracking-tight", className)} {...props} />
);

const CardDescription = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("text-muted-foreground text-sm", className)} {...props} />
);

const CardContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("p-3 pt-0 sm:p-6 sm:pt-0", className)} {...props} />
);

const CardFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex items-center p-3 pt-0 sm:p-6 sm:pt-0", className)} {...props} />
);

Card.displayName = "Card";
CardHeader.displayName = "CardHeader";
CardTitle.displayName = "CardTitle";
CardDescription.displayName = "CardDescription";
CardContent.displayName = "CardContent";
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
