"use client";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const FavouriteButton = ({ countryCode }: { countryCode: string }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };

  const action = async (formData: FormData) => {
    const country = formData.get("country");
    console.log(country);
  };

  return (
    <form action={action}>
      <input type="hidden" name="country" value={countryCode} />

      <Button
        onClick={handleClick}
        className="bg-gray-50 shadow-none hover:bg-gray-50"
        size="icon"
      >
        <Star className="size-6 text-gray-300" />
      </Button>
    </form>
  );
};

export default FavouriteButton;
