import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import Container from "@/app/components/shared/container";
import Heading from "@/app/components/shared/heading";
import { UserRound, Mail } from "lucide-react";

const AccountPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/");
  }

  return (
    <Container className="mt-10">
      <Heading className="mb-5 leading-snug">Account </Heading>
      
      <div className="flex flex-col gap-2">
        <span className="flex items-center gap-2">
          <UserRound className="size-6 text-gray-400" />
          {session.user?.name}
        </span>
        <span className="flex items-center gap-2">
          <Mail className="size-6 text-gray-400" />
          {session.user?.email}
        </span>
      </div>
    </Container>
  );
};

export default AccountPage;
