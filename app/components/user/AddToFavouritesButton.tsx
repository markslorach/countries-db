import { StarIcon as StarOutline } from "@heroicons/react/24/outline";
import { StarIcon as StarSolid } from "@heroicons/react/24/solid";
import { useFormStatus } from "react-dom";

const AddToFavouritesButton = ({ isFavourite }: { isFavourite: boolean }) => {
  const { pending } = useFormStatus();

  return (
    <button type="button" aria-label="Add country to favourites">
      {isFavourite ? (
        <StarSolid className=" w-8 h-8 text-blue-500" />
      ) : (
        <StarOutline className=" w-8 h-8 text-blue-500" />
      )}
    </button>
  );
};

export default AddToFavouritesButton;
