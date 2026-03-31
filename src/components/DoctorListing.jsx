'use client';

import { useMemo, useState } from "react";
import { ArrowRight, ChevronRight, Search } from "lucide-react";
import Link from "next/link";
import { DOCTORS } from "@/data/doctors";

export default function DoctorListing() {
  const [query, setQuery] = useState("");

  const filteredDoctors = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return DOCTORS;

    return DOCTORS.filter((doctor) => {
      const source = `${doctor.name} ${doctor.specialty} ${doctor.description}`.toLowerCase();
      return source.includes(normalized);
    });
  }, [query]);

  return (
    <section className="doctor-listing">
      <div className="doctor-listing__container">
        <h1 className="doctor-listing__title">Our Doctors</h1>

        <div className="doctor-listing__hero">
          <img
            src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1600&q=80"
            alt="Dental specialists team"
            className="doctor-listing__hero-image"
          />
          <div className="doctor-listing__hero-overlay" />
          <div className="doctor-listing__hero-content">
            <p className="doctor-listing__hero-kicker">WORLD-CLASS CARE</p>
            <h2 className="doctor-listing__hero-heading">Expert hands you can trust.</h2>
            <p className="doctor-listing__hero-subtitle">
              Meet the dedicated specialists committed to your perfect smile.
            </p>
          </div>
          <Link href="/contact" className="doctor-listing__hero-cta">
            Book Consultation
            <ArrowRight size={16} strokeWidth={2.5} />
          </Link>
        </div>

        <div className="doctor-listing__toolbar">
          <h3 className="doctor-listing__toolbar-title">Specialists</h3>
          <div className="doctor-listing__toolbar-right">
            <div className="doctor-listing__search">
              <Search size={16} />
              <input
                type="text"
                placeholder="Search for a doctor or specialty"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search doctors"
              />
            </div>
            <button type="button" className="doctor-listing__see-all">
              See All
            </button>
          </div>
        </div>

        <div className="doctor-listing__list">
          {filteredDoctors.map((doctor) => {
            const href = doctor.slug ? `/doctor_listing/${doctor.slug}` : "/doctor_listing";
            return (
              <Link
                key={doctor.id}
                href={href}
                className="doctor-listing__item-link"
                aria-label={`View details for ${doctor.name}`}
              >
                <article className="doctor-listing__item doctor-listing__item--clickable">
                  <div className="doctor-listing__item-left">
                    <div className="doctor-listing__avatar-wrap">
                      <img src={doctor.image} alt={doctor.name} className="doctor-listing__avatar" />
                      {doctor.availableToday ? <span className="doctor-listing__status-dot" /> : null}
                    </div>
                    <div className="doctor-listing__details">
                      <h4>{doctor.name}</h4>
                      <p className="doctor-listing__specialty">{doctor.specialty}</p>
                      <p className="doctor-listing__description">{doctor.description}</p>
                    </div>
                  </div>
                  <div className="doctor-listing__item-right">
                    {doctor.availableToday ? (
                      <span className="doctor-listing__availability">AVAILABLE TODAY</span>
                    ) : null}
                    <span className="doctor-listing__arrow" aria-hidden="true">
                      <ChevronRight size={18} />
                    </span>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
