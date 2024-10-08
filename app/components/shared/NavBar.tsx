"use client";
import Link from "next/link";
// import ThemeToggle from "./ThemeToggle";
import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import UserDropdown from "../user/UserDropdown";
import { useFetchUser } from "@/app/hooks/useFetchUser";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { User } from "@prisma/client";

const NavBar = () => {

  const { user } = useFetchUser() as { user: User | null };

  return (
    <nav className="h-20 border-b border-gray-300/50 dark:border-gray-500/50 shadow-sm bg-white dark:bg-gray-700">
      <div className="px-4 md:container flex h-full items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <GlobeAsiaAustraliaIcon className="w-7 h-7 text-blue-500" />
          <h1 className="font-semibold">Countries DB</h1>
        </Link>

        <div className="flex items-center space-x-1">
          <SignedOut>
            <SignInButton>
              <Button
                variant="ghost"
                size="icon"
                className=" dark:bg-gray-700 dark:border-gray-500/50"
              >
                <LogIn className="w-6 h-6" />
              </Button>
            </SignInButton>
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
