import { Country } from "@/types/country";
import { getCountries } from "@/server/countries";
import Container from "./components/shared/container";
import CountryList from "./components/country-list";
import FiltersContainer from "./components/country-filters/filters-container";
import Heading from "./components/shared/heading";
import ScrollButton from "./components/shared/scroll-btn";

export default async function Home() {
  const { data: countries, success, error } = getCountries();

  if (!success) {
    return <div>Error: {error}</div>;
  }

  return (
    <Container className="my-10">
      <FiltersContainer />
      <Heading className="mb-5 leading-snug">Countries</Heading>
      <CountryList countries={countries as unknown as Country[]} />
      <ScrollButton />
    </Container>
  );
}
