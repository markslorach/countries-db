import Container from "@/app/components/shared/container";
import Heading from "@/app/components/shared/heading";
import FiltersContainer from "@/app/components/country-filters/filters-container";

const FavouriteCountriesPage = async () => {
  return (
    <Container className="my-10">
      <FiltersContainer />
      <Heading className="mb-5 leading-snug">Favourite Countries</Heading>
    </Container>
  );
};

export default FavouriteCountriesPage;
