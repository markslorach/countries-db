"use client";
import { useEffect } from "react";

const ScrollToTopWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return <>{children}</>;
};

export default ScrollToTopWrapper;
