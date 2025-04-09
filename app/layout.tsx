import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "./components/shared/navbar";
import Footer from "./components/shared/footer";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  fallback: ["system-ui", "Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Countries DB",
  description: "Explore the countries of the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.className} flex min-h-screen flex-col bg-gray-50 sm:overflow-y-scroll`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
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
