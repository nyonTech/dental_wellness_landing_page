import FeatureCard from "./FeatureCard";

const featureCards = [
  {
    id: 1,
    variant: "yellow",
    title: "Painless Root Canal",
    description: "Precision treatment retaining your natural tooth structure.",
    icon: (
      <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27 12L25.125 7.875L21 6L25.125 4.125L27 0L28.875 4.125L33 6L28.875 7.875L27 12ZM27 33L25.125 28.875L21 27L25.125 25.125L27 21L28.875 25.125L33 27L28.875 28.875L27 33ZM12 28.5L8.25 20.25L0 16.5L8.25 12.75L12 4.5L15.75 12.75L24 16.5L15.75 20.25L12 28.5ZM12 21.225L13.5 18L16.725 16.5L13.5 15L12 11.775L10.5 15L7.275 16.5L10.5 18L12 21.225Z" fill="black" />
      </svg>
    ),
  },
  {
    id: 2,
    variant: "dark",
    title: "Smile Makeovers",
    description: "Custom aesthetic solutions for a natural, radiant look.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 27.7588V23.2588H6.15L2.325 10.7338C1.65 10.3588 1.09375 9.80882 0.65625 9.08382C0.21875 8.35882 0 7.58382 0 6.75882C0 5.50882 0.4375 4.44632 1.3125 3.57132C2.1875 2.69632 3.25 2.25882 4.5 2.25882C5.475 2.25882 6.34375 2.54007 7.10625 3.10257C7.86875 3.66507 8.4 4.38382 8.7 5.25882H13.5V3.75882C13.5 3.33382 13.6437 2.97757 13.9312 2.69007C14.2188 2.40257 14.575 2.25882 15 2.25882C15.225 2.25882 15.4438 2.30882 15.6562 2.40882C15.8687 2.50882 16.05 2.65882 16.2 2.85882L18.75 0.458824C18.975 0.233824 19.2437 0.0900735 19.5562 0.0275735C19.8687 -0.0349265 20.175 0.00882353 20.475 0.158824L26.325 2.85882C26.625 3.00882 26.8313 3.22757 26.9438 3.51507C27.0562 3.80257 27.05 4.08382 26.925 4.35882C26.775 4.65882 26.5562 4.85257 26.2687 4.94007C25.9812 5.02757 25.7 5.00882 25.425 4.88382L20.025 2.40882L16.5 5.70882V7.80882L20.025 11.0338L25.425 8.55882C25.7 8.43382 25.9875 8.42132 26.2875 8.52132C26.5875 8.62132 26.8 8.80882 26.925 9.08382C27.075 9.38382 27.0875 9.67132 26.9625 9.94632C26.8375 10.2213 26.625 10.4338 26.325 10.5838L20.475 13.3588C20.175 13.5088 19.8687 13.5526 19.5562 13.4901C19.2437 13.4276 18.975 13.2838 18.75 13.0588L16.2 10.6588C16.05 10.8088 15.8687 10.9463 15.6562 11.0713C15.4438 11.1963 15.225 11.2588 15 11.2588C14.575 11.2588 14.2188 11.1151 13.9312 10.8276C13.6437 10.5401 13.5 10.1838 13.5 9.75882V8.25882H8.7C8.625 8.45882 8.54375 8.64632 8.45625 8.82132C8.36875 8.99632 8.25 9.18382 8.1 9.38382L15.6 23.2588H21V27.7588H1.5ZM4.5 8.25882C4.925 8.25882 5.28125 8.11507 5.56875 7.82757C5.85625 7.54007 6 7.18382 6 6.75882C6 6.33382 5.85625 5.97757 5.56875 5.69007C5.28125 5.40257 4.925 5.25882 4.5 5.25882C4.075 5.25882 3.71875 5.40257 3.43125 5.69007C3.14375 5.97757 3 6.33382 3 6.75882C3 7.18382 3.14375 7.54007 3.43125 7.82757C3.71875 8.11507 4.075 8.25882 4.5 8.25882ZM9.225 23.2588H12.15L5.7 11.2588C5.675 11.2588 5.55 11.2588 5.55 11.2588L9.225 23.2588Z" fill="#FBBF24" />
      </svg>
    ),
  },
];

function StarIcon() {
  return (
    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.85 14.825L10 12.925L13.15 14.85L12.325 11.25L15.1 8.85L11.45 8.525L10 5.125L8.55 8.5L4.9 8.825L7.675 11.25L6.85 14.825ZM3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z" fill="#FBBF24" />
    </svg>
  );
}

export default function SmileTransformations() {
  return (
    <section className="smile-section">
      <div className="smile-container">

        {/* Section Header */}
        <div className="smile-header">
          <h2 className="smile-title">Smile Transformations</h2>
          <div className="smile-accent-bar"></div>
          <div className="smile-subtitle-wrap">
            <p className="smile-subtitle">
              Experience the power of a perfect smile. View the incredible results our patients achieve.
            </p>
          </div>
        </div>

        {/* Two-column content */}
        <div className="smile-content">

          {/* ── Left Column ── */}
          <div className="smile-left-col">

            {/* Decorative floating tool icon */}
            <div className="smile-decor-tool">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/355c4848bb465082ddaeef6e6ee767eb5c8be83f?width=192"
                alt=""
                className="smile-decor-tool-img"
              />
            </div>

            {/* Before / After comparison — large */}
            <div className="smile-comparison smile-comparison--large">
              <img
                className="smile-comparison__before"
                src="/images/smile-2.png"
                alt="Before transformation"
              />
              {/* <img
                className="smile-comparison__after"
                src="/images/smile-2.png"
                alt="After transformation"
              /> */}
              <div className="smile-comparison__divider">
                {/* <div className="smile-comparison__handle">
                  <svg width="10" height="24" viewBox="0 0 10 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.6 24L0.025 19.425L1.425 18.025L4.6 21.175L7.775 18L9.175 19.425L4.6 24ZM4.6 19L0.025 14.425L1.425 13.025L4.6 16.175L7.775 13L9.175 14.425L4.6 19ZM1.425 11.025L0 9.6L4.6 5L9.175 9.6L7.75 11.025L4.6 7.85L1.425 11.025ZM1.425 6.025L0 4.6L4.6 0L9.175 4.6L7.75 6.025L4.6 2.85L1.425 6.025Z" fill="black" />
                  </svg>
                </div> */}
              </div>
              <span className="smile-comparison__label smile-comparison__label--before">BEFORE</span>
              <span className="smile-comparison__label smile-comparison__label--after">AFTER</span>
            </div>

            {/* Testimonial card */}
            <div className="smile-testimonial">
              <div className="smile-testimonial__stars">
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              </div>
              <p className="smile-testimonial__quote">
                "This clinic offers excellent treatment! My daughter and I feel very comfortable. In fact, we enjoy the visits. There is no fear of going to the dentist. The Doctor is an expert."
              </p>
              <p className="smile-testimonial__author">— Sowmini, Patient</p>
            </div>

            {/* Decorative amber glow */}
            <div className="smile-decor-glow"></div>
          </div>

          {/* ── Right Column ── */}
          <div className="smile-right-col">

            {/* Transformation info card */}
            <div className="smile-transformation-card">

              {/* Before / After comparison — small */}
              <div className="smile-comparison smile-comparison--small">
                <img
                  className="smile-comparison__before"
                  src="/images/smile-2.jpg"
                  alt="Before realignment"
                />
                {/* <img
                  className="smile-comparison__after"
                  src="/images/smile-1.png"
                  alt="After realignment"
                /> */}
                <div className="smile-comparison__divider">
                  {/* <div className="smile-comparison__handle">
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 18L0 13L5 8L6.425 9.4L3.825 12H19V14H3.825L6.425 16.6L5 18ZM15 10L13.575 8.6L16.175 6H1V4H16.175L13.575 1.4L15 0L20 5L15 10Z" fill="black" />
                    </svg>
                  </div> */}
                </div>
              </div>

              {/* Card details */}
              <div className="smile-transformation-details">
                <h4 className="smile-transformation-title">Complete Restoration</h4>
                <p className="smile-transformation-description">
                  Patient achieved perfect restoration of damaged front teeth using our expert root canal therapies.
                </p>
                <div className="smile-transformation-tags">
                  <span className="smile-tag smile-tag--yellow">PAINLESS</span>
                  <span className="smile-tag smile-tag--grey">ENDODONTICS</span>
                </div>
              </div>
            </div>

            {/* Feature cards row */}
            <div className="smile-feature-row">
              {featureCards.map((card) => (
                <FeatureCard key={card.id} {...card} />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
