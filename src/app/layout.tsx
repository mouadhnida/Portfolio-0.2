import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Showcasing my projects, skills, and professional experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${inter.className}`}>
        <div className="relative mx-auto min-h-screen w-screen bg-gradient-to-b from-customBlue to-customGreen px-4 sm:px-8 md:px-20 xl:px-48">
          <div className="h-24">
            <Navbar />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
