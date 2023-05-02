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
import * as React from "react";
import PageLayout from "../components/page-layout";
import SearchResults from "../components/SearchResults";
import "../index.css";
import { CardProps } from "@yext/answers-react-components";
import AccessoriesCard from "../components/Cards/AccessoriesCard";

export const config: TemplateConfig = {
  name: "environmental_control",
};

export const getPath: GetPath<TemplateProps> = () => {
  return "environmental_control";
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
const EnvironmentalControl: Template<TemplateRenderProps> = (data) => {
  const { _site } = data.document;

  return (
    <PageLayout _site={_site} verticalKey="environmental_control">
      <SearchResults
        verticalKey="environmental_control"
        cardType={AccessoriesCard}
        resultsCss={"grid grid-cols-3 gap-6"}
      ></SearchResults>
    </PageLayout>
  );
};

export default EnvironmentalControl;
