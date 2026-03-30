export default function DoctorProfile() {
  return (
    <section className="doctor-section">
      <div className="doctor-container xl:max-w-7xl xl:m-auto">

        {/* Left: Stat Cards */}
        <div className="doctor-stats">
          <div className="stat-card stat-card--yellow">
            <div className="stat-number">25</div>
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
            src="https://api.builder.io/api/v1/image/assets/TEMP/adb7c89c507d6b11aee61061f3cb90795f1e21f6?width=768"
            alt="Dr. John"
          />
        </div>

        {/* Right: Doctor Info */}
        <div className="doctor-info">
          <h2 className="doctor-name">Dr. John</h2>

          <p className="doctor-tagline">
            Combines cutting-edge diagnostic and therapeutic technology with his more than 25 years of extensive orthodontic experience.
          </p>

          <p className="doctor-description">
            Our extensive experience, beautiful offices, and friendly talented staff make us your premier destination for orthodontic treatment in the Manhattan and Riverdale areas.
          </p>

          <a href="#" className="doctor-book-btn">
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
