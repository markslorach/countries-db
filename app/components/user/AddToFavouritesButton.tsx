import { StarIcon as StarOutline } from "@heroicons/react/24/outline";
import { StarIcon as StarSolid } from "@heroicons/react/24/solid";

const AddToFavouritesButton = ({ isFavourite }: { isFavourite: boolean }) => {
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };

  return (
    <button
      type="submit"
      onClick={handleButtonClick}
      aria-label="Add country to favourites"
    >
      {isFavourite ? (
        <StarSolid className=" w-7 h-7 text-blue-500" />
      ) : (
        <StarOutline className=" w-7 h-7 text-blue-500" />
      )}
    </button>
  );
};

export default AddToFavouritesButton;
