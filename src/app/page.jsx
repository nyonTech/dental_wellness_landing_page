import NavBar from "@/components/NavBar";
import DoctorProfile from "@/components/DoctorProfile";
import UniqueOfferings from "@/components/UniqueOfferings";
import EducationCenter from "@/components/EducationCenter";
import ClinicTourSection from "@/components/ClinicTourSection";
import ExpertTeamSection from "@/components/ExpertTeamSection";
import WhyPeopleLove from "@/components/Whypeoplelove";
import Footer from "@/components/Footer";
import SmileTransformations from "@/components/SmileTransformations";
import Link from "next/link";

export default function ComingSoon3() {

  return (
    <div className="bg-background-light font-display text-slate-900 antialiased  min-h-screen">
      <div className="relative flex min-h-screen w-full flex-col">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-wave-pattern -z-10 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-wave-pattern -z-10 opacity-50"></div>
        {/* Hero Section - Comprehensive Dental Services */}
        <section className="hero-section">
          {/* Decorative blurred orbs */}
          <div className="hero-orb hero-orb--amber"></div>
          <div className="hero-orb hero-orb--yellow"></div>

          <div className="hero-inner xl:max-w-7xl xl:m-auto">
            {/* Left: text content */}
            <div className="hero-content">
              <div className="hero-heading">
                <h1 className="hero-title-dark">Trusted Dentist</h1>
                <div className="hero-title-highlight-wrapper">
                  <span className="hero-title-amber">Near AECS Layout</span>
                  <svg className="hero-underline-svg" width="498" height="12" viewBox="0 0 498 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_hero)">
                      <path d="M0 6C165.677 10 331.353 10 497.03 6" stroke="black" strokeWidth="6.1703" />
                    </g>
                    <defs>
                      <clipPath id="clip0_hero">
                        <rect width="497.03" height="12" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>

              <div className="hero-description-wrapper">
                <p className="hero-description">
                  If you’ve been searching for the best dentist near me or a dental clinic near me in AECS Layout, Whitefield, Brookefield, or Kundalahalli Gate, your search ends here. At Dental Wellness, we blend advanced technology with a caring touch to keep every smile bright, confident, and completely pain-free.
                </p>
              </div>

              <div className="hero-cta-row">
                {/* Book Online button */}
                <Link href="/contact" className="hero-book-btn">
                  Book Online
                </Link>

                {/* Consultation card */}
                <Link href='tel:+919980567389'>
                  <div className="hero-consultation-card">
                    <div className="hero-consultation-icon">
                      <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V4C0 3.45 0.195833 2.97917 0.5875 2.5875C0.979167 2.19583 1.45 2 2 2H3V0H5V2H13V0H15V2H16C16.55 2 17.0208 2.19583 17.4125 2.5875C17.8042 2.97917 18 3.45 18 4V18C18 18.55 17.8042 19.0208 17.4125 19.4125C17.0208 19.8042 16.55 20 16 20H2ZM2 18H16V8H2V18ZM2 6H16V4H2V6ZM2 6V4V6ZM9 12C8.71667 12 8.47917 11.9042 8.2875 11.7125C8.09583 11.5208 8 11.2833 8 11C8 10.7167 8.09583 10.4792 8.2875 10.2875C8.47917 10.0958 8.71667 10 9 10C9.28333 10 9.52083 10.0958 9.7125 10.2875C9.90417 10.4792 10 10.7167 10 11C10 11.2833 9.90417 11.5208 9.7125 11.7125C9.52083 11.9042 9.28333 12 9 12ZM5 12C4.71667 12 4.47917 11.9042 4.2875 11.7125C4.09583 11.5208 4 11.2833 4 11C4 10.7167 4.09583 10.4792 4.2875 10.2875C4.47917 10.0958 4.71667 10 5 10C5.28333 10 5.52083 10.0958 5.7125 10.2875C5.90417 10.4792 6 10.7167 6 11C6 11.2833 5.90417 11.5208 5.7125 11.7125C5.52083 11.9042 5.28333 12 5 12ZM13 12C12.7167 12 12.4792 11.9042 12.2875 11.7125C12.0958 11.5208 12 11.2833 12 11C12 10.7167 12.0958 10.4792 12.2875 10.2875C12.4792 10.0958 12.7167 10 13 10C13.2833 10 13.5208 10.0958 13.7125 10.2875C13.9042 10.4792 14 10.7167 14 11C14 11.2833 13.9042 11.5208 13.7125 11.7125C13.5208 11.9042 13.2833 12 13 12ZM9 16C8.71667 16 8.47917 15.9042 8.2875 15.7125C8.09583 15.5208 8 15.2833 8 15C8 14.7167 8.09583 14.4792 8.2875 14.2875C8.47917 14.0958 8.71667 14 9 14C9.28333 14 9.52083 14.0958 9.7125 14.2875C9.90417 14.4792 10 14.7167 10 15C10 15.2833 9.90417 15.5208 9.7125 15.7125C9.52083 15.9042 9.28333 16 9 16ZM5 16C4.71667 16 4.47917 15.9042 4.2875 15.7125C4.09583 15.5208 4 15.2833 4 15C4 14.7167 4.09583 14.4792 4.2875 14.2875C4.47917 14.0958 4.71667 14 5 14C5.28333 14 5.52083 14.0958 5.7125 14.2875C5.90417 14.4792 6 14.7167 6 15C6 15.2833 5.90417 15.5208 5.7125 15.7125C5.52083 15.9042 5.28333 16 5 16ZM13 16C12.7167 16 12.4792 15.9042 12.2875 15.7125C12.0958 15.5208 12 15.2833 12 15C12 14.7167 12.0958 14.4792 12.2875 14.2875C12.4792 14.0958 12.7167 14 13 14C13.2833 14 13.5208 14.0958 13.7125 14.2875C13.9042 14.4792 14 14.7167 14 15C14 15.2833 13.9042 15.5208 13.7125 15.7125C13.5208 15.9042 13.2833 16 13 16Z" fill="white" />
                      </svg>
                    </div>
                    <div className="hero-consultation-text">
                      <span className="hero-consultation-label">Consultation</span>
                      <span className="hero-consultation-cta">Do you want a quick chat?</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Right: image with floating cards */}
            <div className="hero-image-area">
              <div className="hero-image-circle">
                <img
                  // src="/images/dr-img1.png"
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f67e765b353f5fe921b990e3b4bb2f51073872a0?width=1152"
                  alt="Happy dental patient smiling holding a cup"
                  className="hero-doctor-img w-1/2"
                />
              </div>

              {/* Floating tooth icon card */}
              <div className="hero-tooth-card">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/7f1696c1025b3dbde1cdedd7e1c83b14152f8fdb?width=128"
                  alt="3D Tooth Icon"
                  className="hero-tooth-icon"
                />
              </div>

              {/* Floating patients stats card */}
              <div className="hero-stats-card">
                <div className="hero-stats-avatars">
                  <div className="hero-avatar hero-avatar--1"></div>
                  <div className="hero-avatar hero-avatar--2"></div>
                  <div className="hero-avatar hero-avatar--3"></div>
                  <span className="hero-stats-count">+2k</span>
                </div>
                <p className="hero-stats-label">Happy patients served this year.</p>
              </div>
            </div>
          </div>
        </section>


        {/* Services Portfolio Section */}
        {/* <ServicesPortfolio /> */}

        {/* Doctor Profile Section */}
        <DoctorProfile />

        {/* Unique Offerings Section */}
        <UniqueOfferings />

        <EducationCenter />

        <SmileTransformations />

        <ClinicTourSection />

        <ExpertTeamSection />
        <WhyPeopleLove />

      </div>
    </div>
  );
}

