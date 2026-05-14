import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Doctor Listing", href: "/doctors" },
      { name: "Contact Us", href: "/contact" },
    ]
  },
  {
    title: "Treatments",
    links: [
      { name: "Root Canal", href: "/service/root-canal" },
      { name: "Dental Implants", href: "/service/dental-implants" },
      { name: "Crowns & Bridges", href: "/service/crowns-and-bridges" },
      { name: "Dentures", href: "/service/dentures" },
      { name: "Wisdom Teeth", href: "/service/wisdom-teeth-removal" },
      { name: "Gum Treatment", href: "/service/gum-treatment" },
    ]
  },
  {
    title: "Cosmetic & Ortho",
    links: [
      { name: "Invisalign", href: "/service/invisalign" },
      { name: "Braces & Orthodontics", href: "/service/braces-orthodontics" },
      { name: "Teeth Whitening", href: "/service/teeth-whitening" },
      { name: "Cosmetic Fillings", href: "/service/cosmetic-fillings" },
      { name: "Dental Veneers", href: "/service/dental-veneers" },
    ]
  },
  {
    title: "General Dentistry",
    links: [
      { name: "Dental Checkups", href: "/service/dental-checkups" },
      { name: "Pediatric Dentistry", href: "/service/pediatric-dentistry" },
      { name: "Laser Dentistry", href: "/service/laser-dentistry" },
    ]
  }
];

export default function Footer() {
  const ContactDetails = () => (
    <>
      <div className="flex flex-col gap-4 text-slate-600 text-[14px] w-full">
        <div className="flex items-start gap-3 text-left">
          <div className="p-2.5 bg-white rounded-xl shadow-sm shrink-0 border border-slate-100 mt-0.5">
            <MapPin className="w-4 h-4 text-primary" />
          </div>
          <div>
            <p className="font-bold text-slate-900 mb-1 text-[15px]">Dental Wellness</p>
            <p className="leading-snug">#177, A Block, AECS Layout,<br/>Diagonally opposite Bangalore One.<br/>Brookefield, Bangalore-560037</p>
          </div>
        </div>

        <div className="flex items-center gap-3 group text-left">
          <div className="p-2.5 bg-white rounded-xl shadow-sm shrink-0 border border-slate-100 group-hover:border-primary/40 group-hover:shadow-md transition-all duration-300">
            <Phone className="w-4 h-4 text-primary" />
          </div>
          <a href="tel:+919980567389" className="font-semibold text-slate-800 hover:text-primary text-[15px] tracking-wide transition-colors">+91 99805 67389</a>
        </div>

        <div className="flex items-center gap-3 group text-left">
          <div className="p-2.5 bg-white rounded-xl shadow-sm shrink-0 border border-slate-100 group-hover:border-primary/40 group-hover:shadow-md transition-all duration-300">
            <Mail className="w-4 h-4 text-primary" />
          </div>
          <a href="mailto:dentalwellnessbangalore@gmail.com" className="font-medium hover:text-primary transition-colors break-all">dentalwellnessbangalore@gmail.com</a>
        </div>
      </div>

      <div className="flex gap-2.5 mt-2">
        <a className="size-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-500 hover:text-white hover:bg-primary hover:border-primary hover:-translate-y-1 hover:shadow-md transition-all duration-300" href="https://www.facebook.com/dentalwellnessclinic/" aria-label="Facebook">
          <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
        </a>
        <a className="size-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-500 hover:text-white hover:bg-primary hover:border-primary hover:-translate-y-1 hover:shadow-md transition-all duration-300" href="https://www.instagram.com/dentalwellness.aecs" aria-label="Instagram">
          <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.352 2.612 6.765 6.97 6.965 1.28.058 1.688.072 4.948.072s3.667-.014 4.947-.072c4.351-.2 6.765-2.612 6.965-6.97.058-1.28.072-1.688.072-4.948s-.014-3.667-.072-4.947c-.2-4.352-2.612-6.765-6.97-6.965C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg>
        </a>
      </div>
    </>
  );

  return (
    <footer className="mt-auto pt-10 lg:pt-14 bg-[#f8f9fa] border-t border-slate-200 font-Poppins">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Logo & Desktop Contact */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:w-[30%] order-1">
            <div className="flex flex-col items-center lg:items-start gap-4">
              <div className="w-32 overflow-hidden rounded-xl">
                <img alt="Clinic Logo" className="w-full h-full object-cover" src="/images/logo-2.png" />
              </div>
              <p className="text-slate-500 text-[14px] leading-snug max-w-xs">
                Transforming smiles with advanced, compassionate dental care tailored to your unique needs.
              </p>
            </div>

            {/* Subtle Divider (Mobile Only) */}
            <div className="w-16 h-1 bg-primary/20 rounded-full lg:hidden my-1"></div>
            
            <div className="hidden lg:flex flex-col gap-6 w-full">
              <ContactDetails />
            </div>
          </div>

          {/* Right Side: Links in 2 cols on mobile, 4 on desktop */}
          <div className="lg:w-[70%] grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 order-2">
            {footerLinks.map((section, idx) => (
              <div key={idx} className="flex flex-col">
                <h3 className="font-bold text-slate-900 mb-4 text-[15px] tracking-tight">{section.title}</h3>
                <ul className="flex flex-col gap-2.5 text-slate-600 text-[14px]">
                  {section.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <Link href={link.href} className="inline-block hover:text-primary hover:translate-x-1 transition-all duration-300 relative font-medium">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Mobile Contact (Shows after links) */}
          <div className="flex lg:hidden flex-col gap-6 order-3 mt-2 border-t border-slate-200 pt-6 w-full">
            <ContactDetails />
          </div>

        </div>
      </div>

      <div className="bg-[#fef9e6] py-3 border-t border-[#f2e6c5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 flex items-center justify-between">
          <p className="text-[10px] sm:text-[11px] font-medium text-slate-600 tracking-wide whitespace-nowrap overflow-hidden text-ellipsis" style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
            © {new Date().getFullYear()} Dental Wellness Clinic. All rights reserved | Powered by{' '}
            <a href="https://nyon.co.in/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">
              Nyon
            </a>
          </p>
          
          <a href="#" className="hidden sm:flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 hover:text-primary transition-colors group ml-4 shrink-0">
            Back to top
            <div className="p-1 bg-white rounded-full shadow-sm border border-[#e6d9b8] group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}
