import Link from "next/link";
import BackButton from "@/app/components/shared/BackButton";
import AddToFavourites from "@/app/components/user/AddToFavouritesForm";
import { getCountry } from "@/lib/countries";
import { Button } from "@/components/ui/button";
import { Country } from "@/app/_types/types";
import { notFound } from "next/navigation";
import { getFavouriteCountries } from "@/lib/user";
import { auth } from "@clerk/nextjs/server";

export const revalidate = 0

const CountryPage = async ({ params }: { params: { cca3: string } }) => {
  const { userId } = auth();

  const { data } = await getCountry(params.cca3);
  const country = data as Country;

  const userCountries = await getFavouriteCountries();
  const isCountryInUserFavourites =
    userCountries?.countries
      ?.map((country) => country.country)
      .includes(country.cca3) ?? false;

  if (!country) notFound();

  const nativeName = country.name.nativeName
    ? Object.values(country.name.nativeName)[0]
    : { official: "n/a", common: "n/a" };

  const currencies = country.currencies
    ? Object.values(country.currencies)[0]
    : { name: "n/a", symbol: "" };

  let borderCountries = [];
  if (country.borders) {
    borderCountries = await Promise.all(
      country.borders.map(async (border) => {
        const { data } = await getCountry(border);
        return data;
      })
    );
  }

  return (
    <div className="px-4 md:container">
      <div className="my-10">
        <BackButton />
      </div>

      <section className="grid md:grid-cols-2 gap-10 md:gap-20">
        <img
          className="object-cover w-full rounded-lg shadow-sm col-span-1"
          src={country.flags.png}
          alt={country.name.common}
        />

        <div className="col-span-1">
          <div className="flex justify-between">
            <div>
              <h1 className="text-2xl font-semibold leading-none mb-2">
                {country.name.common}
              </h1>
              <span className="text-gray-600 dark:text-gray-300">
                {country.name.official}
              </span>
            </div>
            {userId && (
              <AddToFavourites
                countryCode={country.cca3}
                isCountryInUserFavourites={isCountryInUserFavourites}
              />
            )}
          </div>

          <dl className="mt-8 grid grid-cols-1 md:grid-cols-2 md:gap-5">
            <div className="col-span-1">
              <dt className="font-semibold">Native Name</dt>
              <dd>{nativeName.common}</dd>

              <dt className="font-semibold">Population</dt>
              <dd>{country.population.toLocaleString()}</dd>

              <dt className="font-semibold">Region</dt>
              <dd>{country.region}</dd>

              <dt className="font-semibold">Sub Region</dt>

              <dd>{country.subregion ?? "n/a"}</dd>

              <dt className="font-semibold">
                {country.capital?.length > 1 ? "Capitals" : "Capital"}
              </dt>

              <dd>{country.capital?.join(", ") ?? "No Capital"}</dd>
            </div>
            <div className="col-span-1">
              <dt className="font-semibold">Currency</dt>
              <dd>
                {currencies.name}
                {currencies.name === "n/a"
                  ? ""
                  : `${" "}(${currencies.symbol})`}
              </dd>

              <dt className="font-semibold">Languages</dt>
              <dd>
                {country.languages
                  ? Object.values(country.languages).join(", ")
                  : "n/a"}
              </dd>
            </div>
          </dl>
          <dt
            className={`font-semibold mt-10 ${
              borderCountries.length > 0 ? "mb-2" : ""
            }`}
          >
            Border Countries
          </dt>

          {borderCountries.length > 0 ? (
            <div className="flex gap-3 flex-wrap">
              {borderCountries.map((borderCountry: Country) => (
                <Link
                  href={`/country/${borderCountry.cca3}`}
                  key={country.cca3}
                >
                  <Button
                    variant="outline"
                    className="shadow-smrounded-lg px-3 dark:bg-gray-700 dark:border-gray-500/50"
                  >
                    {borderCountry.name.common}
                  </Button>
                </Link>
              ))}
            </div>
          ) : (
            "None"
          )}
        </div>
      </section>
    </div>
  );
};

export default CountryPage;
