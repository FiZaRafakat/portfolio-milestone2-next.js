import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Aclonica, Playfair_Display, Merienda } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  weight: ['400', '700'],
  subsets: ['latin'], 
  variable: '--font-playfair',
});
 
const aclonica = Aclonica({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-aclonica"
});

const merienda = Merienda({
  weight:['400'],
  subsets : ['latin'],
  variable : '--font-merienda'
})

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
  title: "Fiza's Portfolio",
  description: "Created by Fiza Rafakat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={` ${playfair.variable} ${aclonica.variable} ${merienda.variable}` }>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-white font-aclonica max-w-[1440px] mx-auto overflow-hidden`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
