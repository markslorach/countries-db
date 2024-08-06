import { ThemeToggle } from "./ThemeToggle";
import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline";

const NavBar = () => {
  return (
    <nav className="h-20 border-b border-gray-300/50 shadow-sm bg-white">
      <div className="container flex h-full items-center space-x-2">
      <GlobeAsiaAustraliaIcon className="w-7 h-7 text-blue-500" />
        <h1 className="font-semibold">Countries DB</h1>
        {/* <ThemeToggle /> */}
      </div>
    </nav>
  );
};

export default NavBar;
