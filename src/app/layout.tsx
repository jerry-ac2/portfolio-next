import type { Metadata } from "next";
import { Instrument_Serif, Geist } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jeremiah Egemonye | Software Engineer",
  description:
    "A spatial portfolio experience showcasing software engineering projects and skills through unconventional navigation and thoughtful design.",
  keywords: [
    "software engineer",
    "portfolio",
    "web development",
    "full-stack",
    "react",
    "node.js",
    "mobile developer",
    "next.js",
  ],
  authors: [{ name: "Jeremiah Egemonye" }],
  openGraph: {
    title: "Jeremiah Egemonye | Software Engineer",
    description:
      "Explore my work through a unique spatial portfolio experience",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSerif.variable} ${geist.variable}`}
        style={{ fontFamily: "var(--font-sans)" }}
      >
        {children}
      </body>
    </html>
  );
}
