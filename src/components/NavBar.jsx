"use client";

import { useState } from "react";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-slate-200 px-6 lg:px-20 py-4 bg-background-light/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <div className="w-10 overflow-hidden rounded-lg">
          <img alt="Clinic Logo" className="w-full h-full object-cover" src="/logo.png" />
        </div>
        <h2 className="text-slate-900 text-xl leading-tight tracking-tight uppercase">
          <span className="font-bold text-[var(--color-primary)]">Dental </span>
          Wellness
        </h2>
      </div>
      <div className="flex items-center gap-6">
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-slate-600 text-sm font-medium hover:text-primary transition-colors" href="#">Home</a>
          <a className="text-slate-600 text-sm font-medium hover:text-primary transition-colors" href="#">About</a>
          <a className="text-slate-600 text-sm font-medium hover:text-primary transition-colors" href="#">Services</a>
        </nav>
        <button className="hidden md:flex min-w-[120px] cursor-pointer items-center justify-center rounded-full h-11 px-6 bg-primary text-white text-sm font-bold transition-transform active:scale-95 shadow-lg shadow-primary/20">
          Contact Us
        </button>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50 group"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-slate-700 group-hover:bg-primary transition-transform duration-300 ease-in-out origin-center ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-slate-700 group-hover:bg-primary transition-opacity duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`block w-6 h-0.5 bg-slate-700 group-hover:bg-primary transition-transform duration-300 ease-in-out origin-center ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      <div 
        className={`absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-lg md:hidden flex flex-col px-6 gap-6 z-50 overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-96 py-6 opacity-100" : "max-h-0 py-0 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-4">
          <a className="text-slate-800 text-base font-semibold hover:text-primary transition-colors" href="#" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
          <a className="text-slate-800 text-base font-semibold hover:text-primary transition-colors" href="#" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a className="text-slate-800 text-base font-semibold hover:text-primary transition-colors" href="#" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
        </nav>
        <button className="flex w-full cursor-pointer items-center justify-center rounded-full h-12 px-6 bg-primary text-white text-base font-bold transition-transform active:scale-95 shadow-lg shadow-primary/20" onClick={() => setIsMobileMenuOpen(false)}>
          Contact Us
        </button>
      </div>
    </header>
  );
}
