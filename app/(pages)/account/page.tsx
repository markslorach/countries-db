import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import Container from "@/app/components/shared/container";
import Heading from "@/app/components/shared/heading";
import DangerZone from "./danger-zone";
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
    <Container className="mt-10 mb-20">
      <div className="mb-10">
        <Heading className="mb-1">Account</Heading>
        <p className="text-muted-foreground">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="w-full max-w-[490px] space-y-8">
        <PersonalInfo session={session} />
        <DangerZone isTestAccount={isTestAccount} />
      </div>
    </Container>
  );
};

export default AccountPage;
