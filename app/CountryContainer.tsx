import { getCountries } from "@/lib/countries";
import { alphabeticalOrder } from "@/utils/helpers";
import CountryList from "./components/CountryList";

export default async function CountryContainer() {
  const { data = [], error } = await getCountries();

  const countries = alphabeticalOrder(data);

  return (
    <main className="px-4 md:container mt-10">
      {error && <p>{error}</p>}
      {!error && <CountryList data={countries} />}
    </main>
  );
}
