import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toast";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | KineticWork",
    default: "KineticWork — Web Applications That Work",
  },
  description:
    "A Next.js application built with the KineticWork methodology — fast, reliable, and maintainable web applications.",
  keywords: ["web application", "Next.js", "TypeScript", "KineticWork", "PraeSyn"],
  authors: [{ name: "PraeSyn", url: "https://praesyn.com" }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "KineticWork",
    title: "KineticWork — Web Applications That Work",
    description: "Web applications built with AI speed, delivered with agency quality.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <TooltipProvider delay={300}>
          {children}
        </TooltipProvider>
        <Toaster />
      </body>
    </html>
  );
}