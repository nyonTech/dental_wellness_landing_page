import React from "react";

export default function AboutPage() {
  return (
    <main className="bg-surface text-on-surface font-body selection:bg-primary-container-about">
      {/* Section 1: Hero Editorial */}
      <section className="relative min-h-screen flex flex-col justify-center px-8 pt-20 pb-40 overflow-hidden">
        <div className="max-w-[1440px] mx-auto w-full grid grid-cols-12 gap-8 items-center relative z-10">
          <div className="col-span-12 lg:col-span-8">
            <span className="label-md uppercase tracking-[0.3em] text-on-surface-variant mb-8 block">
              Est. 2014 — Zurich
            </span>
            <h1 className="font-headline font-black editorial-text-bleed text-[clamp(4rem,12vw,10rem)] text-on-surface mb-12">
              RADICAL <br />
              <span className="text-primary-about italic">PRECISION.</span>
            </h1>
            <p className="max-w-md text-lg font-light leading-relaxed text-secondary border-l-4 border-primary-container-about pl-8">
              We don't just practice dentistry; we curate smiles with the meticulous eye of an editor and the technical rigor of an engineer.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-4 relative mt-12 lg:mt-0">
            <div className="aspect-[3/4] overflow-hidden rounded-xl shadow-2xl relative">
              <img
                alt="Professional dental specialist in a high-end clinic setting"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg6AF5G5yskORkgrTg9_5W0-nI-p4xxtV-omiQoXQN0h5-0DRE547mndkhKc3Yb5W9CVr-atY4aYCaeLUR25mir7tbQONCw3p2SMhMr0bO9QzlLev5PcU3xBNkIpuF6l1mH083feTwCXPVuAKPYjtZSz4PxDPmQ_reepdxPZJ9jf1tAD5g-kpvXDdBSpshTIdiKdEHPECsRjh9-gDGdAkrMsb9C91wwg8Lo5YuosBeg5fFwYT748bXEIU_TEsaZPM9U9rduUB3sU0"
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
      <section className="bg-surface-container-low py-32 px-8">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-12 md:col-span-5 order-2 md:order-1">
              <div className="space-y-24">
                <div className="relative pl-12">
                  <span className="absolute left-0 top-0 font-headline font-black text-6xl text-primary-container-about opacity-50">
                    01
                  </span>
                  <h3 className="font-headline font-bold text-2xl mb-4">The Foundation</h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    Founded by Dr. Elena Vance, Clinical Atelier was born from a singular obsession: Why should medical care feel industrial? We stripped back the clinical noise to focus on architectural symmetry and patient psychology.
                  </p>
                </div>
                <div className="relative pl-12 translate-x-12">
                  <span className="absolute left-0 top-0 font-headline font-black text-6xl text-primary-container-about opacity-50">
                    02
                  </span>
                  <h3 className="font-headline font-bold text-2xl mb-4">The Evolution</h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    By 2018, we integrated AI-driven facial mapping with traditional Swiss craftsmanship, ensuring every veneer is not just a tooth, but a structural masterpiece designed for the individual's unique bone structure.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 order-1 md:order-2">
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="h-[600px] rounded-xl overflow-hidden mt-12 shadow-lg">
                  <img
                    alt="Vintage dental tools reimagined"
                    className="w-full h-full object-cover grayscale"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-Sdm5lZl01suRQXLcqL8cooWc3en2jZlr2C2p_pQAV-FHPUttOJ2LAfk3nlekjm529HXBoKIkQ0US_nWS_UlwPAkO8oKhkiJUIMS5rxZHO32LPjhPvfSxzHwi9O9SSlwfNE493PH-Q6Vg-4V0rsy6EZamPEhC5JnnGfwWZWNvQs1oPKbUzCEpGNWq0Euu0kFaDkkt7Gzk_UeCE6nnR3vMB8D7TR-rIMw5T-M308rQiMpBm84XHtJSbO2D07a7KT9V8gb17VCswP8"
                  />
                </div>
                <div className="h-[400px] rounded-xl overflow-hidden shadow-lg">
                  <img
                    alt="Modern clinical architecture"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA68q2PFwgLVbnzRqgnbYJdHYRcB6fd3JAEWYxFJu3jiptrhLUTfZ5sVquOAD-liU8EmJTOtI-Tj9xtxoSW4_nWCk9r_8ETdIAIWwDwvgE6154n5U1LVIJ3XKrdtr2ZofhqvED9gqTgTJIWn-SvXoVAl-qLX-9M3FSbsRZ_nZvqzh55BeJt0jvwsWWb3T3Q9LkXsa9PSMxE0MQx9os625_QShWXRQlW00EQcfmvHIWTeWrdBi9xr4MNrByuRn8avYt-nDxHlKjewGU"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Mission & Values (3D Feel/Icons) */}
      <section className="py-32 px-8 bg-surface">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-8">
            <h2 className="font-headline font-black text-6xl max-w-xl">
              CORE <span className="text-primary-fixed-dim italic">IDEOLOGY.</span>
            </h2>
            <p className="text-on-surface-variant uppercase tracking-widest text-xs font-semibold">
              Quality over Volume. Artistry over Routine.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline-variant/20">
            {/* Value 1 */}
            <div className="bg-surface p-12 group hover:bg-on-background transition-colors duration-500">
              <div className="mb-12 inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-container-about text-on-primary-container-about group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>biotech</span>
              </div>
              <h4 className="font-headline font-bold text-3xl mb-6 group-hover:text-white transition-colors">Precision</h4>
              <p className="text-on-surface-variant group-hover:text-surface-container transition-colors leading-relaxed">
                Microscopic interventions that preserve 95% more healthy tissue than standard traditional methods.
              </p>
            </div>
            {/* Value 2 */}
            <div className="bg-surface p-12 group hover:bg-on-background transition-colors duration-500">
              <div className="mb-12 inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-container-about text-on-primary-container-about group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>spa</span>
              </div>
              <h4 className="font-headline font-bold text-3xl mb-6 group-hover:text-white transition-colors">Comfort</h4>
              <p className="text-on-surface-variant group-hover:text-surface-container transition-colors leading-relaxed">
                A multi-sensory environment designed to suppress clinical anxiety and promote cognitive relaxation.
              </p>
            </div>
            {/* Value 3 */}
            <div className="bg-surface p-12 group hover:bg-on-background transition-colors duration-500">
              <div className="mb-12 inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-container-about text-on-primary-container-about group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>palette</span>
              </div>
              <h4 className="font-headline font-bold text-3xl mb-6 group-hover:text-white transition-colors">Artistry</h4>
              <p className="text-on-surface-variant group-hover:text-surface-container transition-colors leading-relaxed">
                Smiles designed as high-fashion editorials—customized to your facial geometry and personal aura.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: The Clinical Atelier (Bento Grid) */}
      <section className="py-32 px-8 bg-surface-container-highest">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-12 grid-rows-2 gap-4 h-[800px]">
            <div className="col-span-12 md:col-span-7 row-span-2 relative overflow-hidden rounded-xl group">
              <img
                alt="Luxury dental clinic interior"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaGZZWo3ym3NsT09y8fieesF4NwwJVSPGC9bQd_-s52FF2x7D2jFfkOXjy92qihhUZN68ycwyoQzxFL3LcMoOlcmnv3qtVfYj-rZQ0wSaVWHC-zsctB74jvT0WiJtzq-5E4P50rqT5ZxrmBMSTvKXOqHPMFJ0-h9jT28Vb1tOmUgl47CuYUVFh48Mu27Y3yhsryKQxvnhii-EquREE9H_E26hXRgklUw4omIgjeSW0w-fGp-Qlvec61SIugIi5RWqqYTlgsvbylrQ"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-background/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h5 className="font-headline font-bold text-3xl">The Sky Suite</h5>
                <p className="opacity-80">Unrivaled views meet unparalleled care.</p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 row-span-1 relative overflow-hidden rounded-xl">
              <img
                alt="Advanced dental technology"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBG-3gc_rOyLpw6zNSL0P26tIo5kdxniygI1OgW-zvvysB7wYzYlyRL144JE_8dKwSv_t41f-XMZTMQqryRmQG_NLSjOg7zQMDOeSk_V9wIbIMaeQjQwF9oLAPpWQ3pOt7yq1kx0fZky-YG0IeLrkZqBoTDxaUr3Hgu9-KBG7YL6W2KUQFiDdztU3nqfFJjRgG8x-5PFp6b-EzW4QTzK2f3rNJLfSTdvRcyCayNGwJj5iNDJILoqwx86dgN3RBikNqAIWg6LK0LsM"
              />
            </div>
            <div className="col-span-12 md:col-span-5 row-span-1 bg-on-background p-12 flex flex-col justify-center rounded-xl">
              <h5 className="text-primary-container-about font-headline font-black text-4xl mb-4 italic">ESTHETICS LAB.</h5>
              <p className="text-surface-container-low text-lg leading-relaxed">
                Our in-house ceramicists work alongside our doctors to finalize every restoration in real-time, ensuring perfect shade matching under natural light.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Sticky CTA Area */}
      <section className="py-40 px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-container-about/20 via-surface to-surface"></div>
        <div className="max-w-2xl mx-auto">
          <span className="label-md uppercase tracking-widest text-primary-about font-bold mb-6 block">Ready for the Atelier Experience?</span>
          <h2 className="font-headline font-black text-6xl mb-12">THE TRANSFORMATION AWAITS.</h2>
          <button className="group relative px-12 py-6 bg-on-background text-white rounded-full font-headline font-bold text-xl overflow-hidden">
            <span className="relative z-10">Join Our Transformation</span>
            <div className="absolute inset-0 bg-primary-about translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
        </div>
      </section>

      {/* Fixed Floating Action Element */}
      <div className="fixed bottom-8 right-8 z-40 group">
        <div className="flex flex-col items-end gap-4">
          <div className="bg-on-background text-white p-4 rounded-xl shadow-2xl scale-0 group-hover:scale-100 transition-transform origin-bottom-right duration-300">
            <p className="text-[10px] uppercase tracking-widest mb-1 opacity-60">Concierge Desk</p>
            <p className="font-headline font-bold">+41 44 211 00 00</p>
          </div>
          <button className="w-16 h-16 bg-primary-container-about text-on-primary-container-about rounded-full shadow-2xl flex items-center justify-center hover:rotate-90 transition-transform duration-500">
            <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>add</span>
          </button>
        </div>
      </div>
    </main>
  );
}