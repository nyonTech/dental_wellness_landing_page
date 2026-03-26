/**
 * ClinicTourSection
 * Interactive clinic tour with video viewer + video thumbnails.
 */

'use client';

import { useEffect, useRef, useState } from 'react';
import SectionHeader from './SectionHeader';
import PlayButton from './PlayButton';
import TourControls from './TourControls';
import LiveBadge from './LiveBadge';
import AreaThumbnail from './AreaThumbnail';

const TOUR_AREAS = [
  {
    id: 'reception',
    label: 'Reception Area',
    previewVideo: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    mainVideo: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  },
  {
    id: 'treatment',
    label: 'Treatment Room',
    previewVideo: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    mainVideo: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  },
  {
    id: 'xray',
    label: 'X-Ray Suite',
    previewVideo: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    mainVideo: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
  },
];

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

export default function ClinicTourSection() {
  const [activeArea, setActiveArea] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const viewerRef = useRef(null);
  const mainVideoRef = useRef(null);

  const currentArea = TOUR_AREAS[activeArea];

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === viewerRef.current);
    };

    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  useEffect(() => {
    const video = mainVideoRef.current;
    if (!video) {
      return;
    }

    if (isPlaying) {
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(() => {
          setIsPlaying(false);
        });
      }
    } else {
      video.pause();
    }
  }, [isPlaying, activeArea]);

  const handleSelectArea = (index) => {
    setActiveArea(index);
    setIsPlaying(false);
    setZoom(1);
  };

  const handleTogglePlay = () => setIsPlaying((prev) => !prev);
  const handleZoomIn = () => setZoom((prev) => clamp(prev + 0.15, 1, 2.5));
  const handleZoomOut = () => setZoom((prev) => clamp(prev - 0.15, 1, 2.5));
  const handleSeekBackward = () => {
    const video = mainVideoRef.current;
    if (!video) {
      return;
    }

    video.currentTime = Math.max(0, video.currentTime - 5);
  };
  const handleSeekForward = () => {
    const video = mainVideoRef.current;
    if (!video) {
      return;
    }

    const duration = Number.isFinite(video.duration) ? video.duration : video.currentTime + 10;
    video.currentTime = Math.min(duration, video.currentTime + 5);
  };

  const handleToggleFullscreen = async () => {
    if (!viewerRef.current) {
      return;
    }

    if (!document.fullscreenElement) {
      await viewerRef.current.requestFullscreen();
      return;
    }

    if (document.fullscreenElement === viewerRef.current) {
      await document.exitFullscreen();
    }
  };

  return (
    <section className="clinic-tour">
      <div className="clinic-tour__container">
        <SectionHeader
          title="Clinic Visual Tour Experience"
          subtitle="Explore our high-tech facility from the comfort of your home with our immersive 360 degree interactive tour."
        />

        <div className="clinic-tour__content">
          <div className="clinic-tour__viewer" ref={viewerRef}>
            
            <div
              className="clinic-tour__viewer-media"
              style={{ transform: `scale(${zoom})` }}
            >
              <video
                key={currentArea.id}
                ref={mainVideoRef}
                src={currentArea.mainVideo}
                className="clinic-tour__viewer-video"
                playsInline
                preload="metadata"
                onEnded={() => setIsPlaying(false)}
              />
            </div>

            {!isPlaying && (
              <div className="clinic-tour__play-wrapper">
                <PlayButton size={96} onClick={handleTogglePlay} />
              </div>
            )}
             <div className="clinic-tour__live-badge">
                <LiveBadge label={`${currentArea.label}${isFullscreen ? ' (Fullscreen)' : ''}`} />
             </div>
              
            <div className="clinic-tour__overlays">
              
              <TourControls
                isPlaying={isPlaying}
                onTogglePlay={handleTogglePlay}
                onZoomOut={handleZoomOut}
                onZoomIn={handleZoomIn}
                onSeekBackward={handleSeekBackward}
                onSeekForward={handleSeekForward}
                onToggleFullscreen={handleToggleFullscreen}
              />
            </div>
          </div>

          <div className="clinic-tour__panel">
            <div className="clinic-tour__panel-header">
              <span className="clinic-tour__panel-label">Explore Areas</span>
            </div>

            <div className="clinic-tour__thumbnails">
              {TOUR_AREAS.map((area, index) => (
                <AreaThumbnail
                  key={area.id}
                  videoSrc={area.previewVideo}
                  label={area.label}
                  isActive={activeArea === index}
                  onClick={() => handleSelectArea(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
