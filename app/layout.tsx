import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BackgroundGradientAnimation } from "./components/ui/background-gradient-animation";
import Navbar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DSA 450 Questions",
  description: "DSA 450 Questions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-white dark:bg-gray-900 transition-colors`}
      >
        <BackgroundGradientAnimation>
          <main className="absolute z-50 inset-0 flex items-center justify-center">
            <div className="max-h-screen overflow-y-auto w-full">
              <Navbar />
              {children}
            </div>
          </main>
        </BackgroundGradientAnimation>
      </body>
    </html>
  );
}
