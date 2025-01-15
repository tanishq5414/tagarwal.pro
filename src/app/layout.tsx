import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/nav-bar";
import { GridBackground } from "@/components/grid-background";
import { CSPostHogProvider } from "./provider";
import { GoogleAnalytics } from '@next/third-parties/google'
import { generateSitemap } from "@/utils/sitemap";


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
  description: "Tanishq Agarwal Portfolio Website",
  applicationName: "Portfolio Tanishq Agarwal",
  generator: "Next.js",
  keywords: process.env.NEXT_PUBLIC_KEYWORDS ? process.env.NEXT_PUBLIC_KEYWORDS.split(",").map(keyword => keyword.trim()) : [],
  authors: [{ name: "Tanishq Agarwal", url: "https://tvnishq.com" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  referrer: "no-referrer",
  creator: "Tanishq Agarwal",
  publisher: "Tanishq Agarwal",
  category: "Portfolio",
  classification: "Portfolio",
  themeColor: "#000000",
  openGraph: {
    title: "Tanishq Agarwal | Portfolio",
    description: "Tanishq Agarwal Portfolio Website",
    url: "https://tvnishq.com",
    siteName: "Tanishq Agarwal | Portfolio",
    images: [{ url: "https://tvnishq.com/image/tanishq-og.png", width: 800, height: 600, alt: "Tanishq Agarwal" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [{ url: "https://tvnishq.com/image/tanishq-og.png", width: 800, height: 600, alt: "Tanishq Agarwal" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  generateSitemap();
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
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
      </CSPostHogProvider>
    </html>
  );
}
