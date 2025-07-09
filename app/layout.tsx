import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import { satoshi } from "../fonts/font";

const geistKarla = Karla({
  variable: "--font-geist-karla",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: 'Snapit - Instant Video Recording and Sharing',
  description: 'Create professional screen recordings, webcam videos, and presentations in seconds. Share instantly with your team or clients.',
  openGraph: {
    title: 'Snapit - Instant Video Recording and Sharing',
    description: 'Create professional screen recordings, webcam videos, and presentations in seconds. Share instantly with your team or clients.',
    url: 'https://snapit-psi.vercel.app/',
    siteName: 'Snapit',
    images: [
      {
        url: '/assets/images/meta.png',
        width: 1200,
        height: 630,
        alt: 'Snapit - Video Recording Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Snapit - Instant Video Recording and Sharing',
    description: 'Create professional screen recordings, webcam videos, and presentations in seconds. Share instantly with your team or clients.',
    images: ['/assets/images/meta.png'],
  },
  icons: {
    icon: '/assets/icons/logo.svg',
    shortcut: '/assets/icons/logo.svg',
    apple: '/assets/icons/logo.svg',
  },
}
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistKarla.variable} ${satoshi.variable} font-karla antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
