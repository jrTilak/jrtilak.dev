import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const DetailsCard = () => {
  return (
    <div className="text-center">
      <Card className="hidden lg:flex items-center justify-center flex-col">
        <CardHeader>
          <div className="p-6 hidden lg:block">
            <Image
              src={"/images/avatar.png"}
              alt=""
              height={600}
              width={600}
              className="w-full h-fit object-cover object-center rounded-full"
            />
          </div>
          <CardTitle className="text-4xl">Tilak Thapa 👋</CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
};

export default DetailsCard;
