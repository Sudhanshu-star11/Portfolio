import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SKIE Global | Elite Testing as a Service",
  description: "Affordable and Reliable software testing agency providing software testing for web, mobile, APIs, databases, and desktop applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body className="antialiased overflow-x-hidden min-h-screen bg-black text-white selection:bg-blue-600 selection:text-white cursor-none">
        <CustomCursor />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
