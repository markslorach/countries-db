import { create } from "zustand";
import { Region } from "@/types/filter";

type FilterState = {
  searchQuery: string;
  selectedRegion: Region;
  setSearchQuery: (query: string) => void;
  setSelectedRegion: (region: Region) => void;
};

export const useFilterStore = create<FilterState>((set) => ({
  searchQuery: "",
  selectedRegion: "All",
  setSearchQuery: (query) => set({ searchQuery: query }),
  setSelectedRegion: (region) => set({ selectedRegion: region }),
}));
