import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

type Props = {
  selectedRegion: string;
  setSelectedRegion: (region: string) => void;
  uniqueRegions: string[];
};

const RegionSelect = ({
  selectedRegion,
  setSelectedRegion,
  uniqueRegions,
}: Props) => {

  const [isDelayed, setIsDelayed] = useState(false);

  const handleValueChange = (region: string) => {
    if (isDelayed) return;

    setIsDelayed(true);
    setTimeout(() => {
      setSelectedRegion(region);
      setIsDelayed(false);
    }, 1000); 
  };

  return (
    <Select value={selectedRegion} onValueChange={handleValueChange}>
      <SelectTrigger className="md:w-52 h-14 px-5 shadow-sm dark:bg-gray-700 dark:border-gray-500/50">
        <SelectValue placeholder="Filter by region" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="all">All Regions</SelectItem>
          {uniqueRegions.sort().map((region, idx) => (
            <SelectItem key={idx} value={region}>
              {region}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default RegionSelect;
