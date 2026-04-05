'use client';

import { useState, useEffect } from 'react';
import SectionHeader from './SectionHeader';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const writtenReviews = [
  {
    id: 1,
    author: 'Nagendra Mohan',
    location: 'Bangalore',
    text: '“Toothache? Gone in no time! I visited Dental Wellness and had a great experience with Dr. Shobha Nangrani. She helped me get rid of my toothache with great care. The clinic was clean, hygienic, and made the whole visit comfortable. I’ll definitely keep coming back for my dental needs!”',
  },
  {
    id: 2,
    author: 'Godhuli Chanda',
    location: 'Whitefield',
    text: '“Root canals made easy! Dr. Shobha is a wonderful doctor who truly knows her work. She handled my multiple root canal treatments with zero pain and zero hassle! The clinic is spotless and well maintained. She’s an expert, and I would absolutely recommend her treatment.”',
  },
  {
    id: 3,
    author: 'Amit Tamang',
    location: 'AECS Layout',
    text: '“A smile I can’t stop showing off! I visited Dental Wellness for the gaps in my front teeth. Dr. Shobha explained all my options clearly, and I chose six ceramic veneers. I’m beyond happy with my new smile! Thanks to Dr. Shobha and the team for the excellent work, highly recommended for all dental needs.”',
  },
];

export default function WhyPeopleLove() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % writtenReviews.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + writtenReviews.length) % writtenReviews.length);
  };

  // Optional: Auto-slide
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#FBFBFB] py-24 lg:py-32 overflow-hidden font-montserrat">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="inline-block text-primary font-bold tracking-[0.2em] mb-4 text-xs uppercase">
              Patient Experiences
            </span>
            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-6">
              Why People Love <br />
              <span className="text-primary italic font-light">Our Care.</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed font-medium max-w-xl">
              Real stories from our patients who have found confidence, comfort, and care at Dental Wellness.
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all active:scale-95 group"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={nextSlide}
              className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all active:scale-95 group"
              aria-label="Next slide"
            >
              <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        <div className="relative mt-8">
          {/* Track */}
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
            style={{ transform: `translateX(-${activeIndex * 50}%)` }}
          >
            {writtenReviews.map((review) => (
              <div key={review.id} className="w-1/2 shrink-0 px-2 lg:px-4">
                <div className="bg-white rounded-[40px] p-8 md:p-8 shadow-xl shadow-slate-200/40 relative overflow-hidden group">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 p-8 text-primary/10 group-hover:text-primary/20 transition-colors duration-500">
                    <Quote size={60} fill="currentColor" />
                  </div>

                  <div className="relative z-10">
                    <div className="flex gap-1 mb-8">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} fill="#F4C41E" color="#F4C41E" size={20} />
                      ))}
                    </div>

                    <p className="md:text-lg font-medium text-slate-800 leading-tight md:leading-snug mb-12 italic">
                      {review.text}
                    </p>

                    <div className="flex items-center gap-5">
                      <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white font-black">
                        {review.author[0]}
                      </div>
                      <div>
                        <h4 className="text-slate-900 font-black text-sm uppercase tracking-tight">
                          {review.author}
                        </h4>
                        <p className="text-primary font-bold text-xs tracking-widest uppercase opacity-70">
                          {review.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-12">
            {writtenReviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-500 ${index === activeIndex ? 'w-12 bg-primary' : 'w-2 bg-slate-200'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Video section kept for future use */}
      {/* 
      <div className="mt-32 max-w-7xl mx-auto px-6 hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((video) => (
             <div key={video.id} className="...">Video card here</div>
          ))}
        </div>
      </div>
      */}
    </section>
  );
}
