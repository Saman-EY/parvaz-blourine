import type {Metadata} from "next";
import React from "react";
import "./home.css";
import {Navbar} from "@/components/layout/navbar";

export const metadata: Metadata = {
    title: "Parvaz Bolorurin",
    description: "Parvaz Bolorurin Shirdal tours and travels",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <React.Fragment>
            <Navbar absolute={true}/>
            <main className={'z-0'}>
                {children}
            </main>
        </React.Fragment>
    );
}
