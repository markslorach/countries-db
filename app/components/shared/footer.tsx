import Link from "next/link";
import { Github } from "lucide-react";
import Container from "./container";

const Footer = () => {
  return (
    <footer className="h-20 border-t">
      <Container className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          Created by{" "}
          <Link
            href="https://markslorach.com"
            target="_blank"
            className="text-blue-500 underline"
          >
            Mark Slorach
          </Link>
          .
        </p>

        <Link
          href="https://github.com/markslorach/countries-db.git"
          target="_blank"
        >
          <Github className="size-5" />
        </Link>
      </Container>
    </footer>
  );
};

export default Footer;
