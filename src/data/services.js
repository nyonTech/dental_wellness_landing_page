const services = [
  {
    id: "invisalign",
    category: "Orthodontics",
    title: "Invisalign®",
    badge: "Orthodontics",
    tagline: "Virtually invisible. Incredibly effective.",
    description:
      "Virtually invisible aligners custom-made to straighten your smile without brackets or wires.",
    longDescription:
      "Few orthodontists have treated more patients with the Invisalign appliance than our specialists. This vast experience leads to efficient treatment with outstanding results. Custom-crafted from medical-grade clear plastic, each aligner gently shifts your teeth into their ideal position — no metal, no discomfort, no compromises.",
    imageSrc: "/images/image_3.jpg",
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
    id: "dental-implants",
    category: "Restorative",
    title: "Dental Implants",
    badge: "Restorative",
    tagline: "Permanent. Natural. Flawless.",
    description:
      "The gold standard for tooth replacement. Permanent, natural-looking, and fully functional results.",
    longDescription:
      "Dental implants are titanium posts surgically placed into the jawbone, acting as artificial tooth roots. Topped with a custom crown, they look, feel, and function like natural teeth — and with proper care, they last a lifetime.",
    imageSrc: "/images/image_4.jpg",
    heroImage: "https://api.builder.io/api/v1/image/assets/TEMP/66042279e20b999626521602c63d0fc0b37a33b4?width=2560",
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
    imageSrc: "/images/image_5.jpg",
    heroImage: "https://api.builder.io/api/v1/image/assets/TEMP/66042279e20b999626521602c63d0fc0b37a33b4?width=2560",
    linkText: "Book Session",
    benefits: [
      "Up to 8 shades brighter",
      "Completed in a single session",
      "Safe for enamel",
      "Custom take-home trays included",
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
    imageSrc: null,
    heroImage: "https://api.builder.io/api/v1/image/assets/TEMP/66042279e20b999626521602c63d0fc0b37a33b4?width=2560",
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
    imageSrc: "/images/image_7.jpg",
    heroImage: "https://api.builder.io/api/v1/image/assets/TEMP/66042279e20b999626521602c63d0fc0b37a33b4?width=2560",
    linkText: "Details",
    benefits: [
      "Board-certified oral surgeons",
      "Advanced imaging technology",
      "Sedation options available",
      "Comprehensive aftercare support",
    ],
  },
  {
    id: "sedation-dentistry",
    category: "Comfort",
    title: "Sedation Dentistry",
    badge: "Comfort",
    tagline: "Relax. We've got you covered.",
    description:
      "Anxiety-free treatments using advanced sedation techniques for a completely relaxed experience.",
    longDescription:
      "Dental anxiety shouldn't stand between you and optimal oral health. Our sedation dentistry options — from nitrous oxide to IV sedation — allow even the most anxious patients to receive the care they need in a calm, comfortable state.",
    imageSrc: null,
    heroImage: "https://api.builder.io/api/v1/image/assets/TEMP/66042279e20b999626521602c63d0fc0b37a33b4?width=2560",
    icon: "bedtime",
    linkText: "Learn Options",
    benefits: [
      "Multiple sedation levels available",
      "Safe and closely monitored",
      "No memory of the procedure",
      "Ideal for dental phobia",
    ],
  },
  {
    id: "sleep-apnea",
    category: "Health & Wellness",
    title: "Sleep Apnea",
    badge: "Health & Wellness",
    tagline: "Better sleep. Better health.",
    description:
      "Custom oral appliances designed to improve breathing and ensure restorative, quiet sleep.",
    longDescription:
      "Sleep apnea is a serious condition that affects your overall health. Our custom-fitted oral appliances gently reposition the jaw during sleep, keeping the airway open for uninterrupted, restorative breathing — without the hassle of a CPAP machine.",
    imageSrc: null,
    heroImage: "https://api.builder.io/api/v1/image/assets/TEMP/66042279e20b999626521602c63d0fc0b37a33b4?width=2560",
    icon: "air",
    linkText: "Consult Now",
    benefits: [
      "No CPAP required",
      "Custom-fitted appliance",
      "Reduces snoring significantly",
      "Improves daytime alertness",
    ],
  },
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
    imageSrc: "/images/image_8.jpg",
    heroImage: "https://api.builder.io/api/v1/image/assets/TEMP/66042279e20b999626521602c63d0fc0b37a33b4?width=2560",
    linkText: "More Info",
    benefits: [
      "Saves the natural tooth",
      "Relieves severe pain",
      "Microscopic precision",
      "High success rate",
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
    imageSrc: null,
    heroImage: "https://api.builder.io/api/v1/image/assets/TEMP/66042279e20b999626521602c63d0fc0b37a33b4?width=2560",
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
    id: "gum-therapy",
    category: "Health",
    title: "Gum Therapy",
    badge: "Health",
    tagline: "Your foundation, protected.",
    description:
      "Advanced care for periodontal disease to protect your foundational dental health.",
    longDescription:
      "Healthy gums are the foundation of a healthy smile. Our periodontal therapy combines deep cleaning, scaling, and root planing to reverse gum disease at every stage — protecting teeth, bone, and overall systemic health.",
    imageSrc: null,
    heroImage: "https://api.builder.io/api/v1/image/assets/TEMP/66042279e20b999626521602c63d0fc0b37a33b4?width=2560",
    icon: "shield",
    linkText: "Health First",
    benefits: [
      "Reverses early gum disease",
      "Prevents tooth loss",
      "Improves overall oral hygiene",
      "Linked to better heart health",
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
    imageSrc: null,
    heroImage: "https://api.builder.io/api/v1/image/assets/TEMP/66042279e20b999626521602c63d0fc0b37a33b4?width=2560",
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
    imageSrc: null,
    heroImage: "https://api.builder.io/api/v1/image/assets/TEMP/66042279e20b999626521602c63d0fc0b37a33b4?width=2560",
    icon: "flare",
    linkText: "Modern Tech",
    benefits: [
      "Minimal bleeding and swelling",
      "Faster recovery time",
      "Highly precise treatment",
      "Reduced need for anesthesia",
    ],
  },
  {
    id: "advanced-smile-design",
    category: "Signature Service",
    title: "Advanced Smile Design",
    badge: "Signature Service",
    tagline: "Where clinical excellence meets architectural precision.",
    description:
      "We don't just fix teeth; we curate your visual identity.",
    longDescription:
      "Advanced Smile Design is our flagship comprehensive treatment that combines cosmetic and restorative dentistry into a single cohesive plan. Using digital smile previews, facial analysis, and premium materials, we craft a smile that is uniquely and perfectly yours.",
    imageSrc: "/images/image_6.jpg",
    heroImage: "https://api.builder.io/api/v1/image/assets/TEMP/66042279e20b999626521602c63d0fc0b37a33b4?width=2560",
    linkText: "View Results",
    isSignature: true,
    benefits: [
      "Digital smile preview",
      "Full-mouth rehabilitation option",
      "Premium materials only",
      "Personalised treatment plan",
    ],
  },
];

export default services;
