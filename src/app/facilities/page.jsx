import Link from "next/link";
import Image from "next/image";

// Equipment items with matching local images
const EQUIPMENT = [
  {
    id: 1,
    title: "Vacuum (Type B) Autoclave",
    category: "Sterilization",
    tag: "Gold Standard",
    image: "/images/facility-img3.jpg",
    description:
      "The preferred method for sterilization of dental instruments. Our Type B Autoclave uses a triple-pulse, pre-vacuum phase to forcibly remove all residual air, enabling steam to penetrate every surface at 134°C for 3 minutes — the highest effective standard. Instruments remain sterile for up to 6 months in sealed pouches.",
    highlight: true,
  },
  {
    id: 2,
    title: "Ultrasonic Cleaner",
    category: "Sterilization",
    tag: "Pre-Clean",
    image: "/images/facility-img9.jpg",
    description:
      "Used instruments are first cleaned using an Ultrasonic Cleaner. The ultrasonic cavitation effect combined with detergent solutions removes blood, saliva, and debris from all instrument surfaces before autoclaving.",
    highlight: false,
  },
  {
    id: 3,
    title: "Intraoral Camera",
    category: "Diagnostics",
    tag: "Real-Time Imaging",
    image: "/images/facility-img7.jpg",
    description:
      "A handheld high-definition camera with a bright light source that displays enlarged, detailed images of your teeth, gums, and fillings in real time on screen — as you sit comfortably in the chair. Allows you to see exactly what the dentist sees.",
    highlight: false,
  },
  {
    id: 4,
    title: "RVG / Digital Radiography",
    category: "Imaging",
    tag: "50–90% Less Radiation",
    image: "/images/facility-img5.jpg",
    description:
      "Digital radiography uses electronic sensors instead of film to capture X-ray images displayed instantly on screen. Reduces radiation exposure by 50–90% compared to conventional radiographs, with instantly viewable, enhance-able images.",
    highlight: false,
  },
  {
    id: 5,
    title: "OPG — Digital Full Mouth X-Ray",
    category: "Imaging",
    tag: "Panoramic View",
    image: "/images/facility-img6.jpg",
    description:
      "An Orthopantomogram gives a full panoramic view of the jaw — displaying all upper and lower teeth on a single image, including unerupted ones. Used for orthodontic planning, wisdom tooth assessment, and TMJ evaluation.",
    highlight: false,
  },
  {
    id: 6,
    title: "Philips Zoom Whitening",
    category: "Cosmetic",
    tag: "8 Shades in 45 Min",
    image: "/images/facility-img8.jpg",
    description:
      "The #1 patient-requested professional whitening brand. Philips Zoom is an in-office whitening light that whitens teeth by up to 8 shades in just 45 minutes. Safe, pain-free, and trusted by over 10 million people worldwide.",
    highlight: false,
  },
  {
    id: 7,
    title: "Rotary Endodontic Handpiece",
    category: "Endodontics",
    tag: "Root Canal Technology",
    image: "/images/facility-img2.jpg",
    description:
      "State-of-the-art rotary NiTi instruments replace traditional stainless-steel manual files for root canal treatment. Faster, more efficient, and more precise — resulting in superior canal preparation and better patient outcomes.",
    highlight: false,
  },
  {
    id: 8,
    title: "Lead Aprons & Thyroid Collars",
    category: "Safety",
    tag: "Radiation Protection",
    image: "/images/facility-img4.jpg",
    description:
      "Always used when taking X-rays to protect patients and staff from ionizing radiation. Lead aprons and thyroid collars act as a complete radiation shield, demonstrating our uncompromising commitment to patient safety.",
    highlight: false,
  },
  {
    id: 9,
    title: "Autoclavable Pouches & Disposables",
    category: "Sterilization",
    tag: "Single Use Only",
    image: "/images/facility-img1.jpg",
    description:
      "Cleaned instruments are packed in disposable autoclavable pouches and seal-opened only at point of use. Needles, syringes, gloves, masks, and suction tips are all single-use and discarded in front of the patient — complete transparency guaranteed.",
    highlight: false,
  },
];

const CATEGORY_STYLE = {
  Sterilization: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Diagnostics:   "bg-blue-50   text-blue-700   border-blue-200",
  Imaging:       "bg-violet-50 text-violet-700  border-violet-200",
  Cosmetic:      "bg-amber-50  text-amber-700   border-amber-200",
  Endodontics:   "bg-rose-50   text-rose-700    border-rose-200",
  Safety:        "bg-slate-100 text-slate-700   border-slate-200",
};

const BRANDS = [
  "3M", "GC Corporation", "Coltene Whaledent", "Ivoclar Vivadent",
  "Dentsply Sirona", "SybronEndo", "Satelec Acteon", "Nobel Biocare Implants",
];

export default function FacilitiesPage() {
  const featured = EQUIPMENT.find((e) => e.highlight);
  const rest = EQUIPMENT.filter((e) => !e.highlight);

  return (
    <main className="bg-white min-h-screen">

      {/* ── Page Header ─────────────────────────────────────────────────── */}
      <section className="bg-slate-950 pt-28 pb-16 px-6 lg:px-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-amber-400/5 blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400 mb-4 block">
            Dental Wellness, Bangalore
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-none mb-4">
            STATE-OF-THE-ART <br />
            <span className="text-amber-400 italic font-light">EQUIPMENT.</span>
          </h1>
          <p className="text-slate-400 text-base font-light max-w-xl mt-6 leading-relaxed">
            Every instrument in our clinic is sourced from globally trusted brands and maintained to the highest sterilization standards, following ADA-approved protocols.
          </p>
        </div>
      </section>

      {/* ── Featured Equipment (Type B Autoclave — full bleed) ──────────── */}
      {featured && (
        <section className="relative bg-slate-900 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">
            {/* Image — full bleed left */}
            <div className="relative min-h-[320px] lg:min-h-0">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-slate-900 hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent lg:hidden" />
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center px-10 py-16 lg:py-24">
              <div className="flex items-center gap-3 mb-6">
                <span className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border ${CATEGORY_STYLE[featured.category]}`}>
                  {featured.category}
                </span>
                <span className="px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-amber-400 text-slate-900">
                  {featured.tag}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                {featured.title}
              </h2>
              <p className="text-slate-300 text-base leading-relaxed font-light mb-8 max-w-lg">
                {featured.description}
              </p>
              <Link
                href="/contact"
                className="inline-flex self-start items-center gap-2 px-7 py-3.5 bg-amber-400 text-slate-900 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-amber-300 transition-colors duration-300"
              >
                Book a Visit
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── Equipment Grid ───────────────────────────────────────────────── */}
      <section className="py-20 px-6 lg:px-16 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12 border-b border-slate-200 pb-8 gap-6 flex-wrap">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              ALL EQUIPMENT
            </h2>
            <p className="text-slate-500 text-sm font-light max-w-sm">
              {EQUIPMENT.length} pieces of advanced dental equipment — all maintained to the highest clinical standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {rest.map((item) => (
              <article
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                  {/* Category badge over image */}
                  <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                    <span className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border backdrop-blur-sm ${CATEGORY_STYLE[item.category]}`}>
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-amber-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <span className="shrink-0 px-2.5 py-1 rounded-full bg-amber-50 text-amber-600 text-[9px] font-bold uppercase tracking-widest whitespace-nowrap border border-amber-200">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Imported Materials Strip ─────────────────────────────────────── */}
      <section className="bg-white py-16 px-6 lg:px-16 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 justify-between">
            <div className="shrink-0">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-2 block">Trusted Brands</span>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900">
                IMPORTED DENTAL MATERIALS
              </h3>
              <p className="text-slate-500 text-sm font-light mt-2 max-w-sm">
                All materials sourced from reputed international companies. Zero compromise on quality.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {BRANDS.map((brand) => (
                <span
                  key={brand}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-sm font-semibold hover:border-amber-400 hover:bg-amber-50 transition-all duration-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-slate-950 py-20 px-6 lg:px-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.07),transparent_65%)] pointer-events-none" />
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Experience it <span className="text-amber-400 italic font-light">yourself.</span>
          </h2>
          <p className="text-slate-400 font-light leading-relaxed mb-8">
            Book an appointment and see our world-class facilities in person.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-amber-400 text-slate-900 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-amber-300 transition-colors duration-300"
          >
            Book Appointment
          </Link>
        </div>
      </section>
    </main>
  );
}
