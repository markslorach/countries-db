"use client";
import {
  addFavouriteCountryAction,
  removeFavouriteCountryAction,
} from "@/server/actions";
import { Country } from "@/types/country";
import { createContext, useOptimistic } from "react";
import { toast } from "sonner";

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
  // State
  const [optimisticFavouriteCountries, setOptimisticFavouriteCountries] =
    useOptimistic<Country[]>(data || []);

  // Actions
  const addFavouriteCountry = async (country: Country) => {
    setOptimisticFavouriteCountries((prev) => [...prev, country]);

    const { error } = await addFavouriteCountryAction(country.cca3);

    if (error) {
      toast.error(error);
    }
  };

  const removeFavouriteCountry = async (country: Country) => {
    setOptimisticFavouriteCountries((prev) =>
      prev.filter((c) => c.cca3 !== country.cca3),
    );

    const { error } = await removeFavouriteCountryAction(country.cca3);

    if (error) {
      toast.error(error);
    }
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
