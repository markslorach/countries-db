"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const BackButton = () => {
  const router = useRouter();

  return (
    <Button
      onClick={router.back}
      variant="outline"
      size="icon"
      className="size-14 cursor-pointer border border-gray-300/50"
      aria-label="Back button"
    >
      <ChevronLeft className="size-6" />
    </Button>
  );
};

export default BackButton;
