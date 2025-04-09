import { notFound } from "next/navigation";
import { Country } from "@/types/country";
import { getCountryByCode } from "@/server/countries";
import Container from "@/app/components/shared/container";
import CountryDetails from "./country-details";
import PageActions from "./page-actions";

type CountryResponse = {
  data: Country | undefined;
};

const CountryPage = async ({
  params,
}: {
  params: Promise<{ cca3: string }>;
}) => {
  const { cca3 } = await params;

  const { data: country } = getCountryByCode(cca3) as CountryResponse;

  if (!country) notFound();

  return (
    <Container className="my-10">
      <PageActions />
      <CountryDetails country={country} />
    </Container>
  );
};

export default CountryPage;
