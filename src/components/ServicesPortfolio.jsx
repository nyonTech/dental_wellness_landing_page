import React from 'react';
import Link from 'next/link';
import ServiceCard from './ServiceCard';
import services from '@/data/services';

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
            {services.map((service) => (
              <Link key={service.id} href={`/service/${service.id}`} className="contents">
                <ServiceCard
                  category={service.category}
                  categoryColor={service.categoryColor}
                  title={service.title}
                  description={service.description}
                  imageSrc={service.imageSrc}
                  imageAlt={service.title}
                  icon={service.icon}
                  iconBgColor={service.iconBgColor}
                  iconColor={service.iconColor}
                  linkText={service.linkText}
                  isSignature={service.isSignature}
                  isEmergency={service.isEmergency}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPortfolio;
