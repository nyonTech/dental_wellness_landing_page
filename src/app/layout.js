import { Manrope, Playfair_Display, Lora, Montserrat, Outfit, Epilogue, Inter, Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Dental Wellness — Premium Dental Clinic AECS Layout, Bangalore",
    template: "%s | Dental Wellness",
  },
  description: "Experience world-class dental care at Dental Wellness in AECS Layout, Brookefield, Bangalore. 18+ years of excellence in general dentistry, cosmetic care, root canal, implants & emergency services.",
  keywords: ["Dental Clinic", "Dentist in AECS Layout", "Dentist in Brookefield", "Bangalore Dentist", "Dental Wellness", "Cosmetic Dentistry", "General Dentistry", "Emergency Dental Care", "Teeth Whitening", "Root Canal", "Dental Excellence Clinic", "Dentist near me", "Dental clinic near me"],
  authors: [{ name: "Dental Wellness" }],
  openGraph: {
    title: "Dental Wellness — Premium Dental Clinic AECS Layout, Bangalore",
    description: "Experience world-class dental care at Dental Wellness in AECS Layout, Brookefield, Bangalore. Book your appointment today.",
    url: "https://www.dentalwellnessbangalore.com",
    siteName: "Dental Wellness",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Wellness — Premium Dental Clinic AECS Layout, Bangalore",
    description: "Experience world-class dental care at Dental Wellness in AECS Layout, Brookefield, Bangalore. Contact us for the best dental care.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://www.dentalwellnessbangalore.com"),
  alternates: {
    canonical: "/",
  },
};

import FloatingCTAs from "@/components/FloatingCTAs";
import AppointmentModal from "@/components/AppointmentModal";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Dental Wellness",
  "image": "https://www.dentalwellnessbangalore.com/logo.png",
  "url": "https://www.dentalwellnessbangalore.com",
  "telephone": "+919980567389",
  "email": "dentalwellnessbangalore@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "#177, A Block, AECS Layout",
    "addressLocality": "Brookefield, Bangalore",
    "addressRegion": "Karnataka",
    "postalCode": "560037",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 12.96524,
    "longitude": 77.7135086
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "10:00",
      "closes": "14:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "17:00",
      "closes": "20:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/dentalwellnessclinic/",
    "https://www.instagram.com/dentalwellnessbangalore/"
  ],
  "priceRange": "$$",
  "founder": {
    "@type": "Person",
    "name": "Dr. Shobha Nangrani",
    "jobTitle": "Founder & Chief Dentist"
  },
  "description": "Premium multi-specialty dental clinic in AECS Layout, Brookefield, Bangalore. 18+ years of excellence in root canal, implants, cosmetic dentistry, braces & more.",
  "areaServed": [
    "AECS Layout",
    "Brookefield",
    "Whitefield",
    "Kundalahalli Gate",
    "Marathahalli",
    "Bangalore"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${montserrat.variable} ${manrope.variable} ${playfair.variable} ${lora.variable} ${outfit.variable} ${epilogue.variable} ${inter.variable} antialiased`}
      >
        <SchemaMarkup schema={localBusinessSchema} />
        <NavBar />
        {children}
        <Footer />
        <FloatingCTAs />
        <AppointmentModal />
      </body>
    </html>
  );
}


