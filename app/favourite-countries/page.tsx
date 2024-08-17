import { Suspense } from "react";
import FavouritesContainer from "../FavouritesContainer";
import CountryListSkeleton from "../components/skeletons/CountryListSkeleton";

const FavouriteCountriesPage = () => {
  return (  
      // <Suspense fallback={<CountryListSkeleton />}>
        <FavouritesContainer />
    
  );
};

export default FavouriteCountriesPage;
