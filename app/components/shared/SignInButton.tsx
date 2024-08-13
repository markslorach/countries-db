"use client";
import { Button } from "@/components/ui/button";
import { useClerk } from "@clerk/nextjs";

export const SignInButton = () => {
  const { openSignIn } = useClerk();

  return (
    <Button
      onClick={() => openSignIn()}
      variant="outline"
      className="shadow-sm rounded-lg dark:bg-gray-700 dark:border-gray-500/50"
    >
      Sign In
    </Button>
  );
};
