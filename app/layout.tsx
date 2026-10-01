import type { Metadata } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { site } from "@/content/site";
import { SkipLink } from "@/components/layout/SkipLink";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
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
  metadataBase: new URL(site.url),
  title: {
    default: site.homeTitle,
    template: "%s — TwelveTwo Technology",
  },
  description: site.homeDescription,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    title: site.homeTitle,
    description: site.homeDescription,
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: site.homeTitle,
    description: site.homeDescription,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      email: site.email,
      founder: {
        "@type": "Person",
        name: site.founder.name,
        jobTitle: site.founder.title,
      },
    },
    {
      "@type": "WebSite",
      name: site.name,
      url: site.url,
      description: site.homeDescription,
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          strategy="afterInteractive"
          data-cf-beacon='{"token": "750c0a450af84d2f916351cd96d98397"}'
        />
        <SkipLink />
        <SiteHeader />
        <main id="main" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
