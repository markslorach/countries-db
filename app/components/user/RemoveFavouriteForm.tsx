"use client";
import { Country } from "@/app/_types/types";
import { removeFavouriteCountryAction } from "@/app/actions/actions";
import { StarIcon as StarOutline } from "@heroicons/react/24/outline";
import { StarIcon as StarSolid } from "@heroicons/react/24/solid";
import { useState } from "react";

type Props = {
  removeFavourite: (country: Country) => void;
  country: Country;
};

const RemoveFavouriteForm = ({ removeFavourite, country }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  async function action() {
    removeFavourite(country);
    await removeFavouriteCountryAction(country.cca3);
  }

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
  };

  return (
    <form className="flex" action={action}>
      <button
        type="submit"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleButtonClick}
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
