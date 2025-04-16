import Link from "next/link";
import { Github } from "lucide-react";
import Container from "./container";
import Heading from "./heading";

const Footer = () => {
  return (
    <footer className="border-t py-7">
      <Container className="flex flex-col space-y-6">
        <div className="grid w-full grid-cols-2 border-b pb-6 sm:flex sm:w-fit sm:gap-18">
          <div>
            <Heading tag="h3" className="mb-2 text-sm font-medium">
              Data Sources
            </Heading>
            <ul className="text-muted-foreground space-y-1 text-sm">
              <li>
                <Link
                  href="https://restcountries.com"
                  className="underline-offset-2 hover:underline"
                  target="_blank"
                >
                  REST Countries API
                </Link>
              </li>
              <li>
                <Link
                  href="https://flagpedia.net"
                  className="underline-offset-2 hover:underline"
                  target="_blank"
                >
                  Flagpedia
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <Heading tag="h3" className="mb-2 text-sm font-medium">
              Source Code
            </Heading>
            <Link
              href="https://github.com/markslorach/countries-db"
              className="text-muted-foreground text-sm underline-offset-2 hover:underline"
              target="_blank"
            >
              GitHub
            </Link>
          </div>
        </div>

        <div>
          <p className="text-muted-foreground text-[13px]">
            Created by{" "}
            <Link
              href="https://markslorach.com"
              className="text-blue-500 underline underline-offset-2"
              target="_blank"
            >
              Mark Slorach
            </Link>
            .
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
