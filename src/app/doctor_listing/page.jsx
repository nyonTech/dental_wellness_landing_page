import DoctorListing from "@/components/DoctorListing";
import Footer from "@/components/Footer";
export default function DoctorListingPage() {
  return (
    <div className="bg-background-light font-display text-slate-900 antialiased  min-h-screen">
      <div className="relative flex min-h-screen w-full flex-col">
        <DoctorListing />
        <Footer />
      </div>
    </div>
  );
}

