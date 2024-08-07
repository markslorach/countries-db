import Link from "next/link";
import { Country } from "../types";

const CountryCard = ({ country }: { country: Country }) => {
  return (
    <Link href={`/${country.cca3}`}>
      <div className="p-5 rounded-lg shadow-sm bg-white space-y-7 border border-gray-300/50 md:hover:scale-[104%] transition-transform">
        <div className="aspect-video">
          <img
            className="object-cover w-full h-full rounded-lg shadow-sm"
            src={country.flags.png}
            alt={country.name.common}
          />
        </div>

        <div className="space-y-2">
          <h2 className="font-semibold text-lg line-clamp-1">
            {country.name.common}
          </h2>
          <p>
            <span className="font-semibold">Population:</span>{" "}
            {country.population.toLocaleString()}
          </p>
          <p>
            <span className="font-semibold">Region:</span> {country.region}
          </p>
          <p className="line-clamp-1">
            <span className="font-semibold">
              {country.capital?.length > 1 ? "Capitals:" : "Capital:"}
            </span>{" "}
            {country.capital ? country.capital.join(", ") : "No Capital"}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
