import { DOCTORS } from "@/data/doctors";

export default function DoctorProfile() {
  const shobha = DOCTORS.find(d => d.slug === "shobha-nangrani");

  if (!shobha) return null;

  return (
    <section className="doctor-section">
      <div className="doctor-container xl:max-w-7xl xl:m-auto">

        {/* Left: Stat Cards */}
        <div className="doctor-stats">
          <div className="stat-card stat-card--yellow">
            <div className="stat-number">{shobha.experienceYears}</div>
            <div className="stat-label-group">
              <span className="stat-label">Years of Experience</span>
            </div>
            <div className="stat-accent-bar stat-accent-bar--dark"></div>
            <div className="stat-blur-orb stat-blur-orb--top-right"></div>
          </div>

          <div className="stat-card stat-card--dark">
            <div className="stat-number stat-number--yellow">{shobha.patientsCount}</div>
            <div className="stat-label-group">
              <span className="stat-label stat-label--light">Happy Patients</span>
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
            src={shobha.image}
            alt={shobha.name}
          />
        </div>

        {/* Right: Doctor Info */}
        <div className="doctor-info">
          <h2 className="doctor-name">{shobha.name}</h2>

          <div className="doctor-degrees">
            {shobha.description.split('. ').map((part, i) => (
              <span key={i} className="doctor-degree-badge">{part}</span>
            ))}
          </div>

          <p className="doctor-tagline">
            {shobha.profileSummary}
          </p>

          <p className="doctor-description">
            {shobha.biography}
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

