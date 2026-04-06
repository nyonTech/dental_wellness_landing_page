"use client";

import { useMemo, useState } from "react";
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";
import services from "@/data/services";

const SOCIAL_CHIPS = [
  { label: "i", className: "service-hero__chip--dark" },
  { label: "f", className: "service-hero__chip--teal" },
  { label: "+2k", className: "service-hero__chip--gold" },
];

const mappedServices = services.map((service) => ({
  id: service.id,
  category: service.category.toUpperCase(),
  kicker: (service.badge || service.category).toUpperCase(),
  title: service.title,
  description: service.description,
  image: service.imageSrc || service.heroImage,
  cta: service.linkText ? service.linkText.toUpperCase() : "LEARN MORE",
  href: `/service/${service.id}`,
}));

const SERVICE_TABS = [
  "ALL SERVICES",
  ...Array.from(new Set(mappedServices.map((s) => s.category))),
];

function SocialChips() {
  return (
    <div className="service-hero__social" aria-label="Social proof badges">
      {SOCIAL_CHIPS.map((chip) => (
        <span key={chip.label} className={`service-hero__chip ${chip.className}`}>
          {chip.label}
        </span>
      ))}
    </div>
  );
}

function ServiceTabs({ activeTab, onSelect }) {
  return (
    <div className="service-catalog__tabs" role="tablist" aria-label="Service categories">
      {SERVICE_TABS.map((tab) => (
        <button
          key={tab}
          type="button"
          className={`service-catalog__tab ${activeTab === tab ? "service-catalog__tab--active" : ""}`}
          role="tab"
          aria-selected={activeTab === tab}
          onClick={() => onSelect(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export function TransformationCTA() {
  return (
    <section className="service-transform" aria-label="Ready for your transformation">
      <div className="service-transform__bg-word" aria-hidden="true">
        DENTAL WELLNESS
      </div>
      <div className="service-transform__inner">
        <h2 className="service-transform__title">
          <span>Ready for your</span>
          <span className="service-transform__title-gold">
            transformation<span className="service-transform__title-mark">?</span>
          </span>
        </h2>
        <p className="service-transform__subtitle">
          Join thousands of patients who have redefined their smiles at Dental Wellness.
        </p>
        <div className="service-transform__actions">
          <Link href="/contact" className="service-transform__btn service-transform__btn--gold">
            Book Appointment
          </Link>
          <Link href="/about" className="service-transform__btn service-transform__btn--dark">
            About Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function ServiceListing() {
  const [activeTab, setActiveTab] = useState("ALL SERVICES");

  const visibleServices = useMemo(() => {
    if (activeTab === "ALL SERVICES") {
      return mappedServices;
    }
    return mappedServices.filter((item) => item.category === activeTab);
  }, [activeTab]);

  return (
    <>
      <section className="service-hero" aria-label="Artistry in every smile">
        <div className="service-hero__container">
          <div className="service-hero__content">
            <span className="service-hero__eyebrow">WORLD-CLASS DENTISTRY</span>

            <h1 className="service-hero__title">
              <span>ARTISTRY</span>
              <span className="service-hero__title-gold">IN EVERY</span>
              <span>SMILE</span>
            </h1>

            <p className="service-hero__description">
              Experience the pinnacle of dental care with specialized treatments tailored for your comfort and aesthetic goals.
            </p>

            <div className="service-hero__actions">
              <Link href="/contact" className="service-hero__cta">
                Book Now
              </Link>
              {/* <SocialChips /> */}
            </div>
          </div>

          <div className="service-hero__visual-wrap">
            <article className="service-hero__visual-card">
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80"
                alt="Premium dental treatment room"
                className="service-hero__image"
              />
              <div className="service-hero__overlay">
                <p className="service-hero__quote">
                  "The attention to detail at Dental Wellness is unparalleled. They didn&apos;t just fix my teeth, they designed my confidence."
                </p>
                <p className="service-hero__author">- Nagendra Mohan, Patient</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="service-catalog" aria-label="All services">
        <ServiceTabs activeTab={activeTab} onSelect={setActiveTab} />
        <div className="service-catalog__grid">
          {visibleServices.map((item) => (
            <ServiceCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <TransformationCTA />
    </>
  );
}

