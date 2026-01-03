import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { JsonLd } from "@/components/seo/json-ld";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://arthur-papailhau.com";
const siteName = "Arthur Papailhau | ArthurGPT";
const siteDescription = "Senior Software Engineer & Founder based in San Francisco. Previously Tech Lead at Meta AI (Core Experience Team) and iOS Tech Lead at Uber (6.5 years). Building AI-powered products and SaaS. Expert in iOS, React, TypeScript, and machine learning.";
const siteImage = `${siteUrl}/api/og`;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#212121" },
  ],
};

export const metadata: Metadata = {
  // Basic Meta
  title: {
    default: "Arthur Papailhau | Senior Software Engineer & Founder",
    template: "%s | Arthur Papailhau",
  },
  description: siteDescription,
  keywords: [
    "Arthur Papailhau",
    "Software Engineer",
    "Tech Lead",
    "Meta AI",
    "Uber",
    "iOS Developer",
    "React Developer",
    "TypeScript",
    "San Francisco",
    "Founder",
    "AI Engineer",
    "Machine Learning",
    "Mobile Developer",
    "Full Stack Developer",
    "Portfolio",
    "ArthurGPT",
    "INSA Lyon",
    "Appily",
    "Ideate",
    "AgentsOS",
  ],
  authors: [{ name: "Arthur Papailhau", url: siteUrl }],
  creator: "Arthur Papailhau",
  publisher: "Arthur Papailhau",

  // Canonical & Alternates
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "profile",
    firstName: "Arthur",
    lastName: "Papailhau",
    username: "papay0",
    locale: "en_US",
    url: siteUrl,
    siteName: siteName,
    title: "Arthur Papailhau | Senior Software Engineer & Founder",
    description: siteDescription,
    images: [
      {
        url: siteImage,
        width: 1200,
        height: 630,
        alt: "Arthur Papailhau - Senior Software Engineer & Founder",
        type: "image/png",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    site: "@papay0",
    creator: "@papay0",
    title: "Arthur Papailhau | Senior Software Engineer & Founder",
    description: "Tech Lead at Meta AI & Uber. Founder building AI-powered products. Expert in iOS, React, TypeScript, and ML.",
    images: [siteImage],
  },

  // App & Icons
  applicationName: "ArthurGPT",
  appleWebApp: {
    capable: true,
    title: "ArthurGPT",
    statusBarStyle: "black-translucent",
  },

  // Verification (add your IDs when you have them)
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification
    // yandex: "your-yandex-verification",
    // bing: "your-bing-verification",
  },

  // Category
  category: "technology",

  // Other
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <JsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="bottom-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
