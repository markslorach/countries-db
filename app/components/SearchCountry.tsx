import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

type Props = {
  search: string;
  setSearch: (search: string) => void;
};

const SearchCountry = ({ search = "", setSearch = () => {} }: Props) => {
  return (
    <div role="search" className="w-full relative flex items-center">
      <Search className="absolute ml-3 h-6 w-6 text-gray-600" />
      <Input
        className="focus-visible:ring-0 md:w-72 h-14 pl-11 pr-5 shadow-sm dark:bg-gray-700"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for a country..."
      />
    </div>
  );
};

export default SearchCountry;
