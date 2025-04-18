import Link from "next/link";
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
            <div className="text-muted-foreground space-y-1 text-sm">
              <div>
                <Link
                  href="https://restcountries.com"
                  className="underline-offset-2 hover:underline"
                  target="_blank"
                >
                  REST Countries API
                </Link>
              </div>
              <div>
                <Link
                  href="https://flagpedia.net"
                  className="underline-offset-2 hover:underline"
                  target="_blank"
                >
                  Flagpedia
                </Link>
              </div>
            </div>
          </div>

          <div>
            <Heading tag="h3" className="mb-2 text-sm font-medium">
              Source Code
            </Heading>
            <div className="text-muted-foreground text-sm">
              <div>
                <Link
                  href="https://github.com/markslorach/countries-db"
                  className="underline-offset-2 hover:underline"
                  target="_blank"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
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
          <Link
            href="/privacy-policy"
            className="text-muted-foreground text-[13px] hover:underline underline-offset-2"
          >
            Privacy Policy
          </Link>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
