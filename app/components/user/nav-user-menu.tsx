import { LogIn } from "lucide-react";
import { User } from "@prisma/client";
import { headers } from "next/headers";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import UserDropdown from "./user-dropdown";

const NavUserMenu = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  return (
    <div>
      {!user ? (
        <Button asChild variant="ghost" size="icon" className="cursor-pointer">
          <Link href="/auth">
            <LogIn className="size-6" />
          </Link>
        </Button>
      ) : (
        <UserDropdown user={user as User} />
      )}
    </div>
  );
};

export default NavUserMenu;
