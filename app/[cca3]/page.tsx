import { getCountry } from "@/lib/countries";
import { Country } from "../types";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import BackButton from "../components/shared/BackButton";

const CountryPage = async ({ params }: { params: { cca3: string } }) => {
  const { data, error } = await getCountry(params.cca3);
  const country = data as Country;

  return (
    <div className="container">
      <div className="my-10">
        <BackButton />
      </div>
      {error && <p>{error}</p>}
      <section className="grid grid-cols-2 gap-10">
        <div className="col-span-1">
          <img
            className="object-cover w-full rounded-lg shadow-sm"
            src={country.flags.png}
            alt={country.name.common}
          />
        </div>
        <div className="col-span-1">
          <h1 className="text-2xl font-semibold leading-none mb-2">
            {country.name.common}
          </h1>
          <span className="text-gray-600">{country.name.official}</span>
        </div>
      </section>
    </div>
  );
};

export default CountryPage;
