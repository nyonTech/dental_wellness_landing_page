import Link from "next/link";

export default function SmileTransformations() {
  return (
    <section className="smile-section">
      <div className="smile-container">

        {/* Section Header */}
        <div className="smile-header">
          <h2 className="smile-title">Smile Transformations</h2>
          <div className="smile-accent-bar"></div>
          <div className="smile-subtitle-wrap">
            <p className="smile-subtitle">
              Experience the power of a perfect smile. View the incredible results our patients achieve.
            </p>
          </div>
        </div>

        {/* Two-column content */}
        <div className="smile-content">

          {/* ── Left Column ── */}
          <div className="smile-left-col">

            {/* Decorative floating tool icon */}
            <div className="smile-decor-tool">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/355c4848bb465082ddaeef6e6ee767eb5c8be83f?width=192"
                alt=""
                className="smile-decor-tool-img"
              />
            </div>

            {/* Before / After comparison — large */}
            <div className="smile-comparison smile-comparison--large">
              <img
                className="smile-comparison__before"
                src="/images/smile-2.png"
                alt="Before transformation"
              />
              <div className="smile-comparison__divider"></div>
              <span className="smile-comparison__label smile-comparison__label--before">BEFORE</span>
              <span className="smile-comparison__label smile-comparison__label--after">AFTER</span>
            </div>

            {/* Trust badges strip */}
            <div className="smile-trust-strip">
              <div className="smile-trust-badge">
                <span className="smile-trust-badge__icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7l-9-5z" fill="#FBBF24" /></svg>
                </span>
                Advanced Technology
              </div>
              <div className="smile-trust-badge">
                <span className="smile-trust-badge__icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="#FBBF24" /></svg>
                </span>
                Multi-Specialty Clinic
              </div>
              <div className="smile-trust-badge">
                <span className="smile-trust-badge__icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="#FBBF24" /></svg>
                </span>
                ISO Hygiene Standards
              </div>
              <div className="smile-trust-badge">
                <span className="smile-trust-badge__icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" fill="#FBBF24" /></svg>
                </span>
                Weekend Appointments
              </div>
            </div>

            {/* Decorative amber glow */}
            {/* <div className="smile-decor-glow"></div> */}
          </div>

          {/* ── Right Column ── */}
          <div className="smile-right-col">

            {/* Small comparison image card */}
            <div className="smile-transformation-card">
              <div className="smile-comparison smile-comparison--small">
                <img
                  className="smile-comparison__before"
                  src="/images/smile-2.jpg"
                  alt="Before realignment"
                />
                <div className="smile-comparison__divider"></div>
              </div>

              {/* Card CTA details */}
              <div className="smile-transformation-details">
                <h4 className="smile-transformation-title">Ready for Your Transformation?</h4>
                <p className="smile-transformation-description">
                  Book a free smile consultation and let our specialists create a treatment plan tailored just for you.
                </p>
                <div className="smile-transformation-tags">
                  <span className="smile-tag smile-tag--yellow">FREE CONSULT</span>
                  <span className="smile-tag smile-tag--grey">NO OBLIGATION</span>
                </div>
              </div>
            </div>

            {/* Our Promise checklist + CTA */}
            <div className="smile-cta-card">
              <h3 className="smile-cta-card__title">Our Promise to You</h3>
              <ul className="smile-cta-card__list">
                <li className="smile-cta-card__item">
                  <span className="smile-cta-card__check">✓</span>
                  Pain-free procedures with modern equipments
                </li>
                <li className="smile-cta-card__item">
                  <span className="smile-cta-card__check">✓</span>
                  Transparent pricing — no hidden fees
                </li>
                <li className="smile-cta-card__item">
                  <span className="smile-cta-card__check">✓</span>
                  Specialist-level care under one roof
                </li>
                <li className="smile-cta-card__item">
                  <span className="smile-cta-card__check">✓</span>
                  Flexible appointment slots, including weekends
                </li>
              </ul>
              <Link href="/contact" className="smile-cta-card__btn">
                Book Your Free Consultation
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: "8px" }}>
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
