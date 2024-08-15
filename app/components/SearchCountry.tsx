import { Input } from "@/components/ui/input";

type Props = {
  search?: string; 
  setSearch?: (search: string) => void;
};

const SearchCountry = ({ search = "", setSearch = () => {} }: Props) => {
  return (
    <div role="search" className="w-full">
      <Input
        className="focus-visible:ring-0 md:w-72 h-14 px-5 shadow-sm dark:bg-gray-700"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for a country..."
      />
    </div>
  );
};

export default SearchCountry;