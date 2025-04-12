import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import Container from "@/app/components/shared/container";
import Heading from "@/app/components/shared/heading";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

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

      <div className="mb-10">
        <Button variant="destructive" className="w-fit" disabled>
          Delete Account
        </Button>
      </div>

      <Separator className="mb-5" />

      <Link
        href="/privacy-policy"
        className="text-sm text-blue-500 underline underline-offset-3"
      >
        Privacy Policy
      </Link>
    </Container>
  );
};

export default AccountPage;
