import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://raapnexus.com"),
  title: {
    default: "RaapNexus | The Ultimate Finance Platform",
    template: "%s | RaapNexus",
  },
  description:
    "Discover RaapNexus, a financial platform focused on tax auditing, financial auditing, financial analysis, and business analysis.",
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
        url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&h=630&q=80",
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
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&h=630&q=80",
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
          url: "https://raapnexus.com/logo.svg",
        },
        description:
          "Enterprise software platform connecting ERP and business systems with conversational AI assistants.",
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
        name: "RaapNexus Enterprise Platform",
        operatingSystem: "Cloud / Hybrid Enterprise",
        applicationCategory: "BusinessApplication",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          description: "Enterprise Demo and Deployment",
        },
        featureList: [
          "Conversational ERP Interface",
          "Natural Language Querying",
          "Automated Trial Balance and Sales Reports",
          "Model Context Protocol (MCP) Support",
          "Controlled Action Preparation with Human-in-the-Loop Sign-off",
          "Zero-Direct-Database-Write Security Architecture",
        ],
      },
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#07111F] text-white antialiased selection:bg-[#42D9F5]/20 selection:text-[#42D9F5]">
        <Navbar />
        <main className="min-h-screen flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
