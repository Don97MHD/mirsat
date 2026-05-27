import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "Mirsat TV | اشتراك IPTV عربي في أوروبا",
    template: "%s | Mirsat TV"
  },
  description: siteConfig.description,
  keywords: [
    "IPTV عربي",
    "اشتراك IPTV أوروبا",
    "قنوات عربية في أوروبا",
    "Mirsat TV",
    "ميرسات TV",
    "IPTV Germany Arabic",
    "اشتراك قنوات عربية"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "ar_AR",
    siteName: "Mirsat TV",
    url: siteConfig.domain,
    title: "Mirsat TV | IPTV عربي للعرب في أوروبا",
    description: siteConfig.description,
    images: [
      {
        url: "/images/mirsat-tv-hero.png",
        width: 1792,
        height: 1024,
        alt: "Mirsat TV IPTV على شاشة منزلية"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mirsat TV | IPTV عربي للعرب في أوروبا",
    description: siteConfig.description,
    images: ["/images/mirsat-tv-hero.png"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
