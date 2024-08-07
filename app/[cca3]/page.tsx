import { getCountry } from "@/lib/countries";
import { Country } from "../types";
import BackButton from "../components/shared/BackButton";

const CountryPage = async ({ params }: { params: { cca3: string } }) => {
  const { data, error } = await getCountry(params.cca3);
  const country = data as Country;

  if (error) {
    return <p>{error}</p>;
  }

  const nativeName = country.name.nativeName
    ? Object.values(country.name.nativeName)[0]
    : { official: "n/a", common: "n/a" };

  const currencies = country.currencies
    ? Object.values(country.currencies)[0]
    : { name: "n/a", symbol: "" };

  return (
    <div className="container">
      <div className="my-10">
        <BackButton />
      </div>

      <section className="grid md:grid-cols-2 gap-20">
        <img
          className="object-cover w-full rounded-lg shadow-sm col-span-1"
          src={country.flags.png}
          alt={country.name.common}
        />

        <div className="col-span-1">
          <h1 className="text-2xl font-semibold leading-none mb-2">
            {country.name.common}
          </h1>
          <span className="text-gray-600">{country.name.official}</span>

          <dl className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
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
              <dt className="font-semibold">Currencies</dt>
              <dd>
                {currencies.name}
                {currencies.name === "n/a" ? "" : `${" "}(${currencies.symbol})`}
              </dd>

              <dt className="font-semibold">Languages</dt>
              <dd>
                {country.languages
                  ? Object.values(country.languages).join(", ")
                  : "n/a"}
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  );
};

export default CountryPage;
