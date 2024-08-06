import { getCountries } from "@/lib/countries";
import { Country } from "./types";
import CountryCard from "./components/CountryCard";

export default async function Home() {
  const { data = [], error } = await getCountries();

  if (error) {
    return <div>{error}</div>;
  }

  const countriesInAlphabeticalOrder = data.sort((a: Country, b: Country) =>
    a.name.common.localeCompare(b.name.common)
  );

  return (
    <main>
      <h1>Countries Explorer</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {countriesInAlphabeticalOrder.map((country: Country) => (
          <li key={country.cca3}>
            <CountryCard country={country} />
          </li>
        ))}
      </ul>
    </main>
  );
}
