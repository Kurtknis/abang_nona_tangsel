import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.abbreviation}`,
    template: `%s | ${siteConfig.abbreviation}`,
  },
  description: siteConfig.description,
  keywords: [
    "Abang Nona Tangsel",
    "Duta Wisata Tangerang Selatan",
    "Pariwisata Tangsel",
    "Kebudayaan Tangsel",
    "Pemuda Tangerang Selatan",
    "ABNON",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
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
    google: "verification_token",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: siteConfig.name,
              alternateName: siteConfig.abbreviation,
              url: siteConfig.url,
              logo: `${siteConfig.url}/logo.png`,
              sameAs: [
                siteConfig.social.instagram,
                siteConfig.social.youtube,
                siteConfig.social.tiktok,
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: siteConfig.contact.phone,
                contactType: "customer service",
                areaServed: "ID",
                availableLanguage: "Indonesian",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: siteConfig.contact.address,
                addressLocality: "Tangerang Selatan",
                addressRegion: "Banten",
                addressCountry: "ID",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
