import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getUser } from "@/lib/user";
import { currentUser } from "@clerk/nextjs/server";
import { SignInButton } from "./SignInButton";
import UserDropdown from "./UserDropdown";

const NavBar = async () => {
  const user = await currentUser()
  const userEmail = user?.emailAddresses[0]?.emailAddress as string;

  if (user) await getUser();

  return (
    <nav className="h-20 border-b border-gray-300/50 dark:border-gray-500/50 shadow-sm bg-white dark:bg-gray-700">
      <div className="px-4 md:container flex h-full items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <GlobeAsiaAustraliaIcon className="w-7 h-7 text-blue-500" />
          <h1 className="font-semibold">Countries DB</h1>
        </Link>

        <div className="flex items-center space-x-1">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserDropdown name={user?.firstName || null} email={userEmail} />
          </SignedIn>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
