import React, { Fragment } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { STATS } from "@/data/stats";
import { Separator } from "@/components/ui/separator";

const Stats = () => {
  return (
    <Card>
      <CardContent className="grid grid-cols-[1fr_10px_1fr] sm:flex items-center gap-y-4 gap-x-9 justify-center p-6 text-center">
        {STATS.map((stats, i) => (
          <Fragment key={i}>
            {i !== 0 && (
              <Separator
                orientation="vertical"
                className="h-14 w-px hidden max-sm:[&:nth-child(2)]:block max-sm:[&:nth-child(7)]:block sm:block"
              />
            )}
            {i === 2 && (
              <Separator
                orientation="horizontal"
                className="h-px w-full sm:hidden col-span-3"
              />
            )}
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-medium">
                {stats.value}+
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                {stats.label}
              </p>
            </div>
          </Fragment>
        ))}
      </CardContent>
    </Card>
  );
};

export default Stats;
