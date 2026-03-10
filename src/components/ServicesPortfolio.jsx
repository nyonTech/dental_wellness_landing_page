import React from 'react';
import ServiceCard from './ServiceCard';

const servicesData = [
  {
    category: "Orthodontics",
    title: "Invisalign®",
    description: "Virtually invisible aligners custom-made to straighten your smile without brackets or wires.",
    imageSrc: "/images/image_3.jpg",
    linkText: "Learn More"
  },
  {
    category: "Restorative",
    title: "Dental Implants",
    description: "The gold standard for tooth replacement. Permanent, natural-looking, and fully functional results.",
    imageSrc: "/images/image_4.jpg",
    linkText: "View Gallery"
  },
  {
    category: "Cosmetic",
    title: "Teeth Whitening",
    description: "Professional-grade brightening that removes years of staining in a single luxury session.",
    imageSrc: "/images/image_5.jpg",
    linkText: "Book Session"
  },
  {
    category: "Signature Service",
    title: "Porcelain Veneers",
    description: "Handcrafted thin shells designed to perfect the shape, color, and alignment of your smile.",
    imageSrc: "/images/image_6.jpg",
    linkText: "The Portfolio",
    isSignature: true
  },
  {
    category: "24/7 Availability",
    categoryColor: "text-red-500",
    title: "Emergency Care",
    description: "Immediate relief and urgent care for dental traumas, pain, or accidents when you need it most.",
    icon: "medical_services",
    linkText: "Call Now",
    isEmergency: true
  },
  {
    category: "Specialty",
    title: "Oral Surgery",
    description: "Expert surgical precision for extractions, bone grafting, and complex structural repairs.",
    imageSrc: "/images/image_7.jpg",
    linkText: "Details"
  },
  {
    category: "Comfort",
    title: "Sedation Dentistry",
    description: "Anxiety-free treatments using advanced sedation techniques for a completely relaxed experience.",
    icon: "bedtime",
    iconBgColor: "bg-primary/5",
    linkText: "Learn Options"
  },
  {
    category: "Health & Wellness",
    title: "Sleep Apnea",
    description: "Custom oral appliances designed to improve breathing and ensure restorative, quiet sleep.",
    icon: "air",
    iconBgColor: "bg-slate-50 dark:bg-slate-800",
    iconColor: "text-slate-300",
    linkText: "Consult Now"
  },
  {
    category: "Restorative",
    title: "Root Canal",
    description: "Gentle therapy to save infected teeth and eliminate pain using microscopic technology.",
    imageSrc: "/images/image_8.jpg",
    linkText: "More Info"
  },
  {
    category: "Restorative",
    title: "Dental Crowns",
    description: "Durable, aesthetic caps that restore strength and beauty to damaged or weakened teeth.",
    icon: "crown",
    iconBgColor: "bg-luxe-gold/10",
    iconColor: "text-luxe-gold",
    linkText: "Restoration"
  },
  {
    category: "Health",
    title: "Gum Therapy",
    description: "Advanced care for periodontal disease to protect your foundational dental health.",
    icon: "shield",
    iconBgColor: "bg-primary/5",
    linkText: "Health First"
  },
  {
    category: "Family",
    title: "Pediatrics",
    description: "Compassionate and fun dental experiences designed specifically for our youngest patients.",
    icon: "child_care",
    iconBgColor: "bg-blue-50 dark:bg-blue-900/10",
    iconColor: "text-blue-400",
    linkText: "Kid Friendly"
  },
  {
    category: "Technology",
    title: "Laser Care",
    description: "Minimally invasive laser treatments for faster healing and precision tissue contouring.",
    icon: "flare",
    linkText: "Modern Tech"
  }
];

const ServicesPortfolio = () => {
  return (
    <>
      {/* Category Filter */}
      <section className="py-12 px-6 border-y border-slate-200 dark:border-slate-800 sticky top-20 bg-background-light dark:bg-background-dark z-40" id="services">
        <div className="max-w-7xl mx-auto flex overflow-x-auto gap-12 no-scrollbar">
          <button className="flex-none text-xl font-black uppercase tracking-tighter text-primary border-b-4 border-primary pb-2">All Services</button>
          <button className="flex-none text-xl font-black uppercase tracking-tighter text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors pb-2">Cosmetic</button>
          <button className="flex-none text-xl font-black uppercase tracking-tighter text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors pb-2">Orthodontics</button>
          <button className="flex-none text-xl font-black uppercase tracking-tighter text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors pb-2">Restorative</button>
          <button className="flex-none text-xl font-black uppercase tracking-tighter text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors pb-2">Specialty</button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
            {servicesData.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPortfolio;
