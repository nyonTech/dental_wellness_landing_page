export default function OfferingCard({ image, title, description, featured = false, price, duration }) {
  if (featured) {
    return (
      <div className="offering-card offering-card--featured">
        <div className="offering-card__featured-blur" />
        <div className="offering-card__featured-header">
          <div className="offering-card__icon-wrap offering-card__icon-wrap--white">
            <img src={image} alt={title} className="offering-card__icon" />
          </div>
          <div className="offering-card__pricing">
            <span className="offering-card__price">{price}</span>
            <span className="offering-card__duration">{duration}</span>
          </div>
        </div>
        <h3 className="offering-card__title offering-card__title--dark">{title}</h3>
        <p className="offering-card__description offering-card__description--dark">{description}</p>
        <button className="offering-card__arrow-btn offering-card__arrow-btn--dark">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.10208 5.25H0V4.08333H7.10208L3.83542 0.816667L4.66667 0L9.33333 4.66667L4.66667 9.33333L3.83542 8.51667L7.10208 5.25Z" fill="#111827" />
          </svg>
        </button>
      </div>
    );
  }

  return (
    <div className="offering-card offering-card--default">
      <div className="offering-card__icon-wrap offering-card__icon-wrap--grey">
        <img src={image} alt={title} className="offering-card__icon" />
      </div>
      <h3 className="offering-card__title">{title}</h3>
      <p className="offering-card__description">{description}</p>
      <button className="offering-card__arrow-btn offering-card__arrow-btn--light">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.10208 5.25H0V4.08333H7.10208L3.83542 0.816667L4.66667 0L9.33333 4.66667L4.66667 9.33333L3.83542 8.51667L7.10208 5.25Z" fill="#111827" />
        </svg>
      </button>
    </div>
  );
}
