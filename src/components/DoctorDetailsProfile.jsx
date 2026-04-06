import Link from "next/link";
import { Award, Star, Users, X } from "lucide-react";

function renderStars(rating) {
  return `${Number(rating).toFixed(1)}/5`;
}

export default function DoctorDetailsProfile({ doctor }) {
  return (
    <section className="doctor-details">
      <div className="doctor-details__shell">
        <div className="doctor-details__split">
          <aside className="doctor-details__media">
            <img src={doctor.image} alt={doctor.name} className="doctor-details__image" />
            <div className="doctor-details__media-overlay" />
            <div className="doctor-details__media-content">
              <span className="doctor-details__badge">TOP RATED</span>
              <h1 className="doctor-details__name">{doctor.name}</h1>
              <p className="doctor-details__role">DDS, {doctor.specialty}</p>
            </div>
          </aside>

          <article className="doctor-details__content">
            <div className="doctor-details__header">
              <p className="doctor-details__kicker">PROFILE DETAILS</p>
              <Link href="/doctor_listing" className="doctor-details__close" aria-label="Back to doctors list">
                <X size={18} />
              </Link>
            </div>

            <p className="doctor-details__summary">{doctor.profileSummary}</p>

            <div className="doctor-details__stats">
              <div className="doctor-details__stat">
                <span className="doctor-details__stat-icon">
                  <Award size={14} />
                </span>
                <strong>{doctor.experienceYears}</strong>
                <span>YEARS</span>
              </div>
              <div className="doctor-details__stat">
                <span className="doctor-details__stat-icon">
                  <Users size={14} />
                </span>
                <strong>{doctor.patientsCount}</strong>
                <span>PATIENTS</span>
              </div>
              <div className="doctor-details__stat">
                <span className="doctor-details__stat-icon">
                  <Star size={14} />
                </span>
                <strong>{doctor.rating}</strong>
                <span>RATING</span>
              </div>
            </div>

            <div className="doctor-details__section">
              <h2>SPECIALTIES</h2>
              <div className="doctor-details__tags">
                {doctor.specialties.map((specialty) => (
                  <span key={specialty} className="doctor-details__tag">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            <div className="doctor-details__section">
              <h2>BIOGRAPHY</h2>
              <p className="doctor-details__bio">{doctor.biography}</p>
            </div>

            <div className="doctor-details__section">
              <h2>RECENT REVIEWS</h2>
              <div className="doctor-details__reviews">
                {doctor.reviews.map((review) => (
                  <article key={review.name} className="doctor-details__review">
                    <span className="doctor-details__review-initials">{review.initials}</span>
                    <div className="doctor-details__review-body">
                      <div className="doctor-details__review-head">
                        <strong>{review.name}</strong>
                        <span>{renderStars(review.rating)}</span>
                      </div>
                      <p>{review.comment}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="doctor-details__footer">
              <Link href="/contact" className="doctor-details__book">
                Book Appointment
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
