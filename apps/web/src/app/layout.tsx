import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../index.css";
import Providers from "@/components/providers";
import { StatusBar } from "@/components/status-bar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Remi",
  description: "generate super cool <README.md>",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-mono overflow-hidden`}
      >
        <Providers>
          <div className="flex flex-col h-screen w-full overflow-hidden">
            <StatusBar />
            <main className="flex-1 min-h-0 overflow-hidden">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
