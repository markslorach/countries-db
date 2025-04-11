import Container from "@/app/components/shared/container";
import Heading from "@/app/components/shared/heading";
import FiltersContainer from "@/app/components/country-filters/filters-container";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import FavouritesContainer from "./favourites-container";

const FavouriteCountriesPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/");
  }

  return (
    <Container className="mt-10 mb-20">
      <FiltersContainer />
      <Heading className="mb-5 leading-snug">Favourite Countries</Heading>
      <FavouritesContainer />
    </Container>
  );
};

export default FavouriteCountriesPage;
