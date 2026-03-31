import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import DoctorDetailsProfile from "@/components/DoctorDetailsProfile";
import { TransformationCTA } from "@/components/ServiceListing";
import { DOCTORS, getDoctorBySlug } from "@/data/doctors";

export function generateStaticParams() {
  return DOCTORS.map((doctor) => ({ slug: doctor.slug }));
}

export default async function DoctorDetailsPage({ params }) {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);

  if (!doctor) {
    notFound();
  }

  return (
    <div className="bg-white font-display text-slate-900 antialiased min-h-screen relative">
      {/* Background Decor & Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/images/bg.png')] bg-cover bg-center bg-fixed opacity-[0.03]"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-wave-pattern opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-wave-pattern opacity-40"></div>
      </div>

      <div className="relative z-10 flex min-h-screen w-full flex-col">
        {/* Main Content Area - Centered Profile */}
        <main className="flex-grow flex flex-col items-center justify-center py-20 px-4 sm:px-6 w-full max-w-7xl mx-auto">
          <DoctorDetailsProfile doctor={doctor} />
        </main>

        {/* CTA Component */}
        <TransformationCTA />
      </div>
    </div>
  );
}
