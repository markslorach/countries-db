"use client";
import { useState } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Button
      className={`shadow-sm fixed bottom-10 right-10 p-0 h-10 w-10 ${
        visible ? "" : "hidden"
      }`}
      onClick={scrollToTop}
    >
      <ChevronUp />
    </Button>
  );
};

export default ScrollButton;
