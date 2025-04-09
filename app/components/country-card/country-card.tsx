import Link from "next/link";
import { Country } from "@/types/country";
import CountryCardImage from "./country-card-image";
import CountryCardInfo from "./country-card-info";

type CountryCardProps = {
  country: Country;
};

const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <div className="relative transition-transform duration-300 md:hover:scale-[101.5%]">
      <Link href={`/country/${country.cca3}`}>
        <article className="space-y-5 rounded-xs border border-gray-300/50 bg-white p-3 shadow-xs">
          <CountryCardImage country={country} />
          <CountryCardInfo country={country} />
        </article>
      </Link>

      {/* <div className="absolute right-3 bottom-3 z-20"></div> */}
    </div>
  );
};

export default CountryCard;
