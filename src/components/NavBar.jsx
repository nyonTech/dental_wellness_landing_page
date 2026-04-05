"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/service", label: "Services" },
    { href: "/doctor_listing", label: "Doctors" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-slate-200 px-6 lg:px-20 py-4 bg-background-light/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <Link href="/" className="text-slate-900 text-xl leading-tight tracking-tight uppercase hover:opacity-80 transition-opacity">
          <div className="w-40 overflow-hidden rounded-lg">
            <img alt="Clinic Logo" className="w-full h-full object-cover" src="/images/logo-2.png" />
          </div>
          {/* <span className="font-bold text-[var(--color-primary)]">Dental </span>
          Wellness */}
        </Link>
      </div>
      <div className="flex items-center gap-6">
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/');
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all ${isActive
                  ? "text-primary border-b-2 border-primary pb-1 font-bold"
                  : "text-slate-600 hover:text-primary"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <Link href="/contact" className="hidden md:flex min-w-[120px] cursor-pointer items-center justify-center rounded-full h-11 px-6 bg-primary text-white text-sm font-bold transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
          Book Appointment
        </Link>

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
        className={`absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-lg md:hidden flex flex-col px-6 gap-6 z-50 overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-96 py-6 opacity-100" : "max-h-0 py-0 opacity-0 pointer-events-none"
          }`}
      >
        <nav className="flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/');
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-base font-semibold transition-colors ${isActive ? "text-primary" : "text-slate-800 hover:text-primary"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="flex w-full cursor-pointer items-center justify-center rounded-full h-12 px-6 bg-primary text-white text-base font-bold transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
          Book Appointment
        </Link>
      </div>
    </header>
  );
}
