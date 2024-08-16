import { getCountry } from "@/lib/countries";
import { Country } from "@/app/_types/types";
import { notFound } from "next/navigation";
import { getFavouriteCountries } from "@/lib/user";
import { auth } from "@clerk/nextjs/server";
import CountryDetails from "@/app/CountryDetails";

const CountryPage = async ({ params }: { params: { cca3: string } }) => {
  const { userId } = auth();

  const { data } = await getCountry(params.cca3);
  const country = data as Country;

  if (!country) notFound();

  const { countries = [] } = await getFavouriteCountries()

  return (
    <>
      <CountryDetails
        userId={userId}
        country={country}
        countries={{ countries }}
      />
    </>
  );
};

export default CountryPage;
