const HomeSkeleton = () => {
  return (
    <div className="px-4 md:container mt-10">
      <div className="flex flex-wrap md:flex-nowrap justify-between pb-10 gap-5">
        <div className="w-full md:w-72 h-14 bg-gray-200 rounded-md shadow-sm animate-pulse"></div>
        <div className="w-full md:w-48 h-14 bg-gray-200 rounded-md shadow-sm animate-pulse"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {[...Array(12)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-lg h-[21.5rem] shadow-sm animate-pulse"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HomeSkeleton;
