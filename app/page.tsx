import { getCountries } from "@/lib/countries";
import CountryList from "./components/CountryList";
import { Country } from "./types";

export default async function Home() {
  const { data = [], error } = await getCountries();

  if (error) {
    return <div>{error}</div>;
  }

  const countriesInAlphabeticalOrder = data.sort((a: Country, b: Country) =>
    a.name.common.localeCompare(b.name.common)
  );

  return (
    <main className="container">
      <CountryList data={countriesInAlphabeticalOrder} />
    </main>
  );
}
