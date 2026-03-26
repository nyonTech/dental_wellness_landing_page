import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import DoctorDetailsProfile from "@/components/DoctorDetailsProfile";
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
    <div className="bg-background-light font-display text-slate-900 antialiased min-h-screen">
      <div className="relative flex min-h-screen w-full flex-col">
        <DoctorDetailsProfile doctor={doctor} />
        <Footer />
      </div>
    </div>
  );
}
