"use client";
import { useFilter } from "@/hooks/useFilter";
import { Country } from "@/types/country";
import CountryCard from "./country-card/country-card";

type CountryListProps = {
  countries: Country[];
};

const CountryList = ({ countries }: CountryListProps) => {
  const { debouncedSearchQuery, selectedRegion, sortDirection } = useFilter();

  const filteredCountries = countries?.filter((country) => {
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(debouncedSearchQuery.toLowerCase());

    const matchesRegion =
      selectedRegion === "All" || country.region === selectedRegion;

    return matchesSearch && matchesRegion;
  });

  const sortedCountries = filteredCountries?.sort((a, b) => {
    return sortDirection === "asc"
      ? a.name.common.localeCompare(b.name.common)
      : b.name.common.localeCompare(a.name.common);
  });

  if (sortedCountries?.length === 0) {
    return <p className="text-gray-500">No countries found.</p>;
  }

  return (
    <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {sortedCountries?.map((country) => (
        <CountryCard key={country.cca3} country={country as Country} />
      ))}
    </section>
  );
};

export default CountryList;
