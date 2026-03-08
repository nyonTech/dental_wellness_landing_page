"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ShieldCheck, HeartPulse, User, Mail, MessageSquare, Send, Stethoscope, Sparkles, Activity } from "lucide-react";


export default function ComingSoon() {
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
    <>
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 lg:py-24">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content: Hero Text */}
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-primary font-bold tracking-widest uppercase text-xs">
              <span className="w-8 h-[2px] bg-primary"></span>
              13 Years of Restoring Smiles
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
    </>
  )
}