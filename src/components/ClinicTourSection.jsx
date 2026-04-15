'use client';

import { useEffect, useRef } from 'react';
import SectionHeader from './SectionHeader';

const TOUR_IMAGES = [
  { id: 'reception', label: 'Reception Area', src: '/images/facility-img2.jpg' },
  { id: 'treatment1', label: 'Treatment Room 1', src: '/images/facility-img1.jpg' },
  { id: 'treatment2', label: 'Treatment Room 2', src: '/images/treatment_room_2.jpg' },
  { id: 'dr_room', label: "Consultation Chamber", src: '/images/facility-img3.jpg' },
  // Duplicate set creates seamless infinite loop
  { id: 'reception-2', label: 'Reception Area', src: '/images/facility-img2.jpg' },
  { id: 'treatment1-2', label: 'Treatment Room 1', src: '/images/facility-img1.jpg' },
  { id: 'treatment2-2', label: 'Treatment Room 2', src: '/images/treatment_room_2.jpg' },
  { id: 'dr_room-2', label: "Consultation Chamber", src: '/images/facility-img3.jpg' },
];

export default function ClinicTourSection() {
  const trackRef = useRef(null);
  const animFrameRef = useRef(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Speed in px per frame (~1px per 16ms ≈ 60px/s)
    const SPEED = 0.6;

    const step = () => {
      if (!pausedRef.current) {
        posRef.current += SPEED;

        // Seamless reset: when we've scrolled exactly one "half" of the duplicated list
        const halfWidth = track.scrollWidth / 2;
        if (posRef.current >= halfWidth) {
          posRef.current = 0;
        }

        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      animFrameRef.current = requestAnimationFrame(step);
    };

    animFrameRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, []);

  const pause = () => { pausedRef.current = true; };
  const resume = () => { pausedRef.current = false; };

  return (
    <section className="clinic-tour">
      <div className="clinic-tour__container">
        <SectionHeader
          title="Clinic Visual Tour Experience"
          subtitle="Explore our high-tech facility from the comfort of your home."
        />

        {/* Carousel viewport */}
        <div
          className="clinic-tour__carousel-viewport"
          onMouseEnter={pause}
          onMouseLeave={resume}
          onTouchStart={pause}
          onTouchEnd={resume}
        >
          <div className="clinic-tour__carousel-track" ref={trackRef}>
            {TOUR_IMAGES.map((img) => (
              <div key={img.id} className="clinic-tour__carousel-slide">
                <img
                  src={img.src}
                  alt={img.label}
                  className="clinic-tour__carousel-img"
                  draggable={false}
                />
                <span className="clinic-tour__carousel-label">{img.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
