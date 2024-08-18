"use client";
import { useOptimistic } from "react";
import AddToFavouritesButton from "./AddToFavouritesButton";
import { addFavouriteCountryAction, removeFavouriteCountryAction } from "@/app/actions/actions";

type Props = {
  countryCode: string;
  isFavourite: boolean;
};

const AddToFavourites = ({ countryCode, isFavourite }: Props) => {
  const [optimisticFavourite, setOptimisticFavourite] = useOptimistic(
    isFavourite
  );

  async function action(formData: FormData) {
    const countryCode = formData.get("countryCode") as string;

    setOptimisticFavourite(!optimisticFavourite);

    if (optimisticFavourite) {
      await removeFavouriteCountryAction(countryCode);
    } else {
      await addFavouriteCountryAction(countryCode);
    }
  }

  return (
    <form action={action} className="flex h-fit">
      <input type="hidden" name="countryCode" value={countryCode} />
      <AddToFavouritesButton isFavourite={optimisticFavourite} />
    </form>
  );
};

export default AddToFavourites;
