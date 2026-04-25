import DoctorListing from "@/components/DoctorListing";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Our Dental Specialists in AECS Layout",
  description: "Meet the expert dental team at Dental Wellness — 7 specialists in endodontics, implants, orthodontics, paediatric dentistry, periodontics & prosthodontics in AECS Layout, Bangalore.",
  alternates: { canonical: "/doctor_listing" },
};

export default function DoctorListingPage() {
  return (
    <div className="bg-white font-display text-slate-900 antialiased  min-h-screen">
      <div className="relative flex min-h-screen w-full flex-col">
        <DoctorListing />
        {/* <Footer /> */}
      </div>
    </div>
  );
}

