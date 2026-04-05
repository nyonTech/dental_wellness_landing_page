import Link from "next/link";

export default function EducationCard({ title, subtitle, featured = false, id }) {
  return (
    <div className={`edu-card ${featured ? "edu-card--featured" : "edu-card--dark"}`}>
      <div className="edu-card__body">
        <h4 className={`edu-card__title ${featured ? "edu-card__title--featured" : ""}`}>{title}</h4>
        <p className={`edu-card__description ${featured ? "edu-card__description--featured" : ""}`}>{subtitle}</p>
      </div>
      <Link href={`/learning/${id}`}>
        <button className={`edu-card__btn ${featured ? "edu-card__btn--featured" : ""}`}>
          Read More
        </button>
      </Link>
    </div>
  );
}
