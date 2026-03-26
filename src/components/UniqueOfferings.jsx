import OfferingCard from "./OfferingCard";
import Link from "next/link";

const offerings = [
  {
    id: 1,
    featured: true,
    image: "https://api.builder.io/api/v1/image/assets/TEMP/c113b821c8a5a0c12145a7b4658810530cba2707?width=90",
    title: "Unparalleled Invisalign",
    description: "No orthodontist in NYC has personally treated more patients with Invisalign.",
    price: "$20",
    duration: "60 - 120 Mins",
  },
  {
    id: 2,
    image: "https://api.builder.io/api/v1/image/assets/TEMP/fa3937a0a05a5cdfbca8c5a5de297a26e9cc860a?width=90",
    title: "Conservative Approach",
    description: "Dr. Goodman will only begin orthodontic treatment when it is absolutely necessary.",
  },
  {
    id: 3,
    image: "https://api.builder.io/api/v1/image/assets/TEMP/8e7f1bf6c5717ef3e51395e5a0e7b34a30ad669d?width=90",
    title: "Complimentary Consult",
    description: "While many orthodontists allow charge $250-$500 for a consultation, ours is free.",
  },
  {
    id: 4,
    image: "https://api.builder.io/api/v1/image/assets/TEMP/71b544d3de08f0ec76856ee14a8467b20c01b5b8?width=50",
    title: "Thorough Exam",
    description: "A complete diagnostic exam to understand your unique dental structure.",
  },
];

export default function UniqueOfferings() {
  return (
    <section className="offerings-section">
      <div className="offerings-container">
        {/* Header row */}
        <div className="offerings-header">
          <div className="offerings-heading-group">
            <h2 className="offerings-title">Our Unique Offerings</h2>
            <p className="offerings-subtitle">
              The team at GoodOrtho Orthodontics takes pride in making sure the personal and
              professional care you receive is second-to-none.
            </p>
          </div>
          <Link href="/service_listing" className="offerings-view-all">
                View all services
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="#FBBF24" />
            </svg>
              </Link>
        </div>

        {/* Cards grid */}
        <div className="offerings-cards">
          {offerings.map((offering) => (
            <OfferingCard key={offering.id} {...offering} />
          ))}
        </div>

        {/* Navigation arrows */}
        <div className="offerings-nav">
          <button className="offerings-nav-btn" aria-label="Previous">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825Z" fill="#111827" />
            </svg>
          </button>
          <button className="offerings-nav-btn" aria-label="Next">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="#111827" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
