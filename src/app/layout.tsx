import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import "./landing.css";
import { cn } from "@/lib/utils";
import { PostHogProvider } from "../providers/PostHogProvider";
import dynamic from "next/dynamic";
import { ThemeProvider } from "@/providers/ThemeProvider";

const PostHogPageView = dynamic(() => import("../components/PostHogPageView"), {
  ssr: false,
});

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Y(et)A(nother)N(ext)B(oilerplate)",
  description: "A Next.js starter kit by Mike Cavaliere",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PostHogProvider>
        <ThemeProvider attribute="class">
          <body
            className={cn(
              "min-h-screen bg-background font-sans antialiased",
              fontSans.variable
            )}
          >
            <PostHogPageView />
            {children}
          </body>
        </ThemeProvider>
      </PostHogProvider>
    </html>
  );
}
