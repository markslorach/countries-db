import { Suspense } from "react";
import Link from "next/link";
import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline";
import { LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "./container";
import NavUserMenu from "../user/nav-user-menu";

const Navbar = () => {
  return (
    <header className="h-20 bg-white shadow-xs">
      <Container className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <GlobeAsiaAustraliaIcon
            className="size-7 text-blue-500"
            strokeWidth="1.5"
          />
          <h1 className="font-semibold">Countries DB</h1>
        </Link>

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
