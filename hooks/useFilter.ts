"use client";
import { parseAsString, parseAsStringLiteral, useQueryState } from "nuqs";
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

  const [sortDirection, setSortDirection] = useQueryState(
    "sort",
    parseAsStringLiteral(["asc", "desc"]).withDefault("asc"),
  );

  const [debouncedSearchQuery] = useDebounceValue(searchQuery, 200);

  return {
    searchQuery,
    debouncedSearchQuery,
    selectedRegion,
    sortDirection,
    setSearchQuery,
    setSelectedRegion,
    setSortDirection,
  };
};
