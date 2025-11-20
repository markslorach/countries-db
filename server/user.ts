import { prisma } from "@/lib/prisma";
import { getCountries } from "@/server/countries";
import { Country } from "@/types/country";
import { User } from "better-auth";

export const getFavouriteCountries = async (user: User) => {
  if (!user) {
    return {
      success: false,
      error: "Unauthorized",
    };
  }

  try {
    const favouriteCountryCodes = await prisma.favouriteCountry.findMany({
      where: {
        userId: user.id,
      },
      select: {
        country: true,
      },
    });

    const { data: countries, success, error } = await getCountries();

    if (!success) {
      return {
        success: false,
        error: error || "Failed to get countries data",
      };
    }

    const allCountries = countries as unknown as Country[];

    const favouriteCountries = allCountries.filter((country) =>
      favouriteCountryCodes.map((fc) => fc.country).includes(country.cca3),
    );

    return {
      success: true,
      data: favouriteCountries,
    };
  } catch (error: any) {
    console.error("Error getting favourite countries:", error.message);

    return {
      success: false,
      error: error.message || "Failed to get favourite countries",
    };
  }
};

