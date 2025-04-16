import { unstable_cache } from "next/cache";
import data from "@/lib/data.json";

export const getCountries = async () => {
  return unstable_cache(
    async () => {
      try {
        const sortedData = [...data].sort((a, b) =>
          a.name.common.localeCompare(b.name.common),
        );

        return {
          success: true,
          data: sortedData,
        };
      } catch (error: any) {
        console.error("Error fetching countries data:", error.message);

        return {
          success: false,
          error: error.message,
        };
      }
    },
    ["all-countries"],
    {
      revalidate: 3600,
      
      tags: ["countries"],
    }
  )();
};

export const getCountryByCode = async (code: string) => {
  return unstable_cache(
    async () => {
      try {
        const country = data.find((country) => country.cca3 === code);

        return {
          success: true,
          data: country,
        };
      } catch (error: any) {
        console.error(`Error finding country with code ${code}:`, error.message);

        return {
          success: false,
          error: error.message,
        };
      }
    },
    [`country-${code}`],
    {
      revalidate: 3600,
      tags: ["countries", `country-${code}`],
    }
  )();
};
