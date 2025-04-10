"use client";
import CountryList from "@/app/components/country-list";
import ScrollButton from "@/app/components/shared/scroll-btn";
import { useFavouriteCountriesContext } from "@/hooks/useFavouriteCountriesContext";

const FavouritesContainer = () => {
  const { favouriteCountries } = useFavouriteCountriesContext();

  return (
    <section>
      {favouriteCountries.length > 0 ? (
        <CountryList countries={favouriteCountries} />
      ) : (
        <p className="text-gray-500">You haven't added any favourite countries yet.</p>
      )}
      <ScrollButton />
    </section>
  );
};

export default FavouritesContainer; 