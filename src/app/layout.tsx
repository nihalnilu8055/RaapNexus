import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://raapnexus.com"),
  title: {
    default: "RaapNexus — The Conversational Business Layer for Enterprise ERP",
    template: "%s | RaapNexus",
  },
  description:
    "Turn your business systems into intelligent conversations. Connect ERP systems with AI assistants to ask questions, uncover live insights, generate reports, and prepare business actions with enterprise authorization.",
  keywords: [
    "AI-powered ERP",
    "Conversational ERP",
    "AI business assistant",
    "MCP enterprise integration",
    "AI business reporting",
    "Conversational business intelligence",
    "Natural-language ERP reporting",
    "Enterprise AI integration",
    "AI-powered financial reporting",
    "ERP automation",
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
    title: "RaapNexus — Your Entire Business. One Conversation Away.",
    description:
      "Connect your business systems to AI assistants and transform everyday questions into live insights, analysis-ready reports, and validated business actions.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "RaapNexus Enterprise Conversational Business Layer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RaapNexus — The Conversational Business Layer for Enterprise ERP",
    description: "Don't just manage your business. Talk to it.",
    images: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&h=630&q=80",
    ],
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
