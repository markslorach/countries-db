import BackButton from "@/app/components/shared/BackButton";

const NotFound = () => {
  return (
    <div className="px-4 md:container mt-10 space-y-10">
      <BackButton />
      <p>Country not found</p>
    </div>
  );
};

export default NotFound;
