import Link from "next/link";

export default function ServiceCard({ item }) {
  return (
    <article className="service-card">
      <p className="service-card__kicker">{item.kicker}</p>
      <h3 className="service-card__title">{item.title}</h3>
      <p className="service-card__description">{item.description}</p>
      <img src={item.image} alt={item.title} className="service-card__image" />
      <div className="service-card__footer">
        <Link href={item.href} className="service-card__link">
          <span className="service-card__cta">{item.cta}</span>
          <span className="service-card__arrow">&rarr;</span>
        </Link>
      </div>
    </article>
  );
}
