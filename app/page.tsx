import { getCountries } from "@/lib/countries";
import { Country } from "./types";
import CountryList from "./components/CountryList";

export default async function Home() {
  const { data = [], error } = await getCountries();

  const countriesInAlphabeticalOrder = data.sort((a: Country, b: Country) =>
    a.name.common.localeCompare(b.name.common)
  );

  return (
    <main className="px-4 md:container mb-10">
      {error && <p>{error}</p>}

      <CountryList data={countriesInAlphabeticalOrder} />
    </main>
  );
}
