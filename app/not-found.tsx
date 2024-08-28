import HomeButton from "./components/shared/HomeButton";

const NotFound = () => {
  return (
    <div className="px-4 md:container mt-10 space-y-10">
      <HomeButton />
      <p>Page not found</p>
    </div>
  );
};

export default NotFound;
