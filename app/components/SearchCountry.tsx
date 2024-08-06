import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';


type Props = {
  search: string;
  setSearch: (search: string) => void;
};

const SearchCountry = ({ search, setSearch }: Props) => {
  return (
    <Input
    icon={<Search className="w-5 h-5 text-gray-400 mr-2"/>}
      className="focus-visible:ring-0 w-72 h-14 px-5 shadow-sm"
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search for a country..."
    />
  );
};

export default SearchCountry;
