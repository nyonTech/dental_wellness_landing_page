import ServiceListing from "@/components/ServiceListing";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata = {
  title: "Dental Services in AECS Layout, Bangalore",
  description: "Explore our comprehensive range of specialized dental treatments including Root Canal, Implants, Cosmetic Dentistry, Aligners, and more.",
  alternates: { canonical: "/service" },
  openGraph: {
    title: "Dental Services in AECS Layout, Bangalore",
    description: "Explore our comprehensive range of specialized dental treatments including Root Canal, Implants, Cosmetic Dentistry, Aligners, and more.",
    url: "https://www.dentalwellnessbangalore.com/service",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  }
};

export default function ServiceListingPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dentalwellnessbangalore.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dentalwellnessbangalore.com/service" }
    ]
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Dental Services",
    "description": "Explore 14+ dental services at Dental Wellness.",
    "url": "https://www.dentalwellnessbangalore.com/service"
  };

  return (
    <div className="bg-background-light font-display text-slate-900 antialiased  min-h-screen">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={collectionSchema} />
      <div className="relative flex min-h-screen w-full flex-col">
        <ServiceListing />
      </div>
    </div>
  );
}

