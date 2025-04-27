import Link from "next/link";
import Image from "next/image";

const SiteLogo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/images/earth.svg"
        alt="CountriesDB Logo"
        width={32}
        height={32}
        className="size-6 text-blue-500"
      />
      <span className="font-semibold">CountriesDB</span>
    </Link>
  );
};

export default SiteLogo;
