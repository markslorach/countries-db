"use client";
import { parseAsString, useQueryState } from "nuqs";
import { useDebounce } from "use-debounce";

export const useFilter = () => {
  const [searchQuery, setSearchQuery] = useQueryState(
    "search",
    parseAsString.withDefault(""),
  );

  const [selectedRegion, setSelectedRegion] = useQueryState(
    "region",
    parseAsString.withDefault("All"),
  );

  const [debouncedSearchQuery] = useDebounce(searchQuery, 200);

  return {
    searchQuery,
    debouncedSearchQuery,
    selectedRegion,
    setSearchQuery,
    setSelectedRegion,
  };
};
