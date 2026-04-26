import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import DoctorDetailsProfile from "@/components/DoctorDetailsProfile";
import { TransformationCTA } from "@/components/ServiceListing";
import { DOCTORS, getDoctorBySlug } from "@/data/doctors";
import SchemaMarkup from "@/components/SchemaMarkup";

export function generateStaticParams() {
  return DOCTORS.map((doctor) => ({ slug: doctor.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);
  if (!doctor) return {};
  return {
    title: `${doctor.name} — ${doctor.specialty}`,
    description: doctor.profileSummary,
    alternates: { canonical: `/doctor_listing/${doctor.slug}` },
  };
}

export default async function DoctorDetailsPage({ params }) {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);

  if (!doctor) {
    notFound();
  }

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": doctor.name,
    "description": doctor.profileSummary,
    "jobTitle": doctor.specialty,
    "worksFor": {
      "@type": "Dentist",
      "name": "Dental Wellness",
      "url": "https://www.dentalwellnessbangalore.com"
    },
    "image": `https://www.dentalwellnessbangalore.com${doctor.image}`,
    "url": `https://www.dentalwellnessbangalore.com/doctor_listing/${doctor.slug}`,
    "medicalSpecialty": doctor.specialty
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dentalwellnessbangalore.com" },
      { "@type": "ListItem", "position": 2, "name": "Our Doctors", "item": "https://www.dentalwellnessbangalore.com/doctor_listing" },
      { "@type": "ListItem", "position": 3, "name": doctor.name, "item": `https://www.dentalwellnessbangalore.com/doctor_listing/${doctor.slug}` }
    ]
  };
  return (
    <div className="bg-white font-display text-slate-900 antialiased min-h-screen relative">
      <SchemaMarkup schema={personSchema} />
      <SchemaMarkup schema={breadcrumbSchema} />
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
