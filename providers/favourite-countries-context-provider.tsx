"use client";
import { FavouriteCountry } from "@prisma/client";
import { createContext } from "react";

type FavouriteCountriesContextProviderProps = {
  data: FavouriteCountry[];
  children: React.ReactNode;
};

type TFavouriteCountriesContext = {
  favouriteCountries: FavouriteCountry[];
};

export const FavouriteCountriesContext =
  createContext<TFavouriteCountriesContext | null>(null);

const FavouriteCountriesContextProvider = ({
  children,
  data,
}: FavouriteCountriesContextProviderProps) => {
  return (
    <FavouriteCountriesContext.Provider value={{ favouriteCountries: data }}>
      {children}
    </FavouriteCountriesContext.Provider>
  );
};

export default FavouriteCountriesContextProvider;
