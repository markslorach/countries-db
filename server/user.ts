"use server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { getCountries } from "@/server/countries";
import { Country } from "@/types/country";

export const addFavouriteCountryAction = async (countryCode: string) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return {
      success: false,
      error: "Unauthorized",
    };
  }

  const { user } = session;

  try {
    const favouriteCountries = await prisma.favouriteCountry.create({
      data: {
        country: countryCode,
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });

    revalidatePath("/");

    return {
      success: true,
      data: favouriteCountries,
    };
  } catch (error: any) {
    console.error("Error adding favourite country:", error.message);

    return {
      success: false,
      error: error.message || "Failed to add favourite country",
    };
  }
};

export const getFavouriteCountries = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return {
      success: false,
      error: "Unauthorized",
    };
  }

  const { user } = session;

  try {
    const favouriteCountryCodes = await prisma.favouriteCountry.findMany({
      where: {
        userId: user.id,
      },
    });

    const { data: countries, success, error } = getCountries();

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

export const removeFavouriteCountryAction = async (countryCode: string) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return {
      success: false,
      error: "Unauthorized",
    };
  }

  const { user } = session;

  try {
    const existingCountry = await prisma.favouriteCountry.findFirst({
      where: {
        userId: user.id,
        country: countryCode,
      },
    });

    if (!existingCountry) {
      return {
        success: false,
        error: "Favourite country not found",
      };
    }

    const country = await prisma.favouriteCountry.delete({
      where: {
        id: existingCountry.id,
      },
    });

    revalidatePath("/");

    return {
      success: true,
      data: country,
    };
  } catch (error: any) {
    console.error("Error removing favourite country:", error.message);

    return {
      success: false,
      error: error.message || "Failed to remove favourite country",
    };
  }
};
