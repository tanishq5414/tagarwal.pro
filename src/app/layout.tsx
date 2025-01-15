import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/nav-bar";
import { GridBackground } from "@/components/grid-background";
import { CSPostHogProvider } from "./provider";

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
      <CSPostHogProvider>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <GridBackground>
          <div className="min-h-screen lg:w-[70vw] xl:w-[50vw] md:px-0 px-6">
            <NavBar />
            <div className="pt-12 animate-blur-fade-in">
              <div className="w-full">{children}</div>
            </div>
          </div>
        </GridBackground>
      </body>
      </CSPostHogProvider>
    </html>
  );
}
