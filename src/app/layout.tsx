import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

// Primary font - clean, modern geometric sans-serif (like pariola.dev)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jerrystudios.vercel.app"),
  title: {
    default: "Jeremiah Egemonye — Frontend & Mobile Developer",
    template: "%s | Jeremiah Egemonye",
  },
  description:
    "Frontend and mobile developer focused on craft, clarity, and user experience. Building thoughtful digital products with React, Next.js, and React Native.",
  keywords: [
    "Jeremiah Egemonye",
    "Frontend Developer",
    "Mobile Developer",
    "React Developer",
    "Next.js Developer",
    "React Native Developer",
    "TypeScript",
    "UI/UX Developer",
    "Web Developer",
    "Portfolio",
    "Software Engineer",
    "Website maker",
  ],
  authors: [
    { name: "Jeremiah Egemonye", url: "https://jerrystudios.vercel.app" },
  ],
  creator: "Jeremiah Egemonye",
  publisher: "Jeremiah Egemonye",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jerrystudios.vercel.app",
    title: "Jeremiah Egemonye — Frontend & Mobile Developer",
    description:
      "Frontend and mobile developer focused on craft, clarity, and user experience.",
    siteName: "Jeremiah Egemonye",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jeremiah Egemonye - Frontend & Mobile Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeremiah Egemonye — Frontend & Mobile Developer",
    description:
      "Frontend and mobile developer focused on craft, clarity, and user experience.",
    creator: "@_jerry0x",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple: "/android-chrome-192x192.png",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://jerrystudios.vercel.app",
  },
};

// JSON-LD structured data for rich search results
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jeremiah Egemonye",
  url: "https://jerrystudios.vercel.app",
  jobTitle: "Frontend & Mobile Developer",
  description:
    "Frontend and mobile developer focused on craft, clarity, and user experience.",
  sameAs: [
    "https://github.com/ttjerry",
    "https://twitter.com/_jerry0x",
    "https://linkedin.com/in/jeremiah-egemonye",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "React Native",
    "TypeScript",
    "Frontend Development",
    "Mobile Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
