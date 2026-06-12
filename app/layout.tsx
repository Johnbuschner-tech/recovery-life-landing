import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Recovery Life Wellness Plan — Your Journey. Your Wellness. Your Life.",
  description:
    "A free, personalized wellness planning app built for people in recovery. Track the 8 Dimensions of Wellness, build Recovery Capital, and create your Master Wellness Plan.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${dmSans.variable} font-sans antialiased bg-[#fdf8f0]`}
      >
        {children}
      </body>
    </html>
  );
}
