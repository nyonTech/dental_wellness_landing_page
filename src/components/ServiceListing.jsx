"use client";

import { useMemo, useState } from "react";
import ServiceCard from "@/components/ServiceCard";

const SOCIAL_CHIPS = [
  { label: "i", className: "service-hero__chip--dark" },
  { label: "f", className: "service-hero__chip--teal" },
  { label: "+2k", className: "service-hero__chip--gold" },
];

const SERVICE_TABS = ["ALL SERVICES", "COSMETIC", "ORTHODONTICS", "RESTORATIVE", "SPECIALTY"];

const SERVICES = [
  {
    category: "ORTHODONTICS",
    kicker: "ORTHODONTICS",
    title: "Invisalign",
    description: "Virtually invisible aligners custom-made to straighten your smile without brackets or wires.",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=80",
    cta: "LEARN MORE",
    href: "/service/invisalign",
  },
  {
    category: "RESTORATIVE",
    kicker: "RESTORATIVE",
    title: "Dental Implants",
    description: "The gold standard for tooth replacement. Permanent, natural-looking, and fully functional results.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80",
    cta: "VIEW GALLERY",
    href: "/service/dental-implants",
  },
  {
    category: "COSMETIC",
    kicker: "COSMETIC",
    title: "Teeth Whitening",
    description: "Professional-grade brightening that removes years of staining in a single luxury session.",
    image: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=900&q=80",
    cta: "BOOK SESSION",
    href: "/service/teeth-whitening",
  },
  {
    category: "COSMETIC",
    kicker: "SIGNATURE SERVICE",
    title: "Porcelain Veneers",
    description: "Handcrafted thin shells designed to perfect the shape, color, and alignment of your smile.",
    image: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&w=900&q=80",
    cta: "THE PORTFOLIO",
    href: "/service/porcelain-veneers",
  },
  {
    category: "SPECIALTY",
    kicker: "24/7 AVAILABILITY",
    title: "Emergency Care",
    description: "Immediate relief and urgent care for dental traumas, pain, or accidents when you need it most.",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=80",
    cta: "CALL NOW",
    href: "/service/emergency-care",
  },
  {
    category: "SPECIALTY",
    kicker: "SPECIALTY",
    title: "Oral Surgery",
    description: "Expert surgical precision for extractions, bone grafting, and complex structural repairs.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80",
    cta: "DETAILS",
    href: "/service/oral-surgery",
  },
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

function TransformationCTA() {
  return (
    <section className="service-transform" aria-label="Ready for your transformation">
      <div className="service-transform__bg-word" aria-hidden="true">
        LUXE
      </div>
      <div className="service-transform__inner">
        <h2 className="service-transform__title">
          <span>Ready for your</span>
          <span className="service-transform__title-gold">
            transformation<span className="service-transform__title-mark">?</span>
          </span>
        </h2>
        <p className="service-transform__subtitle">
          Join thousands of patients who have redefined their smiles at Luxe Dental. Luxury experience, legendary
          results.
        </p>
        <div className="service-transform__actions">
          <a href="#" className="service-transform__btn service-transform__btn--gold">
            Book Consultation
          </a>
          <a href="#" className="service-transform__btn service-transform__btn--dark">
            Tour the Clinic
          </a>
        </div>
      </div>
    </section>
  );
}

export default function ServiceListing() {
  const [activeTab, setActiveTab] = useState("ALL SERVICES");

  const visibleServices = useMemo(() => {
    if (activeTab === "ALL SERVICES") {
      return SERVICES;
    }
    return SERVICES.filter((item) => item.category === activeTab);
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
              <button type="button" className="service-hero__cta">
                Explore Catalog
              </button>
              <SocialChips />
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
                  "The attention to detail at Luxe is unparalleled. They didn&apos;t just fix my teeth, they designed my confidence."
                </p>
                <p className="service-hero__author">- Julianne V., Fashion Editor</p>
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

