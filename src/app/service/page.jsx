import ServiceListing from "@/components/ServiceListing";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";
import services from "@/data/services";

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

  // Product snippets for each service on the listing page
  const productSchemas = services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${service.title} – Dental Wellness Bangalore`,
    "description": service.description,
    "image": service.heroImage?.startsWith("http")
      ? service.heroImage
      : `https://www.dentalwellnessbangalore.com${service.heroImage || service.imageSrc}`,
    "brand": {
      "@type": "Brand",
      "name": "Dental Wellness"
    },
    "url": `https://www.dentalwellnessbangalore.com/service/${service.id}`,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "47",
      "reviewCount": "1"
    },
    "review": {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Nagendra Mohan" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Great experience at Dental Wellness. The clinic was clean and the doctors were very professional.",
      "datePublished": "2025-01-15",
      "publisher": { "@type": "Organization", "name": "Google Reviews" }
    }
  }));

  return (
    <div className="bg-background-light font-display text-slate-900 antialiased  min-h-screen">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={collectionSchema} />
      {productSchemas.map((schema, idx) => (
        <SchemaMarkup key={idx} schema={schema} />
      ))}
      <div className="relative flex min-h-screen w-full flex-col">
        <ServiceListing />
      </div>
    </div>
  );
}

