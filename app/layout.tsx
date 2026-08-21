import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import { company } from "@/lib/data";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

const siteUrl = "https://www.pispl.co.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} — End-to-End IT Infrastructure & Cybersecurity Solutions`,
    template: `%s | ${company.name}`,
  },
  description:
    "Prishtvik Info Solutions Pvt Ltd delivers turnkey IT infrastructure, networking, cybersecurity, cloud and surveillance solutions for businesses across India. 20+ years of founder-led expertise.",
  keywords: [
    "IT infrastructure company India",
    "networking solutions",
    "cybersecurity solutions India",
    "structured cabling",
    "firewall implementation",
    "IT infrastructure Vadodara",
    "Prishtvik Info Solutions",
  ],
  authors: [{ name: company.name }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: company.name,
    title: `${company.name} — End-to-End IT Infrastructure & Cybersecurity Solutions`,
    description:
      "Turnkey IT infrastructure, networking, cybersecurity, cloud and surveillance solutions. Trusted by businesses across India for 20+ years.",
    images: [{ url: "/images/hero-visual.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} — IT Infrastructure & Cybersecurity`,
    description:
      "Turnkey IT infrastructure, networking, cybersecurity, cloud and surveillance solutions across India.",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/assets/prishtvik_logo_hero.png" },
};

export const viewport: Viewport = {
  themeColor: "#0b2858",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="font-sans">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
