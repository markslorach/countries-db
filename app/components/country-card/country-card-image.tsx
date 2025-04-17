import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Country } from "@/types/country";

type CountryCardImageProps = {
  country: Country;
};

const CountryCardImage = ({ country }: CountryCardImageProps) => {
  return (
    <AspectRatio ratio={16 / 10}>
      <Image
        width={300}
        height={200}
        priority
        src={
          country.flags.svg || country.flags.png || "/images/no-image-found.png"
        }
        alt={`Flag of ${country.name.common}`}
        className="h-full w-full rounded-xs border border-gray-300/50 object-contain shadow-xs dark:border-gray-500/50"
      />
    </AspectRatio>
  );
};

export default CountryCardImage;
