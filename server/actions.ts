"use server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import { revalidatePath } from "next/cache";

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
      select: {
        country: true,
        userId: true,
      },
    });

    revalidatePath(`/country/${countryCode}`);

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
      select: {
        id: true,
        userId: true,
      },
    });

    revalidatePath(`/country/${countryCode}`);

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
