/**
 * THIS IS THE LAYOUT PAGE USED TO DEFINE THE OVERALL LAYOUT OF THE APPLICATION.
 * The top component is the <Navbar /> component
 * The middle components are fetched dynamically
 * The last component is the <Footer /> component
 */

import { Inter as FontSans } from "next/font/google";
import type { Metadata } from "next";
import { cn } from "@/lib/utils"; //cn is used from shadcn library
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "GreenIndia",
  description: "All information about India's fight against climate change and green energy in one place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Navbar />
        <main className="flex grainy-light flex-col min-h-screen">
          <div className="flex-1 flex flex-col h-full">{children}</div>{" "}
        </main>
        <Footer />
      </body>
    </html>
  );
}
