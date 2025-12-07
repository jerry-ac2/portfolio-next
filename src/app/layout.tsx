import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jeremiah.dev"),
  title: "Jeremiah Egemonye | Frontend & Mobile Developer",
  description:
    "Frontend and Mobile Developer crafting exceptional digital experiences with React, Next.js, and React Native.",
  keywords: [
    "Jeremiah Egemonye",
    "Frontend Developer",
    "Mobile Developer",
    "React",
    "Next.js",
    "React Native",
    "TypeScript",
  ],
  authors: [{ name: "Jeremiah Egemonye" }],
  creator: "Jeremiah Egemonye",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Jeremiah Egemonye | Frontend & Mobile Developer",
    description:
      "Frontend and Mobile Developer crafting exceptional digital experiences.",
    siteName: "Jeremiah Egemonye",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeremiah Egemonye | Frontend & Mobile Developer",
    description:
      "Frontend and Mobile Developer crafting exceptional digital experiences.",
    creator: "@_jerry0x",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
