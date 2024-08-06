import { getCountries } from "@/lib/data";
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
    <main>
      <h1>Countries Explorer</h1>
      <ul>
        {countriesInAlphabeticalOrder.map((country: Country) => (
          <li key={country.cca3}>
            <img src={country.flags.png} alt={country.name.common} />
            <h2>{country.name.common}</h2>
            <p>Population: {country.population}</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
