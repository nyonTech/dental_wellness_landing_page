const services = [
  {
    id: "root-canal",
    category: "Restorative",
    title: "Root Canal",
    badge: "Restorative",
    tagline: "Save your tooth. Eliminate the pain.",
    description:
      "Gentle therapy to save infected teeth and eliminate pain using microscopic technology.",
    longDescription:
      "Root canal therapy is far more comfortable than its reputation suggests. Using microscopic technology and advanced anesthesia, we remove infected tissue, clean the canal, and seal the tooth — relieving pain and saving a tooth that might otherwise be lost.",
    imageSrc: "/images/services/root_canal.png",
    heroImage: "/images/services/root_canal.png",
    linkText: "More Info",
    benefits: [
      "Saves the natural tooth",
      "Relieves severe pain",
      "Microscopic precision",
      "High success rate",
    ],
  },
  {
    id: "invisalign",
    category: "Orthodontics",
    title: "Invisalign",
    badge: "Orthodontics",
    tagline: "Virtually invisible. Incredibly effective.",
    description:
      "Virtually invisible aligners custom-made to straighten your smile without brackets or wires.",
    longDescription:
      "Few orthodontists have treated more patients with the Invisalign appliance than our specialists. This vast experience leads to efficient treatment with outstanding results. Custom-crafted from medical-grade clear plastic, each aligner gently shifts your teeth into their ideal position — no metal, no discomfort, no compromises.",
    imageSrc: "/images/image_4.jpg",
    heroImage: "https://api.builder.io/api/v1/image/assets/TEMP/66042279e20b999626521602c63d0fc0b37a33b4?width=2560",
    linkText: "Learn More",
    benefits: [
      "Removable for eating and brushing",
      "Near-invisible appearance",
      "Comfortable, smooth aligners",
      "Fewer office visits required",
    ],
  },
  {
    id: "braces",
    category: "Orthodontics",
    title: "Modern Braces",
    badge: "Orthodontics",
    tagline: "Proven precision. Perfect alignment.",
    description:
      "Traditional and modern orthodontic solutions for a perfectly aligned smile at any age.",
    longDescription:
      "While Invisalign is a great option for many, traditional braces remain the most effective way to treat complex alignment issues. We offer both traditional metal braces and modern ceramic (clear) braces that are more discreet, ensuring you reach your smile goals with the most reliable technology available.",
    imageSrc: "/images/services/braces.png",
    heroImage: "/images/services/braces.png",
    linkText: "Consultation",
    benefits: [
      "Treats complex cases reliably",
      "Multiple material options (Metal/Ceramic)",
      "Precise, predictable results",
      "Suitable for all ages",
    ],
  },
  {
    id: "dental-implants",
    category: "Restorative",
    title: "Dental Implants",
    badge: "Restorative",
    tagline: "Permanent. Natural. Flawless.",
    description:
      "The gold standard for tooth replacement. Permanent, natural-looking, and fully functional results.",
    longDescription:
      "Dental implants are titanium posts surgically placed into the jawbone, acting as artificial tooth roots. Topped with a custom crown, they look, feel, and function like natural teeth — and with proper care, they last a lifetime.",
    imageSrc: "/images/services/dental-implant.webp",
    heroImage: "/images/services/dental-implant.webp",
    linkText: "View Gallery",
    benefits: [
      "Preserves jawbone structure",
      "Looks and feels natural",
      "Long-term, durable solution",
      "No impact on adjacent teeth",
    ],
  },
  {
    id: "teeth-whitening",
    category: "Cosmetic",
    title: "Teeth Whitening",
    badge: "Cosmetic",
    tagline: "Radiance, redefined.",
    description:
      "Professional-grade brightening that removes years of staining in a single luxury session.",
    longDescription:
      "Our in-office whitening treatments use the most advanced bleaching agents available to deliver results that over-the-counter products simply can't match. In just one visit, your smile can brighten by several shades — safely and comfortably.",
    imageSrc: "/images/services/teeth_whitening.jpg",
    heroImage: "/images/services/teeth_whitening.jpg",
    linkText: "Book Session",
    benefits: [
      "Up to 8 shades brighter",
      "Completed in a single session",
      "Safe for enamel",
      "Custom take-home trays included",
    ],
  },
  {
    id: "cosmetic-fillings",
    category: "Cosmetic",
    title: "Cosmetic Fillings",
    badge: "Cosmetic",
    tagline: "Seamless. Natural. Imperceptible.",
    description:
      "Tooth-coloured fillings that closely match natural tooth colour and appearance, offering a seamless and beautiful restoration.",
    longDescription:
      "Cosmetic fillings, also called tooth-coloured fillings or white fillings, are dental fillings that closely match natural tooth colour and appearance. Over the last decade resin filling material has replaced the old metal fillings. Unlike traditional silver fillings, which often provide an unwanted appearance, cosmetic fillings seamlessly blend with your natural teeth. Tooth-coloured fillings can also be used to change the size, colour or shape of your teeth. For example, cosmetic dental fillings can close gaps between teeth, repair chipped teeth or make teeth appear straighter and more even. Cosmetic fillings can also be used to replace old, silver amalgam fillings.",
    imageSrc: "/images/services/cosmetic_filling.jpg",
    heroImage: "/images/services/cosmetic_fillings.jpg",
    linkText: "Learn More",
    benefits: [
      "Closely match your natural tooth colour and appearance.",
      "Bond to your tooth structure chemically, requiring no slots, grooves or pins.",
      "Completely harden in seconds, offering immediate results.",
    ],
  },
  {
    id: "porcelain-veneers",
    category: "Signature Service",
    title: "Porcelain Veneers",
    badge: "Signature Service",
    tagline: "Where clinical excellence meets architectural precision.",
    description:
      "Handcrafted thin shells designed to perfect the shape, color, and alignment of your smile.",
    longDescription:
      "We don't just fix teeth — we curate your visual identity. Our porcelain veneers are individually designed and handcrafted to complement your facial features, skin tone, and personality. Each shell is ultra-thin, bonded permanently to the front surface of your teeth for a flawless, lasting result.",
    imageSrc: "/images/image_6.jpg",
    heroImage: "https://api.builder.io/api/v1/image/assets/TEMP/66042279e20b999626521602c63d0fc0b37a33b4?width=2560",
    linkText: "The Portfolio",
    isSignature: true,
    benefits: [
      "Custom-designed for your face",
      "Stain-resistant porcelain",
      "Minimal tooth preparation",
      "Instant smile transformation",
    ],
  },
  {
    id: "emergency-care",
    category: "24/7 Availability",
    title: "Emergency Care",
    badge: "Emergency",
    tagline: "We're here when you need us most.",
    description:
      "Immediate relief and urgent care for dental traumas, pain, or accidents when you need it most.",
    longDescription:
      "Dental emergencies don't wait for office hours. Whether it's a knocked-out tooth, severe pain, a broken crown, or a traumatic injury, our emergency dental team is available around the clock to provide immediate relief and expert care.",
    imageSrc: '/images/services/emergency_care.jpg',
    heroImage: '/images/services/emergency_care.jpg',
    icon: "medical_services",
    linkText: "Call Now",
    isEmergency: true,
    benefits: [
      "24/7 availability",
      "Same-day appointments",
      "Pain relief prioritized",
      "On-call dental specialists",
    ],
  },
  {
    id: "oral-surgery",
    category: "Specialty",
    title: "Oral Surgery",
    badge: "Specialty",
    tagline: "Precision surgery, compassionate recovery.",
    description:
      "Expert surgical precision for extractions, bone grafting, and complex structural repairs.",
    longDescription:
      "Our oral surgery department handles everything from routine extractions to complex bone grafting and jaw reconstruction. Using the latest surgical technology and techniques, we ensure minimal discomfort and optimal healing outcomes for every patient.",
    imageSrc: "/images/services/oral_surgery.jpg",
    heroImage: "/images/services/oral_surgery.jpg",
    linkText: "Details",
    benefits: [
      "Board-certified oral surgeons",
      "Advanced imaging technology",
      "Sedation options available",
      "Comprehensive aftercare support",
    ],
  },
  {
    id: "dental-crowns",
    category: "Restorative",
    title: "Dental Crowns",
    badge: "Restorative",
    tagline: "Restore strength. Restore beauty.",
    description:
      "Durable, aesthetic caps that restore strength and beauty to damaged or weakened teeth.",
    longDescription:
      "Our porcelain and zirconia crowns are crafted to match the exact size, shape, and shade of your natural teeth. Whether protecting a cracked tooth, covering a large filling, or completing an implant, our crowns deliver lasting strength with a seamless appearance.",
    imageSrc: '/images/services/crowns.jpeg',
    heroImage: '/images/services/crowns.jpeg',
    icon: "crown",
    linkText: "Restoration",
    benefits: [
      "Same-day crown options",
      "Colour-matched to your teeth",
      "Strengthens damaged teeth",
      "Long-lasting material",
    ],
  },
  {
    id: "wisdom-teeth",
    category: "Specialty",
    title: "Wisdom Teeth Removal",
    badge: "Specialty",
    tagline: "Expert extraction. Minimal discomfort.",
    description:
      "Highly skilled specialist care for wisdom teeth extraction with negligible post-removal discomfort.",
    longDescription:
      "Wisdom teeth, or third molars, usually start to erupt around 18 years of age. Since most mouths are only formed to hold 28 teeth, these four additional molars often don't have enough room. This can cause prolonged pain, swelling, infection, or damage to existing teeth. At Dental Wellness, we have highly skilled specialists performing wisdom teeth removals in AECS Layout and Brookfield with a focus on minimal post-operative discomfort. Extraction is often the only permanent way to relieve these symptoms, as antibiotic relief is typically temporary.",
    imageSrc: "/images/services/wisdom_tooth_removal.jpg",
    heroImage: "/images/services/wisdom_tooth_removal.jpg",
    linkText: "Consultation",
    benefits: [
      "Specialist surgeons in AECS Layout & Brookfield",
      "Minimal post-treatment discomfort",
      "Prevents damage to adjacent teeth",
      "Permanent relief from crowding pain",
    ],
  },
  {
    id: "pediatrics",
    category: "Family",
    title: "Pediatrics",
    badge: "Family",
    tagline: "Little smiles, big care.",
    description:
      "Compassionate and fun dental experiences designed specifically for our youngest patients.",
    longDescription:
      "We believe every child deserves to feel safe and excited about dental visits. Our pediatric team creates a welcoming, playful environment that helps kids build positive associations with oral health from an early age — setting them up for a lifetime of healthy smiles.",
    imageSrc: '/images/services/pediatrics.jpg',
    heroImage: '/images/services/pediatrics.jpg',
    icon: "child_care",
    linkText: "Kid Friendly",
    benefits: [
      "Child-friendly environment",
      "Gentle, patient staff",
      "Preventive treatments",
      "Parent education included",
    ],
  },
  {
    id: "laser-care",
    category: "Technology",
    title: "Laser Care",
    badge: "Technology",
    tagline: "Modern precision. Faster healing.",
    description:
      "Minimally invasive laser treatments for faster healing and precision tissue contouring.",
    longDescription:
      "Our dental laser technology enables a wide range of treatments — from gum contouring and cavity detection to soft tissue surgery — with minimal bleeding, reduced recovery time, and no need for traditional cutting tools. This is dentistry at its most advanced.",
    imageSrc: '/images/services/laser.jpg',
    heroImage: '/images/services/laser.jpg',
    icon: "flare",
    linkText: "Modern Tech",
    benefits: [
      "Minimal bleeding and swelling",
      "Faster recovery time",
      "Highly precise treatment",
      "Reduced need for anesthesia",
    ],
  }
];

export default services;
