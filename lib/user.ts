import prisma from "@/prisma/client";
import { currentUser } from "@clerk/nextjs/server";

// Gets logged in user from the db or creates a new user if they don't exist
export async function getUser() {
  try {
    const clerkUser = await currentUser();
    const email = clerkUser?.emailAddresses[0]?.emailAddress as string;

    if (!clerkUser) return;

    let user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      user = await prisma.user.create({
        data: { email, name: clerkUser?.firstName },
      });
    }

    return user;
  } catch (error) {
    console.error(error);
  }
}

export async function getFavouriteCountries() {
  try {
    const user = await getUser();
    if (!user) return { error: "User not found" };

    const countries = await prisma.favouriteCountry.findMany({
      where: { userId: user.id },
    });

    return { countries };
  } catch (error) {
    return { error: "Error fetching data" };
  }
}
