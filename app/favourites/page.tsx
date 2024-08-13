import { SignedIn, SignedOut } from "@clerk/nextjs";

const FavouriteCountriesPage = () => {
  return (
    <div className="px-4 md:container">
      <h1>Favourite Countries</h1>
      <SignedOut>
        <p>Please sign in to see your favourite countries</p>
      </SignedOut>
      <SignedIn>
        <p>Here are your favourite countries</p>
      </SignedIn>
    </div>
  );
};

export default FavouriteCountriesPage;
