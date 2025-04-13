import { Suspense } from "react";
import { LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "./container";
import NavUserMenu from "../user/nav-user-menu";
import SiteLogo from "./site-logo";

const Navbar = () => {
  return (
    <header className="h-20 bg-white shadow-xs">
      <Container className="flex items-center justify-between">
        <SiteLogo />

        <Suspense
          fallback={
            <Button disabled variant="ghost" size="icon">
              <LoaderCircle className="size-6 animate-spin" />
            </Button>
          }
        >
          <NavUserMenu />
        </Suspense>
      </Container>
    </header>
  );
};

export default Navbar;
