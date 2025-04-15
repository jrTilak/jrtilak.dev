import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/base/card";
import { IMAGES } from "@/constants/images";
import Image from "next/image";

const DetailsCard = () => {
  return (
    <div className="text-center">
      <Card className="hidden flex-col items-center justify-center lg:flex">
        <CardHeader>
          <div className="hidden p-6 lg:block">
            <Image
              src={IMAGES.avatar}
              alt=""
              height={600}
              width={600}
              className="h-fit w-full rounded-full object-cover object-center"
            />
          </div>
          <CardTitle className="text-4xl">Tilak Thapa 👋</CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
};

export default DetailsCard;
