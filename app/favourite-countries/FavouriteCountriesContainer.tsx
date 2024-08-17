import { SignedIn, SignedOut } from "@clerk/nextjs";
import { alphabeticalOrder } from "@/utils/helpers";
import CountryList from "../components/CountryList";
import BackButton from "../components/shared/BackButton";
import Link from "next/link";
import HomeButton from "../components/shared/HomeButton";
import { Country } from "../_types/types";

type Props = {
  userId: string | null;
  favouriteCountries: Country[];
};

const FavouriteCountriesContainer = ({ userId, favouriteCountries }: Props) => {
  return (
    <div>
      <SignedOut>
        {userId ? <BackButton /> : <HomeButton />}
        <p className="mt-10">
          Please{" "}
          <Link href="/sign-in" className="text-blue-500">
            sign in
          </Link>{" "}
          to see your favourite countries.
        </p>
      </SignedOut>
      <SignedIn>
        <CountryList data={alphabeticalOrder(favouriteCountries)} />
      </SignedIn>
    </div>
  );
};

export default FavouriteCountriesContainer;
