export default function ClinicianSection() {
  return (
    <section className="clinician-section">
      <div className="clinician-grid">
        {/* Left: Doctor Image */}
        <div className="clinician-image-col">
          <div className="clinician-image-overlay" />
          <img
            className="clinician-photo"
            src="https://api.builder.io/api/v1/image/assets/TEMP/1ce495f52d7cf34915b17d80b318e79d82f20434?width=1168"
            alt="Dr. Julian Vane"
          />
        </div>

        {/* Right: Doctor Info */}
        <div className="clinician-info">
          <span className="clinician-eyebrow">Master Clinician</span>

          <h2 className="clinician-name">Dr. Julian<br />Vane</h2>

          <p className="clinician-bio">
            With over 20 years of focus in aesthetic implantology, Dr. Vane has
            pioneered the &quot;Minimal Intervention, Maximal Result&quot; protocol used
            globally.
          </p>

          <div className="clinician-credentials">
            <div className="clinician-credential-item">
              <span className="clinician-credential-label">Education</span>
              <span className="clinician-credential-value">Harvard School of Dental Medicine</span>
            </div>
            <div className="clinician-credential-item">
              <span className="clinician-credential-label">Fellowship</span>
              <span className="clinician-credential-value">International Congress of Oral Implantologists (FICOI)</span>
            </div>
          </div>

          <a href="#" className="clinician-cta-btn">Meet the Doctor</a>
        </div>
      </div>
    </section>
  );
}
