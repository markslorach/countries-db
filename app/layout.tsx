import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "./components/shared/navbar";
import Footer from "./components/shared/footer";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Providers from "@/providers/providers";
import { prisma } from "@/lib/prisma";
import { getCountries } from "@/server/countries";
import { Country } from "@/types/country";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  fallback: ["system-ui", "Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Countries DB",
  description: "Explore the countries of the world.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  let favouriteCountries: Country[] = [];

  if (session) {
    const favouriteCountryCodes = await prisma.favouriteCountry.findMany({
      where: {
        userId: session.user.id,
      },
    });

    const allCountries = getCountries();

    favouriteCountries = allCountries.data?.filter((country) =>
      favouriteCountryCodes.map((fc) => fc.country).includes(country.cca3),
    ) as unknown as Country[];
  }

  return (
    <html lang="en">
      <body
        className={`${notoSans.className} flex min-h-screen flex-col bg-gray-50 sm:overflow-y-scroll`}
      >
        <Navbar />
        <Providers
          isAuthenticated={!!session}
          favouriteCountries={favouriteCountries}
        >
          <main className="flex-grow">{children}</main>
        </Providers>
        <Toaster
          position="bottom-right"
          visibleToasts={1}
          richColors
          theme="light"
        />
        <Footer />
      </body>
    </html>
  );
}
