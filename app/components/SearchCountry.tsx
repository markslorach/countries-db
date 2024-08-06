import { Input } from "@/components/ui/input";

type Props = {
  search: string;
  setSearch: (search: string) => void;
};

const SearchCountry = ({ search, setSearch }: Props) => {
  return (
    <Input
      className="focus-visible:ring-0 w-72 h-14 px-5 shadow-sm"
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search for a country..."
    />
  );
};

export default SearchCountry;
