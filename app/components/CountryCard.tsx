import { Country } from "../types";

const CountryCard = ({ country }: { country: Country }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg space-y-7">
      <figure className="relative h-48">
        <img
          className="object-cover w-full h-full rounded-lg border"
          src={country.flags.png}
          alt={country.name.common}
        />
      </figure>

      <div className="space-y-2">
        <h2>{country.name.common}</h2>
        <p>Population: {country.population}</p>
        <p>Region: {country.region}</p>
        <p>Capital: {country.capital}</p>
      </div>
    </div>
  );
};

export default CountryCard;
