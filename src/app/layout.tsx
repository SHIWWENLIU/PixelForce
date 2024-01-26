import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'
import ToasterProvider from '@/app/providers/ToasterProvider';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pixel Force Example",
  description: "Front End Code Challenge",
};


// const myFont = localFont({
//   src: '/font/SF-Pro-Display-Regular.otf',
//   display: 'swap',
// })
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <ToasterProvider />
        {children}</body>
    </html>
  );
}
