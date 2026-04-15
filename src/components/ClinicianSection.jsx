export default function ClinicianSection() {
  return (
    <section className="clinician-section">
      <div className="clinician-grid">
        {/* Left: Doctor Image */}
        <div className="clinician-image-col">
          <div className="clinician-image-overlay" />
          <img
            className="clinician-photo"
            src="/images/about-img1.jpg"
            alt="Dr. Shobha Nangrani"
          />
        </div>

        {/* Right: Doctor Info */}
        <div className="clinician-info">
          <span className="clinician-eyebrow">Founder & Chief Dentist</span>

          <h2 className="clinician-name">Dr. Shobha Nangrani</h2>

          <p className="clinician-bio">
            Founder of Dental Wellness with over 18 years of experience. A specialist in
            Endodontics and Cosmetic Dentistry, Dr. Shobha is dedicated to providing
            painless, ethical, and high-quality dental care.
          </p>

          <div className="clinician-credentials">
            <div className="clinician-credential-item">
              <span className="clinician-credential-label">Education</span>
              <span className="clinician-credential-value">MDS (Conservative Dentistry & Endodontics)</span>
            </div>
            <div className="clinician-credential-item">
              <span className="clinician-credential-label">Fellowship</span>
              <span className="clinician-credential-value">Cosmetic Dentistry (ENCODE, Mumbai)</span>
            </div>
          </div>

          <a href="/about" className="clinician-cta-btn">View Full Profile</a>
        </div>
      </div>
    </section>
  );
}
