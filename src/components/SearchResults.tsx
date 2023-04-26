import { useSearchActions } from "@yext/search-headless-react";
import {
  AppliedFilters,
  LocationBias,
  Pagination,
  ResultsCount,
  SearchBar,
  StandardCard,
  StandardFacets,
  VerticalResults,
} from "@yext/search-ui-react";
import * as React from "react";
import { useEffect } from "react";
import AccessoriesCard from "./Cards/AccessoriesCard";
import ProductCard from "./Cards/FloorCareCard";
import HairCareCard from "./Cards/HairCareCard";
import LightingCard from "./Cards/LightingCard";

type Props = {
  verticalKey?: string;
};
const SearchResults = ({ verticalKey }: Props) => {
  const searchActions = useSearchActions();
  useEffect(() => {
    verticalKey
      ? (searchActions.setVertical(verticalKey),
        searchActions.executeVerticalQuery())
      : searchActions.executeUniversalQuery;
  }, []);
  return (
    <div className="max-w-7xl mx-auto">
      <SearchBar hideRecentSearches={true} />
      <div className="flex">
        <div className="w-56 shrink-0 mr-5">
          <StandardFacets />
        </div>
        <div className="flex-grow">
          <div className="flex items-baseline">
            <ResultsCount />
            <AppliedFilters />
          </div>
          <VerticalResults
            CardComponent={AccessoriesCard}
            customCssClasses={{
              verticalResultsContainer: "grid grid-cols-3 gap-6",
            }}
          />
          <Pagination customCssClasses={{ paginationContainer: "mt-4" }} />
          <LocationBias />
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
