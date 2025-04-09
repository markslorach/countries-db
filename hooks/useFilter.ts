import { useFilterStore } from "@/lib/store";

export const useFilter = () => {
    const { 
      searchQuery, 
      selectedRegion, 
      setSearchQuery, 
      setSelectedRegion 
    } = useFilterStore();
    
    return {
      searchQuery,
      selectedRegion,
      setSearchQuery,
      setSelectedRegion,
    };
  }; 