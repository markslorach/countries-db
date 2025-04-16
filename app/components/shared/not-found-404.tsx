import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Heading from "./heading";

const NotFound404 = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <Image
        src="/images/planet.svg"
        alt="Not Found"
        width={150}
        height={150}
        className="size-40"
        priority
      />

      <div className="flex flex-col items-center gap-5">
        <Heading tag="h1" className="text-center text-2xl">
          <span className="font-bold text-blue-500">404</span> - It looks like
          you&apos;re lost! <span>👽</span>
        </Heading>

        <Button
          asChild
          className="h-11"
        >
          <Link href="/">Return Home </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound404;
