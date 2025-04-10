"use client";
import { ReactNode } from "react";
import FavouriteCountriesContextProvider from "./favourite-countries-context-provider";
import { Country } from "@/types/country";

interface ProvidersProps {
  children: ReactNode;
  isAuthenticated: boolean;
  favouriteCountries?: Country[];
}

export default function Providers({ 
  children, 
  isAuthenticated, 
  favouriteCountries 
}: ProvidersProps) {
  return (
    <FavouriteCountriesContextProvider
      data={favouriteCountries}
      isAuthenticated={isAuthenticated}
    >
      {children}
    </FavouriteCountriesContextProvider>
  );
} 