import { Suspense } from "react";
import CountryContainer from "./CountryContainer";
import HomeSkeleton from "./components/skeletons/HomeSkeleton";

export default async function Home() {
  return (
    <Suspense fallback={<HomeSkeleton/>}>
      <CountryContainer />
    </Suspense>
  );
}
