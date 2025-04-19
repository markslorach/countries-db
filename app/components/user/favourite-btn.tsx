"use client";
import { useFavouriteCountriesContext } from "@/hooks/useFavouriteCountriesContext";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Country } from "@/types/country";
import { Star } from "lucide-react";

type FavouriteButtonProps = {
  country: Country;
  className?: string;
};

const FavouriteButton = ({ country, className }: FavouriteButtonProps) => {
  const {
    isAuthenticated,
    favouriteCountries,
    addFavouriteCountry,
    removeFavouriteCountry,
  } = useFavouriteCountriesContext();

  const isFavourite = favouriteCountries.some(
    (favouriteCountry) => favouriteCountry.cca3 === country.cca3,
  );

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };

  const action = () => {
    if (isFavourite) {
      removeFavouriteCountry(country);
    } else {
      addFavouriteCountry(country);
    }
  };

  return (
    <>
      {isAuthenticated && (
        <form action={action}>
          <Button
            onClick={handleClick}
            className={cn(
              "group bg-gray-100 shadow-none transition-colors hover:bg-gray-100",
              className,
            )}
            size="icon"
            type="submit"
            aria-label={isFavourite ? "Remove from favourites" : "Add to favourites"}
          >
            <Star
              className={cn("size-6", {
                "fill-blue-400 text-blue-400": isFavourite,
                "text-gray-400": !isFavourite,
              })}
            />
          </Button>
        </form>
      )}
    </>
  );
};

export default FavouriteButton;
