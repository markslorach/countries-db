import { Country } from "@/types/country";
import { getCountries } from "@/server/countries";
import Container from "./components/shared/container";
import CountryList from "./components/country-list";
import FiltersContainer from "./components/country-filters/filters-container";
import Heading from "./components/shared/heading";
import ScrollButton from "./components/shared/scroll-btn";

export default async function Home() {
  const { data, success, error } = await getCountries();

  if (!success) {
    return <div>Error: {error}</div>;
  }

  const countries = data as unknown as Country[];

  return (
    <Container className="mt-10 mb-20">
      <FiltersContainer />
      <Heading className="mb-5 leading-snug">Countries</Heading>
      <CountryList countries={countries} />
      <ScrollButton />
    </Container>
  );
}
