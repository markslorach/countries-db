"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { SignInButton } from "./SignInButton";
import UserDropdown from "../user/UserDropdown";
import { useFetchUser } from "@/app/hooks/useFetchUser";

const NavBar = () => {
  type Props = {
    name: string
    email: string;
    isLoading: boolean;
  } | null;

  const { user } = useFetchUser() as { user: Props };

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
           <UserDropdown name={user?.name ?? null} email={user?.email} />
          </SignedIn>
          {/* <ThemeToggle /> */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
