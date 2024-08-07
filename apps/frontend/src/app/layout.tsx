import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import LayoutBackground from "@/components/common/LayoutBackground.server";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Suspense } from "react";

import { AppLoading } from "@/components/layout/loading-dialog.server";

const inter = Inter({ subsets: ["latin"] })
const oswald = Oswald({ subsets: ["latin"], display: "swap", variable: "--font-poppins" })

export const metadata: Metadata = {
  title: "BChat",
  description: "Chat application powered with nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`relative p-2 h-dvh max-h-fit  ${inter.className} ${oswald.variable}`}>
        <LayoutBackground />

        <Suspense key={"app-loading"} fallback={<AppLoading/>}>
          <Toaster />
          {children}
        </Suspense>
      </body>
    </html>
  );
}
