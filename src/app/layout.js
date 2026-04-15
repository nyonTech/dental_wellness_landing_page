import { Manrope, Playfair_Display, Lora, Montserrat, Outfit, Epilogue, Inter, Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

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
  title: "Dental Wellness | Premium Dental Clinic in AECS Layout, Brookefield, Bangalore",
  description: "Experience world-class dental care at Dental Wellness in AECS Layout, Brookefield, Bangalore. We offer general dentistry, cosmetic care, and emergency dental services.",
  keywords: ["Dental Clinic", "Dentist in AECS Layout", "Dentist in Brookefield", "Bangalore Dentist", "Dental Wellness", "Cosmetic Dentistry", "General Dentistry", "Emergency Dental Care", "Teeth Whitening", "Root Canal", "Dental Excellence Clinic"],
  authors: [{ name: "Dental Wellness" }],
  openGraph: {
    title: "Dental Wellness | Premium Dental Clinic in Bangalore",
    description: "Experience world-class dental care at Dental Wellness in AECS Layout, Brookefield, Bangalore. Book your appointment today.",
    url: "https://dentalwellness.com",
    siteName: "Dental Wellness",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Wellness | Premium Dental Clinic in Bangalore",
    description: "Experience world-class dental care at Dental Wellness in AECS Layout, Brookefield, Bangalore. Contact us for the best dental care.",
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

import FloatingCTAs from "@/components/FloatingCTAs";
import AppointmentModal from "@/components/AppointmentModal";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${montserrat.variable} ${manrope.variable} ${playfair.variable} ${lora.variable} ${outfit.variable} ${epilogue.variable} ${inter.variable} antialiased`}
      >
        <NavBar />
        {children}
        <Footer />
        <FloatingCTAs />
        <AppointmentModal />
      </body>
    </html>
  );
}


