import { getCountry } from "@/lib/countries";
import { Country } from "../types";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const CountryPage = async ({ params }: { params: { cca3: string } }) => {
  const { data, error } = await getCountry(params.cca3);
  const country = data as Country;

  return (
    <div className="container">
      <div className="my-10">
        <Link href="/">
          <Button variant="outline" className="shadow-sm h-14 rounded-lg">
            <ArrowLeft className="mr-1.5 w-5 h-5" />
            Back
          </Button>
        </Link>
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
          <h1 className="text-xl font-semibold leading-none">{country.name.common}</h1>
        </div>
      </section>
    </div>
  );
};

export default CountryPage;
