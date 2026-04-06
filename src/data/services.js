import { MicroscopeIcon, SmileIcon, VerifiedIcon, Sparkles, ShieldCheck, Utensils, ScanIcon, ShieldCheckIcon, ZapIcon, LayersIcon, SparklesIcon, PaletteIcon, TargetIcon, ClockIcon, BrushIcon, ActivityIcon, WindIcon, UsersIcon, UserCheckIcon, HeartPulseIcon, TrendingUpIcon, DropletsIcon } from "lucide-react";

const services = [
  {
    id: "root-canal",
    category: "Restorative",
    title: "Root Canal",
    badge: "Restorative",
    tagline: "Save teeth with minimal time and discomfort.",
    description:
      "At our state-of-the-art dental clinic, we specialize in providing expert root canal treatment in AECS Layout to help you preserve your natural teeth.",
    longDescription:
      "The thought of a root canal may make you fearful or uneasy if you aren't familiar with the procedure. There are common misconceptions that endodontic treatments such as root canals, cause pain and should be avoided at all costs. The exact opposite is true. The longer you postpone treatment the more you risk the chance to save your tooth. Our team of experienced Root Canal Specialists in AECS Layout is dedicated to delivering painless, effective, and precise root canal procedures in a comfortable and welcoming environment.",
    detailedHtml: `
      <p class="mb-4">To understand endodontic treatment, it helps to know in brief about the anatomy of the tooth. Inside the tooth, under the white enamel and the brown layer called the dentin, is a soft tissue called the pulp. The pulp contains blood vessels, nerves and connective tissue and creates the surrounding hard tissues of the tooth during development.</p>
      <h4 class="text-xl font-bold text-gray-900 mt-8 mb-4">Step-by-Step Root Canal Procedure</h4>
      <ul class="list-none space-y-4">
        <li class="flex items-start">
          <span class="mr-3 mt-1 text-[#f3bf2c] text-xl leading-none">&bull;</span>
          <span><strong>Step 1:</strong> The endodontist makes an opening in the crown of the tooth. Very small instruments are used to clean the inflamed and infected pulp from the pulp chamber and root canals. The inside of the tooth is carefully cleaned and disinfected to shape the space for filling.</span>
        </li>
        <li class="flex items-start">
          <span class="mr-3 mt-1 text-[#f3bf2c] text-xl leading-none">&bull;</span>
          <span><strong>Step 2:</strong> The root canals are then filled with a biocompatible material called gutta-percha. If the tooth lacks sufficient structure to hold the restoration in place, a fibreglass post may have to be placed inside the tooth. The access opening in the tooth is closed with a permanent filling of composite resin.</span>
        </li>
        <li class="flex items-start">
          <span class="mr-3 mt-1 text-[#f3bf2c] text-xl leading-none">&bull;</span>
          <span><strong>Step 3:</strong> The tooth is then restored with a cap/crown for protection from chewing forces to avoid fracture and to continue to function like any other tooth.</span>
        </li>
      </ul>
      <h4 class="text-xl font-bold text-gray-900 mt-8 mb-4">Root Canal Retreatment & Surgical Endodontics</h4>
      <p class="mb-4">Most endodontically treated teeth last as long as other natural teeth. In a few cases, a tooth that has undergone endodontic treatment does not heal or the pain continues. Often when this occurs, redoing the endodontic procedure can save the tooth.</p>
      <p class="mb-4">If an infection persists at the root tip in spite of conventional root canal treatment, it may be necessary to clean out the infected root tip surgically to remove all the infection. The tooth and surrounding areas are anesthetized, a small opening is made, the infected root tip is removed, and a small filling is placed at the root tip to seal it.</p>
    `,
    imageSrc: "/images/services/root_canal.png",
    heroImage: "/images/services/root_canal.png",
    linkText: "More Info",
    benefits: [
      "Virtually painless",
      "High success rate of about 96%",
      "Functions like your natural tooth",
      "Maintain your natural smile for a lifetime",
    ],
    faqs: [
      {
        question: "What is the difference between a dentist and an endodontist?",
        answer: "While all endodontists are dentists, less than three percent of dentists are endodontists. Endodontists complete an additional three years of training (MDS in Endodontics) after graduation (BDS) to be qualified to practice and also teach endodontics. Their additional training focuses on diagnosing tooth pain and performing root canal treatment."
      },
      {
        question: "When do I need a Root canal?",
        answer: "Root canal treatment is necessary when the pulp becomes inflamed or infected. Reasons include: deep decay, repeated dental procedures on the tooth, crack or chip in the tooth, or trauma/injury."
      },
      {
        question: "What are the signs of needing endodontic treatment?",
        answer: "Signs to look for include pain, prolonged sensitivity to heat or cold, tenderness to touch and chewing, discoloration of the tooth, and tenderness in the lymph nodes as well as nearby bone and gum tissues. Sometimes, however, there are no symptoms."
      },
      {
        question: "Will I feel pain during or after the procedure?",
        answer: "Decades ago that may have been the case, but with modern technology and anaesthetics most patients are absolutely comfortable during the procedure. Root canal treatment is virtually painless and patients who experience root canals are six times more likely to describe it as painless than patients who have a tooth extracted."
      },
      {
        question: "Will the tooth need any special care or additional treatment after endodontic treatment?",
        answer: "Mild discomfort is expected in the treated tooth for about 2-3 days. The endodontist will prescribe medication which should be taken without fail. You can brush normally over the root canal treated tooth. You are instructed not to chew or bite on the treated tooth until you have had it restored by your dentist with a cap (crown)."
      },
      {
        question: "What is the success rate of root canal treatment?",
        answer: "Endodontic treatment has a high success rate of about 96% and many root canal-treated teeth last a lifetime."
      },
      {
        question: "How much does a root canal cost?",
        answer: "The cost varies depending on how complex the problem is and which tooth is affected. Molars are more difficult to treat; the fee is usually more. Generally, endodontic treatment of the natural tooth is less expensive than the alternative of having the tooth extracted and replaced."
      },
      {
        question: "Should I not extract/remove the tooth instead?",
        answer: "Missing teeth can cause other teeth to shift, affect your ability to properly chew and ruin your smile. Replacing an extracted tooth with a bridge or implant requires additional dental visits and cost and may result in invasive procedures to neighbouring teeth. Nothing artificial can replace the look or function of a natural tooth so it’s important to always consider root canal treatment as an option."
      }
    ],
    features: [
      {
        title: "Precision Micro-Surgery",
        description: "Utilizing advanced dental microscopes to clean even the smallest canals with pinpoint accuracy.",
        icon: <MicroscopeIcon />
      },
      {
        title: "Pain-Free Procedure",
        description: "Modern anesthesia and gentle techniques ensure a comfortable, anxiety-free experience.",
        icon: <SmileIcon />
      },
      {
        title: "Long-Term Protection",
        description: "We cap your treated tooth with a permanent crown to restore function and natural aesthetics.",
        icon: <VerifiedIcon />
      }
    ]
  },
  {
    id: "invisalign",
    category: "Orthodontics",
    title: "Invisalign",
    badge: "Orthodontics",
    tagline: "Get the Perfect Smile with Invisalign Braces in Whitefield.",
    description: "Invisalign aligners are the clear alternative to braces. These clear aligners are the virtually invisible way to improve your smile.",
    longDescription:
      "Get the Perfect Smile with Invisalign Braces in Whitefield. At our premier dental clinic in AECS Layout, we offer Invisalign braces, a revolutionary orthodontic treatment that straightens your teeth without the need for traditional metal braces.",
    detailedHtml: `
      <p class="mb-4">Invisalign is a type of clear aligners that are used to treat as an orthodontic device; they are a transparent and plastic form of invisible braces used to adjust misaligned teeth. Invisalign is one of the 27 clear-aligner products which are on the market.</p>
      <p class="mb-4">Invisalign aligners are the clear alternative to braces. These clear aligners are the virtually invisible way to improve your smile using a series of custom-made removable aligners that gradually move your teeth to the ideal position.</p>
      
      <h4 class="text-xl font-bold text-gray-900 mt-8 mb-4">How does Invisalign® work?</h4>
      <ul class="list-none space-y-4">
        <li class="flex items-start">
          <span class="mr-3 mt-1 text-[#f3bf2c] text-xl leading-none">&bull;</span>
          <span><strong>Step 1:</strong> Initially, your orthodontist will take photos, X-rays, and digital scans to help create your treatment plan.</span>
        </li>
        <li class="flex items-start">
          <span class="mr-3 mt-1 text-[#f3bf2c] text-xl leading-none">&bull;</span>
          <span><strong>Step 2:</strong> These records along with the treatment prescribed by your doctor are then used to create a customized 3D treatment plan just for you. With the 3D treatment plan, you’ll be able to see the final position your teeth are predicted to reach after treatment.</span>
        </li>
        <li class="flex items-start">
          <span class="mr-3 mt-1 text-[#f3bf2c] text-xl leading-none">&bull;</span>
          <span><strong>Step 3:</strong> This treatment plan is used to develop your customized aligners and also estimate the likely length of your treatment.</span>
        </li>
      </ul>

      <h4 class="text-xl font-bold text-gray-900 mt-8 mb-4">Why Choose Us for Invisalign?</h4>
      <p class="mb-4">We proudly provide top-tier <strong>Invisalign Braces in AECS Layout</strong> and <strong>Invisalign Braces in Marathahalli</strong>. Our specialized team is dedicated to giving you a seamless and comfortable journey to the perfect smile.</p>
    `,
    imageSrc: "/images/image_4.jpg",
    heroImage: "https://api.builder.io/api/v1/image/assets/TEMP/66042279e20b999626521602c63d0fc0b37a33b4?width=2560",
    linkText: "Learn More",
    benefits: [
      "Virtually invisible appearance",
      "Removable for eating and brushing",
      "Highly comfortable clear plastic",
      "No dietary restrictions"
    ],
    faqs: [
      {
        question: "How does Invisalign® work?",
        answer: "Initially, your orthodontist takes photos, X-rays, and digital scans to create a customized 3D treatment plan. This plan shows the predicted final position of your teeth and is used to develop your custom removable aligners."
      },
      {
        question: "What are the benefits of Invisalign® treatment?",
        answer: "Invisalign aligners are virtually invisible, meaning no unsightly wires or metals. They are removable, allowing you to easily maintain good oral hygiene, eat your favorite foods, and even remove them briefly for special occasions."
      },
      {
        question: "Are there any diet restrictions with Invisalign?",
        answer: "No! Since the aligners are completely removable, you can eat and drink whatever you want. Simply take them out before meals, and brush your teeth before putting them back in."
      }
    ],
    features: [
      {
        title: "Virtually Invisible",
        description: "Help you smile better without having to worry about anyone noticing them. No wires and metals.",
        icon: <Sparkles />
      },
      {
        title: "Removable & Hygienic",
        description: "Making it easier for you to clean your teeth and maintain good oral hygiene without restrictions.",
        icon: <ShieldCheck />
      },
      {
        title: "No Diet Restrictions",
        description: "You can eat and drink whatever you want; continue your favorite activity or sport effortlessly.",
        icon: <Utensils />
      }
    ]
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
    tagline: "The gold standard for permanent tooth replacement.",
    description:
      "At our dental clinic, we specialize in providing premium dental implants in AECS Layout to help you regain your confidence and enjoy a healthy, beautiful smile.",
    longDescription:
      "If you are looking for a permanent solution to missing teeth, dental implants offer a long-term replacement that looks, feels, and functions just like the real thing. A dental implant consists of a small titanium screw placed directly into the jawbone, acting as an artificial root. Our team of experienced Implant specialists in Whitefield is committed to delivering high-quality, long-lasting dental implant solutions tailored to meet your unique needs and restore your natural smile.",
    detailedHtml: `
    <p class="mb-4">Dental implants are the closest possible replacement to natural teeth. They are composed of titanium or titanium alloys that are biocompatible, allowing them to integrate seamlessly with your jawbone to provide a sturdy foundation for replacement teeth.</p>
    
    <h4 class="text-xl font-bold text-gray-900 mt-8 mb-4">The Dental Implant Journey</h4>
    <ul class="list-none space-y-4">
      <li class="flex items-start">
        <span class="mr-3 mt-1 text-[#f3bf2c] text-xl leading-none">&bull;</span>
        <span><strong>Stage 1: Planning & Assessment:</strong> We begin with a thorough examination and a CBCT scan. This advanced imaging ensures you have sufficient bone density to support the implant and allows us to create a precise, customized treatment plan.</span>
      </li>
      <li class="flex items-start">
        <span class="mr-3 mt-1 text-[#f3bf2c] text-xl leading-none">&bull;</span>
        <span><strong>Stage 2: Precision Placement:</strong> The titanium implant is surgically placed into the jawbone. We then allow a healing period of 3-6 months, a process called osseointegration, where the bone bonds with the implant to ensure maximum stability.</span>
      </li>
      <li class="flex items-start">
        <span class="mr-3 mt-1 text-[#f3bf2c] text-xl leading-none">&bull;</span>
        <span><strong>Stage 3: Restoration:</strong> Once fully healed, impressions are taken to craft your custom replacement tooth. This final restoration is designed to match your surrounding teeth perfectly in both shape and color.</span>
      </li>
    </ul>

    <h4 class="text-xl font-bold text-gray-900 mt-8 mb-4">Caring for Your New Smile</h4>
    <p class="mb-4">Just like your natural teeth, implants thrive on great oral hygiene. Regular check-ups are essential so we can monitor the health of the surrounding tissue and ensure your implant remains a lifetime solution. With proper care and routine professional cleanings, your dental implant can last a lifetime.</p>
  `,
    imageSrc: "/images/services/dental-implant.webp",
    heroImage: "/images/services/dental-implant.webp",
    linkText: "More Info",
    benefits: [
      "Lifetime tooth replacement solution",
      "Preserves natural jawbone structure",
      "No need to alter adjacent healthy teeth",
      "Eat, speak, and smile with total confidence",
    ],
    faqs: [
      {
        question: "Why choose an implant over a dental bridge?",
        answer: "Implants are often the preferred choice because they don't require trimming down neighboring healthy teeth to act as anchors. They are the least invasive long-term option and help preserve the bone in your jaw, which bridges cannot do."
      },
      {
        question: "Is the implant procedure painful?",
        answer: "The placement is performed under local anesthesia, meaning you won't feel pain during the procedure. Most patients report that the discomfort during recovery is minimal and easily managed with standard over-the-counter medication."
      },
      {
        question: "How long does a dental implant last?",
        answer: "When properly maintained with good oral hygiene and regular dental visits, dental implants are designed to be a permanent, lifetime solution for missing teeth."
      },
      {
        question: "Am I a good candidate for dental implants?",
        answer: "Most adults with healthy gums and enough bone to hold the implant are great candidates. We use CBCT imaging during our planning phase to evaluate your bone structure and confirm if an implant is the right path for you."
      },
      {
        question: "Can I eat normally with a dental implant?",
        answer: "Absolutely! Unlike removable dentures, implant-supported teeth function like natural teeth. Once fully restored, you can return to enjoying all your favorite foods without worry."
      }
    ],
    features: [
      {
        title: "Advanced CBCT Planning",
        description: "We use 3D imaging to assess bone density and ensure the most precise and safe implant placement.",
        icon: <ScanIcon />
      },
      {
        title: "Biocompatible Titanium",
        description: "Using medical-grade titanium that integrates naturally with your bone for a rock-solid foundation.",
        icon: <ShieldCheckIcon />
      },
      {
        title: "Natural Aesthetics",
        description: "Every crown is custom-crafted to match the shade and contour of your natural teeth seamlessly.",
        icon: <Sparkles />
      }
    ]
  },
  {
    id: "teeth-whitening",
    category: "Cosmetic",
    title: "Teeth Whitening",
    badge: "Cosmetic",
    tagline: "Brighten your smile by up to 8 shades in just one hour.",
    description:
      "Achieve a brighter, whiter smile with our professional teeth whitening services in AECS Layout. We offer safe and effective treatments to remove deep-set stains and discoloration, giving you a radiant smile you'll love to show off.",
    longDescription:
      "A bright, white smile makes a lasting impression and significantly boosts self-confidence. Over time, factors like coffee, tea, smoking, and the natural aging process can cause teeth to lose their luster. At Dental Wellness, we provide expert teeth whitening services in Whitefield to reverse these effects, delivering a smile that looks both healthier and noticeably more vibrant using world-class technology.",
    detailedHtml: `
    <p class="mb-4">Tooth discoloration is a common concern caused by lifestyle habits, genetics, or simply the passage of time. Whether your teeth are naturally yellowish or have been darkened by external staining, we provide professional-grade solutions that far surpass over-the-counter alternatives.</p>
    
    <h4 class="text-xl font-bold text-gray-900 mt-8 mb-4">Professional Whitening Options</h4>
    <ul class="list-none space-y-4">
      <li class="flex items-start">
        <span class="mr-3 mt-1 text-[#f3bf2c] text-xl leading-none">&bull;</span>
        <span><strong>Philips ZOOM (In-Office):</strong> This is the world's most requested professional whitening brand. We apply a specialized gel and activate it using the ZOOM light. In just one hour, your teeth can become up to 8 shades whiter. It is a safe, reliable, and completely hassle-free way to transform your smile instantly.</span>
      </li>
      <li class="flex items-start">
        <span class="mr-3 mt-1 text-[#f3bf2c] text-xl leading-none">&bull;</span>
        <span><strong>Custom At-Home Kits:</strong> We create personalized trays from an impression of your teeth to ensure a perfect fit. Unlike generic over-the-counter trays, these custom kits prevent gel leakage and gum irritation, allowing the whitening agent to curve perfectly around your tooth anatomy for an even, efficient result over 1-2 weeks.</span>
      </li>
    </ul>

    <h4 class="text-xl font-bold text-gray-900 mt-8 mb-4">Maintaining Your Results</h4>
    <p class="mb-4">To keep your smile looking its best after treatment, we recommend occasional 'touch-up' sessions with your custom trays. Professional whitening is a lifestyle investment that restores the youthful brilliance of your teeth while maintaining the health of your enamel.</p>
  `,
    imageSrc: "/images/services/teeth_whitening.jpg",
    heroImage: "/images/services/teeth_whitening.jpg",
    linkText: "More Info",
    benefits: [
      "Up to 8 shades whiter in one visit",
      "Removes deep stains from coffee and tea",
      "Custom-fit trays for maximum safety",
      "Safe and enamel-friendly procedures",
    ],
    faqs: [
      {
        question: "Why is professional whitening better than store-bought kits?",
        answer: "Over-the-counter trays are generic and often ill-fitting, which can cause the whitening gel to leak and irritate your gums. Professional custom trays and in-office ZOOM treatments provide much higher concentrations of whitening agents safely, ensuring even results and better protection for your oral tissues."
      },
      {
        question: "How long does the ZOOM procedure take?",
        answer: "The entire in-office procedure typically takes about one hour. You will walk out of the clinic with a noticeably whiter and brighter smile immediately after the session."
      },
      {
        question: "Is teeth whitening safe for my enamel?",
        answer: "Yes, when performed by dental professionals, whitening is a very safe procedure. We use clinically proven materials that are designed to brighten your teeth without damaging the tooth structure or enamel."
      },
      {
        question: "How long will the whitening results last?",
        answer: "Results can last a long time, but they depend on your lifestyle habits like coffee consumption or smoking. Using our custom at-home touch-up kits occasionally will help maintain that 'just-whitened' look for years."
      },
      {
        question: "Will it make my teeth sensitive?",
        answer: "Some patients may experience temporary sensitivity to cold for a day or two after treatment. However, the modern ZOOM system and our custom-fit home trays are designed to minimize discomfort and protect your gums."
      }
    ],
    features: [
      {
        title: "Philips ZOOM Technology",
        description: "Utilizing the #1 patient-requested whitening light system for rapid, high-impact results.",
        icon: <ZapIcon />
      },
      {
        title: "Custom Tray Design",
        description: "Precise impressions ensure trays fit your unique bite, preventing gum irritation and leakage.",
        icon: <LayersIcon />
      },
      {
        title: "Instant Transformation",
        description: "Walk out with a smile that is several shades lighter in just a single 60-minute appointment.",
        icon: <SparklesIcon />
      }
    ]
  },
  {
    id: "cosmetic-fillings",
    category: "Cosmetic",
    title: "Cosmetic Fillings",
    badge: "Cosmetic",
    tagline: "Seamlessly repair chips, gaps, and decay with natural aesthetics.",
    description:
      "At our clinic in AECS Layout, we use advanced tooth-colored resin to provide cosmetic fillings that blend perfectly with your natural smile, replacing outdated metal restorations.",
    longDescription:
      "Cosmetic fillings, often referred to as composite bonding or white fillings, have revolutionized restorative dentistry over the last decade. Unlike traditional silver amalgam fillings that can leave dark, noticeable marks, these modern resin materials are color-matched to your unique tooth shade. Beyond treating decay, composite bonding is a versatile tool used to close gaps, repair chips, and even reshape teeth to create a straighter, more symmetrical appearance.",
    detailedHtml: `
    <p class="mb-4">Modern cosmetic fillings are composed of a high-strength dental resin that mimics the translucency and luster of natural enamel. This material is not just an aesthetic upgrade; it provides a structural bond that reinforces the tooth from within.</p>
    
    <h4 class="text-xl font-bold text-gray-900 mt-8 mb-4">The Advantages of Composite Bonding</h4>
    <ul class="list-none space-y-4">
      <li class="flex items-start">
        <span class="mr-3 mt-1 text-[#f3bf2c] text-xl leading-none">&bull;</span>
        <span><strong>Chemical Adhesion:</strong> Unlike silver fillings that require the removal of healthy tooth structure to create "mechanical locks," composite resins bond chemically to the tooth. This means we can preserve more of your natural, healthy tooth.</span>
      </li>
      <li class="flex items-start">
        <span class="mr-3 mt-1 text-[#f3bf2c] text-xl leading-none">&bull;</span>
        <span><strong>Instant Hardening:</strong> We use specialized curing lights that harden the resin in mere seconds. You can leave the office and eat or drink normally almost immediately, unlike older materials that required days to fully set.</span>
      </li>
      <li class="flex items-start">
        <span class="mr-3 mt-1 text-[#f3bf2c] text-xl leading-none">&bull;</span>
        <span><strong>Versatile Reshaping:</strong> If you have small gaps (diastemas) or uneven tooth edges, bonding can be sculpted directly onto the tooth surface to improve alignment and color without the need for more invasive veneers.</span>
      </li>
    </ul>

    <h4 class="text-xl font-bold text-gray-900 mt-8 mb-4">Replacing Old Amalgam Fillings</h4>
    <p class="mb-4">Many patients choose to replace their old silver fillings with cosmetic resin. This not only removes the "metal" look from their smile but also addresses the micro-fractures that can sometimes develop around aging amalgam. Our specialists ensure the transition is painless and the result is virtually invisible.</p>
  `,
    imageSrc: "/images/services/cosmetic_filling.jpg",
    heroImage: "/images/services/cosmetic_filling.jpg",
    linkText: "More Info",
    benefits: [
      "Perfectly matches natural tooth color",
      "Preserves more healthy tooth structure",
      "Repairs chips and closes gaps instantly",
      "Durable and mercury-free material",
    ],
    faqs: [
      {
        question: "How long do cosmetic fillings last?",
        answer: "With good oral hygiene and regular dental check-ups, composite fillings typically last between 5 to 10 years. They are highly durable but can be polished or touched up easily if they show signs of wear over time."
      },
      {
        question: "Can bonding fix a gap between my front teeth?",
        answer: "Yes! Composite bonding is one of the fastest and most cost-effective ways to close small gaps (diastemas). We sculpt the resin to the sides of your teeth to close the space seamlessly in a single visit."
      },
      {
        question: "Will the filling stain over time?",
        answer: "Modern resins are highly resistant to staining. However, like natural enamel, they can pick up slight discoloration from heavy coffee, tea, or tobacco use over many years. Regular professional cleanings help maintain their brightness."
      },
      {
        question: "Is the procedure painful?",
        answer: "Not at all. For minor bonding or shallow fillings, anesthesia may not even be necessary. For deeper decay, we use local numbing to ensure you are completely comfortable throughout the process."
      },
      {
        question: "Is it worth replacing my old silver fillings?",
        answer: "While not always medically necessary, many patients prefer to replace them for aesthetic reasons or if the old filling is leaking or cracked. Composite fillings provide a much more natural appearance and bond better to the tooth wall."
      }
    ],
    features: [
      {
        title: "Color-Match Technology",
        description: "We use a wide spectrum of resin shades to perfectly mimic the gradient of your natural enamel.",
        icon: <PaletteIcon />
      },
      {
        title: "Minimally Invasive",
        description: "Because the material bonds chemically, we only remove the decayed or damaged portion of the tooth.",
        icon: <TargetIcon />
      },
      {
        title: "Single-Visit Smile",
        description: "Most bonding and filling procedures are completed in under an hour, providing instant results.",
        icon: <ClockIcon />
      }
    ]
  },
  {
    id: "dental-veneers",
    category: "Cosmetic",
    title: "Dental Veneers",
    badge: "Cosmetic",
    tagline: "The ultimate smile makeover for a flawless, movie-star finish.",
    description:
      "Transform your appearance with high-quality dental veneers in AECS Layout. Our advanced clinic specializes in crafting thin, durable shells that create a perfectly aligned and radiant smile.",
    longDescription:
      "If you’re looking to completely revitalize your smile, dental veneers offer a versatile and long-lasting solution. These custom-made, ultra-thin shells—crafted from either porcelain or composite resin—are bonded to the front of your teeth to mask imperfections. Whether your teeth are permanently discolored, chipped, worn down, or slightly misaligned, veneers provide a uniform, natural-looking aesthetic that can boost your confidence instantly.",
    detailedHtml: `
    <p class="mb-4">Veneers are the gold standard in cosmetic dentistry for correcting structural and aesthetic concerns simultaneously. Before proceeding, we ensure your oral health is at its peak; any underlying decay or gum disease is treated first to provide a stable foundation for your new smile.</p>
    
    <h4 class="text-xl font-bold text-gray-900 mt-8 mb-4">Comparing Your Veneer Options</h4>
    <ul class="list-none space-y-4">
      <li class="flex items-start">
        <span class="mr-3 mt-1 text-[#f3bf2c] text-xl leading-none">&bull;</span>
        <span><strong>Porcelain Veneers (The Premium Choice):</strong> These are highly durable and offer superior stain resistance. The process involves a thin removal of enamel to ensure a flush fit. We take a precise mold to craft your custom veneers in a lab, providing you with temporary covers in the meantime. In the final visit, they are bonded for a permanent, luminous finish.</span>
      </li>
      <li class="flex items-start">
        <span class="mr-3 mt-1 text-[#f3bf2c] text-xl leading-none">&bull;</span>
        <span><strong>Composite Veneers (Instant Results):</strong> Perfect for those seeking a transformation in a single visit. We artistically apply layers of tooth-colored resin directly to your teeth, hardening each layer with a specialized light. These are then shaped and polished to match the texture and sheen of natural enamel.</span>
      </li>
    </ul>

    <h4 class="text-xl font-bold text-gray-900 mt-8 mb-4">A Precise Bonding Process</h4>
    <p class="mb-4">The success of a veneer lies in the bonding. We use medical-grade adhesives that fuse the veneer to your tooth structure, ensuring it functions reliably during chewing and speaking. Once applied, they feel smooth to the tongue and look indistinguishable from your natural teeth.</p>
  `,
    imageSrc: "/images/image_6.jpg",
    heroImage: "/images/image_6.jpg",
    linkText: "More Info",
    benefits: [
      "Corrects chips, gaps, and misalignment",
      "Superior resistance to permanent stains",
      "Custom-shaped for your facial features",
      "Long-lasting and highly durable material",
    ],
    faqs: [
      {
        question: "Are dental veneers permanent?",
        answer: "Porcelain veneers are considered a permanent cosmetic enhancement because a small amount of enamel is removed to fit them. With proper care, they can last 10 to 15 years or longer before needing replacement."
      },
      {
        question: "Will the veneers look like fake teeth?",
        answer: "Not at all. We take great care in matching the translucency and color of the porcelain to your surrounding teeth. Modern veneers are designed to mimic the way natural enamel reflects light."
      },
      {
        question: "How do I care for my veneers?",
        answer: "You care for them just like natural teeth—regular brushing, flossing, and dental check-ups. We also recommend avoiding biting into very hard objects (like ice) to prevent chipping."
      },
      {
        question: "Does the procedure hurt?",
        answer: "The process is typically painless. For porcelain veneers, we may use a local anesthetic during the preparation stage to ensure you are comfortable while we shape the enamel."
      },
      {
        question: "Can I get veneers if I have cavities?",
        answer: "Healthy teeth and gums are a prerequisite. If you have decay or gum issues, we will treat those conditions first to ensure your veneers have a healthy environment to bond to."
      }
    ],
    features: [
      {
        title: "Artistic Sculpting",
        description: "Our specialists hand-shape composite or lab-milled porcelain to complement your unique facial symmetry.",
        icon: <BrushIcon />
      },
      {
        title: "Ultra-Thin Design",
        description: "Modern materials allow for shells as thin as contact lenses, requiring minimal tooth preparation.",
        icon: <LayersIcon />
      },
      {
        title: "Stain-Resistant Surface",
        description: "Porcelain surfaces are non-porous, making them highly resistant to coffee, tea, and cigarette stains.",
        icon: <ShieldCheckIcon />
      }
    ]
  },
  {
    id: "dental-checkups",
    category: "Preventative",
    title: "Dental Check-ups",
    badge: "Preventative",
    tagline: "Proactive care to keep your natural smile healthy for life.",
    description:
      "At Dental Wellness in AECS Layout, our comprehensive examinations prevent minor issues from becoming major concerns, ensuring your long-term oral health.",
    longDescription:
      "A regular dental check-up is the cornerstone of a healthy lifestyle. We recommend a visit every six months to monitor your teeth, gums, and overall oral cavity. Supported by modern technology and up-to-the-minute clinical skills, our routine examinations are thorough yet virtually pain-free. Whether you are looking for a general assessment or a pediatric dentist in Whitefield, our team is dedicated to providing a comfortable environment for patients of all ages.",
    detailedHtml: `
    <p class="mb-4">Your first consultation is about more than just teeth; it’s a holistic look at your health. We discuss your medical history—such as diabetes or specific medications—as these can directly impact gum health and cavity risks. It is also the perfect time to discuss any dental anxieties; our team is expertly trained to help relieve phobias through open communication and gentle care.</p>
    
    <h4 class="text-xl font-bold text-gray-900 mt-8 mb-4">The Anatomy of a Comprehensive Check-up</h4>
    <ul class="list-none space-y-4">
      <li class="flex items-start">
        <span class="mr-3 mt-1 text-[#f3bf2c] text-xl leading-none">&bull;</span>
        <span><strong>The Examination:</strong> We meticulously check for cavities, plaque, and tartar. We also evaluate gum pockets and perform an oral cancer screening by checking the tongue, throat, and neck for any unusual swelling or signs of trouble.</span>
      </li>
      <li class="flex items-start">
        <span class="mr-3 mt-1 text-[#f3bf2c] text-xl leading-none">&bull;</span>
        <span><strong>Scale & Polish:</strong> Using advanced ultrasonic scalers, we painlessly remove stubborn tartar and plaque. Once the surfaces are clean, we polish your teeth to remove surface stains, leaving your smile smooth, shiny, and refreshed.</span>
      </li>
      <li class="flex items-start">
        <span class="mr-3 mt-1 text-[#f3bf2c] text-xl leading-none">&bull;</span>
        <span><strong>Digital Diagnostics:</strong> If necessary, we use digital X-rays to visualize jaw alignment, hidden decay between teeth, or issues beneath the gum line like impacted teeth or cysts that are invisible to the naked eye.</span>
      </li>
    </ul>

    <h4 class="text-xl font-bold text-gray-900 mt-8 mb-4">Personalized Guidance & Next Steps</h4>
    <p class="mb-4">Following the exam, we provide a tailored treatment plan. This includes practical advice on brushing techniques, nutrition, and lifestyle habits. If complex work is needed, we seamlessly coordinate with our in-house specialists, including orthodontists and oral surgeons, to ensure you receive the highest standard of care.</p>
  `,
    imageSrc: "/images/services/emergency_care.jpg",
    heroImage: "/images/services/emergency_care.jpg",
    linkText: "More Info",
    benefits: [
      "Early detection of decay and gum disease",
      "Professional removal of plaque and tartar",
      "Comprehensive oral cancer screenings",
      "Tailored advice for home oral hygiene",
    ],
    faqs: [
      {
        question: "Why do I need a check-up every six months?",
        answer: "Six months is the ideal interval to catch dental issues before they cause pain or require expensive treatments. It also allows us to remove tartar that regular brushing simply cannot clean."
      },
      {
        question: "Will the cleaning process hurt?",
        answer: "Not at all. We use modern ultrasonic instruments that use gentle vibrations to loosen tartar. Most patients find the 'scale and polish' process very comfortable and refreshing."
      },
      {
        question: "Are dental X-rays safe?",
        answer: "Yes, we use digital X-rays which emit significantly lower radiation than traditional film. We only take X-rays when necessary to diagnose issues that aren't visible during a physical exam."
      },
      {
        question: "What should I tell my dentist during the visit?",
        answer: "Please share your medical history, any current medications, and any fears you might have. Also, let us know if you've noticed any sensitivity, bleeding gums, or changes in your bite."
      },
      {
        question: "Can you help with my child's dental anxiety?",
        answer: "Absolutely. As a provider of pediatric dentistry in Whitefield, we specialize in making dental visits fun and educational for children, helping them build a positive relationship with oral health from a young age."
      }
    ],
    features: [
      {
        title: "Holistic Assessment",
        description: "We review your full medical background to understand how your general health affects your smile.",
        icon: <ActivityIcon />
      },
      {
        title: "Ultrasonic Scaling",
        description: "Advanced technology for painless, high-precision removal of tartar and bacterial buildup.",
        icon: <WindIcon />
      },
      {
        title: "Specialist Coordination",
        description: "Direct access to orthodontists and endodontists if your check-up reveals a need for expert care.",
        icon: <UsersIcon />
      }
    ]
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
    id: "crowns-and-bridges",
    category: "Restorative",
    title: "Crowns & Bridges",
    badge: "Restorative",
    tagline: "Restore strength, function, and aesthetics to damaged or missing teeth.",
    description:
      "At our advanced dental clinic in AECS Layout, we specialize in high-quality dental crowns and bridges designed to restore your smile’s integrity with durable, natural-looking materials.",
    longDescription:
      "When a tooth is severely decayed, cracked, or missing entirely, crowns and bridges offer a permanent prosthetic solution. A crown acts as a protective 'cap' that fits over a compromised tooth to restore its original shape, size, and strength. For those with missing teeth, a bridge utilizes joined crowns to fill the gap, anchored securely to neighboring teeth or dental implants. Our expert team focuses on precision-fit restorations that seamlessly blend with your natural dentition.",
    detailedHtml: `
    <p class="mb-4">Crowns and bridges are essential tools in restorative dentistry, serving both functional and cosmetic purposes. They are cemented directly onto existing teeth or implants, providing a stable and long-lasting alternative to removable appliances.</p>
    
    <h4 class="text-xl font-bold text-gray-900 mt-8 mb-4">When Is a Restoration Necessary?</h4>
    <p class="mb-4">Our specialists recommend crowns or bridges for a variety of clinical needs:</p>
    <ul class="list-none space-y-4">
      <li class="flex items-start">
        <span class="mr-3 mt-1 text-[#f3bf2c] text-xl leading-none">&bull;</span>
        <span><strong>Structural Protection:</strong> To reinforce weak teeth from breaking, hold together cracked tooth segments, or support a tooth with a large filling where little natural structure remains.</span>
      </li>
      <li class="flex items-start">
        <span class="mr-3 mt-1 text-[#f3bf2c] text-xl leading-none">&bull;</span>
        <span><strong>Functional Restoration:</strong> To rebuild teeth that are severely worn down or broken, and to provide the 'anchor' needed to hold a dental bridge in place.</span>
      </li>
      <li class="flex items-start">
        <span class="mr-3 mt-1 text-[#f3bf2c] text-xl leading-none">&bull;</span>
        <span><strong>Aesthetic Enhancement:</strong> To mask misshapen or severely discolored teeth, cover dental implants, or complete a cosmetic smile modification.</span>
      </li>
    </ul>

    <h4 class="text-xl font-bold text-gray-900 mt-8 mb-4">Understanding Dental Materials</h4>
    <p class="mb-4">The longevity and look of your restoration depend on the materials used. While all-metal crowns (gold or silver alloy) are highly durable, they are rarely used today due to their metallic appearance. Porcelain-fused-to-metal (PFM) options provide a white, tooth-like look but can sometimes show a dark metal line at the gum margin and may cause sensitivities in some patients. We guide you through the best modern options to ensure a lifelike, biocompatible result.</p>
  `,
    imageSrc: "/images/services/crowns.jpeg",
    heroImage: "/images/services/crowns.jpeg",
    linkText: "More Info",
    benefits: [
      "Protects and strengthens weak or cracked teeth",
      "Fills gaps left by missing teeth effectively",
      "Restores the ability to chew and speak properly",
      "Prevents remaining teeth from shifting out of place",
    ],
    faqs: [
      {
        question: "What is the difference between a crown and a bridge?",
        answer: "A crown is a single cap for an individual damaged tooth. A bridge is a series of joined crowns used to 'bridge' the gap created by one or more missing teeth, anchored by the teeth on either side."
      },
      {
        question: "How long does the procedure take?",
        answer: "Typically, it requires two visits. The first involves preparing the tooth and taking an impression, while the second visit is for the final fit and cementation of your custom restoration."
      },
      {
        question: "Will my crown look like a natural tooth?",
        answer: "Yes. We use advanced shade-matching techniques to ensure the porcelain matches the color and translucency of your natural teeth, making the restoration virtually indistinguishable."
      },
      {
        question: "Is it painful to get a crown or bridge?",
        answer: "The process is performed under local anesthesia, so you won't feel pain during the preparation. Some minor sensitivity may occur for a few days after the procedure, which is completely normal."
      },
      {
        question: "How do I maintain my dental bridge?",
        answer: "Bridges require good oral hygiene. It is important to brush twice a day and use specialized floss or interdental brushes to clean under the bridge to prevent decay on the anchor teeth."
      }
    ],
    features: [
      {
        title: "Custom Shade Matching",
        description: "We meticulously match the porcelain to your surrounding teeth for a seamless, natural appearance.",
        icon: <PaletteIcon />
      },
      {
        title: "High-Strength Ceramics",
        description: "Utilizing modern, biocompatible materials that offer the durability of metal with the beauty of natural enamel.",
        icon: <ShieldCheckIcon />
      },
      {
        title: "Precision Prosthetics",
        description: "Every restoration is engineered for a perfect fit, ensuring comfort and a natural bite alignment.",
        icon: <TargetIcon />
      }
    ]
  },
  {
    id: "wisdom-teeth-removal",
    category: "Oral Surgery",
    title: "Wisdom Teeth Removal",
    badge: "Oral Surgery",
    tagline: "Expert, gentle extraction to relieve crowding and prevent infection.",
    description:
      "Our clinic features highly skilled specialists for wisdom teeth removal in AECS Layout, focusing on precision techniques that ensure negligible post-procedure discomfort.",
    longDescription:
      "The average human jaw is typically designed to accommodate only 28 teeth. When the four third molars—commonly known as 'wisdom teeth'—attempt to emerge around age 18, they often lack the necessary space. This crowding frequently leads to pain, swelling, and potential damage to adjacent healthy teeth. At Dental Wellness, we specialize in the safe and comfortable extraction of these functional-less molars to protect your overall oral health.",
    detailedHtml: `
    <p class="mb-4">Wisdom teeth are the final set of molars to erupt, and because they are the last in the mouth, they often become 'impacted' or grow at an angle. This can cause the surrounding gum tissue to become swollen, leading to jaw stiffness, soreness, and recurrent infections.</p>
    
    <h4 class="text-xl font-bold text-gray-900 mt-8 mb-4">Why Early Removal is Recommended</h4>
    <ul class="list-none space-y-4">
      <li class="flex items-start">
        <span class="mr-3 mt-1 text-[#f3bf2c] text-xl leading-none">&bull;</span>
        <span><strong>Preventing Crowding:</strong> Removing wisdom teeth early prevents them from pushing against existing teeth, which can undo years of orthodontic work or cause healthy teeth to shift.</span>
      </li>
      <li class="flex items-start">
        <span class="mr-3 mt-1 text-[#f3bf2c] text-xl leading-none">&bull;</span>
        <span><strong>Eliminating Infection:</strong> Partially erupted wisdom teeth create a 'pocket' where bacteria thrive. Extraction is often the only permanent way to stop the cycle of pain and swelling.</span>
      </li>
      <li class="flex items-start">
        <span class="mr-3 mt-1 text-[#f3bf2c] text-xl leading-none">&bull;</span>
        <span><strong>Avoiding Cyst Formation:</strong> In some cases, sacs of fluid can form around impacted teeth, which may lead to cysts that damage the jawbone or nerves if left untreated.</span>
      </li>
    </ul>

    <h4 class="text-xl font-bold text-gray-900 mt-8 mb-4">Are There Alternatives?</h4>
    <p class="mb-4">While antibiotics can provide temporary relief from a wisdom tooth infection, they do not solve the underlying structural issue. Since these teeth have no specific functional purpose in modern chewing, extraction is the most effective and permanent solution to prevent future complications and chronic pain.</p>
  `,
    imageSrc: "/images/services/wisdom_tooth_removal.jpg",
    heroImage: "/images/services/wisdom_tooth_removal.jpg",
    linkText: "More Info",
    benefits: [
      "Permanent relief from jaw pain and swelling",
      "Protects alignment of neighboring teeth",
      "Prevents deep-seated gum infections",
      "Minimally invasive specialist techniques",
    ],
    faqs: [
      {
        question: "Is wisdom tooth removal painful?",
        answer: "The procedure itself is performed under local anesthesia, so you won't feel pain. Our specialists use advanced techniques to ensure that any post-removal discomfort is kept to an absolute minimum."
      },
      {
        question: "What is the recovery time like?",
        answer: "Most patients return to their normal routine within 3 to 5 days. We provide detailed aftercare instructions and medication to ensure your healing process is smooth and quick."
      },
      {
        question: "Can I just take antibiotics for the infection instead?",
        answer: "Antibiotics only treat the symptoms temporarily. Because the tooth lacks space to grow correctly, the infection is highly likely to return until the tooth is physically removed."
      },
      {
        question: "At what age should wisdom teeth be removed?",
        answer: "While they typically emerge between ages 17 and 25, we recommend an evaluation in the late teens. Removing them before the roots are fully formed often leads to an easier recovery."
      },
      {
        question: "Will I be awake during the procedure?",
        answer: "Most extractions are done with local numbing, where you are awake but feel no pain. For more complex cases or for patients with high anxiety, we can discuss further sedation options."
      }
    ],
    features: [
      {
        title: "Specialist-Led Surgery",
        description: "Procedures are performed by oral surgeons who specialize in complex extractions and nerve protection.",
        icon: <UserCheckIcon />
      },
      {
        title: "Minimal Trauma Technique",
        description: "We use precise instruments to remove the tooth with minimal impact on the surrounding bone and tissue.",
        icon: <ZapIcon />
      },
      {
        title: "Comprehensive Aftercare",
        description: "You'll receive a personalized recovery plan and follow-up support to ensure perfect healing.",
        icon: <HeartPulseIcon />
      }
    ]
  },
  {
    id: "pediatric-dentistry",
    category: "Preventative",
    title: "Pediatric Dentistry",
    badge: "Pediatric",
    tagline: "Gentle, expert dental care designed specifically for growing smiles.",
    description:
      "As a leading pediatric dentist in Whitefield, Dental Wellness offers comprehensive oral healthcare for children in a fun, stress-free, and kid-friendly environment.",
    longDescription:
      "We take great pride in being home to highly experienced pediatric specialists in AECS Layout. Led by our renowned expert, Dr. Shobha, our team is dedicated to providing the highest standard of care for infants, children, and adolescents. Our philosophy centers on a comprehensive approach—treating current dental issues while focusing heavily on preventative strategies to ensure a lifetime of healthy smiles.",
    detailedHtml: `
    <p class="mb-4">Pediatric dentistry is a specialized field dedicated to the oral health of children from infancy through their teenage years. It involves the diagnosis, management, and therapeutic treatment of developing teeth, as well as specialized care for children with unique healthcare needs.</p>
    
    <h4 class="text-xl font-bold text-gray-900 mt-8 mb-4">A Positive Experience for Every Child</h4>
    <p class="mb-4">We understand that a child's early experiences at the dentist shape their attitude toward oral health for life. Our clinic is equipped with world-class dental tools and materials specifically designed for smaller mouths, ensuring every procedure is as comfortable as possible.</p>
    
    <ul class="list-none space-y-4">
      <li class="flex items-start">
        <span class="mr-3 mt-1 text-[#f3bf2c] text-xl leading-none">&bull;</span>
        <span><strong>Preventative Focus:</strong> From fluoride applications to dental sealants, we aim to stop cavities before they start.</span>
      </li>
      <li class="flex items-start">
        <span class="mr-3 mt-1 text-[#f3bf2c] text-xl leading-none">&bull;</span>
        <span><strong>Growth Monitoring:</strong> We track the development of your child’s jaw and tooth alignment, identifying early if orthodontic intervention (like braces or clips) will be needed.</span>
      </li>
      <li class="flex items-start">
        <span class="mr-3 mt-1 text-[#f3bf2c] text-xl leading-none">&bull;</span>
        <span><strong>Specialized Care:</strong> Our team is expertly trained to manage the unique behavioral and clinical needs of children, including those with special healthcare requirements.</span>
      </li>
    </ul>

    <h4 class="text-xl font-bold text-gray-900 mt-8 mb-4">Establishing a Routine</h4>
    <p class="mb-4">Ideally, children should undergo a dental examination every six months. These regular visits allow us to perform a thorough assessment of the teeth and gums, creating a customized treatment plan that grows alongside your child.</p>
  `,
    imageSrc: "/images/services/pediatrics.jpg",
    heroImage: "/images/services/pediatrics.jpg",
    linkText: "More Info",
    benefits: [
      "Stress-free and fun environment for kids",
      "Early detection of alignment and growth issues",
      "Specialized pediatric equipment and materials",
      "Expert care from Dr. Shobha and her team",
    ],
    faqs: [
      {
        question: "When should my child first visit the dentist?",
        answer: "We recommend a first visit as soon as the first tooth erupts or by their first birthday. Early visits help children get used to the dental office and allow us to monitor early development."
      },
      {
        question: "How often should my child have a check-up?",
        answer: "A dental examination every six months is ideal for most children. This allows us to catch any issues early and provide professional cleanings to prevent cavities."
      },
      {
        question: "What services do you provide for children?",
        answer: "We offer a full range of pediatric services including routine exams, fluoride treatments, sealants, fillings, crowns, and early orthodontic assessments (braces)."
      },
      {
        question: "What if my child is afraid of the dentist?",
        answer: "Our team is highly experienced in pediatric behavioral management. We use gentle communication and a 'Tell-Show-Do' approach to build trust and eliminate fear."
      },
      {
        question: "Why are 'baby teeth' important if they're going to fall out?",
        answer: "Primary teeth are vital for proper chewing, speech development, and holding space for permanent teeth. Losing them too early can lead to alignment issues later in life."
      }
    ],
    features: [
      {
        title: "Kid-Friendly Environment",
        description: "Our clinic is designed to put children at ease, making dental visits an enjoyable experience rather than a chore.",
        icon: <SmileIcon />
      },
      {
        title: "Preventative Sealing",
        description: "We offer specialized dental sealants to protect deep grooves in young teeth from developing cavities.",
        icon: <ShieldCheckIcon />
      },
      {
        title: "Growth Tracking",
        description: "Consistent monitoring of jaw and tooth development to ensure proper alignment as your child grows.",
        icon: <TrendingUpIcon />
      }
    ]
  },
  {
    id: "laser-dentistry",
    category: "Advanced Technology",
    title: "Laser Dentistry",
    badge: "Advanced",
    tagline: "High-precision, minimally invasive care for a faster, painless recovery.",
    description:
      "As the leading clinic for laser dental treatment in AECS Layout, Dental Wellness utilizes advanced light-beam technology to perform precise procedures with significantly less discomfort than traditional methods.",
    longDescription:
      "Laser dentistry represents the cutting edge of modern oral care. By using focused beams of light, our specialists can treat soft and hard tissues with unparalleled accuracy. This technology replaces or minimizes the need for traditional drills and scalpels, making dental visits much more comfortable and reducing the anxiety often associated with conventional surgery. Whether we are treating gum disease or preparing a tooth for a filling, lasers provide a cleaner, faster, and more sterile environment for healing.",
    detailedHtml: `
    <p class="mb-4">Dental lasers operate by delivering energy in the form of light. Depending on the procedure, this light can act as a cutting instrument or a vaporizer of tissue. It is a highly versatile tool that has transformed how we approach both restorative and cosmetic treatments.</p>
    
    <h4 class="text-xl font-bold text-gray-900 mt-8 mb-4">Common Laser Applications</h4>
    <ul class="list-none space-y-4">
      <li class="flex items-start">
        <span class="mr-3 mt-1 text-[#f3bf2c] text-xl leading-none">&bull;</span>
        <span><strong>Advanced Periodontal (Gum) Care:</strong> Lasers are exceptionally effective at treating gum disease by eliminating bacteria and sterilizing deep pockets. The laser can selectively remove damaged tissue while leaving healthy gums intact, often eliminating the need for traditional gum surgery.</span>
      </li>
      <li class="flex items-start">
        <span class="mr-3 mt-1 text-[#f3bf2c] text-xl leading-none">&bull;</span>
        <span><strong>Cavity Preparation & Root Canals:</strong> We use lasers to remove decayed tissue and prepare the tooth enamel for a secure filling bond. In root canal therapy, lasers help in thoroughly disinfecting the root canal system to prevent future infections.</span>
      </li>
      <li class="flex items-start">
        <span class="mr-3 mt-1 text-[#f3bf2c] text-xl leading-none">&bull;</span>
        <span><strong>Sensitivity & Pain Management:</strong> For patients with sensitive teeth, lasers can seal the tubules in the tooth roots to block pain from hot or cold triggers. Low-level laser therapy is also used to reduce inflammation and pain associated with TMJ disorders.</span>
      </li>
    </ul>

    <h4 class="text-xl font-bold text-gray-900 mt-8 mb-4">Why Choose Laser Treatment?</h4>
    <p class="mb-4">The primary advantage of laser dentistry is the biological response: it minimizes bleeding by promoting immediate clotting and reduces swelling by causing less trauma to the surrounding area. This results in significantly shorter recovery times and a much lower risk of post-operative infection, as the laser naturally sterilizes the area as it works.</p>
  `,
    imageSrc: "/images/services/laser.jpg",
    heroImage: "/images/services/laser.jpg",
    linkText: "More Info",
    benefits: [
      "Minimizes bleeding and swelling during surgery",
      "Faster healing and shorter recovery times",
      "Reduces the need for anesthesia and drills",
      "High precision preserves more healthy tissue",
    ],
    faqs: [
      {
        question: "Is laser dentistry safe?",
        answer: "Absolutely. Laser dentistry is a highly safe and established field. Our specialists are fully trained in laser protocols, and we provide protective eyewear to ensure your safety throughout the procedure."
      },
      {
        question: "Does it hurt more than a traditional drill?",
        answer: "Actually, it is much more comfortable. Because the laser doesn't create the heat or vibration associated with a dental drill, many procedures can be performed with little to no local anesthesia."
      },
      {
        question: "Can lasers be used for teeth whitening?",
        answer: "Yes! Lasers are often used to activate professional whitening gels, significantly speeding up the process and helping the bleaching agent penetrate deeper for a brighter result in less time."
      },
      {
        question: "Will my insurance cover laser treatments?",
        answer: "Insurance coverage for laser procedures is typically determined by the type of treatment (e.g., a filling or gum surgery) rather than the tool used. We can help you check your specific policy details."
      },
      {
        question: "How long is the recovery after laser gum surgery?",
        answer: "Recovery is much faster than traditional surgery. Most patients experience minimal swelling and can return to their normal eating and brushing routines within 24 to 48 hours."
      }
    ],
    features: [
      {
        title: "Bacterial Sterilization",
        description: "The high-energy light beam naturally kills bacteria, reducing the risk of infection and promoting tissue regeneration.",
        icon: <ShieldCheckIcon />
      },
      {
        title: "Bloodless Procedures",
        description: "Lasers perform 'bloodless' surgery by sealing blood vessels as they cut, leading to a much cleaner and faster healing process.",
        icon: <DropletsIcon />
      },
      {
        title: "Precise Tissue Sculpting",
        description: "Unmatched accuracy in removing damaged tissue while preserving the integrity of surrounding healthy structures.",
        icon: <TargetIcon />
      }
    ]
  }
];

export default services;
