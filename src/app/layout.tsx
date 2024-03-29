import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {ClerkProvider} from '@clerk/nextjs'
import Provider from "@/components/Provider";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pro Note",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="bg-[#0e0e0f]">
        <Provider>
          <body className={inter.className}>
            {children}
            <SpeedInsights />
          </body>
        </Provider>
      </html>
    </ClerkProvider>
  );
}
