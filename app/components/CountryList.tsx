"use client";
import { useState } from "react";
import { Country } from "../types";
import { removeDuplicates } from "@/utils/helpers";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CountryCard from "./CountryCard";

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
      <div className="flex justify-between mb-10">
        <Input
          className="focus-visible:ring-0 w-72 h-14 px-5 shadow-sm"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a country..."
        />

        <Select value={selectedRegion} onValueChange={setSelectedRegion}>
          <SelectTrigger className="w-52 h-14 px-5 shadow-sm">
            <SelectValue placeholder="Filter by region" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all">All Regions</SelectItem>
              {uniqueRegions.sort().map((region, idx) => (
                <SelectItem key={idx} value={region}>
                  {region}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
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
