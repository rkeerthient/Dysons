/**
 * This is an example of how to create a template that makes use of streams data.
 * The stream data originates from Yext's Knowledge Graph. When a template in
 * concert with a stream is built by the Yext Sites system, a static html page
 * is generated for every corresponding (based on the filter) stream document.
 *
 * Another way to think about it is that a page will be generated using this
 * template for every eligible entity in your Knowledge Graph.
 */

import type {
  Template,
  TemplateProps,
  TemplateRenderProps,
  GetPath,
  TemplateConfig,
  GetHeadConfig,
  HeadConfig,
} from "@yext/pages";
import { useSearchState } from "@yext/search-headless-react";
import * as React from "react";
import PageLayout from "../components/page-layout";
import SearchResults from "../components/SearchResults";
import "../index.css";
import Ce_vacuums from "../types/floor_care";
import { CardProps } from "@yext/answers-react-components";
import FloorCareCard from "../components/Cards/FloorCareCard";

export const config: TemplateConfig = {
  name: "floor-care",
};

export const getPath: GetPath<TemplateProps> = () => {
  return "floor-care";
};

export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps
> = (): HeadConfig => {
  return {
    title: "Dyson | Hair Care",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};
const FloorCare: Template<TemplateRenderProps> = (data) => {
  const { _site } = data.document;

  return (
    <PageLayout _site={_site} verticalKey="floor_care">
      <SearchResults
        verticalKey="floor_care"
        cardType={FloorCareCard}
        resultsCss={"grid grid-cols-3 gap-6"}
      ></SearchResults>
    </PageLayout>
  );
};

export default FloorCare;
