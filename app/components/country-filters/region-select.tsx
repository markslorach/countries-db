"use client";
import {
  Select,
  SelectTrigger,
  SelectItem,
  SelectGroup,
  SelectContent,
  SelectValue,
} from "@/components/ui/select";
import { useFilter } from "@/hooks/useFilter";
import { REGIONS } from "@/lib/constants";
import { Region } from "@/types/filter";

const RegionSelect = () => {
  const { setSelectedRegion } = useFilter();

  return (
    <Select
      defaultValue="All"
      onValueChange={(value) => setSelectedRegion(value as Region)}
    >
      <SelectTrigger className="h-14 w-full cursor-pointer bg-white px-5 sm:w-56">
        <SelectValue placeholder="All Regions" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {REGIONS.map((region) => (
            <SelectItem key={region} value={region} className="cursor-pointer">
              {region === "All" ? "All Regions" : region}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default RegionSelect;
