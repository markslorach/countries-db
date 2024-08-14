import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import Link from "next/link";

export const SignInButton = () => {
  return (
    <Link href="/sign-in">
      <Button
        variant="ghost"
        size="icon"
        className=" dark:bg-gray-700 dark:border-gray-500/50"
      >
        <LogIn className="w-6 h-6" />
      </Button>
    </Link>
  );
};
