import type { Metadata } from "next";
import React from "react";
import { Navbar } from "@/components/layout/navbar";

export const metadata: Metadata = {
  title: "Parvaz Bolorurin Shidal",
  description: "Parvaz Bolorurin Shirdal tours and travels",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <React.Fragment>
      <Navbar />
      {children}
    </React.Fragment>
  );
}
