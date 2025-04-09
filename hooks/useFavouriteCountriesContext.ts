import { useContext } from "react";
import { FavouriteCountriesContext } from "@/providers/favourite-countries-context-provider";

export function useFavouriteCountriesContext() {
  const context = useContext(FavouriteCountriesContext);

  if (!context) {
    throw new Error(
      "useFavouriteCountriesContext must be used within a FavouriteCountriesContextProvider",
    );
  }

  return context;
}
