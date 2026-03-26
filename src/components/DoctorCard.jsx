import Link from "next/link";

export default function DoctorCard({ name, specialty, image, slug }) {
  return (
    <Link href={slug ? `/doctor_listing/${slug}` : "/doctor_listing"} className="doctor-card doctor-card--link">
      <img
        src={image}
        alt={name}
        className="doctor-card__photo"
      />
      <div className="doctor-card__info">
        <h4 className="doctor-card__name">{name}</h4>
        <p className="doctor-card__specialty">{specialty}</p>
      </div>
    </Link>
  );
}
