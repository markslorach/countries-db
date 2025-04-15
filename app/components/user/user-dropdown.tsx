"use client";
import Link from "next/link";
import { User } from "better-auth";
import { UserRound, UserRoundPen, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SignOutBtn from "./sign-out-btn";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const UserDropdown = ({ user }: { user: User }) => {
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="cursor-pointer">
          <UserRound className="size-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="mt-6 rounded-xs">
        <DropdownMenuLabel>{user.email}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="space-y-1">
          <DropdownMenuItem className="p-0">
            <Link
              href="/favourite-countries"
              className={cn({
                "flex h-full w-full items-center gap-2 px-2 py-1.5": true,
                "bg-gray-100": pathname === "/favourite-countries",
              })}
            >
              <Star />
              Favourites
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-0">
            <Link
              href="/account"
              className={cn({
                "flex h-full w-full items-center gap-2 px-2 py-1.5": true,
                "bg-gray-100": pathname === "/account",
              })}
            >
              <UserRoundPen />
              Account
            </Link>
          </DropdownMenuItem>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="p-0">
          <SignOutBtn />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
