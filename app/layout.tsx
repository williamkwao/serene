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
  title: "Serene Sequel | Aesthetic Medicine & MedSpa Consulting",
  description: "Expert consulting for aesthetic medicine practices, medical spas, and wellness centers. Specializing in clinical protocols, business development, and regulatory compliance.",
  keywords: [
    "aesthetic medicine consulting",
    "medspa consulting",
    "medical spa consulting",
    "aesthetic practice development",
    "weight loss protocols",
    "IV therapy consulting",
    "aesthetic business growth",
    "medical compliance",
    "aesthetic staff training",
    "practice optimization",
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
    title: "Serene Sequel | Aesthetic Medicine & MedSpa Consulting",
    description: "Transform your aesthetic medicine practice with expert consulting services. Comprehensive solutions for medical spas and aesthetic clinics.",
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
    title: "Serene Sequel | Aesthetic Medicine & MedSpa Consulting",
    description: "Expert consulting for aesthetic medicine practices and medical spas. Elevate your practice with industry-leading protocols and strategies.",
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
