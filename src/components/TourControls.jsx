import { Expand, Pause, Play, RotateCcw, RotateCw, ZoomIn, ZoomOut } from 'lucide-react';

export default function TourControls({
  isPlaying,
  onTogglePlay,
  onZoomOut,
  onZoomIn,
  onSeekBackward,
  onSeekForward,
  onToggleFullscreen,
}) {
  return (
    <div className="tour-controls" role="toolbar" aria-label="Tour video controls">
      <button type="button" onClick={onTogglePlay} aria-label={isPlaying ? 'Pause video' : 'Play video'}>
        {isPlaying ? <Pause size={18} /> : <Play size={18} />}
      </button>
      <button type="button" onClick={onSeekBackward} aria-label="Seek backward 5 seconds">
  <span className="skip-icon-wrap">
    <RotateCcw size={18} />
    <span className="skip-icon-text">5</span>
  </span>
</button>

<button type="button" onClick={onSeekForward} aria-label="Seek forward 5 seconds">
  <span className="skip-icon-wrap">
    <RotateCw size={18} />
    <span className="skip-icon-text">5</span>
  </span>
</button>
      <button type="button" onClick={onZoomOut} aria-label="Zoom out">
        <ZoomOut size={18} />
      </button>
      <button type="button" onClick={onZoomIn} aria-label="Zoom in">
        <ZoomIn size={18} />
      </button>
      <button type="button" onClick={onToggleFullscreen} aria-label="Toggle fullscreen">
        <Expand size={18} />
      </button>
    </div>
  );
}
