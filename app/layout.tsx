import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "./components/shared/navbar";
import Footer from "./components/shared/footer";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Providers from "@/providers/providers";
import { getFavouriteCountries } from "@/server/user";
import { Country } from "@/types/country";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { User } from "@prisma/client";

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
    const result = await getFavouriteCountries();

    if (result.data) favouriteCountries = result.data;
  }

  return (
    <html lang="en">
      <body
        className={`${notoSans.className} flex min-h-screen flex-col bg-gray-50 sm:overflow-y-scroll`}
      >
        <NuqsAdapter>
          <Providers
            isAuthenticated={!!session}
            favouriteCountries={favouriteCountries}
          >
            <Navbar user={session?.user as User} />
            <main className="flex-grow">{children}</main>
            <Footer />
          </Providers>
        </NuqsAdapter>
        <Toaster
          position="bottom-right"
          visibleToasts={1}
          richColors
          theme="light"
        />
      </body>
    </html>
  );
}
