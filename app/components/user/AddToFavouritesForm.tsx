"use client";
import { useOptimistic } from "react";
import {
  addFavouriteCountryAction,
  removeFavouriteCountryAction,
} from "@/app/userActions";
import AddToFavouritesButton from "./AddToFavouritesButton";

type Props = {
  countryCode: string;
  isCountryInUserFavourites: boolean;
};

const AddToFavourites = ({ countryCode, isCountryInUserFavourites }: Props) => {
  const [optimisticFavourite, setOptimisticFavourite] = useOptimistic(
    isCountryInUserFavourites
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
    <form action={action}>
      <input type="hidden" name="countryCode" value={countryCode} />
      <AddToFavouritesButton isFavourite={optimisticFavourite} />
    </form>
  );
};

export default AddToFavourites;
