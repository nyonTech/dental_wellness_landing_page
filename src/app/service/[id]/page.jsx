import { notFound } from "next/navigation";
import NavBar from "@/components/NavBar";
import ClinicianSection from "@/components/ClinicianSection";
import FaqAccordion from "@/components/FaqAccordion";
import services from "@/data/services";
import Link from "next/link";

export async function generateStaticParams() {
  return services.map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }) {
  const service = services.find((s) => s.id === params.id);
  if (!service) return {};
  return {
    title: `${service.title} | Dental Wellness`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { id } = await params; // 👈 unwrap the promise

  const service = services.find((s) => s.id === id);

  if (!service) notFound();
  return (
    <div className="service-detail-page">
      {/* Hero Section */}
      <section className="service-hero">
        {/* Background image */}
        <div className="service-hero__image-wrap">
          <img
            src={service.heroImage}
            alt={service.title}
            className="service-hero__bg-img"
          />
          <div className="service-hero__gradient" />
        </div>

        {/* Content */}
        <div className="service-hero__content">
          {/* Badge */}
          <div className="service-hero__badge">{service.badge}</div>

          {/* Heading */}
          <h1 className="service-hero__title">{service.title}</h1>

          {/* Tagline / description */}
          <p className="service-hero__desc">{service.longDescription}</p>

          {/* CTA Buttons */}
          <div className="service-hero__cta-row">
            <a href="#contact" className="service-hero__btn-primary">
              Request Appointment
            </a>
            <a href="#benefits" className="service-hero__btn-secondary">
              View Results
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="service-benefits" id="benefits">
        <div className="service-benefits__inner">
          <h2 className="service-benefits__heading">What to expect</h2>
          <ul className="service-benefits__list">
            {service.benefits.map((benefit, i) => (
              <li key={i} className="service-benefits__item">
                <span className="service-benefits__check">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="8" fill="#FBBF24" />
                    <path
                      d="M4.5 8.5L6.5 10.5L11.5 5.5"
                      stroke="#000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why Section */}
      <section className="why-section">
        <div className="why-container">
          {/* Header Row */}
          <div className="why-header">
            <div className="why-heading">
              <span className="why-heading__dark">The </span>
              <span className="why-heading__gold">Standard</span>
              <span className="why-heading__dark"> of Excellence</span>
            </div>
            <div className="why-subtitle">
              Proprietary digital workflows designed for comfort and longevity.
            </div>
          </div>

          {/* Service Content */}
          <div className="why-content">
            <div className="why-service-block">
              <h2 className="why-service-title">{service.title}</h2>
              <p className="why-service-desc">{service.description}</p>
            </div>
            <div className="why-service-block">
              <h3 className="why-service-subtitle">What is {service.title}?</h3>
              <p className="why-service-body">{service.longDescription}</p>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="why-feature-grid">
            <div className="why-feature-cell why-feature-cell--border-right">
              <svg className="why-feature-icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 30C12.925 30 10.975 29.6063 9.15 28.8188C7.325 28.0312 5.7375 26.9625 4.3875 25.6125C3.0375 24.2625 1.96875 22.675 1.18125 20.85C0.39375 19.025 0 17.075 0 15H3C3 17.875 3.90625 20.4125 5.71875 22.6125C7.53125 24.8125 9.85 26.2 12.675 26.775L10.5 24.6L12.6 22.5L19.425 29.325C18.7 29.575 17.9688 29.75 17.2313 29.85C16.4938 29.95 15.75 30 15 30ZM15.75 19.5V10.5H20.25C20.675 10.5 21.0312 10.6437 21.3188 10.9312C21.6063 11.2188 21.75 11.575 21.75 12V18C21.75 18.425 21.6063 18.7812 21.3188 19.0688C21.0312 19.3563 20.675 19.5 20.25 19.5H15.75ZM8.25 19.5V17.25H12V15.75H9.75V14.25H12V12.75H8.25V10.5H12.75C13.175 10.5 13.5312 10.6437 13.8188 10.9312C14.1063 11.2188 14.25 11.575 14.25 12V18C14.25 18.425 14.1063 18.7812 13.8188 19.0688C13.5312 19.3563 13.175 19.5 12.75 19.5H8.25ZM18 17.25H19.5V12.75H18V17.25ZM27 15C27 12.125 26.0938 9.5875 24.2812 7.3875C22.4688 5.1875 20.15 3.8 17.325 3.225L19.5 5.4L17.4 7.5L10.575 0.675C11.3 0.425 12.0312 0.25 12.7688 0.15C13.5063 0.05 14.25 0 15 0C17.075 0 19.025 0.39375 20.85 1.18125C22.675 1.96875 24.2625 3.0375 25.6125 4.3875C26.9625 5.7375 28.0312 7.325 28.8188 9.15C29.6063 10.975 30 12.925 30 15H27Z" fill="#0F172A" />
              </svg>
              <h4 className="why-feature-title">AI Diagnostics</h4>
              <p className="why-feature-desc">Utilizing predictive algorithms to visualize your final smile before we even begin.</p>
            </div>
            <div className="why-feature-cell why-feature-cell--border-right">
              <svg className="why-feature-icon" width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.4 31.5L8.55 26.7L3.15 25.5L3.675 19.95L0 15.75L3.675 11.55L3.15 6L8.55 4.8L11.4 0L16.5 2.175L21.6 0L24.45 4.8L29.85 6L29.325 11.55L33 15.75L29.325 19.95L29.85 25.5L24.45 26.7L21.6 31.5L16.5 29.325L11.4 31.5ZM12.675 27.675L16.5 26.025L20.4 27.675L22.5 24.075L26.625 23.1L26.25 18.9L29.025 15.75L26.25 12.525L26.625 8.325L22.5 7.425L20.325 3.825L16.5 5.475L12.6 3.825L10.5 7.425L6.375 8.325L6.75 12.525L3.975 15.75L6.75 18.9L6.375 23.175L10.5 24.075L12.675 27.675ZM14.925 21.075L23.4 12.6L21.3 10.425L14.925 16.8L11.7 13.65L9.6 15.75L14.925 21.075Z" fill="#0F172A" />
              </svg>
              <h4 className="why-feature-title">Grade 5 Titanium</h4>
              <p className="why-feature-desc">Only the highest biocompatible materials, ensuring lifetime integration and aesthetics.</p>
            </div>
            <div className="why-feature-cell">
              <svg className="why-feature-icon" width="27" height="32" viewBox="0 0 27 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 3V0H18V3H9ZM13.5 31.5C11.625 31.5 9.86875 31.1437 8.23125 30.4312C6.59375 29.7188 5.1625 28.75 3.9375 27.525C2.7125 26.3 1.75 24.8688 1.05 23.2313C0.35 21.5938 0 19.85 0 18C0 16.15 0.35625 14.4062 1.06875 12.7688C1.78125 11.1313 2.75 9.7 3.975 8.475C5.2 7.25 6.63125 6.28125 8.26875 5.56875C9.90625 4.85625 11.65 4.5 13.5 4.5C15.075 4.5 16.575 4.7625 18 5.2875C19.425 5.8125 20.725 6.55 21.9 7.5L24.075 5.325L26.175 7.425L24.075 9.6C24.975 10.775 25.6875 12.075 26.2125 13.5C26.7375 14.925 27 16.425 27 18C27 19.85 26.65 21.5938 25.95 23.2313C25.25 24.8688 24.2875 26.3 23.0625 27.525C21.8375 28.75 20.4062 29.7188 18.7687 30.4312C17.1312 31.1437 15.375 31.5 13.5 31.5ZM13.5 15H23.55C23.1 13.45 22.3312 12.0875 21.2437 10.9125C20.1562 9.7375 18.875 8.85 17.4 8.25L13.5 15ZM10.875 16.5L15.9 7.8C14.425 7.425 12.9062 7.39375 11.3438 7.70625C9.78125 8.01875 8.325 8.7 6.975 9.75L10.875 16.5ZM3.15 19.5H10.875L5.85 10.8C4.8 11.975 4.01875 13.3062 3.50625 14.7937C2.99375 16.2812 2.875 17.85 3.15 19.5ZM9.6 27.75L13.5 21H3.45C3.9 22.55 4.66875 23.9125 5.75625 25.0875C6.84375 26.2625 8.125 27.15 9.6 27.75ZM11.1 28.2C12.75 28.625 14.35 28.6438 15.9 28.2563C17.45 27.8687 18.825 27.2 20.025 26.25L16.125 19.5L11.1 28.2ZM21.15 25.2C22.25 24 23.0438 22.6562 23.5312 21.1688C24.0187 19.6813 24.125 18.125 23.85 16.5H16.125L21.15 25.2Z" fill="#0F172A" />
              </svg>
              <h4 className="why-feature-title">Same-Day Reveal</h4>
              <p className="why-feature-desc">Our in-house laboratory allows for immediate placement in qualifying cases.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinician Section */}
      <ClinicianSection />

      {/* FAQ Section */}
      <FaqAccordion />

      {/* Final CTA Section */}
      <section className="final-cta">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/e29e82b3fd58f391674dcf14b27f46b690fdf0de?width=2560"
          alt=""
          className="final-cta__bg"
        />
        <div className="final-cta__content">
          <h2 className="final-cta__heading">
            <span className="final-cta__heading-dark">Begin Your</span>
            <span className="final-cta__heading-gold">Transformation</span>
          </h2>
          <p className="final-cta__sub">
            Exclusive appointments are limited. Secure your clinical consultation today.
          </p>
          <Link href="/contact" className="final-cta__btn">
            Request Private Consult
          </Link>
        </div>
      </section>
    </div>
  );
}
