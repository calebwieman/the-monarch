import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Monarch | Upscale New American Dining in Stillwater, OK",
  description: "Experience fine New American cuisine at The Monarch in Stillwater, Oklahoma. Scratch cooking, local ingredients, and classical techniques combine for an unforgettable dining experience.",
  openGraph: {
    title: "The Monarch | Upscale New American Dining",
    description: "Pushes the envelope of New American cuisine in the heart of Stillwater, Oklahoma.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} antialiased`}>
      <body className="min-h-[100dvh] flex flex-col bg-[var(--warm-white)] text-[var(--charcoal)]">
        <Navbar />
        <main className="flex-1 pt-[60px] md:pt-[68px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
