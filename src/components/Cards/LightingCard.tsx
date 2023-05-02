import { Image } from "@yext/pages/components";
import { CardProps } from "@yext/search-ui-react";
import * as React from "react";
import Ce_lighting from "../../types/lighting";
import RTF from "../RTF";

const LightingCard = (props: CardProps<Ce_lighting>) => {
  const { result } = props;
  const photo = result.rawData.photoGallery && result.rawData.photoGallery[0];

  return (
    <div className="relative border bg-zinc-50">
      <div className="  group aspect-h-7 aspect-w-10 block w-full overflow-hidden  bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
        {photo && (
          <div>
            <Image className="col-span-2 row-span-2" image={photo}></Image>
          </div>
        )}
      </div>
      <div className="px-6 py-4 h-64">
        <p className="pointer-events-none  block font-medium text-gray-900 text-xl mt-4">
          {result.name}
        </p>
        <p className="pointer-events-none block text-base font-light mt-4 ">
          <RTF>{result.rawData?.richTextDescription}</RTF>
        </p>
      </div>
      <hr className="my-4" />

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
        <p className="text-blue-500 text-2xl font-medium">
          {result.rawData.c_price}
        </p>
        <p
          className={`${
            result.rawData.c_strikethroughPrice ? "visible" : "invisible"
          } text-blue-500 text-base font-light`}
        >
          {result.rawData.c_savings ? result.rawData.c_savings : "No content"}
        </p>
      </div>
      <div className="font-medium text-lg text-center bg-lime-500 p-4  ">
        Add to Basket
      </div>
      <div className="font-light text-lg text-center p-4 underline ">
        See details
      </div>
    </div>
  );
};

export default LightingCard;
