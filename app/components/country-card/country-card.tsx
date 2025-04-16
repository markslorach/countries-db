import Link from "next/link";
import { Country } from "@/types/country";
import CountryCardImage from "./country-card-image";
import CountryCardInfo from "./country-card-info";
import FavouriteButton from "../user/favourite-btn";

type CountryCardProps = {
  country: Country;
};

const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <article className="relative transition-transform duration-300 md:hover:scale-[101.5%]">
      <Link href={`/country/${country.cca3}`}>
        <div className="space-y-5 rounded-xs border border-gray-300/50 bg-white p-3 shadow-xs">
          <CountryCardImage country={country} />
          <CountryCardInfo country={country} />
        </div>
      </Link>

      <div className="absolute right-3 bottom-3 z-20">
        <FavouriteButton country={country} />
      </div>
    </article>
  );
};

export default CountryCard;
