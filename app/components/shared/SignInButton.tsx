"use client";
import { useClerk } from "@clerk/nextjs";

export const SignInButton = () => {
  const { openSignIn } = useClerk();

  return (
    <button onClick={() => openSignIn({ redirectUrl: "/sign-in" })}>Sign In</button>
  );
};
