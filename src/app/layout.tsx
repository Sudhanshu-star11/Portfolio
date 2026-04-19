import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sudhanshu Khandelwal - Portfolio",
  description: "Senior QA Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} antialiased`}
    >
      <body className="antialiased overflow-x-hidden min-h-screen selection:bg-black selection:text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
