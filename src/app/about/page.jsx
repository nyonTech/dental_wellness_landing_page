import React from "react";
import ExpertTeamSection from "@/components/ExpertTeamSection";
import { TransformationCTA } from "@/components/ServiceListing";

export default function AboutPage() {
  return (
    <main className="bg-surface text-primary-about font-body selection:bg-primary-container-about">
      {/* Section 1: Hero Editorial */}
      <section className="relative min-h-screen flex flex-col justify-center px-8 pt-20 pb-40 overflow-hidden">
        <div className="max-w-[1440px] mx-auto w-full grid grid-cols-12 gap-8 items-center relative z-10">
          <div className="col-span-12 lg:col-span-8">
            <span className="label-md uppercase tracking-[0.3em] text-primary-about opacity-80 mb-8 block">
              Est. 2008 — Bangalore
            </span>
            <h1 className="font-headline font-black editorial-text-bleed text-[clamp(4rem,12vw,10rem)] text-black mb-12">
              DENTAL <br />
              <span className="text-primary italic">WELLNESS.</span>
            </h1>
            <p className="max-w-md text-lg font-light leading-relaxed text-secondary border-l-4 border-primary-container-about pl-8">
              We don't just practice dentistry; we curate smiles in a clean, clutter-free, and pleasant ambience clubbed with an exceptional treatment experience.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-4 relative mt-12 lg:mt-0">
            <div className="aspect-[3/4] overflow-hidden rounded-xl shadow-2xl relative">
              <img
                alt="Professional dental specialist in a high-end clinic setting"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                src="/images/about-img1.jpg"
              />
              <div className="absolute inset-0 bg-primary-about/10 mix-blend-multiply"></div>
            </div>
            <div className="absolute -bottom-10 -left-10 bg-on-surface text-white p-8 max-w-[240px] hidden md:block">
              <p className="font-headline font-bold text-4xl leading-none">99.8%</p>
              <p className="text-[10px] uppercase tracking-widest mt-2 opacity-60">
                Accuracy in Prosthetic Alignment
              </p>
            </div>
          </div>
        </div>
        {/* Background Decorative Text */}
        <div className="absolute right-[-5%] top-[20%] font-headline font-black text-[20vw] opacity-[0.03] select-none whitespace-nowrap pointer-events-none">
          ATELIER
        </div>
      </section>

      {/* Section 2: Our Story (Asymmetric Narrative) */}
      <section className="bg-surface-container-low py-24 lg:py-40 px-6 lg:px-8 relative overflow-hidden">
        {/* Soft decorative blur */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary-container-about/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2"></div>

        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

            {/* Left Narrative Timeline */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="mb-16">
                <span className="label-md uppercase tracking-[0.2em] text-primary-about font-bold mb-4 block">The Journey</span>
                <h2 className="font-headline font-black text-5xl md:text-6xl text-primary-about leading-tight mb-6">
                  OUR <span className="font-light italic text-primary">STORY.</span>
                </h2>
                <p className="text-secondary leading-relaxed max-w-md">
                  From a small specialized clinic to a full-fledged dental wellness center, our journey has been defined by an unwavering commitment to patient care and clinical excellence.
                </p>
              </div>

              <div className="space-y-16 pl-4 border-l-2 border-primary-container-about/30 relative">

                {/* Story Step 1 */}
                <div className="relative pl-8 group">
                  <div className="absolute left-[-21px] top-1 w-10 h-10 rounded-full bg-surface border-4 border-surface-container-low shadow-md flex items-center justify-center group-hover:bg-primary-container-about transition-colors duration-500">
                    <div className="w-2 h-2 rounded-full bg-primary-about group-hover:bg-white transition-colors duration-500"></div>
                  </div>
                  <span className="font-headline font-black text-6xl md:text-7xl text-primary-container-about opacity-20 absolute -top-10 -left-6 drop-shadow-sm group-hover:text-primary-about group-hover:opacity-10 transition-all duration-700">
                    01
                  </span>
                  <div className="relative z-10">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">2008</span>
                    <h3 className="font-headline font-bold text-3xl mb-4 text-primary-about">The Foundation</h3>
                    <p className="text-on-surface-variant leading-relaxed font-light">
                      Founded by Dr. Shobha Nangrani, Dental Wellness was established to bridge the gap between advanced specialized care and personal, empathetic patient interactions.
                    </p>
                  </div>
                </div>

                {/* Story Step 2 */}
                <div className="relative pl-8 group lg:translate-x-8">
                  <div className="absolute left-[-21px] lg:left-[-53px] top-1 w-10 h-10 rounded-full bg-surface border-4 border-surface-container-low shadow-md flex items-center justify-center group-hover:bg-primary-container-about transition-colors duration-500">
                    <div className="w-2 h-2 rounded-full bg-primary-about group-hover:bg-white transition-colors duration-500"></div>
                  </div>
                  <span className="font-headline font-black text-6xl md:text-7xl text-primary-container-about opacity-20 absolute -top-10 -left-6 lg:-left-14 drop-shadow-sm group-hover:text-primary-about group-hover:opacity-10 transition-all duration-700">
                    02
                  </span>
                  <div className="relative z-10">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">The Catalyst</span>
                    <h3 className="font-headline font-bold text-3xl mb-4 text-primary-about">Clinical Excellence</h3>
                    <p className="text-on-surface-variant leading-relaxed font-light">
                      With top-rated expertise spanning Endodontics, Oral Surgery, and Orthodontics, our practice quickly became recognized for solving complex dental cases ethically and painlessly.
                    </p>
                  </div>
                </div>

                {/* Story Step 3 */}
                <div className="relative pl-8 group">
                  <div className="absolute left-[-21px] top-1 w-10 h-10 rounded-full bg-surface border-4 border-surface-container-low shadow-md flex items-center justify-center group-hover:bg-primary-container-about transition-colors duration-500">
                    <div className="w-2 h-2 rounded-full bg-primary-about group-hover:bg-white transition-colors duration-500"></div>
                  </div>
                  <span className="font-headline font-black text-6xl md:text-7xl text-primary-container-about opacity-20 absolute -top-10 -left-6 drop-shadow-sm group-hover:text-primary-about group-hover:opacity-10 transition-all duration-700">
                    03
                  </span>
                  <div className="relative z-10">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">Present Day</span>
                    <h3 className="font-headline font-bold text-3xl mb-4 text-primary-about">The Evolution</h3>
                    <p className="text-on-surface-variant leading-relaxed font-light">
                      Today, we operate a highly specialized office combining global technology brands with an incredibly skilled panel of dentists. We prioritize uncompromised safety, stringent hygiene, and breathtaking results.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Images Layout */}
            <div className="lg:col-span-7 order-1 lg:order-2 h-full">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 h-full relative">

                {/* Decorative background element for images */}
                <div className="absolute -inset-10 bg-surface rounded-[40px] shadow-sm -z-10 hidden sm:block"></div>

                {/* Left Column in Collage */}
                <div className="sm:col-span-6 flex flex-col gap-6 sm:pt-16">
                  {/* Image 1 (Visible everywhere) */}
                  <div className="h-[250px] sm:h-[350px] rounded-3xl overflow-hidden shadow-xl group relative">
                    <img
                      alt="Modern clinical architecture"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      src="/images/facility-img2.jpg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>

                  {/* Stats Card */}
                  <div className="bg-primary-about text-white p-8 rounded-3xl shadow-xl flex flex-col justify-center min-h-[160px] sm:min-h-[200px] relative overflow-hidden">
                    <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-[30px]"></div>
                    <h4 className="font-headline font-black text-4xl mb-2 relative z-10">18+</h4>
                    <p className="text-sm uppercase tracking-widest text-primary-container-about font-bold relative z-10">Years of Legacy</p>
                  </div>

                  {/* Image 3 (Hidden on mobile) */}
                  <div className="hidden sm:block h-[200px] rounded-3xl overflow-hidden shadow-xl group relative">
                    <img
                      alt="Advanced dental facilities"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale hover:grayscale-0 mix-blend-multiply opacity-90 transition-all"
                      src="/images/facility-img3.jpg"
                    />
                    <div className="absolute inset-0 bg-primary-about/10 group-hover:bg-transparent transition-colors duration-700 pointer-events-none"></div>
                  </div>
                </div>

                {/* Right Column in Collage */}
                <div className="sm:col-span-6 flex flex-col gap-6">
                  {/* Image 2 (Visible everywhere) */}
                  <div className="h-[300px] sm:h-[400px] rounded-3xl overflow-hidden shadow-xl group relative">
                    <img
                      alt="Vintage dental tools reimagined"
                      className="w-full h-full object-cover grayscale mix-blend-multiply opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                      src="/images/facility-img1.jpg"
                    />
                    <div className="absolute inset-0 bg-primary-about/10 group-hover:bg-transparent transition-colors duration-700 pointer-events-none"></div>
                  </div>

                  {/* Image 4 (Hidden on mobile) */}
                  <div className="hidden sm:block h-[250px] rounded-3xl overflow-hidden shadow-xl group relative">
                    <img
                      alt="Comfortable clinic space"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      src="/images/facility-img4.jpg"
                    />
                  </div>

                  {/* Image 5 (Hidden on mobile) */}
                  <div className="hidden sm:block h-[180px] rounded-3xl overflow-hidden shadow-xl group relative">
                    <img
                      alt="Dental treatment room"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale hover:grayscale-0 mix-blend-multiply opacity-90 transition-all"
                      src="/images/facility-img5.jpg"
                    />
                    <div className="absolute inset-0 bg-primary-about/10 group-hover:bg-transparent transition-colors duration-700 pointer-events-none"></div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 3: Mission & Values (3D Feel/Icons) */}
      <section className="py-32 px-8 bg-surface relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-container-about/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-fixed/5 rounded-full blur-[80px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12 border-b border-outline-variant/30 pb-16">
            <div className="max-w-3xl">
              <span className="label-md uppercase tracking-[0.2em] text-primary-about font-bold mb-6 block">Our Philosophy</span>
              <h2 className="font-headline font-black text-6xl md:text-7xl leading-tight text-primary-about">
                CORE <span className="text-primary-about italic font-light">IDEOLOGY.</span>
              </h2>
            </div>
            <div className="max-w-md lg:text-right">
              <p className="text-secondary leading-relaxed mb-6">
                Our foundation is built on uncompromising principles. We believe in delivering dental excellence through a perfect harmony of advanced science and compassionate care.
              </p>
              <p className="text-primary-about opacity-90 uppercase tracking-[0.3em] text-xs font-extrabold bg-primary-container-about/20 inline-block px-4 py-2 rounded-full">
                Quality over Volume. Artistry over Routine.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Value 1 */}
            <div className="group relative bg-surface-container-low rounded-3xl p-10 hover:bg-on-surface transition-all duration-700 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 border border-outline-variant/10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container-about/20 rounded-bl-full -mr-8 -mt-8 transition-transform duration-700 group-hover:scale-150 group-hover:bg-primary-container-about/10"></div>
              <div className="relative z-10">
                <div className="mb-10 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-surface shadow-md text-primary-about group-hover:bg-primary-container-about group-hover:-translate-y-2 transition-all duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
                </div>
                <h4 className="font-headline font-bold text-3xl mb-4 group-hover:text-white transition-colors text-on-surface">Precision</h4>
                <p className="text-on-surface-variant group-hover:text-surface-container transition-colors leading-relaxed font-light">
                  Using state-of-the-art equipment and materials sourced from reputed international companies without compromising patient safety. Every micro-millimeter matters.
                </p>
              </div>
            </div>

            {/* Value 2 */}
            <div className="group relative bg-surface-container-low rounded-3xl p-10 hover:bg-on-surface transition-all duration-700 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 border border-outline-variant/10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container-about/20 rounded-bl-full -mr-8 -mt-8 transition-transform duration-700 group-hover:scale-150 group-hover:bg-primary-container-about/10"></div>
              <div className="relative z-10">
                <div className="mb-10 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-surface shadow-md text-primary-about group-hover:bg-primary-container-about group-hover:-translate-y-2 transition-all duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></svg>
                </div>
                <h4 className="font-headline font-bold text-3xl mb-4 group-hover:text-white transition-colors text-on-surface">Comfort</h4>
                <p className="text-on-surface-variant group-hover:text-surface-container transition-colors leading-relaxed font-light">
                  A pleasant ambience designed to suppress anxiety. We've transformed the clinical environment into a serene space ensuring you leave with a happy, relaxed smile.
                </p>
              </div>
            </div>

            {/* Value 3 */}
            <div className="group relative bg-surface-container-low rounded-3xl p-10 hover:bg-on-surface transition-all duration-700 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 border border-outline-variant/10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container-about/20 rounded-bl-full -mr-8 -mt-8 transition-transform duration-700 group-hover:scale-150 group-hover:bg-primary-container-about/10"></div>
              <div className="relative z-10">
                <div className="mb-10 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-surface shadow-md text-primary-about group-hover:bg-primary-container-about group-hover:-translate-y-2 transition-all duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5" /><circle cx="17.5" cy="10.5" r=".5" /><circle cx="8.5" cy="7.5" r=".5" /><circle cx="6.5" cy="12.5" r=".5" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" /></svg>
                </div>
                <h4 className="font-headline font-bold text-3xl mb-4 group-hover:text-white transition-colors text-on-surface">Artistry</h4>
                <p className="text-on-surface-variant group-hover:text-surface-container transition-colors leading-relaxed font-light">
                  Hand-picked specialists delivering feasible and affordable treatment options customized to your diagnosis. Dentistry is not just a science, it's an art form.
                </p>
              </div>
            </div>

            {/* Value 4 */}
            <div className="group relative bg-surface-container-low rounded-3xl p-10 hover:bg-on-surface transition-all duration-700 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 border border-outline-variant/10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container-about/20 rounded-bl-full -mr-8 -mt-8 transition-transform duration-700 group-hover:scale-150 group-hover:bg-primary-container-about/10"></div>
              <div className="relative z-10">
                <div className="mb-10 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-surface shadow-md text-primary-about group-hover:bg-primary-container-about group-hover:-translate-y-2 transition-all duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="M8 11h8" /></svg>
                </div>
                <h4 className="font-headline font-bold text-3xl mb-4 group-hover:text-white transition-colors text-on-surface">Integrity</h4>
                <p className="text-on-surface-variant group-hover:text-surface-container transition-colors leading-relaxed font-light">
                  We believe in 100% transparency. From diagnosis to customized treatment plans and costs, you will always be fully informed with no hidden surprises.
                </p>
              </div>
            </div>

            {/* Value 5 */}
            <div className="group relative bg-surface-container-low rounded-3xl p-10 hover:bg-on-surface transition-all duration-700 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 border border-outline-variant/10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container-about/20 rounded-bl-full -mr-8 -mt-8 transition-transform duration-700 group-hover:scale-150 group-hover:bg-primary-container-about/10"></div>
              <div className="relative z-10">
                <div className="mb-10 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-surface shadow-md text-primary-about group-hover:bg-primary-container-about group-hover:-translate-y-2 transition-all duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
                </div>
                <h4 className="font-headline font-bold text-3xl mb-4 group-hover:text-white transition-colors text-on-surface">Advancement</h4>
                <p className="text-on-surface-variant group-hover:text-surface-container transition-colors leading-relaxed font-light">
                  Continuous adoption of next-generation dental technology, from 3D imaging to painless automated tools, ensuring precise and efficient treatments.
                </p>
              </div>
            </div>

            {/* Value 6 */}
            <div className="group relative bg-surface-container-low rounded-3xl p-10 hover:bg-on-surface transition-all duration-700 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 border border-outline-variant/10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container-about/20 rounded-bl-full -mr-8 -mt-8 transition-transform duration-700 group-hover:scale-150 group-hover:bg-primary-container-about/10"></div>
              <div className="relative z-10">
                <div className="mb-10 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-surface shadow-md text-primary-about group-hover:bg-primary-container-about group-hover:-translate-y-2 transition-all duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                </div>
                <h4 className="font-headline font-bold text-3xl mb-4 group-hover:text-white transition-colors text-on-surface">Hygiene</h4>
                <p className="text-on-surface-variant group-hover:text-surface-container transition-colors leading-relaxed font-light">
                  Impeccable sterilization protocols exceeding international standards. We maintain a zero-compromise approach to cross-infection control and clinical cleanliness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: The Team */}
      <ExpertTeamSection />

      {/* Section 5: Sticky CTA Area */}
      {/* <section className="py-40 px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-container-about/20 via-surface to-surface"></div>
        <div className="max-w-2xl mx-auto">
          <span className="label-md uppercase tracking-widest text-primary-about font-bold mb-6 block">Ready for a Happy, Healthy Smile?</span>
          <h2 className="font-headline font-black text-6xl mb-12 text-primary-about">THE TRANSFORMATION AWAITS.</h2>
          <button className="group relative px-12 py-6 bg-on-background text-white rounded-full font-headline font-bold text-xl overflow-hidden">
            <span className="relative z-10">Join Our Transformation</span>
            <div className="absolute inset-0 bg-primary-about translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
        </div>
      </section> */}

      <TransformationCTA />
    </main>
  );
}