import EducationCard from "./EducationCard";

const educationCards = [
  {
    id: 1,
    title: "Emergencies",
    description: "Here at Goodman Orthodontics we know how frightening a dental emergency can be.",
    featured: true,
  },
  {
    id: 2,
    title: "Orthodontic Treatment",
    description: "We believe everyone deserves a smile they're proud to show off.",
    featured: false,
  },
  {
    id: 3,
    title: "Foods to Avoid",
    description: "When you're rocking braces, we are here to provide you with high-quality tips.",
    featured: false,
  },
];

export default function EducationCenter() {
  return (
    <section className="edu-section">
      {/* Background blurred orbs */}
      <div className="edu-orb edu-orb--large"></div>
      <div className="edu-orb edu-orb--small"></div>

      <div className="edu-container">
        {/* Header row */}
        <div className="edu-header">
          <div className="edu-header__left">
            <h2 className="edu-heading">Education Center</h2>
            <a href="#" className="edu-explore-btn">Explore More</a>
          </div>
          <div className="edu-header__right">
            <p className="edu-header__description">
              In our Education Center, you'll find a wealth of informative articles, videos, and
              FAQs covering a wide range of dental topics including emergencies, treatments
              and food guides.
            </p>
          </div>
        </div>

        {/* Content row */}
        <div className="edu-content">
          {/* Dental model image */}
          <div className="edu-image-wrap">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/5d435561cb806ffa5c21dc29a949f04b97c18017?width=494"
              alt="3D dental model"
              className="edu-dental-image"
            />
          </div>

          {/* Cards */}
          <div className="edu-cards">
            {educationCards.map((card) => (
              <EducationCard key={card.id} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
