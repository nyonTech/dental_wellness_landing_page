export default function DoctorProfile() {
  return (
    <section className="doctor-section">
      <div className="doctor-container xl:max-w-7xl xl:m-auto">

        {/* Left: Stat Cards */}
        <div className="doctor-stats">
          <div className="stat-card stat-card--yellow">
            <div className="stat-number">18+</div>
            <div className="stat-label-group">
              <span className="stat-label">Years of Experience</span>
            </div>
            <div className="stat-accent-bar stat-accent-bar--dark"></div>
            <div className="stat-blur-orb stat-blur-orb--top-right"></div>
          </div>

          <div className="stat-card stat-card--dark">
            <div className="stat-number stat-number--yellow">+50k</div>
            <div className="stat-label-group">
              <span className="stat-label stat-label--light">Satisfied Customers</span>
            </div>
            <div className="stat-accent-bar stat-accent-bar--yellow"></div>
            <div className="stat-blur-orb stat-blur-orb--bottom-left"></div>
          </div>
        </div>

        {/* Center: Doctor Image */}
        <div className="doctor-image-col">
          <div className="doctor-image-bg"></div>
          <img
            className="doctor-photo"
            src="/images/about-img1.jpg"
            alt="Dr. Shobha Nangrani"
          />
        </div>

        {/* Right: Doctor Info */}
        <div className="doctor-info">
          <h2 className="doctor-name">Dr. Shobha Nangrani</h2>

          <div className="doctor-degrees">
            <span className="doctor-degree-badge">BDS</span>
            <span className="doctor-degree-badge">MDS — Conservative Dentistry &amp; Endodontics</span>
            <span className="doctor-degree-badge">Fellowship in Cosmetic Dentistry</span>
          </div>

          <p className="doctor-tagline">
            Founder of Dental Wellness with over 18 years of experience in Root Canal Treatment &amp; Cosmetic Dentistry. State rank holder in Endodontics &amp; Oral Surgery from R.V. Dental College, Bangalore.
          </p>

          <p className="doctor-description">
            We very well know that visiting a dentist is a common phobia. Give us an opportunity to help you change that belief. Be rest assured that when you come to us, as our tagline goes, you will leave with a happy, healthy smile.
          </p>

          <a href="/contact" className="doctor-book-btn">
            Book Online
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.10208 5.25H0V4.08333H7.10208L3.83542 0.816667L4.66667 0L9.33333 4.66667L4.66667 9.33333L3.83542 8.51667L7.10208 5.25Z" fill="#111827" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
