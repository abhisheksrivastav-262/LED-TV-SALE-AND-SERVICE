import type { Metadata, Viewport } from "next";
import { Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { BUSINESS } from "@/lib/constants";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#050816",
};

export const metadata: Metadata = {
  title: {
    default: "LED TV Sale and Service | 25+ Years LED TV Repair in Ghaziabad",
    template: "%s | LED TV Sale and Service Ghaziabad",
  },
  description:
    "25+ years trusted LED TV repair & sales in Indirapuram, Ghaziabad. All-brand Smart / OLED / QLED repair, Sony audio service, new & refurbished TVs, doorstep service. Call 9810555308.",
  keywords: [
    "LED TV repair Ghaziabad",
    "TV repair Indirapuram",
    "Sony audio repair",
    "Smart TV repair",
    "TV sales Ghaziabad",
    "TV motherboard repair",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: BUSINESS.name,
    title: "Professional LED TV Repair & Sales in Ghaziabad — 25+ Years Experts",
    description:
      "All-brand LED TV repair with genuine parts & doorstep service. New & refurbished TV sales. Rated 5.0 on Google.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${grotesk.variable}`}>
      <body className="min-h-screen bg-[#050816] text-slate-100 antialiased">
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: BUSINESS.name,
              telephone: "+91-9810555308",
              email: "shreesiddhielectronics@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "613G, Nyay Khand 2, Kala Pathar Road, Opp. Bharat Petrol Pump, Indirapuram",
                addressLocality: "Ghaziabad",
                addressRegion: "Uttar Pradesh",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 28.636911,
                longitude: 77.359772,
              },
              hasMap: "https://maps.google.com/?q=28.636911,77.359772",
              openingHours: "Mo-Su 09:00-21:00",
              aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "9" },
            }),
          }}
        />
      </body>
    </html>
  );
}
