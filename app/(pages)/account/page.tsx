import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import Container from "@/app/components/shared/container";
import Heading from "@/app/components/shared/heading";
import DeleteAccount from "./delete-account";
import PersonalInfo from "./personal-info";

const AccountPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/");
  }

  const isTestAccount = session.user.email === process.env.TEST_USER_EMAIL;

  return (
    <Container className="my-10">
      <div className="mb-10">
        <Heading className="mb-1">Account</Heading>
        <p className="text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>

      <div className="space-y-5">
        <PersonalInfo session={session} />
        <DeleteAccount isTestAccount={isTestAccount} />
      </div>
    </Container>
  );
};

export default AccountPage;
