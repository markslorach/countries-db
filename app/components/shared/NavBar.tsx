import Link from "next/link";
import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  return (
    <nav className="h-20 border-b border-gray-300/50 dark:border-gray-500/50 shadow-sm bg-white dark:bg-gray-700">
      <div className="px-4 md:container flex h-full items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <GlobeAsiaAustraliaIcon className="w-7 h-7 text-blue-500" />
          <h1 className="font-semibold">Countries DB</h1>
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default NavBar;
