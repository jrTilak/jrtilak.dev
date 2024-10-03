import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { STATS } from "@/data/stats";
import { Separator } from "@/components/ui/separator";
import { NumberTicker } from "@/components/ui/number-ticker";

const Stats = () => {
  return (
    <Card>
      <CardContent className="flex items-center gap-9 justify-center p-6 ">
        {STATS.map((stats, i) => (
          <>
            {i !== 0 && (
              <Separator orientation="vertical" className="h-14 w-px" />
            )}
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-3xl font-medium">
                <NumberTicker value={stats.value} />+
              </h3>
              <p className="text-muted-foreground">{stats.label}</p>
            </div>
          </>
        ))}
      </CardContent>
    </Card>
  );
};

export default Stats;
