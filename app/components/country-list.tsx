"use client";
import { useFilter } from "@/hooks/useFilter";
import { Country } from "@/types/country";
import CountryCard from "./country-card/country-card";

type CountryListProps = {
  countries: Country[];
};

const CountryList = ({ countries }: CountryListProps) => {
  const { debouncedSearchQuery, selectedRegion } = useFilter();

  const filteredCountries = countries?.filter((country) => {
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(debouncedSearchQuery.toLowerCase());

    const matchesRegion =
      selectedRegion === "All" || country.region === selectedRegion;

    return matchesSearch && matchesRegion;
  });

  if (filteredCountries?.length === 0) {
    return <p className="text-gray-500">No countries found.</p>;
  }

  return (
    <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {filteredCountries?.map((country) => (
        <CountryCard key={country.cca3} country={country as Country} />
      ))}
    </section>
  );
};

export default CountryList;
