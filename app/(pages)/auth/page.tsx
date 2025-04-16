import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import Container from "@/app/components/shared/container";
import Heading from "@/app/components/shared/heading";
import AuthComponent from "./auth-component";

const AuthPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) redirect("/");

  return (
    <Container className="mt-10 mb-20 flex justify-center">
      <div className="w-full max-w-[400px] sm:p-5 sm:pt-0">
        <div className="mb-10">
          <div className="flex items-center gap-2">
            <Heading className="mb-1">Welcome</Heading>
          </div>
          <p className="text-gray-500">
            Sign in to your account or create a new one
          </p>
        </div>
        <AuthComponent />
      </div>
    </Container>
  );
};

export default AuthPage;
