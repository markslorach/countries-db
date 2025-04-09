"use client";
import { Country } from "@/types/country";
import { createContext, useOptimistic } from "react";

type FavouriteCountriesContextProviderProps = {
  children: React.ReactNode;
  data: Country[];
};

type TFavouriteCountriesContext = {
  optimisticFavouriteCountries: Country[];
};

export const FavouriteCountriesContext =
  createContext<TFavouriteCountriesContext | null>(null);

const FavouriteCountriesContextProvider = ({
  children,
  data: favouriteCountries,
}: FavouriteCountriesContextProviderProps) => {
  const [optimisticFavouriteCountries, setOptimisticFavouriteCountries] =
    useOptimistic<Country[]>(favouriteCountries);

  return (
    <FavouriteCountriesContext.Provider
      value={{
        optimisticFavouriteCountries,
      }}
    >
      {children}
    </FavouriteCountriesContext.Provider>
  );
};

export default FavouriteCountriesContextProvider;
