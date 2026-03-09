export default function EducationCard({ title, description, featured = false }) {
  return (
    <div className={`edu-card ${featured ? "edu-card--featured" : "edu-card--dark"}`}>
      <div className="edu-card__body">
        <h4 className={`edu-card__title ${featured ? "edu-card__title--featured" : ""}`}>{title}</h4>
        <p className={`edu-card__description ${featured ? "edu-card__description--featured" : ""}`}>{description}</p>
      </div>
      <button className={`edu-card__btn ${featured ? "edu-card__btn--featured" : ""}`}>
        Read More
      </button>
    </div>
  );
}
