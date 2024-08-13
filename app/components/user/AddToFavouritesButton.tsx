import { StarIcon as StarOutline } from "@heroicons/react/24/outline";
import { StarIcon as StarSolid } from "@heroicons/react/24/solid";

const AddToFavouritesButton = ({ isFavourite }: { isFavourite: boolean }) => {
  return (
    <button className="-mt-0.5" type="submit" aria-label="Add country to favourites">
      {isFavourite ? (
        <StarSolid className=" w-8 h-8 text-blue-500" />
      ) : (
        <StarOutline className=" w-8 h-8 text-blue-500" />
      )}
    </button>
  );
};

export default AddToFavouritesButton;
