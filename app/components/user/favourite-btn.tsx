"use client";
import { Button } from "@/components/ui/button";
import { useFavouriteCountriesContext } from "@/hooks/useFavouriteCountriesContext";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import { Country } from "@/types/country";

const FavouriteButton = ({ country }: { country: Country }) => {
  const { favouriteCountries, addFavouriteCountry, removeFavouriteCountry } =
    useFavouriteCountriesContext();

  const isFavourite = favouriteCountries.some(
    (favouriteCountry) => favouriteCountry.cca3 === country.cca3,
  );

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };

  const action = async () => {
    if (isFavourite) {
      removeFavouriteCountry(country);
    } else {
      addFavouriteCountry(country);
    }
  };

  return (
    <form action={action}>
      <Button
        onClick={handleClick}
        className="bg-gray-50 shadow-none hover:bg-gray-50"
        size="icon"
        type="submit"
      >
        <Star
          className={cn("size-6", {
            "fill-yellow-400 text-yellow-400": isFavourite,
            "text-gray-300": !isFavourite,
          })}
        />
      </Button>
    </form>
  );
};

export default FavouriteButton;
