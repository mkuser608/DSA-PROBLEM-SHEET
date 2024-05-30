import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/NavBar";
import "./globals.css";
import { BackgroundGradientAnimation } from "./components/backgrounds/background-gradient-animation";

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
        <Navbar />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
