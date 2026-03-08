import { Manrope, Playfair_Display, Lora } from "next/font/google";
import "./globals.css";

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

export const metadata = {
  title: "Dental Wellness",
  description: "Premium Dental Clinic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${playfair.variable} ${lora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
