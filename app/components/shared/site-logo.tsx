import Link from "next/link";
import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline";

const SiteLogo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <GlobeAsiaAustraliaIcon
        className="size-7 text-blue-500"
        strokeWidth="1.5"
      />
      <span className="font-semibold">Countries DB</span>
    </Link>
  );
};

export default SiteLogo;
