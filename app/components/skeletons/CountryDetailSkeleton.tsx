import React from "react";
import BackButton from "../shared/BackButton";

const CountryDetailSkeleton = () => {
  return (
    <div className="px-4 md:container">
      <div className="my-10">
        <BackButton />
      </div>

      <section className="grid md:grid-cols-2 gap-10 md:gap-20">
        <div className="bg-gray-300 rounded-lg shadow-sm col-span-1 h-96 animate-pulse"></div>

        <div className="col-span-1">
          <div className="flex justify-between items-center">
            <div>
              <div className="h-6 w-48 bg-gray-300 rounded animate-pulse mb-2"></div>

              <div className="h-4 w-32 bg-gray-300 rounded animate-pulse"></div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 md:gap-5 space-y-3">
            <div className="col-span-1 space-y-4">
              {[...Array(5)].map((_, index) => (
                <div className="space-y-2" key={index}>
                  <div className="h-4 w-32 bg-gray-300 rounded animate-pulse"></div>
                  <div className="h-4 w-24 bg-gray-300 rounded animate-pulse"></div>
                </div>
              ))}
            </div>
            <div className="col-span-1 space-y-4">
              {[...Array(2)].map((_, index) => (
                <div className="space-y-2" key={index}>
                  <div className="h-4 w-32 bg-gray-300 rounded animate-pulse"></div>
                  <div className="h-4 w-24 bg-gray-300 rounded animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <div className="h-4 w-32 bg-gray-300 rounded animate-pulse mb-2"></div>

            <div className="flex gap-3 flex-wrap">
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="h-8 w-20 bg-gray-300 rounded animate-pulse"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CountryDetailSkeleton;
