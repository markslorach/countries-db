import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const BackButton = () => {
  return (
    <Link href="/">
      <Button variant="outline" className="shadow-sm h-14 rounded-lg dark:bg-gray-700 dark:border-gray-500/50">
        <ArrowLeft className="mr-1.5 w-5 h-5" />
        Home
      </Button>
    </Link>
  );
};

export default BackButton;
