import { Suspense } from "react";
import CountryListSkeleton from "./components/skeletons/CountryListSkeleton";
import CountriesContainer from "./CountriesContainer";

export default function Home() {
  return (
    <Suspense fallback={<CountryListSkeleton/>}>
      <CountriesContainer />
    </Suspense>
  );
}
