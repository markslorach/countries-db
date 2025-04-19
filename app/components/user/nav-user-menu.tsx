import { LogIn } from "lucide-react";
import { User } from "better-auth";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import UserDropdown from "./user-dropdown";

type NavUserMenuProps = {
  user?: User;
};

const NavUserMenu = ({ user }: NavUserMenuProps) => {
  return (
    <div>
      {!user ? (
        <Button
          asChild
          variant="ghost"
          size="icon"
          className="cursor-pointer"
          aria-label="Login"
        >
          <Link href="/auth">
            <LogIn className="size-6" />
          </Link>
        </Button>
      ) : (
        <UserDropdown user={user} />
      )}
    </div>
  );
};

export default NavUserMenu;
