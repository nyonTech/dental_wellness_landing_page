"use client";

import OfferingCard from "./OfferingCard";
import Link from "next/link";
import { useEffect, useRef } from "react";

const offerings = [
  {
    id: 1,
    featured: true,
    image: "/images/image_7.jpg",
    title: "Root Canal Treatment",
    description: "Get expert root canal treatment with our top specialists. We offer pain-free, precise procedures.",
  },
  {
    id: 2,
    image: "/images/image_6.jpg",
    title: "Cosmetic Dentistry",
    description: "Transform your smile with the top cosmetic dentist in AECS Layout. We specialize in smile makeovers.",
  },
  {
    id: 3,
    image: "/images/image_9.jpg",
    title: "Cosmetic Fillings",
    description: "Restore damaged teeth beautifully with advanced cosmetic fillings for a natural, healthy look.",
  },
  {
    id: 4,
    image: "/images/image_5.jpg",
    title: "Crowns & Bridges",
    description: "Get high-quality dental crowns and bridges. Restore damaged or missing teeth with our expert restorative treatments.",
  },
  {
    id: 5,
    image: "/images/image_7.jpg",
    title: "Dental Check-ups",
    description: "Trust our dental clinic for comprehensive dental check-ups. Our experienced team provides personalized care.",
  },
];

export default function UniqueOfferings() {
  const scrollContainerRef = useRef(null);

  // Auto-scroll logic
  useEffect(() => {
    let intervalId;

    const startScroll = () => {
      intervalId = setInterval(() => {
        if (scrollContainerRef.current) {
          const container = scrollContainerRef.current;

          // Calculate one card width (including gap) based on current viewport
          // assuming 1 card on mobile, 2 on md, 3 on lg
          const isLg = window.innerWidth >= 1024;
          const isMd = window.innerWidth >= 768;
          let cardsVisible = isLg ? 3 : isMd ? 2 : 1;

          // Container width divided by cards visible gives us the approx scroll amount
          const scrollAmount = container.clientWidth / cardsVisible;

          // If we reach the end, smoothly scroll back to start
          if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
            container.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            container.scrollBy({ left: scrollAmount, behavior: "smooth" });
          }
        }
      }, 4000); // specific interval: 4 seconds
    };

    startScroll();

    return () => clearInterval(intervalId);
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const isLg = window.innerWidth >= 1024;
      const isMd = window.innerWidth >= 768;
      const cardsVisible = isLg ? 3 : isMd ? 2 : 1;
      const scrollAmount = container.clientWidth / cardsVisible;

      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const isLg = window.innerWidth >= 1024;
      const isMd = window.innerWidth >= 768;
      const cardsVisible = isLg ? 3 : isMd ? 2 : 1;
      const scrollAmount = container.clientWidth / cardsVisible;

      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="offerings-section overflow-hidden py-16 px-4 md:px-0">
      <div className="offerings-container xl:max-w-7xl mx-auto px-0 lg:px-8">
        {/* Header row */}
        <div className="offerings-header flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="offerings-heading-group max-w-2xl">
            <h2 className="offerings-title font-headline text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Our Unique Offerings
            </h2>
            <p className="offerings-subtitle font-body text-slate-600 text-lg">
              Dental Wellness takes pride in providing advanced specialized treatments with exceptional personal care.
            </p>
          </div>
          <Link href="/service" className="offerings-view-all shrink-0 inline-flex flex-row items-center gap-2 font-bold text-sm tracking-widest uppercase text-slate-900 hover:text-primary transition-colors group">
            <span className="mt-1">View all services</span>
            <span className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-primary-container-about flex items-center justify-center transition-colors">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-slate-900 group-hover:text-amber-600">
                <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="currentColor" />
              </svg>
            </span>
          </Link>
        </div>

        {/* Dynamic Carousel Container */}
        <div className="relative group/carousel -mx-4 px-4 sm:mx-0 sm:px-0">
          <div
            ref={scrollContainerRef}
            className="flex items-stretch gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] w-full"
          >
            {offerings.map((offering) => (
              <div
                key={offering.id}
                className="snap-start shrink-0 w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] transition-transform duration-300 h-full"
              >
                <div className="h-full">
                  <OfferingCard {...offering} />
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Navigation Controls Overlay */}
          {/* <div className="hidden sm:flex absolute top-1/2 -mt-8 -left-5 -right-5 justify-between pointer-events-none opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 w-[calc(100%+40px)]">
            <button
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center pointer-events-auto hover:bg-primary-container-about hover:text-white transition-colors transform hover:-translate-x-1 border border-slate-100 outline-none focus:ring-2 focus:ring-primary z-10"
              aria-label="Previous offering"
            >
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="currentColor" className="text-inherit" transform="rotate(180 8 8)" />
              </svg>
            </button>
            <button
              onClick={scrollRight}
              className="w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center pointer-events-auto hover:bg-primary-container-about hover:text-white transition-colors transform hover:translate-x-1 border border-slate-100 outline-none focus:ring-2 focus:ring-primary z-10"
              aria-label="Next offering"
            >
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="currentColor" className="text-inherit" />
              </svg>
            </button>
          </div> */}
        </div>

        {/* Mobile Navigation controls */}
        <div className="offerings-nav sm:hidden flex justify-center gap-4 mt-2">
          <button onClick={scrollLeft} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-primary-container-about hover:text-white active:scale-95 transition-all text-slate-800" aria-label="Previous">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="currentColor" transform="rotate(180 8 8)" />
            </svg>
          </button>
          <button onClick={scrollRight} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-primary-container-about hover:text-white active:scale-95 transition-all text-slate-800" aria-label="Next">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
