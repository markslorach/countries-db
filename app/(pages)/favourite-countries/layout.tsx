import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const FavouriteCountriesLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/");
  }

  return <div>{children}</div>;
};

export default FavouriteCountriesLayout;
