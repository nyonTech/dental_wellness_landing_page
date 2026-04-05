import articles from "@/data/articles";
import EducationCard from "./EducationCard";

const educationCards = [
  {
    id: 1,
    title: "Root Canal vs Extraction",
    description: "Confused between a root canal and tooth extraction? Learn the pros, cons, costs, and long-term benefits.",
    featured: true,
  },
  {
    id: 2,
    title: "Myths & Facts",
    description: "Are root canals painful or unsafe? Learn the truth about common root canal myths, pain, and safety.",
    featured: false,
  },
  {
    id: 3,
    title: "When Do I Need One?",
    description: "Learn about the signs of needing endodontic treatment, such as prolonged sensitivity or deep decay.",
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
              In our Education Center, you'll find a wealth of informative articles, insights, and
              FAQs covering a wide range of dental topics to help you maintain a healthy smile.
            </p>
          </div>
        </div>

        {/* Content row */}
        <div className="edu-content">
          {/* Dental model image */}
          <div className="edu-image-wrap">
            <img
              // src="https://api.builder.io/api/v1/image/assets/TEMP/5d435561cb806ffa5c21dc29a949f04b97c18017?width=494"
              src="/images/learning_hero.png"
              alt="3D dental model"
              className="edu-dental-image"
            />
          </div>

          {/* Cards */}
          <div className="edu-cards">
            {articles.slice(0, 3).map((card) => (
              <EducationCard key={card.id} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
