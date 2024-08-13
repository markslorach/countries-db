import { getCountries } from "@/lib/countries";
import CountryList from "./components/CountryList";
import { alphabeticalOrder } from "@/utils/helpers";

export default async function Home() {
  const { data = [], error } = await getCountries();

  const countries = alphabeticalOrder(data);

  return (
    <main className="px-4 md:container my-10">
      {error && <p>{error}</p>}
      {!error && <CountryList data={countries} />}
    </main>
  );
}
