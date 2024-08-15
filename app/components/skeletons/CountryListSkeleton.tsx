"use client"
import RegionSelect from "../RegionSelect";
import SearchCountry from "../SearchCountry";

const CountryListSkeleton = () => {
  return (
    <div className="px-4 md:container mt-10">
      <div className="flex flex-wrap md:flex-nowrap justify-between pb-10 gap-5">
        <SearchCountry />
        <RegionSelect />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {[...Array(12)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 dark:bg-gray-700 space-y-7 rounded-lg shadow-sm animate-pulse p-5"
          >
            <div className="bg-gray-300 dark:bg-gray-600 aspect-video rounded-lg animate-pulse"></div>
            <div>
              <div className=" h-6 rounded-lg animate-pulse bg-gray-300 dark:bg-gray-600 mb-2"></div>
              <div className="space-y-2">
                {[...Array(3)].map((_, index) => (
                  <div
                    key={index}
                    className="h-6 w-3/4 rounded-lg animate-pulse bg-gray-300 dark:bg-gray-600"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryListSkeleton;
