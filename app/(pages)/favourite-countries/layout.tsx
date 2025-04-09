import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import FavouriteCountriesContextProvider from "@/providers/favourite-countries-context-provider";
import { FavouriteCountry } from "@prisma/client";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const FavouriteCountriesLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/");
  }

  const favouriteCountryCodes = (await prisma.favouriteCountry.findMany({
    where: {
      userId: session.user.id,
    },
  })) as FavouriteCountry[] | [];

  console.log(favouriteCountryCodes);

  return (
    <FavouriteCountriesContextProvider data={favouriteCountryCodes}>
      {children}
    </FavouriteCountriesContextProvider>
  );
};

export default FavouriteCountriesLayout;
