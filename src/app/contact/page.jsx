import React from "react";

export default function ContactPage() {
  return (
    <main className="bg-surface text-on-surface font-body selection:bg-primary-container-about selection:text-on-primary-container-about pt-32">
      {/* Hero Section: Intentional Asymmetry */}
      <section className="px-8 max-w-screen-2xl mx-auto mb-32 md:mb-56">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <span className="inline-block mb-6 font-headline uppercase tracking-[0.3em] text-[10px] font-extrabold text-on-surface-variant">
              Correspondence
            </span>
            <h1 className="font-headline text-6xl md:text-9xl font-black leading-[0.85] tracking-tighter text-on-surface mb-8">
              Contact <br /> <span className="text-primary-container-about text-glow italic">Dental Wellness</span>
            </h1>
          </div>
          <div className="md:col-span-4 relative group">
            <div className="aspect-[4/5] bg-surface-container-highest overflow-hidden rounded-xl">
              <img
                alt="Editorial Dental Tool"
                className="w-full h-full object-cover grayscale brightness-110 contrast-125"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHprNAnckRP8FFPOZrje1PavFcpB0yEO8FAhg74BJNaQZNOmcZljjlmQYuuCHzbNSfHbjtHszmNozNwpzXGMQJqq_Pd81PX3Ni3drY6tbrh8GwJV93SFJ-PflUWe3ADDkLdyi5pWVhaUq7aMCbJNheqCp9Y1tfnOUfe8UHn9zqoAgsQ_44npMWjT_T-xZbTESkp0mnu9Kh_vcC579r4MRf6hROq_pi5yQg0q3FNWyIMu8mZMNZLqEVw-CW4_7nq973egV6jst48r8"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary-about p-8 rounded-xl hidden md:block">
              <span className="material-symbols-outlined text-white text-4xl">clinical_notes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form & Details: Editorial Layout */}
      <section className="bg-surface-container-low py-32 md:py-56">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="flex flex-col md:flex-row gap-24">
            {/* Column 1: The Form (2/3 width) */}
            <div className="flex-1 lg:flex-[2]">
              <div className="mb-16">
                <h2 className="font-headline text-4xl font-bold tracking-tight mb-4">Book an Appointment</h2>
                <p className="text-on-surface-variant max-w-md font-light leading-relaxed">
                  Describe your dental needs. Our expert team will ensure you get the best treatment for a happy, healthy smile.
                </p>
              </div>
              <form className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="relative group">
                    <input
                      className="peer w-full bg-transparent border-0 border-b-2 border-outline-variant py-4 focus:ring-0 focus:border-primary-about transition-colors text-lg"
                      id="name"
                      name="name"
                      placeholder=" "
                      type="text"
                    />
                    <label
                      className="absolute left-0 top-4 text-on-surface-variant/60 uppercase tracking-widest text-[10px] font-bold transition-all peer-focus:-top-4 peer-focus:text-primary-about peer-[:not(:placeholder-shown)]:-top-4"
                      htmlFor="name"
                    >
                      Full Name
                    </label>
                  </div>
                  <div className="relative group">
                    <input
                      className="peer w-full bg-transparent border-0 border-b-2 border-outline-variant py-4 focus:ring-0 focus:border-primary-about transition-colors text-lg"
                      id="email"
                      name="email"
                      placeholder=" "
                      type="email"
                    />
                    <label
                      className="absolute left-0 top-4 text-on-surface-variant/60 uppercase tracking-widest text-[10px] font-bold transition-all peer-focus:-top-4 peer-focus:text-primary-about peer-[:not(:placeholder-shown)]:-top-4"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                  </div>
                </div>
                <div className="relative group">
                  <select
                    className="peer w-full bg-transparent border-0 border-b-2 border-outline-variant py-4 focus:ring-0 focus:border-primary-about transition-colors text-lg appearance-none"
                    id="service"
                    name="service"
                  >
                    <option disabled defaultValue="" value="">
                      Select an Interest
                    </option>
                    <option>Cosmetic Dentistry</option>
                    <option>Dental Implants</option>
                    <option>Root Canal Treatment</option>
                    <option>Braces & Invisalign</option>
                  </select>
                  <label className="absolute left-0 -top-4 text-primary-about uppercase tracking-widest text-[10px] font-bold" htmlFor="service">
                    Service of Interest
                  </label>
                </div>
                <div className="relative group">
                  <textarea
                    className="peer w-full bg-transparent border-0 border-b-2 border-outline-variant py-4 focus:ring-0 focus:border-primary-about transition-colors text-lg resize-none"
                    id="message"
                    name="message"
                    placeholder=" "
                    rows="4"
                  ></textarea>
                  <label
                    className="absolute left-0 top-4 text-on-surface-variant/60 uppercase tracking-widest text-[10px] font-bold transition-all peer-focus:-top-4 peer-focus:text-primary-about peer-[:not(:placeholder-shown)]:-top-4"
                    htmlFor="message"
                  >
                    Message / Clinical Goals
                  </label>
                </div>
                <button
                  className="bg-primary-about text-on-primary-about px-12 py-5 rounded-xl font-headline font-bold uppercase tracking-[0.2em] text-xs hover:opacity-90 transition-all flex items-center group"
                  type="submit"
                >
                  Dispatch Inquiry
                  <span className="material-symbols-outlined ml-4 group-hover:translate-x-2 transition-transform">
                    arrow_right_alt
                  </span>
                </button>
              </form>
            </div>
            {/* Column 2: Working Hours & Contact (1/3 width) */}
            <div className="flex-1 space-y-24">
              {/* Working Hours */}
              <div>
                <h3 className="font-headline uppercase tracking-widest text-[10px] font-extrabold text-on-surface-variant mb-8 border-b border-outline-variant/30 pb-4">
                  Availability
                </h3>
                <ul className="space-y-4 font-body text-sm">
                  <li className="flex justify-between items-center">
                    <span className="text-on-surface-variant">Mon — Fri</span>
                    <span className="font-bold tracking-tight">09:00 — 22:00</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-on-surface-variant">Saturday</span>
                    <span className="font-bold tracking-tight">09:00 — 22:00</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-on-surface-variant">Sunday</span>
                    <span className="font-bold tracking-tight">09:00 — 22:00</span>
                  </li>
                </ul>
              </div>
              {/* Contact Grid */}
              <div className="grid grid-cols-1 gap-8">
                <div className="p-8 bg-surface-container-highest rounded-xl group hover:bg-inverse-surface hover:text-white transition-all duration-500">
                  <span className="material-symbols-outlined text-primary-about mb-6 block">call</span>
                  <p className="text-[10px] uppercase tracking-widest font-black opacity-60 mb-2">Call Us</p>
                  <p className="font-headline text-xl font-bold">+91 99805 67389</p>
                </div>
                <div className="p-8 bg-surface-container-highest rounded-xl group hover:bg-inverse-surface hover:text-white transition-all duration-500">
                  <span className="material-symbols-outlined text-primary-about mb-6 block">mail</span>
                  <p className="text-[10px] uppercase tracking-widest font-black opacity-60 mb-2">Email</p>
                  <p className="font-headline text-xl font-bold">dentalwellnessbangalore@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section: High Contrast Map & Address */}
      <section className="max-w-screen-2xl mx-auto px-8 my-32 md:my-56">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden rounded-xl bg-inverse-surface text-white">
          <div className="lg:col-span-4 p-12 md:p-20 flex flex-col justify-center">
            <span className="material-symbols-outlined text-primary-container-about text-5xl mb-12">location_on</span>
            <h2 className="font-headline text-4xl font-bold mb-8">Dental Wellness Clinic</h2>
            <address className="not-italic text-zinc-400 font-light text-lg leading-relaxed mb-12">
              #177, A Block, AECS Layout
              <br />
              Next to Kundalahalli P.O. Brookfields
              <br />
              Bangalore-560037
            </address>
            <div className="flex gap-4">
              <a
                className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-primary-container-about hover:text-on-primary-container-about transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-xl">share</span>
              </a>
              <a
                className="px-6 h-12 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-zinc-800 transition-colors uppercase tracking-widest text-[10px] font-bold"
                href="#"
              >
                Get Directions
              </a>
            </div>
          </div>
          <div className="lg:col-span-8 h-[400px] lg:h-auto bg-zinc-800 relative grayscale contrast-150 brightness-75">
            {/* Stylized Map Placeholder */}
            <div
              className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center"
              style={{}}
            ></div>
            <div className="absolute inset-0 bg-primary-about/10 mix-blend-multiply"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-4 h-4 bg-primary-about rounded-full animate-ping absolute"></div>
              <div className="w-4 h-4 bg-primary-about rounded-full relative shadow-[0_0_20px_rgba(244,196,48,0.8)]"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-32">
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto px-8">
          <div className="bg-inverse-surface text-primary-container-about px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">
            Pain-Free Care
          </div>
          <div className="bg-inverse-surface text-primary-container-about px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">
            Experienced Dentists
          </div>
          <div className="bg-inverse-surface text-primary-container-about px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">
            Modern Technology
          </div>
          <div className="bg-inverse-surface text-primary-container-about px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">
            Honest Prices
          </div>
        </div>
      </section>
    </main>
  );
}