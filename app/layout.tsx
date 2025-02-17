import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Serene Sequel | Medical Aesthetics Consulting",
  description: "Expert medical aesthetics consulting for medspas and aesthetic practices. Specializing in weight loss management, IV therapy, protocols, and business growth strategies.",
  keywords: [
    "medical aesthetics consulting",
    "medspa consulting",
    "aesthetic practice consulting",
    "weight loss management protocols",
    "IV hydration therapy",
    "good faith exams",
    "medical protocol writing",
    "medspa business assessment",
    "aesthetic staff training",
    "medical practice growth",
  ],
  authors: [{ name: "Serene Sequel Nursing Consulting Inc." }],
  creator: "Serene Sequel Nursing Consulting Inc.",
  publisher: "Serene Sequel Nursing Consulting Inc.",
  formatDetection: {
    telephone: true,
    email: true,
  },
  metadataBase: new URL('https://serenesequel.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Serene Sequel | Medical Aesthetics Consulting",
    description: "Transform your medical aesthetics practice with expert consulting services. Specializing in protocols, training, and business growth strategies.",
    url: 'https://serenesequel.com',
    siteName: 'Serene Sequel',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Serene Sequel Medical Aesthetics Consulting'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Serene Sequel | Medical Aesthetics Consulting",
    description: "Expert consulting services for medspas and aesthetic practices. Transform your practice with industry-leading protocols and strategies.",
    images: ['/og-image.png'], // You'll need to add this image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png', // You'll need to add this image
  },
  verification: {
    google: 'your-google-site-verification', // Add your Google verification code
  },
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
        {children}
      </body>
    </html>
  );
}
