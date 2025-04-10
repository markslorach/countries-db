"use client";
import { parseAsString, useQueryState } from "nuqs";

export const useFilter = () => {
  const [searchQuery, setSearchQuery] = useQueryState(
    "search",
    parseAsString.withDefault(""),
  );

  const [selectedRegion, setSelectedRegion] = useQueryState(
    "region",
    parseAsString.withDefault("All"),
  );

  return {
    searchQuery,
    selectedRegion,
    setSearchQuery,
    setSelectedRegion,
  };
};
