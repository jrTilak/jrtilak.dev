import React, { Fragment } from "react";
import { Card, CardContent } from "@/components/base/card";
import { Separator } from "@/components/base/separator";
import { STATS } from "@/constants/stats";
import { NumberTicker } from "@/components/base/number-ticker";

const Stats = () => {
  return (
    <Card>
      <CardContent className="grid grid-cols-[1fr_10px_1fr] items-center justify-center gap-x-9 gap-y-4 p-3 sm:p-6 text-center sm:flex">
        {STATS.map((stats, i) => (
          <Fragment key={i}>
            {i !== 0 && (
              <Separator
                orientation="vertical"
                className="hidden h-14 w-px sm:block max-sm:[&:nth-child(2)]:block max-sm:[&:nth-child(7)]:block"
              />
            )}
            {i === 2 && (
              <Separator orientation="horizontal" className="col-span-3 h-px w-full sm:hidden" />
            )}
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-2xl font-medium md:text-3xl lg:text-2xl xl:text-3xl">
                <NumberTicker
                  decimalPlaces={Number.parseInt(stats.value.toString()) === stats.value ? 0 : 1}
                >
                  {stats.value}
                </NumberTicker>
                {stats.plus && "+"}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">{stats.label}</p>
            </div>
          </Fragment>
        ))}
      </CardContent>
    </Card>
  );
};

export default Stats;
