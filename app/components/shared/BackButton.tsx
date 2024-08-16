import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";

const BackButton = () => {
  const headersList = headers();
  const referer = headersList.get("referer");

  let href = "/";

  if (referer === "http://localhost:3000/favourite-countries") {
    href = "/favourite-countries";
  } else if (referer === null || referer === "null") {
    href = "/";
  }

  return (
    <Link href={href}>
      <Button
        variant="outline"
        className="shadow-sm h-14 rounded-lg dark:bg-gray-700 dark:border-gray-500/50"
      >
        <ArrowLeft className="mr-1.5 w-5 h-5" />
        {href === "/" ? "Home" : "Back to Favourites"}
      </Button>
    </Link>
  );
};

export default BackButton;
