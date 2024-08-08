import { Github } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="px-4 md:container flex h-20 items-center justify-between mt-10">
      <p>
        created by{" "}
        <Link
          className="text-blue-500"
          href="https://www.markslorach.com/"
          target="_blank"
        >
          mark slorach
        </Link>
        .
      </p>
      <Link
        href="https://github.com/markslorach/countries-db.git"
        target="_blank"
      >
        <Github className="h-5 w-5" />
      </Link>
    </footer>
  );
};

export default Footer;
