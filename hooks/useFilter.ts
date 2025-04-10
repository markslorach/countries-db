"use client";
import { useQueryState } from "nuqs";
import { Region } from "@/types/filter";

export const useFilter = () => {
  const [searchQuery, setSearchQuery] = useQueryState("search", {
    defaultValue: "",
  });

  const [selectedRegion, setSelectedRegion] = useQueryState<Region>("region", {
    defaultValue: "All",
    parse: (value) => value as Region,
    serialize: (value) => value as string,
  });

  return {
    searchQuery,
    selectedRegion,
    setSearchQuery,
    setSelectedRegion,
  };
};
