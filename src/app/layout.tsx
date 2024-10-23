import type { Metadata } from "next";
import localFont from "next/font/local";
import { ToastContainer } from 'react-toastify';
import Link from "next/link";
import { Suspense } from "react";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Recipe Finder",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback={<div>Loading...</div>}>
        <div className="h-screen w-screen relative">
          <main className="p-4 bg-gray-100 pt-20 pb-14 fixed top-0 left-0 right-0 bottom-0">
            <div className="h-full  overflow-y-auto">
            {children}
            </div>
          </main>
          <header className="bg-blue-500 text-white h-20 fixed top-0 left-0 right-0 flex items-center justify-between px-4">
                <Link href="/"><h1 className="text-xl font-bold">Find your recipes</h1></Link>
            </header>
            <footer className="bg-blue-500 text-white h-14 fixed bottom-0 left-0 right-0 flex items-center justify-center">
                <p>Find your recipe</p>
            </footer>
            <ToastContainer />
        </div>
        </Suspense> 
      </body>
    </html>
  );
}
