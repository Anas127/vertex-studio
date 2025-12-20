import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/layout/Navbar"; // Import Navbar
import Footer from "@/app/components/layout/Footer"; // Import Footer

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VERTEX STUDIO",
  description: "High-performance digital products built with Next.js and Tailwind.",
  icons: {
    icon: '/favicon.ico', 
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar /> {/* Sticks to the top */}
        {children} {/* The page content (Hero, Work, etc) */}
        <Footer /> {/* Sticks to the bottom */}
      </body>
    </html>
  );
}