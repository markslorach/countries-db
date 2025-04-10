"use client";
import { Input } from "@/components/ui/input";
import { useFilter } from "@/hooks/useFilter";
import { Search } from "lucide-react";

const CountrySearch = () => {
  const { searchQuery, setSearchQuery } = useFilter();

  return (
    <div className="relative w-full">
      <Search className="absolute top-1/2 left-3 size-6 -translate-y-1/2 transform text-gray-500" />

      <Input
        type="search"
        placeholder="Search for a country..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="h-14 bg-white px-5 pl-11 text-sm shadow-xs sm:w-72"
      />
    </div>
  );
};

export default CountrySearch;
