"use client";
import { Button } from "@/components/ui/button";
import { useFilter } from "@/hooks/useFilter";
import { ArrowUpDown } from "lucide-react";

const SortButton = () => {
  const { sortDirection, setSortDirection } = useFilter();

  return (
    <Button
      variant="ghost"
      onClick={() =>
        setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"))
      }
      className=""
    >
      <ArrowUpDown className="size-4" />
      {sortDirection === "asc" ? "A - Z" : "Z - A"}
    </Button>
  );
};

export default SortButton;
