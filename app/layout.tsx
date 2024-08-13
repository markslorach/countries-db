import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "./components/shared/NavBar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "./components/shared/Footer";

const notoSans = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Countries DB",
  description: "A simple app to display country information",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body className={notoSans.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
          >
            <main className="flex flex-col min-h-dvh md:min-h-screen">
              <NavBar />
              <div className="flex-grow">{children}</div>
              <Footer />
            </main>
          </ThemeProvider>
        </body>
      </html>
  );
}
