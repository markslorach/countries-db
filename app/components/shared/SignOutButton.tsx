"use client";
import { Button } from "@/components/ui/button";
import { useClerk } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

export const SignOutButton = () => {
  const pathname = usePathname();
  const { signOut } = useClerk();

  return (
    <Button
      onClick={() => signOut({ redirectUrl: pathname })}
      variant="outline"
      className="shadow-sm rounded-lg dark:bg-gray-700 dark:border-gray-500/50"
    >
      Sign Out
    </Button>
  );
};
