export default function FeatureCard({ variant = "yellow", title, description, icon }) {
  return (
    <div className={`feature-card feature-card--${variant}`}>
      <div className="feature-card__icon">{icon}</div>
      <h5 className="feature-card__title">{title}</h5>
      <p className="feature-card__description">{description}</p>
    </div>
  );
}
