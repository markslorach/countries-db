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
          <MapPin className="text-muted-foreground size-4" />
          <span className="text-muted-foreground text-sm">
            {country.capital?.length > 1 ? "Capitals:" : "Capital:"}
          </span>
          <span className="line-clamp-1 text-sm font-medium">
            {country.capital?.join(", ") || "No Capital"}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <UsersRound className="text-muted-foreground size-4" />
          <span className="text-muted-foreground text-sm">Population:</span>
          <span className="text-sm font-medium">
            {country.population.toLocaleString()}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <Earth className="text-muted-foreground size-4" />
          <span className="text-muted-foreground text-sm">Region:</span>
          <span className="text-sm font-medium">{country.region}</span>
        </div>
      </div>
    </div>
  );
};

export default CountryCardInfo;
