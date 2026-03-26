/**
 * AreaThumbnail - Clickable room/area thumbnail card
 * Figma: 280x160px, border-radius 32px, dark overlay 40%, label text
 */

export default function AreaThumbnail({
  videoSrc,
  label,
  isActive = false,
  onClick,
  className = '',
  variant = 'tour',
}) {
  return (
    <button
      className={`area-thumbnail area-thumbnail--${variant} ${isActive ? 'area-thumbnail--active' : ''} ${className}`}
      onClick={onClick}
      aria-label={`View ${label}`}
      aria-pressed={isActive}
      type="button"
    >
      {/* Background video preview */}
      <video
        src={videoSrc}
        className="area-thumbnail__video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />

      {/* Dark overlay */}
      <div className="area-thumbnail__overlay" />

      {/* Active indicator border */}
      {variant === 'tour' && isActive && <div className="area-thumbnail__active-border" />}

      {/* Label */}
      {variant === 'tour' ? (
        <div className="area-thumbnail__footer">
          <span className="area-thumbnail__label">{label}</span>
          {isActive && <span className="area-thumbnail__active-dot" />}
        </div>
      ) : (
        <>
          <span className="area-thumbnail__name-pill">{label}</span>
          <span className="area-thumbnail__play-btn" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2L18 11L2 20V2Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </span>
        </>
      )}
    </button>
  );
}
