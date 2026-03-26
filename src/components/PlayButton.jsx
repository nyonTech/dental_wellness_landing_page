export default function PlayButton({ size = 80, onClick }) {
  return (
    <button
      type="button"
      className="play-button"
      onClick={onClick}
      aria-label="Play clinic tour video"
      style={{ width: size, height: size }}
    >
      <span className="play-button__icon" />
    </button>
  );
}
