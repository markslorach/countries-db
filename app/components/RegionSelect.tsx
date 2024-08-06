import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  return (
    <Select value={selectedRegion} onValueChange={setSelectedRegion}>
      <SelectTrigger className="w-52 h-14 px-5 shadow-sm">
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
