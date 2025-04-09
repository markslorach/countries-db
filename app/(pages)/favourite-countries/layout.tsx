import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import FavouriteCountriesContextProvider from "@/providers/favourite-countries-context-provider";
import { getCountries } from "@/server/countries";
import { Country } from "@/types/country";
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

  // TODO: Move this to a server action and use cache to get the favourite countries

  const favouriteCountryCodes = await prisma.favouriteCountry.findMany({
    where: {
      userId: session.user.id,
    },
  });
  
  const allCountries = getCountries();

  const favouriteCountries = allCountries.data?.filter((country) =>
    favouriteCountryCodes.map((fc) => fc.country).includes(country.cca3),
  );

  return (
    <FavouriteCountriesContextProvider
      data={favouriteCountries as unknown as Country[]}
    >
      {children}
    </FavouriteCountriesContextProvider>
  );
};

export default FavouriteCountriesLayout;
