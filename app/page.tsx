import { getCountries } from "@/lib/countries";
import { Country } from "./types";
import CountryList from "./components/CountryList";
import ScrollButton from "./components/shared/ScrollButton";

export default async function Home() {
  const { data = [], error } = await getCountries();

  const countriesInAlphabeticalOrder = data.sort((a: Country, b: Country) =>
    a.name.common.localeCompare(b.name.common)
  );

  return (
    <main className="px-4 md:container my-10">
      {error && <p>{error}</p>}

      {!error && <CountryList data={countriesInAlphabeticalOrder} />}
      <ScrollButton />
    </main>
  );
}
