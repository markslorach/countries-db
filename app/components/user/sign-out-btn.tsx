"use client";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const SignOutBtn = () => {
  const router = useRouter();
  return (
    <button
      onClick={async () => {
        await authClient.signOut({
          fetchOptions: {
            onSuccess: () => {
              router.push("/");
              router.refresh();
            },
          },
        });
      }}
      className="w-full text-left cursor-pointer font-medium"
    >
      Sign Out
    </button>
  );
};

export default SignOutBtn;
