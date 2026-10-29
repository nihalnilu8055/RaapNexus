import type { Metadata, Viewport } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { ScrollProgressAndBackToTop } from "@/components/ui/ScrollProgressAndBackToTop";
import { InteractiveCursor } from "@/components/ui/InteractiveCursor";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"],
  fallback: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  fallback: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFFFF",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://raap-nexus.vercel.app"),
  title: {
    default: "RaapNexus | The Ultimate Finance Platform — Tax Auditing & Financial Intelligence",
    template: "%s | RaapNexus",
  },
  description:
    "Turn complex financial information into clearer insights with RaapNexus. Enterprise tax intelligence solutions, continuous financial auditing, multidimensional financial analysis, and business decision support.",
  keywords: [
    "Tax intelligence solutions",
    "Tax auditing services",
    "Financial auditing",
    "Financial analysis services",
    "Business financial analysis",
    "Financial reporting and insights",
    "Business decision support",
    "General ledger reconciliation",
    "CFO Advisory",
    "RaapNexus",
    "The Ultimate Finance Platform",
  ],
  authors: [{ name: "RaapNexus" }],
  creator: "RaapNexus",
  publisher: "RaapNexus",
  alternates: {
    canonical: "https://raap-nexus.vercel.app",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://raap-nexus.vercel.app",
    siteName: "RaapNexus",
    title: "RaapNexus | The Ultimate Finance Platform",
    description:
      "Turn complex financial information into clearer insights with tax intelligence, financial auditing, and business analysis solutions designed to support confident decision-making.",
    images: [
      {
        url: "/images/raapnexus-logo.png",
        width: 1200,
        height: 630,
        alt: "RaapNexus — The Ultimate Finance Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RaapNexus | The Ultimate Finance Platform",
    description:
      "Turn complex financial information into clearer insights with tax intelligence, financial auditing, and business analysis solutions.",
    images: [
      "/images/raapnexus-logo.png",
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
        "@id": "https://raap-nexus.vercel.app/#organization",
        name: "RaapNexus",
        url: "https://raap-nexus.vercel.app",
        logo: {
          "@type": "ImageObject",
          url: "https://raap-nexus.vercel.app/images/raapnexus-logo.png",
        },
        description:
          "The Ultimate Finance Platform. Financial clarity, tax intelligence solutions, continuous financial auditing, and multidimensional business analysis.",
      },
      {
        "@type": "WebSite",
        "@id": "https://raap-nexus.vercel.app/#website",
        url: "https://raap-nexus.vercel.app",
        name: "RaapNexus",
        publisher: {
          "@id": "https://raap-nexus.vercel.app/#organization",
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
          "Tax intelligence solutions and VAT reconciliation",
          "Continuous financial auditing and variance detection",
          "Multidimensional financial analysis services",
          "Operational business financial analysis",
          "Zero direct database writes architecture",
          "Cryptographic tenant and entity isolation",
        ],
      },
    ],
  };

  return (
    <html lang="en" className={`scroll-smooth ${manrope.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen w-full overflow-x-hidden bg-white text-[#0F172A] font-body antialiased selection:bg-[#0284C7]/15 selection:text-[#0284C7]">
        <InteractiveCursor />
        <ScrollProgressAndBackToTop />
        <Navbar />
        <main className="min-h-screen flex flex-col w-full overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
