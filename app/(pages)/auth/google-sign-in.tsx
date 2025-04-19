"use client";
import { Button } from "@/components/ui/button";
import GoogleLogo from "@/components/ui/google-logo";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { toast } from "sonner";

const GoogleSignIn = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);

      await authClient.signIn.social({
        provider: "google",
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to sign in with Google");

      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleGoogleSignIn}
      variant="outline"
      className="h-11 flex-1 font-semibold"
      type="button"
      aria-label="Sign in with Google"
    >
      <GoogleLogo />
      {isLoading ? "Loading...." : "Google"}
    </Button>
  );
};

export default GoogleSignIn;
