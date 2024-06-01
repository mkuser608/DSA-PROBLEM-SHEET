import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar";
import { BackgroundBeams } from "./components/ui/background-beams";
import { BackgroundGradientAnimation } from "./components/ui/background-gradient-animation";

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
      <body className={`${inter.className} transition-colors`}>
        <BackgroundGradientAnimation>
          <main className="absolute z-50 inset-0 flex items-center justify-center">
            <div className="max-h-screen overflow-y-auto w-full">
              <Navbar />
              {children}
            </div>
          </main>
        </BackgroundGradientAnimation>
        <BackgroundBeams />
      </body>
    </html>
  );
}
