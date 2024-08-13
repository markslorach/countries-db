"use client";
import { useClerk } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

export const SignOutButton = () => {
  const pathname = usePathname();
  const { signOut } = useClerk();

  return (
    <button onClick={() => signOut({ redirectUrl: pathname })}>Sign Out</button>
  );
};
