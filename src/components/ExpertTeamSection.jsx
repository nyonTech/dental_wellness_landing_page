import DoctorCard from './DoctorCard';
import WorkingHours from './WorkingHours';
import Link from "next/link";
import { DOCTORS } from "@/data/doctors";

const WORKING_HOURS = [
  { day: 'Monday',    time: '08:00 - 20:00' },
  { day: 'Tuesday',   time: '08:00 - 20:00' },
  { day: 'Wednesday', time: '08:00 - 20:00' },
  { day: 'Friday',    time: '10:00 - 16:00' },
  { day: 'Saturday',  time: '10:00 - 16:00' },
];

export default function ExpertTeamSection() {
  return (
    <section className="expert-team">
      <div className="expert-team__card">
        <div className="expert-team__layout">
          {/* Left column */}
          <div className="expert-team__left">
            <div className="expert-team__info">
              <img
                className="expert-team__aligner-icon"
                src="https://api.builder.io/api/v1/image/assets/TEMP/cd76bf9f2270567f7cb277c46e31ef06fbe06161?width=96"
                alt=""
                aria-hidden="true"
              />
              <h2 className="expert-team__title">Our Expert Team</h2>
              <p className="expert-team__description">
                We are a group of dentists, hygienists, and staff members who
                work together to guarantee that you have the best care possible
                at the most convenient time for you.
              </p>

              <Link href="/doctor_listing" className="expert-team__view-link">
                View all dentists
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.65 10.425H0V7.275H11.65L6.6 2.225L8.85 0L17.7 8.85L8.85 17.7L6.6 15.475L11.65 10.425Z"
                    fill="#FBBF24"
                  />
                </svg>
              </Link>
            </div>

            <div className="expert-team__doctors">
              {DOCTORS.slice(0, 3).map((doc) => (
                <DoctorCard key={doc.name} {...doc} />
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="wrapper">
            <WorkingHours hours={WORKING_HOURS} />
          </div>
        </div>
      </div>
    </section>
  );
}
