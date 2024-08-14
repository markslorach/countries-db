import { Suspense } from "react";
import CountryContainer from "./CountryContainer";
import CountryListSkeleton from "./components/skeletons/CountryListSkeleton";

export default function Home() {
  return (
    <Suspense fallback={<CountryListSkeleton/>}>
      <CountryContainer />
    </Suspense>
  );
}
