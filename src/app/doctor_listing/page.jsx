import DoctorListing from "@/components/DoctorListing";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata = {
  title: "Our Dental Specialists in AECS Layout",
  description: "Meet the expert dental team at Dental Wellness — 7 specialists in endodontics, implants, orthodontics, paediatric dentistry, periodontics & prosthodontics in AECS Layout, Bangalore.",
  alternates: { canonical: "/doctor_listing" },
  openGraph: {
    title: "Our Dental Specialists in AECS Layout",
    description: "Meet the expert dental team at Dental Wellness. Our highly skilled specialists provide advanced endodontic, orthodontic, and cosmetic care.",
    url: "https://www.dentalwellnessbangalore.com/doctor_listing",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  }
};

export default function DoctorListingPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dentalwellnessbangalore.com" },
      { "@type": "ListItem", "position": 2, "name": "Our Doctors", "item": "https://www.dentalwellnessbangalore.com/doctor_listing" }
    ]
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Our Dental Specialists",
    "description": "Meet the expert dental team at Dental Wellness.",
    "url": "https://www.dentalwellnessbangalore.com/doctor_listing"
  };

  return (
    <div className="bg-white font-display text-slate-900 antialiased  min-h-screen">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={collectionSchema} />
      <div className="relative flex min-h-screen w-full flex-col">
        <DoctorListing />
        {/* <Footer /> */}
      </div>
    </div>
  );
}

