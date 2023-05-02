import { Image } from "@yext/pages/components";
import { CardProps } from "@yext/search-ui-react";
import * as React from "react";
import Ce_hairCare from "../../types/hair_care";
import RTF from "../RTF";

const FloorCareCard = (props: CardProps<Ce_hairCare>) => {
  const { result } = props;
  const photo = result.rawData.photoGallery && result.rawData.photoGallery[0];

  return (
    <div className="relative border bg-zinc-50">
      <div className="  group aspect-h-7 aspect-w-10 block w-full overflow-hidden  bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
        {photo && (
          <div>
            <Image className="col-span-2 row-span-2" image={photo}></Image>
            {result.rawData.c_giftEdition && (
              <div className="absolute -top-3.5 left-3 border py-1 px-4 text-white bg-blue-600 text-sm text-center">
                {result.rawData.c_giftEdition}
              </div>
            )}
          </div>
        )}
      </div>
      <div className="px-6 py-4">
        <p className="pointer-events-none  block font-medium text-gray-900 text-xl h-18 mt-4">
          {result.name}
        </p>
        <p className="pointer-events-none block text-base font-light mt-4 h-32">
          <RTF>{result.rawData?.richTextDescription}</RTF>
        </p>
      </div>
      <hr className="my-2" />
      <div className="px-6 py-2">
        <p className=" text-base font-light h-12">{result.rawData.c_inBox}</p>
      </div>
      <span
        className={`${
          result.rawData.c_promotionVerbiage ? "visible" : "invisible"
        } `}
      >
        {result.rawData.c_promotionVerbiage ? (
          <>
            <hr className="my-2" />
            <div className="px-6 py-2">
              <p className="text-blue-500 text-sm font-medium  h-32">
                {result.rawData.c_promotionVerbiage}
              </p>
            </div>
          </>
        ) : (
          <>
            <hr className="my-2" />
            <div className="px-6 py-2  ">
              <p className="text-blue-500 text-sm font-medium h-32">
                Select free tools worth $70 when you add to basket.
              </p>
            </div>
          </>
        )}
      </span>
      <hr className="my-2" />
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

export default FloorCareCard;
