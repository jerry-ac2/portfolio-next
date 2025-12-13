import type { Metadata } from "next";
import { Outfit, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

// Primary font - clean, modern sans-serif with personality
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

// Secondary font - subtle serif for headings that adds character
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jeremiah.dev"),
  title: "Jeremiah Egemonye — Frontend & Mobile Developer",
  description:
    "Frontend and mobile developer focused on craft, clarity, and user experience. Building thoughtful digital products with React, Next.js, and React Native.",
  keywords: [
    "Jeremiah Egemonye",
    "Frontend Developer",
    "Mobile Developer",
    "React",
    "Next.js",
    "React Native",
    "TypeScript",
    "UI/UX",
  ],
  authors: [{ name: "Jeremiah Egemonye" }],
  creator: "Jeremiah Egemonye",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Jeremiah Egemonye — Frontend & Mobile Developer",
    description:
      "Frontend and mobile developer focused on craft, clarity, and user experience.",
    siteName: "Jeremiah Egemonye",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeremiah Egemonye — Frontend & Mobile Developer",
    description:
      "Frontend and mobile developer focused on craft, clarity, and user experience.",
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
    <html lang="en" className={`${outfit.variable} ${sourceSerif.variable}`}>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
