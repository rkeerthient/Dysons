import * as React from "react";

import Header from "./header";
import Footer from "./footer";
import {
  provideHeadless,
  SearchHeadlessProvider,
} from "@yext/search-headless-react";
import { config } from "../config/searchConfig";
import { StandardCard, VerticalResults } from "@yext/search-ui-react";

type Props = {
  _site?: any;
  children?: React.ReactNode;
  verticalKey?: string;
};
const searcher = provideHeadless(config);

const PageLayout = ({ _site, children }: Props) => {
  return (
    <SearchHeadlessProvider searcher={searcher}>
      <div className="min-h-screen  ">
        {<Header />}
        <StateManager>{children}</StateManager>
      </div>
    </SearchHeadlessProvider>
  );
};
const StateManager = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
export default PageLayout;
