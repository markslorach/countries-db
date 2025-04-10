import Link from "next/link";
import { Country } from "@/types/country";
import CountryCardImage from "./country-card-image";
import CountryCardInfo from "./country-card-info";
import FavouriteButton from "../user/favourite-btn";
import { useFavouriteCountriesContext } from "@/hooks/useFavouriteCountriesContext";

type CountryCardProps = {
  country: Country;
};

const CountryCard = ({ country }: CountryCardProps) => {
  const { isAuthenticated } = useFavouriteCountriesContext();

  return (
    <div className="relative transition-transform duration-300 md:hover:scale-[101.5%]">
      <Link href={`/country/${country.cca3}`}>
        <article className="space-y-5 rounded-xs border border-gray-300/50 bg-white p-3 shadow-xs">
          <CountryCardImage country={country} />
          <CountryCardInfo country={country} />
        </article>
      </Link>

      {isAuthenticated && (
        <div className="absolute right-3 bottom-3 z-20">
          <FavouriteButton country={country} />
        </div>
      )}
    </div>
  );
};

export default CountryCard;
