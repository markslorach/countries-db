import RegionSelect from "./region-select";
import CountrySearch from "./country-search";

const FiltersContainer = () => {
  return (
    <section className="mb-10 flex flex-wrap justify-between gap-4 sm:flex-nowrap">
      <CountrySearch />
      <RegionSelect />
    </section>
  );
};

export default FiltersContainer;
