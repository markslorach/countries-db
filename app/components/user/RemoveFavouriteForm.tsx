"use client";
import { Country } from "@/app/_types/types";
import { removeFavouriteCountryAction } from "@/app/actions/actions";
import { StarIcon as StarOutline } from "@heroicons/react/24/outline";
import { StarIcon as StarSolid } from "@heroicons/react/24/solid";
import { useState } from "react";

type Props = {
  removeFavourite?: (country: Country) => void;
  country: Country;
};

const RemoveFavouriteForm = ({ removeFavourite, country }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  async function action() {
    if (removeFavourite) {
      removeFavourite(country);
      await removeFavouriteCountryAction(country.cca3);
    }
  }

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };

  return (
    <form className="flex" action={action}>
      <button
        type="submit"
        onClick={handleButtonClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Remove country from favourites"
      >
        {isHovered ? (
          <StarOutline className="w-7 h-7 text-blue-500 transition-colors" />
        ) : (
          <StarSolid className="w-7 h-7 text-blue-500 transition-colors" />
        )}
      </button>
    </form>
  );
};

export default RemoveFavouriteForm;
