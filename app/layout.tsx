import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
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
  title: "Arthur Papailhau | ArthurGPT Portfolio",
  description: "Senior Software Engineer & Founder. Previously Tech Lead at Meta AI and Uber. Building AI-powered products.",
  keywords: ["Arthur Papailhau", "Software Engineer", "Meta AI", "Uber", "Portfolio", "AI", "Founder"],
  authors: [{ name: "Arthur Papailhau" }],
  openGraph: {
    title: "Arthur Papailhau | ArthurGPT Portfolio",
    description: "Senior Software Engineer & Founder. Previously Tech Lead at Meta AI and Uber.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arthur Papailhau | ArthurGPT Portfolio",
    description: "Senior Software Engineer & Founder. Previously Tech Lead at Meta AI and Uber.",
    creator: "@papay0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
