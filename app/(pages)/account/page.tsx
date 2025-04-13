import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import Container from "@/app/components/shared/container";
import Heading from "@/app/components/shared/heading";
import DeleteAccount from "./delete-account";
import { Separator } from "@/components/ui/separator";

const AccountPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/");
  }

  const isTestAccount = session.user.email === process.env.TEST_USER_EMAIL;

  return (
    <Container className="mt-10">
      <div className="mb-10">
        <Heading className="mb-1 leading-snug">Account</Heading>
        <p className="text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>

      {/* <Separator className="my-5" /> */}

      <div>
        <h2 className="mb-2 font-semibold">Personal Information</h2>
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
      </div>

      <DeleteAccount isTestAccount={isTestAccount} />
    </Container>
  );
};

export default AccountPage;
