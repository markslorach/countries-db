import data from "@/lib/data.json";

export const getCountries = async () => {
  try {
    return {
      success: true,
      data,
    };
  } catch (error: any) {
    console.error("Error fetching countries data:", error.message);

    return {
      success: false,
      error: error.message,
    };
  }
};

export const getCountryByCode = async (code: string) => {
  try {
    const country = data.find((country) => country.cca3 === code);

    return {
      success: true,
      data: country,
    };
  } catch (error: any) {
    console.error(
      `Error finding country with code ${code}:`,
      error.message,
    );

    return {
      success: false,
      error: error.message,
    };
  }
};

export const getBorderCountries = async (borderCountryCodes: string[] = []) => {
  try {
    const borderCountries = await Promise.all(
      borderCountryCodes.map(async (borderCountryCode) => {
        const { data: borderCountry } =
          await getCountryByCode(borderCountryCode);

        return {
          code: borderCountryCode,
          name: borderCountry?.name.common,
        };
      }),
    );
    return borderCountries;
  } catch (error: any) {
    console.error("Error fetching border countries:", error.message);
    return [];
  }
};
