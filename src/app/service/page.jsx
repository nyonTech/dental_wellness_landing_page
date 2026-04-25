import ServiceListing from "@/components/ServiceListing";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Dental Services in AECS Layout, Bangalore",
  description: "Explore 14+ dental services at Dental Wellness — root canal, implants, Invisalign, braces, teeth whitening, veneers, crowns & more in AECS Layout, Brookefield, Bangalore.",
  alternates: { canonical: "/service" },
};

export default function ServiceListingPage() {
  return (
    <div className="bg-background-light font-display text-slate-900 antialiased  min-h-screen">
      <div className="relative flex min-h-screen w-full flex-col">
        <ServiceListing />
      </div>
    </div>
  );
}

