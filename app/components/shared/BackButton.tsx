import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const BackButton = () => {
  return (
    <Link href="/">
      <Button variant="outline" className="shadow-sm h-14 rounded-lg">
        <ArrowLeft className="mr-1.5 w-5 h-5" />
        Back
      </Button>
    </Link>
  );
};

export default BackButton;
