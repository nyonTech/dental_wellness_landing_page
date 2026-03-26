export default function LiveBadge({ label }) {
  return (
    <div className="live-badge" aria-live="polite">
      <span className="live-badge__dot" />
      <span className="live-badge__text">{label}</span>
    </div>
  );
}
