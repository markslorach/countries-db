"use client";
import { Button } from "@/components/ui/button";
import GoogleLogo from "@/components/ui/google-logo";
import { authClient } from "@/lib/auth-client";

const GoogleSignIn = () => {
  return (
    <Button
      onClick={async () =>
        await authClient.signIn.social({
          provider: "google",
        })
      }
      variant="outline"
      className="h-11 flex-1 font-semibold"
      type="button"
    >
      <GoogleLogo />
      Google
    </Button>
  );
};

export default GoogleSignIn;
