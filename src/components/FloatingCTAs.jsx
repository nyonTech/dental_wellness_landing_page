'use client';

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingCTAs = () => {
  const phoneNumber = "+91 99805 67389";
  const whatsappNumber = "919980567389"; // Format: country code + number
  const welcomeMessage = encodeURIComponent("Hello Dental Wellness! I'd like to book an appointment.");

  return (
    <div className="fixed bottom-6 md:bottom-10 right-6 md:right-10 z-[9999] flex flex-col items-end gap-4 pointer-events-none">
      
      {/* WhatsApp CTA */}
      <a 
        href={`https://wa.me/${whatsappNumber}?text=${welcomeMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center bg-[#25D366] text-white p-4 rounded-full shadow-2xl transition-all duration-500 ease-in-out hover:pr-8 pointer-events-auto hover:scale-105 active:scale-95 ring-4 ring-white/20"
      >
        <span className="max-w-0 overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-out group-hover:max-w-[200px] group-hover:mr-3 font-outfit font-bold tracking-tight">
          Chat on WhatsApp
        </span>
        <MessageCircle size={24} fill="currentColor" strokeWidth={0} />
      </a>

      {/* Call CTA - Preferred */}
      <a 
        href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
        className="group flex items-center bg-primary text-slate-900 p-4 rounded-full shadow-2xl transition-all duration-500 ease-in-out hover:pr-8 pointer-events-auto hover:scale-105 active:scale-95 ring-4 ring-slate-900/10"
      >
        <span className="max-w-0 overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-out group-hover:max-w-[200px] group-hover:mr-3 font-outfit font-black tracking-tight">
          {phoneNumber}
        </span>
        <Phone size={24} fill="currentColor" strokeWidth={0} />
      </a>

      {/* Decorative pulse for the Call button */}
      <div className="absolute bottom-0 right-0 w-14 h-14 bg-primary rounded-full animate-ping opacity-20 -z-10 pointer-events-none"></div>
    </div>
  );
};

export default FloatingCTAs;
