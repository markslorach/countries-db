"use client";
import { useFilter } from "@/hooks/useFilter";
import { Country } from "@/types/country";
import CountryCard from "./country-card/country-card";

type CountryListProps = {
  countries: Country[];
};

const CountryList = ({ countries }: CountryListProps) => {
  const { debouncedSearchQuery, selectedRegion, sortDirection } = useFilter();

  const displayedCountries = countries
    .filter((country) =>
      country.name.common
        .toLowerCase()
        .includes(debouncedSearchQuery.toLowerCase()),
    )
    .filter(
      (country) =>
        selectedRegion === "All" || country.region === selectedRegion,
    )
    .sort((a, b) =>
      sortDirection === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common),
    );

  if (displayedCountries.length === 0) {
    return <p className="text-gray-500">No countries found.</p>;
  }

  return (
    <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {displayedCountries.map((country) => (
        <CountryCard key={country.cca3} country={country as Country} />
      ))}
    </section>
  );
};

export default CountryList;
