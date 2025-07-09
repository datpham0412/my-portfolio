import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dat Pham | Software Engineer",
  description: "Explore my software engineering portfolio and projects.",
  openGraph: {
    title: "Dat Pham | Software Engineer",
    description: "Explore my software engineering portfolio and projects.",
    url: "https://datpham.dev",
    siteName: "Dat Pham Portfolio",
    images: [
      {
        url: "/preview.png", 
        width: 1200,
        height: 630,
        alt: "Dat Pham Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dat Pham | Software Engineer",
    description: "Explore my software engineering portfolio and projects.",
    images: ["/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
