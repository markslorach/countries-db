import { Earth, MapPin, UsersRound } from "lucide-react";
import { Country } from "@/types/country";
import Heading from "../shared/heading";

type CountryCardInfoProps = {
  country: Country;
};

const CountryCardInfo = ({ country }: CountryCardInfoProps) => {
  return (
    <div>
      <Heading tag="h2" className="mb-3.5 line-clamp-1 text-lg leading-snug">
        {country.name.common}
      </Heading>
      <div className="space-y-2">
        <div className="flex items-center gap-1.5">
          <MapPin className="size-4 text-gray-500" />
          <span className="text-sm text-gray-500">
            {country.capital?.length > 1 ? "Capitals:" : "Capital:"}
          </span>
          <span className="line-clamp-1 text-sm font-medium">
            {country.capital?.join(", ") || "No Capital"}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <UsersRound className="size-4 text-gray-500" />
          <span className="text-sm text-gray-500">Population:</span>
          <span className="text-sm font-medium">
            {country.population.toLocaleString()}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <Earth className="size-4 text-gray-500" />
          <span className="text-sm text-gray-500">Region:</span>
          <span className="text-sm font-medium">{country.region}</span>
        </div>
      </div>
    </div>
  );
};

export default CountryCardInfo;
