"use client";
import { Country } from "@/types/country";
import { createContext, useOptimistic } from "react";

type FavouriteCountriesContextProviderProps = {
  children: React.ReactNode;
  data?: Country[];
  isAuthenticated: boolean;
};

type TFavouriteCountriesContext = {
  favouriteCountries: Country[];
  addFavouriteCountry: (country: Country) => void;
  removeFavouriteCountry: (country: Country) => void;
  isAuthenticated: boolean;
};

export const FavouriteCountriesContext =
  createContext<TFavouriteCountriesContext | null>(null);

const FavouriteCountriesContextProvider = ({
  children,
  data,
  isAuthenticated,
}: FavouriteCountriesContextProviderProps) => {
  const [optimisticFavouriteCountries, setOptimisticFavouriteCountries] =
    useOptimistic<Country[]>(data || []);

  const addFavouriteCountry = async (country: Country) => {
    setOptimisticFavouriteCountries((prev) => [...prev, country]);
  };

  const removeFavouriteCountry = async (country: Country) => {
    setOptimisticFavouriteCountries((prev) =>
      prev.filter((c) => c.cca3 !== country.cca3),
    );
  };

  return (
    <FavouriteCountriesContext.Provider
      value={{
        favouriteCountries: optimisticFavouriteCountries,
        addFavouriteCountry,
        removeFavouriteCountry,
        isAuthenticated,
      }}
    >
      {children}
    </FavouriteCountriesContext.Provider>
  );
};

export default FavouriteCountriesContextProvider;
