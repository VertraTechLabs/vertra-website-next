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
  metadataBase: new URL("https://vertratechnologies.com/"),
  title: "Vertra Technologies",
  applicationName: "Vertra Technologies",
  description:
    "Vertra Technologies builds software, AI-powered solutions, websites, mobile applications, automation systems, and innovative digital products.",
  alternates: {
    canonical: "https://vertratechnologies.com/",
  },
  openGraph: {
    title: "Vertra Technologies",
    description:
      "Vertra Technologies builds software, AI-powered solutions, websites, mobile applications, automation systems, and innovative digital products.",
    url: "https://vertratechnologies.com/",
    siteName: "Vertra Technologies",
    type: "website",
    images: [{ url: "/vertra-logo.png", width: 1254, height: 1254, alt: "Vertra Technologies V logo" }],
  },
  twitter: {
    card: "summary",
    title: "Vertra Technologies",
    description:
      "Vertra Technologies builds software, AI-powered solutions, websites, mobile applications, automation systems, and innovative digital products.",
    images: [{ url: "/vertra-logo.png", alt: "Vertra Technologies V logo" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
