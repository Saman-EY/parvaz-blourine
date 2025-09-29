import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import React from "react";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { ErrorBoundary } from "@/lib";
import { MyDataProvider } from "@/store/data-context";

export const metadata: Metadata = {
  metadataBase: new URL("https://parvaz-shirdal.com"),
  title: {
    default: "Parvaz Bolorurin | تور های گردشگری شیردال",
    template: "%s | Parvaz Bolorurin",
  },
  description:
    "بهترین تورهای گردشگری و مسافرتی با پرواز بلورین شیردال - رزرو آنلاین تور های داخلی و خارجی با بهترین قیمت",
  keywords: ["تور مسافرتی", "گردشگری", "تور خارجی", "پرواز بلورین", "شیردال"],
  openGraph: {
    title: "Parvaz Bolorurin | تور های گردشگری شیردال",
    description: "بهترین تورهای گردشگری و مسافرتی با پرواز بلورین شیردال",
    url: "https://parvaz-shirdal.com",
    siteName: "Parvaz Bolorurin",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Parvaz Bolorurin Tours",
      },
    ],
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parvaz Bolorurin | تور های گردشگری شیردال",
    description: "بهترین تورهای گردشگری و مسافرتی با پرواز بلورین شیردال",
    images: ["/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://parvaz-shirdal.com",
    languages: {
      "en-US": "https://parvaz-shirdal.com/en",
      "fa-IR": "https://parvaz-shirdal.com",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`antialiased min-h-svh flex flex-col`}>
        <ErrorBoundary>
          <NuqsAdapter>
            <MyDataProvider>
              <main className="flex-grow overflow-x-hidden">{children}</main>
              <Footer />
            </MyDataProvider>
          </NuqsAdapter>
        </ErrorBoundary>
      </body>
    </html>
  );
}
