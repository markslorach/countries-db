"use client";
import { Button } from "@/components/ui/button";
import GoogleLogo from "@/components/ui/google-logo";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

const GoogleSignIn = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setIsLoading(true);

    await authClient.signIn.social({
      provider: "google",
    });

    setIsLoading(false);
  };

  return (
    <Button
      onClick={handleGoogleSignIn}
      variant="outline"
      className="h-11 flex-1 font-semibold"
      type="button"
    >
      <GoogleLogo />
      {isLoading ? "Loading...." : "Google"}
    </Button>
  );
};

export default GoogleSignIn;
