"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ShieldCheck, HeartPulse, User, Mail, MessageSquare, Send, Stethoscope, Sparkles, Activity, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function ComingSoon3() {
  const form = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    // Replace the strings below with your actual EmailJS credentials
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // YOUR_SERVICE_ID
        "YOUR_TEMPLATE_ID", // YOUR_TEMPLATE_ID
        form.current,
        "YOUR_PUBLIC_KEY" // YOUR_PUBLIC_KEY
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
    <div className="bg-background-light font-display text-slate-900 antialiased overflow-x-hidden min-h-screen">
      <div className="relative flex min-h-screen w-full flex-col">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-wave-pattern -z-10 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-wave-pattern -z-10 opacity-50"></div>
        {/* TopNavBar */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-slate-200 px-6 lg:px-20 py-4 bg-background-light/80 backdrop-blur-md sticky top-0 z-50">
          <div className="flex items-center gap-3">
            <div className="w-36 overflow-hidden rounded-lg">
              <img alt="Clinic Logo" className="w-full h-full object-cover" src="/logo.png" />
            </div>
            {/* <h2 className="text-slate-900 text-xl leading-tight tracking-tight uppercase">
              <span className="font-bold text-[var(--color-primary)]">Dental </span>
              Wellness
            </h2> */}
          </div>
          <div className="flex items-center gap-6">
            {/* <nav className="hidden md:flex items-center gap-8">
              <a className="text-slate-600 text-sm font-medium hover:text-primary transition-colors" href="#">Home</a>
              <a className="text-slate-600 text-sm font-medium hover:text-primary transition-colors" href="#">About</a>
              <a className="text-slate-600 text-sm font-medium hover:text-primary transition-colors" href="#">Services</a>
            </nav> */}
            {/* <button className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-11 px-6 bg-primary text-slate-900 text-sm font-bold transition-transform active:scale-95 shadow-lg shadow-primary/20">
              Contact Us
            </button> */}
          </div>
        </header>
        <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 lg:py-24">
          <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content: Hero Text */}
            <div className="flex flex-col gap-6 text-center lg:text-left">
              <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-primary font-bold tracking-widest uppercase text-xs">
                <span className="w-8 h-[2px] bg-primary"></span>
                18 Years of Restoring Smiles
              </div>
              <h1 className="text-slate-900 text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight">
                Our New Website is <br /> <span className="text-primary">Almost Ready</span>
              </h1>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
                We're revamping our digital presence to better serve you. Meanwhile, we continue to provide the trusted, world-class dental care our community has relied on for over a decade.
              </p>
              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-slate-700">Certified Experts</span>
                </div>
                <div className="flex items-center gap-2">
                  <HeartPulse className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-slate-700">Modern Technology</span>
                </div>
              </div>
            </div>
            {/* Right Content: Appointment Form */}
            <div className="w-full max-w-md mx-auto lg:ml-auto">
              <div className="bg-white rounded-xl p-8 soft-shadow border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Appointment</h3>
                <p className="text-sm text-slate-500 mb-8">Schedule an appointment with our experienced team.</p>
                <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                        <User className="w-5 h-5" />
                      </div>
                      <input name="user_name" required className="w-full pl-11 pr-4 py-4 rounded-lg bg-background-light border-none focus:ring-2 focus:ring-primary/50 text-slate-900 placeholder:text-slate-400 soft-shadow transition-all" placeholder="John Doe" type="text" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Phone or Email</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                        <Mail className="w-5 h-5" />
                      </div>
                      <input name="user_email" required className="w-full pl-11 pr-4 py-4 rounded-lg bg-background-light border-none focus:ring-2 focus:ring-primary/50 text-slate-900 placeholder:text-slate-400 soft-shadow transition-all" placeholder="hello@example.com" type="text" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Message (Optional)</label>
                    <div className="relative group">
                      <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <textarea name="message" className="w-full pl-11 pr-4 py-4 rounded-lg bg-background-light border-none focus:ring-2 focus:ring-primary/50 text-slate-900 placeholder:text-slate-400 soft-shadow transition-all resize-none" placeholder="Tell us about your dental needs..." rows="3"></textarea>
                    </div>
                  </div>
                  <button disabled={status === "sending"} className="w-full bg-primary hover:bg-primary/90 text-slate-900 font-bold py-4 rounded-lg transition-all transform active:scale-[0.98] shadow-lg shadow-primary/30 flex items-center justify-center gap-2 mt-2 disabled:opacity-70 disabled:cursor-not-allowed" type="submit">
                    <Send className="w-5 h-5" />
                    {status === "sending" ? "Booking..." : "Book Now"}
                  </button>
                  {status === "success" && (
                    <div className="text-center text-green-600 bg-green-50 p-3 rounded-lg text-sm font-semibold mt-2">
                      Request sent successfully! We'll be in touch soon.
                    </div>
                  )}
                  {status === "error" && (
                    <div className="text-center text-red-600 bg-red-50 p-3 rounded-lg text-sm font-semibold mt-2">
                      Failed to send request. Please try again later.
                    </div>
                  )}
                  <p className="text-[11px] text-center text-slate-400 mt-2 px-4">
                    By submitting, you agree to be contacted regarding your appointment request.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </main>
        {/* Specialized Services Section */}
        <section className="relative w-full px-4 lg:px-20 py-12 overflow-hidden bg-background-light">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#5ba4a4]/5 rounded-l-[100px] -z-10"></div>

          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="inline-flex items-center justify-center gap-2 text-primary font-bold tracking-widest uppercase text-xs mb-4">
                <span className="w-12 h-[2px] bg-primary"></span>
                Excellence in Dental Care
                <span className="w-12 h-[2px] bg-primary"></span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 font-display">
                Signature Treatments
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Specialized Dentistry Card */}
              <div className="lg:col-span-7 group">
                <div className="h-full relative bg-white rounded-[2rem] p-8 md:p-12 soft-shadow border border-slate-100 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-primary/10 transition-colors duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-8 border border-primary/20">
                      <Sparkles className="w-8 h-8 text-primary" />
                    </div>

                    <h3 className="text-3xl font-bold text-slate-900 mb-6 font-display">Specialized Dentistry</h3>
                    <p className="text-slate-600 mb-10 max-w-md text-lg">
                      Elevate your smile with our premium cosmetic and restorative procedures tailored to perfection.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                      {[
                        'Cosmetic Dentistry & Smile Makeover',
                        'Teeth Whitening',
                        'Invisalign & Braces',
                        'Dental Implants & Veneers',
                        'Cosmetic Fillings/Composite Bonding',
                        'Crowns and Bridges',
                        'Wisdom Teeth Removal',
                        'Pediatric Dentistry',
                        'Laser Dentistry',
                        'Dental Checkups & Hygiene'
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
                            <ShieldCheck className="w-4 h-4" />
                          </div>
                          <span className="text-slate-800 font-medium text-[15px] leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Root Canal Card */}
              <div className="lg:col-span-5 flex flex-col gap-8">
                <div className="group relative bg-slate-900 rounded-[2rem] p-8 md:p-12 soft-shadow overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-slate-900/20 flex-1">
                  <div className="absolute inset-0 bg-wave-pattern opacity-10"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#5ba4a4]/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 group-hover:bg-[#5ba4a4]/30 transition-colors duration-500"></div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-2 border border-white/10">
                        <Activity className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-3 font-display">Root Canal Treatment</h3>
                    </div>

                    <p className="text-slate-300 leading-relaxed text-lg mb-2">
                      Experience painless, precise, and efficient treatments designed to save your natural teeth. Our specialists utilize state-of-the-art technology to ensure absolute precision, fast recovery, and lasting relief from severe tooth pain.
                    </p>

                    {/* <div className="mt-auto inline-flex items-center text-primary font-bold text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                      Learn More <span className="ml-2">→</span>
                    </div> */}
                  </div>
                </div>

                {/* General Checkup Card */}
                <div className="group relative bg-white/60 backdrop-blur-md rounded-[2rem] p-8 md:p-12 soft-shadow border border-slate-200/60 overflow-hidden transition-all duration-500 hover:bg-white hover:shadow-xl hover:shadow-primary/5">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors duration-500"></div>

                  <div className="relative z-10 flex flex-col">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                        <Stethoscope className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 font-display">General Care</h3>
                    </div>

                    <p className="text-slate-600 leading-relaxed text-base">
                      Comprehensive checkups, scaling, polishing, and preventative care to maintain your perfect smile.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="mt-auto py-12 px-6 lg:px-20 bg-white border-t border-slate-200">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
            <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-3">
                <div className="w-36 overflow-hidden rounded-lg">
                  <img alt="Clinic Logo" className="w-full h-full object-cover" src="/logo.png" />
                </div>
                {/* <h2 className="text-slate-900 text-lg leading-tight tracking-tight uppercase">
                  <span className="font-bold text-[var(--color-primary)]">Dental </span>
                  Wellness
                </h2> */}
              </div>
              <p className="text-sm text-slate-500 max-w-xs">
                Providing world-class dental care with a focus on your comfort and well-being. Modern technology meets compassionate care.
              </p>              <div className="flex gap-4">
                <a href={'https://www.facebook.com/dentalwellnessclinic/'} target="_blank" className="size-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-all">
                  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
                </a>
                <a target="_blank" className="size-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-all" href="https://instagram.com/dentalwellnessbangalore?igshid=1o6ah0kox2k37">
                  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975-.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.352 2.612 6.765 6.97 6.965 1.28.058 1.688.072 4.948.072s3.667-.014 4.947-.072c4.351-.2 6.765-2.612 6.965-6.97.058-1.28.072-1.688.072-4.948s-.014-3.667-.072-4.947c-.2-4.352-2.612-6.765-6.97-6.965C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg>
                </a>
                <a target="_blank" className="size-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-all" href="https://www.linkedin.com/in/dr-shobha-nangrani-253671275/">
                  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
                <a target="_blank" className="size-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-all" href="https://www.dentalwellnessbangalore.com/#">
                  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.082 0 12 0 12s0 3.918.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.918 24 12 24 12s0-3.918-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4 text-center md:text-left lg:col-span-2 lg:pl-16">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Contact Us</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div className="text-sm text-slate-600">
                    <p className="font-semibold text-slate-800">Dental Wellness</p>
                    <p>#177, A Block, AECS Layout,</p>
                    <p>Diagonally opposite to Bangalore One</p>
                    <p>Brookefield, Bangalore-560037</p>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <Phone className="w-5 h-5 text-primary shrink-0" />
                    <a href="tel:+919980567389" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">+91 99805 67389</a>
                  </div>

                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <Mail className="w-5 h-5 text-primary shrink-0" />
                    <a href="mailto:dentalwellnessbangalore@gmail.com" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors break-all">dentalwellnessbangalore@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              © 2026 Dental Wellness. All rights reserved.
            </p>
            <p className="text-sm text-slate-400">
              Professional healthcare services.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
