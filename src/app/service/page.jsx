import ServiceListing from "@/components/ServiceListing";
import Footer from "@/components/Footer";
export default function ServiceListingPage() {
  return (
    <div className="bg-background-light font-display text-slate-900 antialiased  min-h-screen">
      <div className="relative flex min-h-screen w-full flex-col">
        <ServiceListing />
        <Footer />
      </div>
    </div>
  );
}

