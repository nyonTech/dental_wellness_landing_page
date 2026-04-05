'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import DoctorCard from './DoctorCard';
import WorkingHours from './WorkingHours';
import Link from "next/link";
import { DOCTORS } from "@/data/doctors";

const WORKING_HOURS = [
  { day: 'Monday', time: '10 AM - 02 PM   & 5 PM - 08 PM' },
  { day: 'Tuesday', time: '10 AM - 02 PM   & 5 PM - 08 PM' },
  { day: 'Wednesday', time: '10 AM - 02 PM   & 5 PM - 08 PM' },
  { day: 'Thursday', time: '10 AM - 02 PM   & 5 PM - 08 PM' },
  { day: 'Friday', time: '10 AM - 02 PM   & 5 PM - 08 PM' },
  { day: 'Saturday', time: '10 AM - 02 PM   & 5 PM - 08 PM' },
];

export default function ExpertTeamSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalItems = DOCTORS.length;
  const maxIdx = Math.max(0, totalItems - itemsPerView);

  const prevSlide = () => setActiveIndex((prev) => Math.max(0, prev - 1));
  const nextSlide = () => setActiveIndex((prev) => Math.min(maxIdx, prev + 1));

  // If itemsPerView changes and causes activeIndex to go out of bounds
  useEffect(() => {
    if (activeIndex > maxIdx) {
      setActiveIndex(maxIdx);
    }
  }, [itemsPerView, maxIdx, activeIndex]);

  return (
    <section className="expert-team">
      <div className="expert-team__card">
        <div className="expert-team__layout">
          {/* Left column */}
          <div className="expert-team__left">
            <div className="expert-team__info">
              {/* Aligner Icon - slightly adjusted position */}
              <div className="absolute -left-8 -top-8 opacity-40 select-none pointer-events-none">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/cd76bf9f2270567f7cb277c46e31ef06fbe06161?width=96"
                  alt=""
                  width={96}
                  height={96}
                  className="rotate-[-12deg]"
                />
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-6">
                <div className="flex-1">
                  <h2 className="expert-team__title tracking-tight">Our Expert Team</h2>
                  <p className="expert-team__description mt-4 text-slate-500 font-medium">
                    Our dedicated team of specialists works together to provide world-class dental care tailored to your needs.
                  </p>
                </div>
                
                {/* Modern Carousel Controls */}
                <div className="flex gap-4 shrink-0">
                  <button 
                    onClick={prevSlide}
                    disabled={activeIndex === 0}
                    className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      activeIndex === 0 
                        ? 'opacity-20 border-slate-200 cursor-not-allowed grayscale' 
                        : 'border-slate-200 hover:bg-slate-900 hover:text-white hover:border-slate-900 shadow-sm active:scale-90 group'
                    }`}
                    aria-label="Previous specialist"
                  >
                    <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
                  </button>
                  <button 
                    onClick={nextSlide}
                    disabled={activeIndex >= maxIdx}
                    className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      activeIndex >= maxIdx 
                        ? 'opacity-20 border-slate-200 cursor-not-allowed grayscale' 
                        : 'border-slate-200 hover:bg-slate-900 hover:text-white hover:border-slate-900 shadow-sm active:scale-90 group'
                    }`}
                    aria-label="Next specialist"
                  >
                    <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>

              <Link href="/doctor_listing" className="expert-team__view-link group mt-2">
                <span className="border-b-2 border-transparent group-hover:border-primary transition-all">
                  View all dentists
                </span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <path
                    d="M11.65 10.425H0V7.275H11.65L6.6 2.225L8.85 0L17.7 8.85L8.85 17.7L6.6 15.475L11.65 10.425Z"
                    fill="#FBBF24"
                  />
                </svg>
              </Link>
            </div>

            <div className="relative overflow-hidden mt-6 pb-4">
              <div 
                className="flex gap-6 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                style={{ transform: `translateX(-${activeIndex * (100 / itemsPerView)}%)` }}
              >
                {DOCTORS.map((doc) => (
                  <div 
                    key={doc.id} 
                    className="shrink-0 transition-opacity duration-300"
                    style={{ width: `calc(${100 / itemsPerView}% - ${(itemsPerView - 1) * 24 / itemsPerView}px)` }}
                  >
                    <DoctorCard {...doc} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="hidden lg:block">
            <WorkingHours hours={WORKING_HOURS} />
          </div>
        </div>
      </div>
    </section>
  );
}


