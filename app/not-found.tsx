import BackButton from "./components/shared/BackButton";

const NotFound = () => {
  return (
    <div className="px-4 md:container mt-10 space-y-10">
      <BackButton />
      <p>Page not found</p>
    </div>
  );
};

export default NotFound;
