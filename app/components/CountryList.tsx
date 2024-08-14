"use client";
import { useState } from "react";
import { Country } from "../types";
import { removeDuplicates } from "@/utils/helpers";
import CountryCard from "./CountryCard";
import RegionSelect from "./RegionSelect";
import SearchCountry from "./SearchCountry";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import ScrollButton from "./shared/ScrollButton";

const CountryList = ({ data }: { data: Country[] }) => {
  const pathname = usePathname();

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

  const cardVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <>
      <div className="flex flex-wrap md:flex-nowrap justify-between pb-10 gap-5">
        <SearchCountry search={search} setSearch={setSearch} />

        <RegionSelect
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
          uniqueRegions={uniqueRegions}
        />
      </div>

      {!filteredCountries.length && <p>No countries found</p>}

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredCountries.map((country) => (
          <motion.li
            key={country.cca3}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <CountryCard country={country} />
          </motion.li>
        ))}
      </ul>
      <ScrollButton />
    </>
  );
};

export default CountryList;
