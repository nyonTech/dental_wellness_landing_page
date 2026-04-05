const articles = [
  {
    id: "root-canal-vs-extraction",
    featured: true,
    category: "Restorative",
    title: "Root Canal vs Extraction: Which Is Right for You?",
    subtitle: "Understanding your options when a tooth is severely damaged",
    author: "Dr. Priya Sharma",
    authorRole: "Endodontist",
    date: "2026-03-15",
    readTime: "8 min read",
    heroImage:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&q=80",
    excerpt:
      "Confused between a root canal and tooth extraction? Learn the pros, cons, costs, and long-term benefits of each procedure to make an informed decision about your dental health.",
    tags: ["Root Canal", "Extraction", "Restorative", "Decision Guide"],
    tableOfContents: [
      { id: "understanding", label: "Understanding the Options" },
      { id: "root-canal-explained", label: "Root Canal Explained" },
      { id: "extraction-explained", label: "Extraction Explained" },
      { id: "comparison", label: "Side-by-Side Comparison" },
      { id: "when-to-choose", label: "When to Choose Which" },
      { id: "recovery", label: "Recovery & Aftercare" },
    ],
    sections: [
      {
        id: "understanding",
        heading: "Understanding Your Options",
        content:
          "When a tooth is severely damaged by decay, infection, or trauma, you're often faced with two primary options: saving the tooth with a root canal or removing it entirely with an extraction. Both procedures are common, safe, and performed under local anaesthesia — but the long-term implications are very different.",
        highlight:
          "Over 15 million root canal procedures are performed every year, making it one of the most common dental treatments worldwide.",
      },
      {
        id: "root-canal-explained",
        heading: "Root Canal Treatment Explained",
        content:
          "A root canal (endodontic therapy) involves removing the infected or inflamed pulp tissue from inside the tooth, cleaning and shaping the root canals, and sealing them with a biocompatible material. The tooth is then restored with a crown to protect it and restore full function.\n\nModern root canal procedures use advanced microscopic technology, rotary instruments, and effective anaesthesia, making them virtually painless. Most patients report that the procedure feels similar to getting a routine filling.",
        keyPoints: [
          "Preserves the natural tooth structure",
          "Maintains jawbone integrity",
          "Keeps neighbouring teeth stable",
          "95% success rate with modern techniques",
          "Tooth can last a lifetime with proper care",
        ],
      },
      {
        id: "extraction-explained",
        heading: "Tooth Extraction Explained",
        content:
          "Tooth extraction involves completely removing the tooth from its socket in the jawbone. While sometimes necessary, extraction creates a gap that can lead to shifting of surrounding teeth, bone loss, and changes in bite alignment over time.\n\nAfter extraction, replacement options include dental implants, bridges, or partial dentures — each with their own timeline, costs, and maintenance requirements.",
        keyPoints: [
          "Immediate relief from severely damaged teeth",
          "Lower upfront cost than root canal + crown",
          "Required for wisdom teeth or severe fractures",
          "Requires replacement to prevent bone loss",
          "Adjacent teeth may shift without replacement",
        ],
      },
      {
        id: "comparison",
        heading: "Side-by-Side Comparison",
        content:
          "Understanding the key differences between these procedures can help you make an informed decision alongside your dentist.",
        comparison: [
          {
            factor: "Success Rate",
            rootCanal: "95% with proper restoration",
            extraction: "99% for simple extractions",
          },
          {
            factor: "Recovery Time",
            rootCanal: "1-2 days mild discomfort",
            extraction: "3-7 days healing period",
          },
          {
            factor: "Long-term Cost",
            rootCanal: "Lower (no replacement needed)",
            extraction: "Higher (implant/bridge cost added)",
          },
          {
            factor: "Bone Preservation",
            rootCanal: "Fully preserved",
            extraction: "Gradual bone loss without implant",
          },
          {
            factor: "Appointments",
            rootCanal: "1-2 visits",
            extraction: "1 visit + replacement visits",
          },
        ],
      },
      {
        id: "when-to-choose",
        heading: "When to Choose Which",
        content:
          "The decision between a root canal and extraction depends on several factors, including the extent of damage, tooth location, overall oral health, and your long-term goals.",
        chooseRootCanal: [
          "The tooth structure is largely intact",
          "Infection is limited to the pulp tissue",
          "The tooth is in a visible or structurally important position",
          "You want to preserve your natural smile",
          "Bone and gum support are adequate",
        ],
        chooseExtraction: [
          "The tooth is severely fractured below the gum line",
          "Extensive bone loss around the tooth",
          "The tooth cannot be adequately restored",
          "Severe crowding requires space creation",
          "Wisdom teeth causing recurrent problems",
        ],
      },
      {
        id: "recovery",
        heading: "Recovery & Aftercare",
        content:
          "Regardless of which procedure you choose, proper aftercare is essential for optimal healing and long-term success.\n\nAfter a root canal, avoid chewing on the treated tooth until the permanent crown is placed. Over-the-counter pain medication is usually sufficient for any mild discomfort.\n\nAfter an extraction, follow your dentist's instructions regarding gauze placement, soft foods, and avoiding straws or vigorous rinsing for the first 24-48 hours.",
      },
    ],
    relatedArticles: ["root-canal-myths", "signs-you-need-root-canal"],
  },
  {
    id: "root-canal-myths",
    category: "Myths & Facts",
    title: "Root Canal Myths Debunked: Separating Fact from Fiction",
    subtitle: "The truth about one of dentistry's most misunderstood procedures",
    author: "Dr. Rahul Mehta",
    authorRole: "General Dentist",
    date: "2026-03-01",
    readTime: "6 min read",
    heroImage:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=80",
    excerpt:
      "Are root canals painful or unsafe? Discover the truth behind common misconceptions and learn why modern root canal therapy is nothing like its reputation.",
    tags: ["Myths", "Root Canal", "Patient Education", "Pain Management"],
    tableOfContents: [
      { id: "intro", label: "Why So Many Myths?" },
      { id: "myth-painful", label: "Myth: Root Canals Are Painful" },
      { id: "myth-illness", label: "Myth: Root Canals Cause Illness" },
      { id: "myth-extraction", label: "Myth: Extraction Is Better" },
      { id: "myth-temporary", label: "Myth: Results Are Temporary" },
      { id: "reality", label: "The Modern Reality" },
    ],
    sections: [
      {
        id: "intro",
        heading: "Why Do So Many Myths Exist?",
        content:
          "Root canal therapy has been surrounded by misconceptions for decades, many stemming from outdated practices and anecdotal experiences from an era before modern anaesthesia and technology. Today's root canal procedure bears almost no resemblance to its early predecessor.",
        highlight:
          "A 2024 survey found that 59% of adults feared root canals more than public speaking — largely due to myths rather than actual experience.",
      },
      {
        id: "myth-painful",
        heading: "Myth: Root Canals Are Extremely Painful",
        content:
          "This is perhaps the most persistent myth. In reality, modern root canal treatment is performed under effective local anaesthesia, and most patients report feeling little to no pain during the procedure. In fact, the toothache that leads to needing a root canal is usually far more painful than the treatment itself.\n\nAdvances in anaesthesia techniques, rotary instruments, and microscopic precision have made root canal therapy comparable in comfort to getting a standard filling.",
        keyPoints: [
          "Modern anaesthesia ensures a pain-free procedure",
          "Most patients report immediate pain relief after treatment",
          "Post-procedure discomfort is mild and short-lived",
          "The infection causing the toothache is what's truly painful",
        ],
      },
      {
        id: "myth-illness",
        heading: "Myth: Root Canals Can Cause Systemic Illness",
        content:
          "This myth originated from debunked research by Dr. Weston Price in the 1920s. His studies used flawed methodologies and have been thoroughly discredited by modern science. Decades of peer-reviewed research confirm that root canal therapy does not cause cancer, heart disease, or any other systemic condition.\n\nThe American Association of Endodontists, World Health Organization, and every major dental body worldwide endorse root canal therapy as safe and effective.",
        keyPoints: [
          "Based on century-old, debunked research",
          "No credible scientific evidence supports this claim",
          "Endorsed as safe by all major health organizations",
          "Untreated infections pose far greater health risks",
        ],
      },
      {
        id: "myth-extraction",
        heading: "Myth: It's Better to Just Pull the Tooth",
        content:
          "While extraction may seem like a simpler solution, it creates a cascade of potential problems: bone loss, shifting teeth, bite changes, and the eventual need for a replacement prosthetic. Preserving your natural tooth is almost always the preferred option when possible.\n\nA root canal with a well-made crown can last a lifetime, maintaining your natural bite, appearance, and jaw structure without the complications that come with tooth loss.",
        keyPoints: [
          "Natural teeth function better than any replacement",
          "Extraction leads to bone loss over time",
          "Replacement options (implants, bridges) add significant cost",
          "Preserving natural teeth maintains facial structure",
        ],
      },
      {
        id: "myth-temporary",
        heading: "Myth: Root Canal Results Don't Last",
        content:
          "With modern techniques and materials, root canal-treated teeth can last a lifetime. The key to longevity is proper restoration with a high-quality crown and consistent oral hygiene practices. Studies show that root canal-treated teeth have a success rate exceeding 95% over a 10-year period.",
        keyPoints: [
          "95%+ success rate over 10 years",
          "Proper crown restoration is essential for longevity",
          "Regular dental check-ups ensure ongoing health",
          "Many root canal-treated teeth last a lifetime",
        ],
      },
      {
        id: "reality",
        heading: "The Modern Reality of Root Canal Therapy",
        content:
          "Today's root canal treatment is a precise, comfortable, and highly successful procedure. Using digital imaging, operating microscopes, and biocompatible materials, endodontists can save teeth that would have been considered hopeless just a decade ago.\n\nIf your dentist recommends a root canal, rest assured that you're choosing the most conservative, evidence-based approach to preserving your natural tooth and maintaining your oral health.",
      },
    ],
    relatedArticles: [
      "root-canal-vs-extraction",
      "signs-you-need-root-canal",
    ],
  },
  {
    id: "signs-you-need-root-canal",
    category: "Symptoms Guide",
    title: "5 Signs You Might Need a Root Canal",
    subtitle:
      "Recognise these warning signs before a small problem becomes a big one",
    author: "Dr. Priya Sharma",
    authorRole: "Endodontist",
    date: "2026-02-18",
    readTime: "5 min read",
    heroImage:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=1200&q=80",
    excerpt:
      "Persistent tooth pain? Sensitivity to hot and cold? Learn the key signs that indicate you may need endodontic treatment and why early intervention matters.",
    tags: ["Symptoms", "Root Canal", "Early Detection", "Oral Health"],
    tableOfContents: [
      { id: "overview", label: "Why Early Detection Matters" },
      { id: "sign-1", label: "Persistent Tooth Pain" },
      { id: "sign-2", label: "Sensitivity to Temperature" },
      { id: "sign-3", label: "Tooth Discolouration" },
      { id: "sign-4", label: "Swollen Gums" },
      { id: "sign-5", label: "Pain When Chewing" },
      { id: "next-steps", label: "What to Do Next" },
    ],
    sections: [
      {
        id: "overview",
        heading: "Why Early Detection Matters",
        content:
          "The earlier a dental infection is caught, the simpler and more successful the treatment. When the pulp tissue inside a tooth becomes inflamed or infected, it won't heal on its own — and delaying treatment can lead to abscess formation, bone loss, and eventual tooth loss.\n\nHere are the five most common signs that suggest you may need root canal treatment.",
        highlight:
          "Early intervention can save your tooth and prevent the spread of infection to surrounding tissues and bone.",
      },
      {
        id: "sign-1",
        heading: "1. Persistent or Severe Tooth Pain",
        content:
          "If you experience deep, throbbing tooth pain that lingers for extended periods or wakes you up at night, it could indicate that the nerve inside your tooth is inflamed or dying. This pain may be constant or come in waves, and it often intensifies when lying down.\n\nWhile not all tooth pain means you need a root canal, persistent pain that doesn't respond to over-the-counter pain medication warrants an immediate dental evaluation.",
      },
      {
        id: "sign-2",
        heading: "2. Prolonged Sensitivity to Hot or Cold",
        content:
          "Brief sensitivity when eating ice cream or drinking hot coffee is normal. However, if the sensitivity lingers for 30 seconds or more after the stimulus is removed, it may indicate damage to the tooth's pulp tissue.\n\nThis prolonged sensitivity is different from the fleeting discomfort associated with sensitive teeth and suggests deeper nerve involvement that may require endodontic treatment.",
      },
      {
        id: "sign-3",
        heading: "3. Tooth Discolouration",
        content:
          "A tooth that has darkened or turned grey compared to its neighbours may have compromised blood supply to its pulp tissue. This discolouration happens when the internal tissue breaks down, releasing byproducts that stain the tooth from within.\n\nWhile discolouration can have other causes (such as trauma or certain medications), a single darkened tooth should always be evaluated by a dentist.",
      },
      {
        id: "sign-4",
        heading: "4. Swollen or Tender Gums",
        content:
          "Swelling in the gums near a painful tooth can indicate an infection that has spread beyond the tooth's root tip. You may notice a small bump (called a fistula or gum boil) on the gum, which may periodically drain pus.\n\nGum swelling associated with an infected tooth is different from gum disease — it's typically localised to one area and directly related to the affected tooth.",
      },
      {
        id: "sign-5",
        heading: "5. Pain When Chewing or Touching the Tooth",
        content:
          "If a tooth hurts when you bite down, tap on it, or apply pressure, it may indicate inflammation at the root tip. This tenderness suggests that the ligament around the tooth root has become inflamed due to infection or pulp death.\n\nThis symptom is particularly telling when combined with any of the other signs listed above, and it should prompt a visit to your dentist as soon as possible.",
      },
      {
        id: "next-steps",
        heading: "What to Do Next",
        content:
          "If you're experiencing any of these symptoms, don't wait. Early evaluation and treatment can save your tooth and prevent complications. Contact Dental Wellness to schedule a consultation — our endodontists use advanced diagnostic tools including digital X-rays and pulp vitality testing to accurately assess your condition and recommend the most appropriate treatment.",
      },
    ],
    relatedArticles: ["root-canal-vs-extraction", "root-canal-myths"],
  },
  {
    id: "dental-implants-guide",
    category: "Restorative",
    title: "The Complete Guide to Dental Implants",
    subtitle: "Everything you need to know about permanent tooth replacement",
    author: "Dr. Anil Kumar",
    authorRole: "Implantologist",
    date: "2026-02-05",
    readTime: "10 min read",
    heroImage:
      "https://images.unsafeplash.com/photo-1609840114035-3c981b782dfe?w=1200&q=80",
    excerpt:
      "Dental implants are the gold standard for tooth replacement. Learn about the procedure, recovery, costs, and why they're considered the closest alternative to natural teeth.",
    tags: ["Dental Implants", "Restorative", "Procedure Guide", "Technology"],
    tableOfContents: [
      { id: "what-are", label: "What Are Dental Implants?" },
      { id: "benefits", label: "Benefits of Implants" },
      { id: "procedure", label: "The Procedure Step by Step" },
      { id: "candidates", label: "Are You a Candidate?" },
      { id: "aftercare", label: "Aftercare & Longevity" },
    ],
    sections: [
      {
        id: "what-are",
        heading: "What Are Dental Implants?",
        content:
          "A dental implant is a small titanium post that is surgically placed into the jawbone beneath the gum line, serving as an artificial tooth root. Once integrated with the bone (a process called osseointegration), a custom-made crown is attached to the implant, creating a restoration that looks, feels, and functions like a natural tooth.\n\nUnlike bridges or dentures, implants don't rely on neighbouring teeth for support and they stimulate the jawbone, preventing the bone loss that typically follows tooth loss.",
        highlight:
          "Dental implants have a success rate of over 97% and can last a lifetime with proper care, making them the most durable tooth replacement option available.",
      },
      {
        id: "benefits",
        heading: "Benefits of Dental Implants",
        content:
          "Dental implants offer numerous advantages over traditional tooth replacement options.",
        keyPoints: [
          "Look and feel exactly like natural teeth",
          "Prevent jawbone deterioration",
          "Don't affect adjacent healthy teeth",
          "Permanent solution — no removal or adhesives",
          "Restore full chewing power",
          "Easy to maintain with regular brushing and flossing",
          "Improve speech clarity compared to dentures",
          "Boost confidence with a natural-looking smile",
        ],
      },
      {
        id: "procedure",
        heading: "The Procedure Step by Step",
        content:
          "The dental implant process typically involves several phases spread over 3-6 months:\n\n**Phase 1: Consultation & Planning** — Your implantologist will take 3D scans, evaluate bone density, and create a detailed surgical plan. This phase ensures precise implant placement for optimal results.\n\n**Phase 2: Implant Placement** — The titanium post is surgically placed into the jawbone under local anaesthesia. The procedure typically takes 30-60 minutes per implant.\n\n**Phase 3: Osseointegration** — Over the next 3-4 months, the implant fuses with the surrounding bone, creating a strong foundation.\n\n**Phase 4: Abutment & Crown** — Once integration is confirmed, an abutment connector is placed, followed by a custom-crafted porcelain crown that matches your natural teeth perfectly.",
      },
      {
        id: "candidates",
        heading: "Are You a Good Candidate?",
        content:
          "Most adults with good general health are candidates for dental implants. However, certain factors can affect eligibility.",
        keyPoints: [
          "Adequate jawbone density (or willingness for bone grafting)",
          "Healthy gums free from periodontal disease",
          "Non-smoker or willing to quit during healing",
          "No uncontrolled chronic conditions (diabetes, etc.)",
          "Committed to good oral hygiene practices",
        ],
      },
      {
        id: "aftercare",
        heading: "Aftercare & Longevity",
        content:
          "Caring for dental implants is remarkably simple — treat them like your natural teeth. Brush twice daily, floss regularly, and attend your scheduled dental check-ups. With proper care, dental implants can last 25 years or more, with many patients keeping theirs for a lifetime.\n\nAvoid using your implant-supported teeth as tools (opening bottles, cracking nuts) and wear a night guard if you grind your teeth.",
      },
    ],
    relatedArticles: ["root-canal-vs-extraction", "teeth-whitening-guide"],
  },
  {
    id: "teeth-whitening-guide",
    category: "Cosmetic",
    title: "Professional Teeth Whitening: What You Need to Know",
    subtitle:
      "Achieve a brighter, more confident smile safely and effectively",
    author: "Dr. Meera Reddy",
    authorRole: "Cosmetic Dentist",
    date: "2026-01-20",
    readTime: "7 min read",
    heroImage:
      "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=1200&q=80",
    excerpt:
      "Professional teeth whitening can brighten your smile by up to 8 shades in a single session. Learn about the process, options, and how to maintain your results.",
    tags: ["Teeth Whitening", "Cosmetic", "Smile Makeover", "Aesthetics"],
    tableOfContents: [
      { id: "why-whiten", label: "Why Teeth Lose Their Brightness" },
      { id: "professional-vs-otc", label: "Professional vs Over-the-Counter" },
      { id: "the-process", label: "The In-Office Process" },
      { id: "maintenance", label: "Maintaining Your Results" },
      { id: "safety", label: "Safety & Sensitivity" },
    ],
    sections: [
      {
        id: "why-whiten",
        heading: "Why Teeth Lose Their Brightness",
        content:
          "Tooth discolouration happens gradually over time due to a combination of extrinsic (surface) and intrinsic (internal) staining. Common culprits include coffee, tea, red wine, tobacco, certain medications, and the natural ageing process.\n\nAs we age, the outer enamel layer thins, revealing more of the yellowish dentin layer beneath. This is why even people with excellent oral hygiene notice their teeth becoming less brilliant over time.",
        highlight:
          "The average person's teeth darken by 2-3 shades every decade due to natural ageing alone, even with consistent oral hygiene.",
      },
      {
        id: "professional-vs-otc",
        heading: "Professional vs Over-the-Counter Options",
        content:
          "While drugstore whitening products can provide modest improvement, professional in-office whitening delivers dramatically superior results in a fraction of the time.\n\nProfessional treatments use higher concentrations of whitening agents (hydrogen peroxide or carbamide peroxide) applied under controlled conditions, ensuring safety and maximum effectiveness. Your dentist can also customise the treatment to address specific areas and manage sensitivity.",
        keyPoints: [
          "Professional: Up to 8 shades brighter in one session",
          "OTC strips: 1-2 shades over several weeks",
          "Professional treatments are supervised for safety",
          "Custom trays ensure even coverage without gum irritation",
          "Results are more predictable and longer-lasting",
        ],
      },
      {
        id: "the-process",
        heading: "The In-Office Whitening Process",
        content:
          "A professional whitening session at Dental Wellness typically takes 60-90 minutes and follows a precise protocol:\n\nFirst, your dentist will document your current shade and protect your gums with a barrier gel. Next, a professional-grade whitening gel is applied to your teeth in multiple cycles, sometimes activated by a special light.\n\nYou'll see visible results immediately after the session. Many patients are amazed at the transformation they see in the mirror after just one appointment.",
      },
      {
        id: "maintenance",
        heading: "Maintaining Your Results",
        content:
          "To keep your newly brightened smile looking its best, we recommend following the '48-hour rule' — avoid dark-coloured foods and beverages for the first two days after treatment when teeth are most susceptible to re-staining.\n\nLong-term maintenance includes using a whitening toothpaste, rinsing after consuming staining beverages, and scheduling periodic touch-up treatments every 6-12 months.",
        keyPoints: [
          "Avoid coffee, red wine, and berries for 48 hours post-treatment",
          "Use a straw for dark beverages when possible",
          "Brush or rinse after consuming staining foods",
          "Touch-up treatments extend results significantly",
          "Custom take-home trays provided for maintenance",
        ],
      },
      {
        id: "safety",
        heading: "Safety & Managing Sensitivity",
        content:
          "Professional teeth whitening is a safe procedure when performed by a qualified dentist. Some patients experience temporary tooth sensitivity during or after treatment, which typically resolves within 24-48 hours.\n\nYour dentist may recommend desensitizing toothpaste before and after the procedure, and will adjust the whitening concentration based on your individual sensitivity level. People with existing dental restorations (crowns, veneers) should know that whitening only affects natural tooth structure.",
      },
    ],
    relatedArticles: ["dental-implants-guide", "oral-hygiene-basics"],
  },
  {
    id: "oral-hygiene-basics",
    category: "Prevention",
    title: "Mastering Oral Hygiene: Your Daily Defence Guide",
    subtitle: "Simple habits that protect your smile for life",
    author: "Dr. Rahul Mehta",
    authorRole: "General Dentist",
    date: "2026-01-08",
    readTime: "6 min read",
    heroImage:
      "https://images.unsplash.com/photo-1559467276-66a4ba65497a?w=1200&q=80",
    excerpt:
      "Good oral hygiene is the foundation of a healthy smile. Master the essential daily habits that prevent cavities, gum disease, and costly dental treatments.",
    tags: ["Oral Hygiene", "Prevention", "Daily Care", "Brushing"],
    tableOfContents: [
      { id: "foundation", label: "The Foundation of Dental Health" },
      { id: "brushing", label: "Brushing Technique" },
      { id: "flossing", label: "The Importance of Flossing" },
      { id: "diet", label: "Diet & Dental Health" },
      { id: "check-ups", label: "Regular Check-ups" },
    ],
    sections: [
      {
        id: "foundation",
        heading: "The Foundation of Dental Health",
        content:
          "Prevention is always better — and far less expensive — than treatment. A consistent daily oral hygiene routine, combined with regular professional cleanings, can prevent the vast majority of dental problems and keep your smile healthy for a lifetime.\n\nThe investment of just 5-7 minutes per day in proper oral care can save you thousands in dental treatments and protect your overall health.",
        highlight:
          "Studies show that people with good oral hygiene habits spend 40% less on dental care over their lifetime compared to those with inconsistent habits.",
      },
      {
        id: "brushing",
        heading: "Perfecting Your Brushing Technique",
        content:
          "Brushing your teeth may seem straightforward, but technique matters enormously. Hold your toothbrush at a 45-degree angle to your gums and use gentle, short back-and-forth strokes. Don't forget to brush the outer, inner, and chewing surfaces of all teeth, as well as your tongue.\n\nUse a soft-bristled toothbrush and replace it every 3-4 months, or sooner if the bristles are frayed. An electric toothbrush with a timer can help ensure you brush for the recommended two full minutes.",
        keyPoints: [
          "Brush for a full 2 minutes, twice daily",
          "Use a soft-bristled or electric toothbrush",
          "Hold at a 45-degree angle to the gum line",
          "Don't brush too hard — gentle pressure is effective",
          "Replace your toothbrush every 3 months",
          "Use fluoride toothpaste for cavity protection",
        ],
      },
      {
        id: "flossing",
        heading: "The Importance of Daily Flossing",
        content:
          "Brushing alone only cleans about 60% of tooth surfaces. The remaining 40% — the areas between your teeth — can only be reached with floss or interdental brushes. Plaque and food particles that accumulate in these spaces lead to cavities between teeth and gum disease.\n\nFloss at least once daily, ideally before bedtime brushing. If traditional string floss is difficult to use, water flossers and interdental brushes are effective alternatives.",
        keyPoints: [
          "Floss at least once daily — preferably before bed",
          "Use about 18 inches of floss, winding most around your fingers",
          "Gently curve the floss around each tooth in a C-shape",
          "Water flossers are a great alternative for those with dexterity issues",
          "Interdental brushes can clean wider gaps effectively",
        ],
      },
      {
        id: "diet",
        heading: "Diet & Your Dental Health",
        content:
          "What you eat and drink plays a significant role in your oral health. Sugary and acidic foods feed the bacteria that cause cavities, while crunchy fruits and vegetables can help clean teeth naturally.\n\nLimit snacking between meals, as constant exposure to food gives bacteria more opportunities to produce acid. When you do snack, choose tooth-friendly options like cheese, nuts, or raw vegetables.",
        keyPoints: [
          "Limit sugary and acidic foods and drinks",
          "Drink water throughout the day to rinse away bacteria",
          "Cheese and dairy products help neutralise acids",
          "Wait 30 minutes after acidic foods before brushing",
          "Crunchy vegetables stimulate saliva production",
        ],
      },
      {
        id: "check-ups",
        heading: "The Critical Role of Regular Check-ups",
        content:
          "Even with perfect home care, professional dental cleanings are essential. Your hygienist can remove calcified plaque (tartar) that can't be removed by brushing alone, and your dentist can detect problems at their earliest, most treatable stage.\n\nMost adults should visit the dentist every six months, though your dentist may recommend more frequent visits based on your individual risk factors. These visits are an investment in preventing costly and complex treatments down the road.",
      },
    ],
    relatedArticles: ["teeth-whitening-guide", "signs-you-need-root-canal"],
  },
];

export default articles;
