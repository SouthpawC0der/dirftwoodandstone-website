import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Driftwood & Stone | Private Estate Services",
  description:
    "Thoughtful, highly tailored estate management and concierge services. All the expertise, without the full-time commitment.",
  keywords:
    "estate management, concierge services, private estates, luxury homes, Los Angeles, household management",
  metadataBase: new URL("https://driftwoodandstonehomes.com"),
  openGraph: {
    title: "Driftwood & Stone | Private Estate Services",
    description:
      "All the expertise, without the full-time commitment. Estate management and concierge services delivered personally.",
    type: "website",
    images: [{ url: "/images/home23.png", width: 1536, height: 1024 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/home23.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Driftwood & Stone",
  alternateName: "Driftwood and Stone",
  url: "https://driftwoodandstonehomes.com",
  logo: "https://driftwoodandstonehomes.com/images/DS2.png",
  image: "https://driftwoodandstonehomes.com/images/home23.png",
  description:
    "Driftwood & Stone provides thoughtful, highly tailored private estate management and concierge services in Los Angeles, CA. Full-time and part-time household management, renovation oversight, lifestyle support, and more — delivered personally.",
  email: "info@driftwoodandstonehomes.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Los Angeles",
    addressRegion: "CA",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "City",
    name: "Los Angeles",
  },
  serviceType: [
    "Estate Management",
    "Household Management",
    "Private Estate Services",
    "Concierge Services",
    "Renovation Oversight",
    "Lifestyle Management",
    "Personal Assistant Services",
  ],
  founder: [
    { "@type": "Person", name: "Alec Mikels" },
    { "@type": "Person", name: "Joey Levine" },
  ],
  sameAs: [
    "https://www.instagram.com/DriftwoodandStoneHomes",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-cream text-stone-900 antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-F7TYDG2R9T"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F7TYDG2R9T');
          `}
        </Script>
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
