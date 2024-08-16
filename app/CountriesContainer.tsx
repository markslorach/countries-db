import { getCountries } from "@/lib/countries";
import { alphabeticalOrder } from "@/utils/helpers";
import CountryList from "./components/CountryList";

export default async function CountryContainer() {
  const { data = [], error } = await getCountries();

  const countries = alphabeticalOrder(data);

  return (
    <main>
      {error && <p>{error}</p>}
      {!error && <CountryList data={countries} />}
    </main>
  );
}
