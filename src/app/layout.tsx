import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFFFF",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://raapnexus.com"),
  title: {
    default: "RaapNexus | The Ultimate Finance Platform",
    template: "%s | RaapNexus",
  },
  description:
    "RaapNexus is the ultimate financial platform focused on tax auditing, financial auditing, financial analysis, and business analysis.",
  keywords: [
    "Financial Platform",
    "Tax Auditing",
    "Tax Intelligence",
    "Financial Auditing",
    "Financial Analysis",
    "Business Analysis",
    "CFO Advisory",
    "General Ledger Reconciliation",
    "Enterprise Finance",
    "RaapNexus",
  ],
  authors: [{ name: "RaapNexus" }],
  creator: "RaapNexus",
  publisher: "RaapNexus",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://raapnexus.com",
    siteName: "RaapNexus",
    title: "RaapNexus | The Ultimate Finance Platform",
    description:
      "Financial Clarity. Intelligent Decisions. The financial platform focused on tax auditing, financial auditing, financial analysis, and business analysis.",
    images: [
      {
        url: "https://raapnexus.com/images/raapnexus-logo.png",
        width: 1200,
        height: 630,
        alt: "RaapNexus — The Ultimate Finance Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RaapNexus | The Ultimate Finance Platform",
    description: "Financial Clarity. Intelligent Decisions.",
    images: [
      "https://raapnexus.com/images/raapnexus-logo.png",
    ],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://raapnexus.com/#organization",
        name: "RaapNexus",
        url: "https://raapnexus.com",
        logo: {
          "@type": "ImageObject",
          url: "https://raapnexus.com/images/raapnexus-logo.png",
        },
        description:
          "The Ultimate Finance Platform. Financial Clarity. Intelligent Decisions.",
      },
      {
        "@type": "WebSite",
        "@id": "https://raapnexus.com/#website",
        url: "https://raapnexus.com",
        name: "RaapNexus",
        publisher: {
          "@id": "https://raapnexus.com/#organization",
        },
      },
      {
        "@type": "SoftwareApplication",
        name: "RaapNexus Platform",
        operatingSystem: "Cloud / Hybrid Enterprise",
        applicationCategory: "FinanceApplication",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          description: "Enterprise Financial Platform Consultation",
        },
        featureList: [
          "Tax Auditing & Tax Intelligence",
          "Financial Auditing & Discrepancy Detection",
          "Financial Analysis & Multidimensional Modeling",
          "Business Analysis & Operational Variance Tracking",
          "Zero Direct Database Writes Architecture",
          "Cryptographic Tenant & Entity Isolation",
        ],
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen w-full overflow-x-hidden bg-white text-[#0F172A] antialiased selection:bg-[#0284C7]/15 selection:text-[#0284C7]">
        <Navbar />
        <main className="min-h-screen flex flex-col w-full overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
