import React from 'react';

const ServiceCard = ({
  category,
  categoryColor,
  title,
  description,
  imageSrc,
  imageAlt,
  icon,
  iconBgColor,
  iconColor,
  linkText,
  isSignature = false,
  isEmergency = false
}) => {
  // Determine base classes depending on the card type
  let cardBgClass = "bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800";
  let textClass = "text-slate-500 dark:text-slate-400";
  
  if (isSignature) {
    cardBgClass = "bg-primary/10 dark:bg-primary/5 border-primary/20";
    textClass = "text-slate-600 dark:text-slate-400";
  } else if (title === "Dental Implants") {
    cardBgClass = "bg-slate-900 dark:bg-slate-800 text-white border-transparent";
    textClass = "text-slate-400";
  }

  return (
    <div className={`group relative flex flex-col justify-between p-8 rounded-3xl border hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ${cardBgClass}`}>
      {/* Optional Hover Icon Top Right */}
      {title === "Invisalign®" && (
        <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="material-symbols-outlined text-4xl text-primary">visibility_off</span>
        </div>
      )}

      <div>
        <span className={`text-xs font-bold tracking-widest uppercase ${categoryColor || 'text-primary'}`}>
          {category}
        </span>
        <h3 className="text-3xl font-black mt-4 mb-2 tracking-tighter">{title}</h3>
        <p className={`mb-8 leading-relaxed ${textClass}`}>
          {description}
        </p>
      </div>

      {imageSrc ? (
        <div className={`relative h-48 mb-8 rounded-2xl overflow-hidden ${title === "Root Canal" ? "grayscale" : ""} ${title === "Oral Surgery" ? "grayscale group-hover:grayscale-0 transition-all" : ""}`}>
          <img 
            className="w-full h-full object-cover" 
            alt={imageAlt || title} 
            src={imageSrc} 
          />
        </div>
      ) : (
        <div className={`${iconBgColor || 'bg-slate-100 dark:bg-slate-800'} h-48 mb-8 rounded-2xl flex items-center justify-center`}>
          <span className={`material-symbols-outlined text-7xl ${iconColor || 'text-primary'} ${title === 'Laser Care' ? 'animate-pulse' : ''} ${title === 'Gum Therapy' ? 'opacity-30' : ''} ${title === 'Emergency Care' || title === 'Sedation Dentistry' ? 'opacity-50' : ''}`}>
            {icon}
          </span>
        </div>
      )}

      <a className={`flex items-center justify-between font-bold text-sm uppercase tracking-wider group/link ${title === 'Dental Implants' || isSignature ? 'text-primary' : ''}`} href="#">
        {linkText} <span className="material-symbols-outlined group-hover/link:translate-x-2 transition-transform">
          {isEmergency ? 'phone_in_talk' : 'arrow_right_alt'}
        </span>
      </a>
    </div>
  );
};

export default ServiceCard;
