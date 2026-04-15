"use client";

import React, { useRef, useState } from "react";
import { TransformationCTA } from "@/components/ServiceListing";
import emailjs from "@emailjs/browser";
import services from "@/data/services";

export default function ContactPage() {
  const form = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_7z6i26k", // Placeholder - User should replace with their ID
        "template_8l3890r", // Placeholder - User should replace with their ID
        form.current,
        "pW0v2k9T7X9Y8Z1A2" // Placeholder - User should replace with their ID
      )
      .then(
        () => {
          setStatus("success");
          form.current.reset();
          setTimeout(() => setStatus(null), 5000);
        },
        (error) => {
          console.error("FAILED...", error.text);
          setStatus("error");
          setTimeout(() => setStatus(null), 5000);
        }
      );
  };

  return (
    <main className="bg-surface text-slate-800 font-display min-h-screen pt-24 lg:pt-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-container-about/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-wave-pattern -z-10 opacity-40"></div>

      {/* Hero Section */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-20 md:mb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="inline-block mb-4 font-body uppercase tracking-[0.25em] text-xs font-bold text-primary">
              Get In Touch
            </span>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight text-slate-900 mb-8">
              Let's Brighten <br /> <span className="text-primary italic font-light">Your Smile.</span>
            </h1>
            <p className="text-slate-600 font-body text-lg leading-relaxed max-w-xl">
              Whether you need to book a general checkup, consult regarding cosmetic dentistry, or require immediate assistance, our team is right here to guide you to optimal dental wellness.
            </p>
          </div>
          <div className="lg:col-span-5 relative group mt-12 lg:mt-0">
            <div className="aspect-[4/5] bg-surface-container-highest overflow-hidden rounded-3xl shadow-2xl relative">
              <img
                alt="Dental Wellness Clinic Reception"
                className="w-full h-full object-cover grayscale mix-blend-multiply opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                src="/images/facility-img1.jpg"
              />
              <div className="absolute inset-0 bg-primary-about/10 mix-blend-multiply group-hover:bg-transparent transition-colors duration-700 pointer-events-none"></div>
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 md:p-8 rounded-3xl shadow-xl hidden md:flex flex-col gap-2 transform group-hover:-translate-y-2 transition-transform duration-500">
              <div className="w-12 h-12 bg-primary-container-about rounded-full flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <p className="text-xs uppercase tracking-widest font-extrabold text-slate-500">Emergency Care</p>
              <p className="font-headline font-bold text-xl text-slate-900">+91 99805 67389</p>
            </div>
          </div>
        </div>
      </section>

      {/* Information & Contact Form */}
      <section className="bg-surface-container-low py-16 md:py-20 relative">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-20">

            {/* Contact Details (Left Column) */}
            <div className="flex-1 lg:flex-none lg:w-1/3 flex flex-col gap-12">
              <div>
                <h3 className="font-headline text-3xl font-black mb-8 text-slate-900">Reach Us</h3>
                <div className="grid gap-6">
                  {/* Phone */}
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 bg-primary-container-about text-white rounded-full flex items-center justify-center mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </div>
                    <p className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-1">Call Us</p>
                    <p className="font-headline font-bold text-xl text-slate-900">+91 99805 67389</p>
                  </div>

                  {/* Email */}
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 bg-primary-container-about text-white rounded-full flex items-center justify-center mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                    </div>
                    <p className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-1">Email</p>
                    <p className="font-headline font-bold text-lg text-slate-900">dentalwellnessbangalore@gmail.com</p>
                  </div>

                  {/* Hours */}
                  <div className="bg-slate-900 p-8 rounded-3xl shadow-xl text-white">
                    <div className="w-12 h-12 bg-slate-800 text-primary rounded-full flex items-center justify-center mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                    </div>
                    <p className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-4">Availability</p>
                    <ul className="space-y-3 font-body text-sm">
                      <li className="flex justify-between items-center border-b border-slate-700/50 pb-2">
                        <span className="text-slate-300">Mon &mdash; Sat</span>
                        <span className="font-bold">10AM - 2PM & 5PM - 8PM</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiry Form (Right Column) */}
            <div className="flex-1 lg:w-2/3">
              <div className="bg-white p-10 md:p-14 rounded-[40px] shadow-2xl border border-slate-100 relative">
                <div className="mb-10">
                  <h3 className="font-headline text-3xl font-black mb-4 text-slate-900">Book an Appointment</h3>
                  <p className="text-slate-500 font-body">Fill out the form below and our receptionist will reach out to confirm your booking.</p>
                </div>

                <form ref={form} onSubmit={sendEmail} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-bold text-slate-500 ml-1" htmlFor="name">Full Name</label>
                      <input
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-slate-800 font-medium"
                        id="name"
                        name="user_name"
                        placeholder="John Doe"
                        type="text"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-bold text-slate-500 ml-1" htmlFor="email">Email Address</label>
                      <input
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-slate-800 font-medium"
                        id="email"
                        name="user_email"
                        placeholder="john@example.com"
                        type="email"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-bold text-slate-500 ml-1" htmlFor="phone">Phone Number</label>
                      <input
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-slate-800 font-medium"
                        id="phone"
                        name="user_phone"
                        placeholder="+91..."
                        type="tel"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-bold text-slate-500 ml-1" htmlFor="service">Service of Interest</label>
                      <select
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-slate-800 font-medium appearance-none"
                        id="service"
                        name="service"
                        defaultValue=""
                        required
                      >
                        <option disabled value="">Select a Service</option>
                        {services.map(service => (
                          <option value={service.title}>{service.title}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-slate-500 ml-1" htmlFor="message">Message / Clinical Goals</label>
                    <textarea
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-slate-800 font-medium resize-none"
                      id="message"
                      name="message"
                      placeholder="How can we help you?"
                      rows="4"
                    ></textarea>
                  </div>

                  <button
                    className="w-full md:w-auto bg-slate-900 text-white px-10 py-5 rounded-2xl font-headline font-bold hover:bg-primary transition-colors flex items-center justify-center group disabled:opacity-70 disabled:cursor-not-allowed"
                    type="submit"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? "Booking..." : "Book Appointment"}
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-3 group-hover:translate-x-1 transition-transform" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                  </button>

                  {status === "success" && (
                    <div className="text-green-600 bg-green-50 p-4 rounded-2xl text-sm font-semibold animate-in fade-in slide-in-from-bottom-2 duration-500">
                      Inquiry dispatched successfully! Our team will reach out shortly.
                    </div>
                  )}
                  {status === "error" && (
                    <div className="text-red-600 bg-red-50 p-4 rounded-2xl text-sm font-semibold animate-in fade-in slide-in-from-bottom-2 duration-500">
                      Failed to dispatch inquiry. Please try again or call us directly.
                    </div>
                  )}
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 my-16 md:my-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 overflow-hidden rounded-[40px] bg-slate-900 text-white shadow-2xl border border-slate-800">
          <div className="lg:col-span-5 p-12 md:p-20 flex flex-col justify-center relative z-10">
            <div className="w-16 h-16 bg-primary-container-about rounded-2xl flex items-center justify-center mb-10 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
            </div>
            <h2 className="font-headline text-4xl lg:text-5xl font-black mb-6 leading-tight">Visit Our <br /><span className="text-primary font-light italic">Clinic</span></h2>
            <address className="not-italic text-slate-300 font-body text-lg leading-relaxed mb-10 border-l-2 border-primary/50 pl-6">
              #177, A Block, AECS Layout<br />
              Next to Kundalahalli P.O. Brookefield<br />
              Bangalore - 560037
            </address>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                className="px-8 h-14 rounded-full bg-primary text-white flex items-center justify-center hover:bg-yellow-500 transition-colors tracking-wide font-bold shadow-lg shadow-primary/20"
                href="https://maps.google.com/?q=Dental+Wellness+AECS+Layout+Bangalore" target="_blank" rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </div>
          </div>
          <div className="lg:col-span-7 h-[400px] lg:h-auto bg-slate-800 relative">
            {/* Real Facility Image acting as backdrop */}
            <div
              className="absolute inset-0 bg-[url('/images/facility-img2.jpg')] bg-cover bg-center grayscale mix-blend-overlay opacity-60"
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent"></div>

            {/* Map Pin Pulse */}
            {/* <div className="absolute top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <div className="w-8 h-8 bg-primary rounded-full animate-ping absolute opacity-80"></div>
              <div className="w-6 h-6 bg-primary rounded-full relative shadow-[0_0_30px_rgba(244,196,48,1)] border-2 border-white"></div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="mb-20">
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto px-6">
          {['Pain-Free Care', 'Experienced Dentists', 'Modern Technology', 'Honest Prices'].map((badge) => (
            <div key={badge} className="bg-slate-50 border border-slate-200 text-slate-700 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] shadow-sm flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              {badge}
            </div>
          ))}
        </div>
      </section>

      <TransformationCTA />
    </main>
  );
}