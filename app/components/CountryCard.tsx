import { Country } from "../types";

const CountryCard = ({ country }: { country: Country }) => {
  return (
    <div className="p-6 rounded-lg shadow-sm bg-white space-y-7 border border-gray-300/50 hover:scale-[104%] transition-transform">
      <figure className="relative h-40">
        <img
          className="object-cover w-full h-full rounded-lg shadow-sm"
          src={country.flags.png}
          alt={country.name.common}
        />
      </figure>
      
      <div className="space-y-2">
        <h2 className="font-semibold text-lg">{country.name.common}</h2>
        <p><span className="font-semibold">Population:</span> {country.population.toLocaleString()}</p>
        <p><span className="font-semibold">Region:</span> {country.region}</p>
        <p><span className="font-semibold">Capital:</span> {country.capital ? country.capital : "No Capital"}</p>
      </div>
    </div>
  );
};

export default CountryCard;
