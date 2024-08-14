import { Suspense } from "react";
import FavouritesContainer from "../FavouritesContainer";
import HomeSkeleton from "../components/skeletons/HomeSkeleton";

const FavouriteCountriesPage = () => {
  return (
    <Suspense fallback={<HomeSkeleton />}>
      <FavouritesContainer />
    </Suspense>
  );
};

export default FavouriteCountriesPage;
