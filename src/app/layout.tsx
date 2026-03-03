import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
