"use client";
import { parseAsString, useQueryState } from "nuqs";
import { useDebounceValue } from "usehooks-ts";

export const useFilter = () => {
  const [searchQuery, setSearchQuery] = useQueryState(
    "search",
    parseAsString.withDefault(""),
  );

  const [selectedRegion, setSelectedRegion] = useQueryState(
    "region",
    parseAsString.withDefault("All"),
  );

  const [debouncedSearchQuery] = useDebounceValue(searchQuery, 200);

  return {
    searchQuery,
    debouncedSearchQuery,
    selectedRegion,
    setSearchQuery,
    setSelectedRegion,
  };
};
