import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Driftwood & Stone | Private Estate Services",
  description:
    "Thoughtful, highly tailored estate management and concierge services. All the expertise, without the full-time commitment.",
  keywords:
    "estate management, concierge services, private estates, luxury homes, Los Angeles, household management",
  icons: {
    icon: "/images/DS3.png",
    apple: "/images/DS3.png",
  },
  openGraph: {
    title: "Driftwood & Stone | Private Estate Services",
    description:
      "All the expertise, without the full-time commitment. Estate management and concierge services delivered personally.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col bg-cream text-stone-900 antialiased">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
