"use client";
import { useFilter } from "@/hooks/useFilter";
import { Country } from "@/types/country";
import CountryCard from "./country-card/country-card";

type CountryListProps = {
  countries: Country[];
};

const CountryList = ({ countries }: CountryListProps) => {
  const { searchQuery, selectedRegion } = useFilter();

  const filteredCountries = countries?.filter((country) => {
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesRegion =
      selectedRegion === "All" || country.region === selectedRegion;

    return matchesSearch && matchesRegion;
  });

  if (filteredCountries?.length === 0) {
    return <p className="text-gray-500">No countries found.</p>;
  }

  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {filteredCountries?.map((country) => (
        <li key={country.cca3}>
          <CountryCard country={country as Country} />
        </li>
      ))}
    </ul>
  );
};

export default CountryList;
