import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import Container from "@/app/components/shared/container";
import Heading from "@/app/components/shared/heading";
import { Button } from "@/components/ui/button";

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

      <dl className="mb-5 flex flex-col gap-1">
        <div className="flex">
          <dt className="mr-1">Name -</dt>
          <dd className="font-medium">{session.user?.name}</dd>
        </div>
        <div className="flex">
          <dt className="mr-1">Email -</dt>
          <dd className="font-medium">{session.user?.email}</dd>
        </div>
      </dl>

      <Button variant="destructive" className="w-fit" disabled>
        Delete Account
      </Button>
    </Container>
  );
};

export default AccountPage;
