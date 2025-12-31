import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { OrganizationSchema } from "@/components/structured-data";


const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://mikrobot-website.vercel.app/'),
  title: {
    default: "Mikrobot Academy - Building Tomorrow's Innovators Through Robotics",
    template: "%s | Mikrobot Academy"
  },
  description: "Founded in 2012, Mikrobot Academy empowers the next generation with hands-on robotics education. We bridge the gap between theoretical knowledge and practical application, preparing students ages 6-18 with the technical skills and problem-solving abilities needed for the 21st century. Join 500+ students and 30+ award-winning teams.",
  keywords: ["robotics education", "robotics academy", "STEM education", "programming for kids", "robotics classes", "robotics curriculum", "robotics training", "robotics competitions", "robotics Ghana", "educational robotics", "hands-on learning", "robotics programs"],
  authors: [{ name: "Mikrobot Academy" }],
  creator: "Mikrobot Academy",
  publisher: "Mikrobot Academy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_APP_URL || 'https://mikrobot-website.vercel.app/',
    siteName: "Mikrobot Academy",
    title: "Mikrobot Academy - Building Tomorrow's Innovators Through Robotics",
    description: "Founded in 2012, Mikrobot Academy empowers the next generation with hands-on robotics education. We bridge the gap between theoretical knowledge and practical application, preparing students ages 6-18 with the technical skills and problem-solving abilities needed for the 21st century.",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Mikrobot Academy - Robotics Education Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mikrobot Academy - Building Tomorrow's Innovators Through Robotics",
    description: "Founded in 2012, Mikrobot Academy empowers the next generation with hands-on robotics education. Join 500+ students and 30+ award-winning teams.",
    images: ["/hero.png"],
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
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <OrganizationSchema />
      </head>
      <body
        className={`${inter.variable} ${manrope.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
