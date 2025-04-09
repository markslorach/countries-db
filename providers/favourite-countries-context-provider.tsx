"use client";
import { Country } from "@/types/country";
import { createContext, useOptimistic } from "react";

type FavouriteCountriesContextProviderProps = {
  children: React.ReactNode;
  data: Country[];
};

type TFavouriteCountriesContext = {
  favouriteCountries: Country[];
};

export const FavouriteCountriesContext =
  createContext<TFavouriteCountriesContext | null>(null);

const FavouriteCountriesContextProvider = ({
  children,
  data,
}: FavouriteCountriesContextProviderProps) => {
  const [optimisticFavouriteCountries, setOptimisticFavouriteCountries] =
    useOptimistic<Country[]>(data);

  return (
    <FavouriteCountriesContext.Provider
      value={{
        favouriteCountries: optimisticFavouriteCountries,
      }}
    >
      {children}
    </FavouriteCountriesContext.Provider>
  );
};

export default FavouriteCountriesContextProvider;
