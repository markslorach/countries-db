"use client";
import Link from "next/link";
import { Country } from "../_types/types";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import RemoveFavouriteForm from "./user/RemoveFavouriteForm";
import { usePathname } from "next/navigation";

type Props = {
  country: Country;
  removeFavourite?: (country: Country) => void;
};

const CountryCard = ({ country, removeFavourite }: Props) => {
  const pathname = usePathname();

  return (
    <Link href={`/country/${country.cca3}`}>
      <article className="p-5 rounded-lg shadow-sm bg-white dark:bg-gray-700 space-y-7 border border-gray-300/50 dark:border-gray-500/50 md:hover:scale-[103%] transition-transform">
        <AspectRatio ratio={16 / 9}>
          <Image
            width={300}
            height={200}
            src={country.flags.png}
            alt={country.name.common}
            className="object-cover w-full h-full rounded-lg shadow-sm"
          />
        </AspectRatio>

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

          <div className="flex justify-between items-center">
            <p className="line-clamp-1">
              <span className="font-semibold">
                {country.capital?.length > 1 ? "Capitals:" : "Capital:"}
              </span>{" "}
              {country.capital ? country.capital.join(", ") : "No Capital"}
            </p>
            {pathname === "/favourite-countries" && (
              <RemoveFavouriteForm
                removeFavourite={removeFavourite}
                country={country}
              />
            )}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default CountryCard;
