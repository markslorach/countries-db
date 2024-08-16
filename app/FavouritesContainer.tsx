import { getCountry } from "@/lib/countries";
import { getFavouriteCountries } from "@/lib/user";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { alphabeticalOrder } from "@/utils/helpers";
import CountryList from "./components/CountryList";
import BackButton from "./components/shared/BackButton";
import Link from "next/link";

const FavouritesContainer = async () => {
  const { userId } = auth();

  let favouriteCountries = [];

  if (userId) {
    const { countries = [], error } = await getFavouriteCountries();

    if (error) return <div className="px-4 md:container mt-10">{error}</div>;

    if (countries.length > 0) {
      favouriteCountries = await Promise.all(
        countries.map(async (country) => {
          const { data } = await getCountry(country.country);
          return data;
        })
      );
    }
  }

  return (
    <div>
      <SignedOut>
        <BackButton />
        <p className="mt-10">
          Please{" "}
          <Link href="/sign-in" className="text-blue-500">
            sign in
          </Link>{" "}
          to see your favourite countries.
        </p>
      </SignedOut>
      <SignedIn>
        <CountryList data={alphabeticalOrder(favouriteCountries)} />
      </SignedIn>
    </div>
  );
};

export default FavouritesContainer;
