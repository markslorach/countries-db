import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Earth, MapPin, UsersRound, Coins, Languages } from "lucide-react";
import Heading from "@/app/components/shared/heading";
import { getCountryByCode } from "@/server/countries";
import { Country } from "@/types/country";

type CountryDetailsProps = {
  country: Country;
};

const CountryDetails = ({ country }: CountryDetailsProps) => {
  const borderCountries =
    country.borders?.map((border) => {
      const { data: country } = getCountryByCode(border);
      return {
        code: border,
        name: country?.name.common,
      };
    }) || [];

  return (
    <section className="grid grid-cols-1 gap-10 md:grid-cols-2">
      <Image
        src={country.flags.svg || ""}
        alt={country.name.common}
        width={300}
        height={200}
        className="w-full rounded-xs border border-gray-300/50 object-contain shadow-xs"
      />

      <div>
        <Heading tag="h1" className="-mt-2 mb-1 text-2xl font-semibold">
          {country.name.common}
        </Heading>

        <span className="text-gray-500">{country.name.official}</span>

        <div className="mt-10 grid grid-cols-1 md:gap-2 lg:grid-cols-2">
          <div className="space-y-3">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <UsersRound className="size-5 text-gray-500" />
                <span className="font-medium">Population</span>
              </div>
              <span className="ml-7 text-sm text-gray-600">
                {country.population.toLocaleString()}
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <Earth className="size-5 text-gray-500" />
                <span className="font-medium">Region</span>
              </div>
              <span className="ml-7 text-sm text-gray-600">
                {country.region}
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <Earth className="size-5 text-gray-500" />
                <span className="font-medium">Sub Region</span>
              </div>
              <span className="ml-7 text-sm text-gray-600">
                {country.subregion || "None"}
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <MapPin className="size-5 text-gray-500" />
                <span className="font-medium">
                  {country.capital?.length > 1 ? "Capitals" : "Capital"}
                </span>
              </div>
              <span className="ml-7 text-sm text-gray-600">
                {country.capital?.join(", ") || "No Capital"}
              </span>
            </div>
          </div>

          <div className="mt-3 space-y-3 md:mt-0">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <Coins className="size-5 text-gray-500" />
                <span className="font-medium">Currency</span>
              </div>
              <span className="ml-7 text-sm text-gray-600">
                {country.currencies
                  ? Object.values(country.currencies)
                      .map(
                        (currency) => `${currency.name} (${currency.symbol})`,
                      )
                      .join(", ")
                  : "None"}
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <Languages className="size-5 text-gray-500" />
                <span className="font-medium">Languages</span>
              </div>
              <span className="ml-7 text-sm text-gray-600">
                {country.languages
                  ? Object.values(country.languages).join(", ")
                  : "None"}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <span className="font-medium">Border Countries</span>

          <div className="mt-2 flex flex-wrap gap-2">
            {borderCountries.length > 0 ? (
              borderCountries.map(
                (border) =>
                  border.name && (
                    <Link href={`/country/${border.code}`} key={border.code}>
                      <Button
                        variant="outline"
                        className="cursor-pointer border border-gray-300/50"
                      >
                        {border.name}
                      </Button>
                    </Link>
                  ),
              )
            ) : (
              <span className="text-sm text-gray-500">No border countries</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;
