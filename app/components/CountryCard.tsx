import { Country } from "../types";

const CountryCard = ({ country }: { country: Country }) => {
  return (
    <div>
      <img src={country.flags.png} alt={country.name.common} />
      <h2>{country.name.common}</h2>
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
      <p>Capital: {country.capital}</p>
    </div>
  );
};

export default CountryCard;
