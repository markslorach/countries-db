import type { Metadata } from "next";
import { Inter, Noto_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "./components/shared/NavBar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "./components/shared/Footer";

// const inter = Inter({ subsets: ["latin"] });
const notoSans = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Countries of the world API explorer",
  description: "Frontend Mentor advanced challenge",
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
          disableTransitionOnChange
        >
          <main className="flex flex-col min-h-dvh md:min-h-screen">
              <NavBar />
            <div className="flex-grow">
              {children}
            </div>
              <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
