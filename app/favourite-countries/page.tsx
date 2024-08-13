import { getCountry } from "@/lib/countries";
import { getFavouriteCountries } from "@/lib/user";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import CountryCard from "../components/CountryCard";

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
      <h1 className="mb-10 text-lg font-semibold">Favourite Countries</h1>
      <SignedOut>
        <p>Please sign in to see your favourite countries</p>
      </SignedOut>
      <SignedIn>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {favouriteCountries.map((country) => (
            <li key={country.cca3}>
              <CountryCard country={country} />
            </li>
          ))}
        </ul>
      </SignedIn>
    </div>
  );
};

export default FavouriteCountriesPage;
