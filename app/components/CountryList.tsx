"use client";
import { useState } from "react";
import { Country } from "../types";
import CountryCard from "./CountryCard";

const CountryList = ({ data }: { data: Country[] }) => {
  const [search, setSearch] = useState("");

  const countries = data.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {countries.map((country) => (
          <li key={country.cca3}>
            <CountryCard country={country} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CountryList;
