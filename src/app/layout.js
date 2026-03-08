import { Manrope, Playfair_Display, Lora, Montserrat, Outfit } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
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

export const metadata = {
  title: "Dental Wellness | Premium Dental Clinic in AECS Layout, Brookfield, Bangalore",
  description: "Experience world-class dental care at Dental Wellness in AECS Layout, Brookfield, Bangalore. We offer general dentistry, cosmetic care, and emergency dental services.",
  keywords: ["Dental Clinic", "Dentist in AECS Layout", "Dentist in Brookfield", "Bangalore Dentist", "Dental Wellness", "Cosmetic Dentistry", "General Dentistry", "Emergency Dental Care", "Teeth Whitening", "Root Canal", "Dental Excellence Clinic"],
  authors: [{ name: "Dental Wellness" }],
  openGraph: {
    title: "Dental Wellness | Premium Dental Clinic in Bangalore",
    description: "Experience world-class dental care at Dental Wellness in AECS Layout, Brookfield, Bangalore. Book your appointment today.",
    url: "https://dentalwellness.com",
    siteName: "Dental Wellness",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Wellness | Premium Dental Clinic in Bangalore",
    description: "Experience world-class dental care at Dental Wellness in AECS Layout, Brookfield, Bangalore. Contact us for the best dental care.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://dentalwellness.com"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${manrope.variable} ${playfair.variable} ${lora.variable} ${outfit.variable} antialiased`}
      >
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
