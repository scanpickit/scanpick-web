import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

import GoToTopButton from "../utils/GoToTopButton";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Providers from "../components/common/Providers";
import SmoothScrollProvider from "../components/common/SmoothScrollProvider";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ScanPick - Industrial Automation Solutions",
  description:
    "ScanPick delivers intelligent vending, custom automation, and full-stack development - all in one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${figtree.className} bg-scanpick-black text-white`}>
        <SmoothScrollProvider />
        <Providers>
          <Navbar />
          {children}
          <GoToTopButton />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
