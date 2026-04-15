import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto py-12 px-6 lg:px-20 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
        <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-26 overflow-hidden rounded-lg">
              <img alt="Clinic Logo" className="w-full h-full object-cover" src="/images/logo-2.png" />
            </div>
            {/* <h2 className="text-slate-900 text-lg leading-tight tracking-tight uppercase">
              <span className="font-bold text-[var(--color-primary)]">Dental </span>
              Wellness
            </h2> */}
          </div>
          <p className="text-sm text-slate-500 max-w-xs">
            Providing world-class dental care with a focus on your comfort and well-being. Modern technology meets compassionate care.
          </p>
          <div className="flex gap-4">
            <a className="size-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-all" href="https://www.facebook.com/dentalwellnessclinic/">
              <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
            </a>
            <a className="size-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-all" href="https://www.instagram.com/dentalwellness.aecs">
              <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.352 2.612 6.765 6.97 6.965 1.28.058 1.688.072 4.948.072s3.667-.014 4.947-.072c4.351-.2 6.765-2.612 6.965-6.97.058-1.28.072-1.688.072-4.948s-.014-3.667-.072-4.947c-.2-4.352-2.612-6.765-6.97-6.965C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg>
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
                <p>Diagonally opposite Bangalore One.</p>
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
          &copy; 2026 Dental Wellness Clinic. All rights reserved.
        </p>
        <p className="text-sm text-slate-400">
          Professional healthcare services.
        </p>
      </div>
    </footer>
  );
}
