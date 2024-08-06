"use client";
import { useState } from "react";
import { Country } from "../types";
import { removeDuplicates } from "@/utils/helpers";
import CountryCard from "./CountryCard";
import RegionSelect from "./RegionSelect";
import SearchCountry from "./SearchCountry";

const CountryList = ({ data }: { data: Country[] }) => {
  const [search, setSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");

  const filteredCountries = data.filter((country) => {
    const searchMatch = country.name.common
      .toLowerCase()
      .includes(search.toLowerCase());

    const regionMatch =
      selectedRegion === "all" ? true : country.region === selectedRegion;

    return searchMatch && regionMatch;
  });

  const uniqueRegions = removeDuplicates(data.map((country) => country.region));

  return (
    <>
      <div className="flex justify-between py-10">
        <SearchCountry search={search} setSearch={setSearch} />

        <RegionSelect
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
          uniqueRegions={uniqueRegions}
        />
      </div>

      {!filteredCountries.length && <p>No countries found.</p>}

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredCountries.map((country) => (
          <li key={country.cca3}>
            <CountryCard country={country} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CountryList;
