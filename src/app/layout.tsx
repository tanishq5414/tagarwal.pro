import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/nav-bar";
import { GridBackground } from "@/components/grid-background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tanishq Agarwal | Portfolio",
  description: "Tanishq Agarwal | Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <GridBackground>
        <div className="min-h-screen">
          <div className="w-[50vw] flex items-center">
              <NavBar />
              <div className="pt-[6rem] px-6 w-full" >{children}</div>
          </div>
        </div>
        </GridBackground>
      </body>
    </html>
  );
}
