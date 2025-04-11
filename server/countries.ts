import data from "@/lib/data.json";

export function getCountries() {
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
}

export function getCountryByCode(code: string) {
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
}
