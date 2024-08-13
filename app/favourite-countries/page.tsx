import { getCountry } from "@/lib/countries";
import { getFavouriteCountries } from "@/lib/user";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import CountryList from "../components/CountryList";
import { alphabeticalOrder } from "@/utils/helpers";

const FavouriteCountriesPage = async () => {
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
    <div className="px-4 md:container mt-10">
      <SignedOut>
        <p>Please sign in to see your favourite countries.</p>
      </SignedOut>
      <SignedIn>
        {!favouriteCountries.length ? (
          <p>Add a country to your favourites to see it here.</p>
        ) : (
          <CountryList data={alphabeticalOrder(favouriteCountries)} />
        )}
      </SignedIn>
    </div>
  );
};

export default FavouriteCountriesPage;
