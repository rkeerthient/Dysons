import { Image } from "@yext/pages/components";
import { CardProps } from "@yext/search-ui-react";
import * as React from "react";
import Ce_sparesAndAccessories from "../../types/spares_and_accessories";
import RTF from "../RTF";

const AccessoriesCard = (props: CardProps<Ce_sparesAndAccessories>) => {
  const { result } = props;
  const photo = result.rawData.photoGallery && result.rawData.photoGallery[0];

  return (
    <div className="relative border bg-white">
      <div className="group  aspect-h-7 aspect-w-10 block w-full overflow-hidden  bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
        {photo && (
          <div className="h-44">
            <Image className="!h-full" image={photo}></Image>
          </div>
        )}
      </div>
      <div className="px-6 py-4 h-40">
        <p className="pointer-events-none  block font-medium text-gray-900 text-xl mt-4">
          {result.name}
        </p>
        <p className="pointer-events-none block text-base font-light mt-4 ">
          {result.rawData.c_partNumber}
        </p>
        <p className="pointer-events-none block text-base font-light mt-4 ">
          <RTF>{result.rawData?.richTextDescription}</RTF>
        </p>
      </div>

      <div className="px-6 py-4 space-y-2 h-32">
        <p
          className={`${
            result.rawData.c_strikethroughPrice ? "visible" : "invisible"
          } text-gray-500 text-base font-normal line-through`}
        >
          {result.rawData.c_strikethroughPrice
            ? result.rawData.c_strikethroughPrice
            : "No Content"}
        </p>
        <p className="text-black text-2xl font-medium">
          {result.rawData.c_price}
        </p>
        <p
          className={`${
            result.rawData.c_strikethroughPrice ? "visible" : "invisible"
          } text-black text-base font-light`}
        >
          {result.rawData.c_savings ? result.rawData.c_savings : "No content"}
        </p>
      </div>
      <div className="flex justify-between">
        <div className="font-medium text-lg text-center bg-lime-500 p-4 w-1/2">
          Add to Basket
        </div>
        <div className="font-light bg-zinc-100 text-lg text-center p-4 hover:cursor-pointer  hover:underline w-1/2">
          See more
        </div>
      </div>
    </div>
  );
};

export default AccessoriesCard;
