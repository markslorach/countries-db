import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
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

  const favouriteCountries = await prisma.favouriteCountry.findMany({
    where: {
      userId: session.user.id,
    },
  }) as FavouriteCountry[] | []

  console.log(favouriteCountries);

  return <div>{children}</div>;
};

export default FavouriteCountriesLayout;
