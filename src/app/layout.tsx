import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import { PostHogProvider } from "../providers/PostHogProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import "./globals.css";
import "./landing.css";
import { SITE_NAME } from "@/lib/constants";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "../components/Navbar";

const PostHogPageView = dynamic(() => import("../components/PostHogPageView"), {
  ssr: false,
});

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: SITE_NAME,
  description: "A Next.js starter kit by Mike Cavaliere",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <PostHogProvider>
          <body
            className={cn(
              "min-h-screen bg-background font-sans antialiased",
              fontSans.variable
            )}
          >
            <PostHogPageView />
            <ThemeProvider attribute="class">
              <Navbar />
              {children}
              <Toaster />
            </ThemeProvider>
          </body>
        </PostHogProvider>
      </html>
    </ClerkProvider>
  );
}
