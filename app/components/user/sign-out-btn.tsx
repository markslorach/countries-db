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
      className="w-full cursor-pointer px-2 py-1.5 text-left font-medium"
    >
      Sign Out
    </button>
  );
};

export default SignOutBtn;
