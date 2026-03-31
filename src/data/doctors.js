export const DOCTORS = [
  {
    id: 1,
    slug: "lokesh-babu",
    name: "Dr. Lokesh Babu",
    specialty: "Oral and Maxillofacial Surgery",
    image: "/images/doc-img-1.png",
    description: "Expert in minor oral surgery, dental Implantology, facial trauma, jaw tumors.",
    availableToday: true,
    profileSummary: "Dr. Lokesh graduated from AB Shetty Institute of Dental Sciences in the year 2000 and completed his post graduation from Government Dental College, Bangalore in 2005.",
    experienceYears: "24+",
    patientsCount: "5k+",
    rating: "4.9",
    specialties: ["Oral Surgery", "Implantology", "Facial Trauma", "Jaw Tumors", "TMJ Surgeries"],
    biography: "Dr. Lokesh is a consultant at Columbia Asia Hospital, Whitefield and Sarjapur and Axiss chain of dental clinics. He did his fellowship in Implantology from the International Congress of Oral Implantologists in 2014.",
    reviews: [
      {
        name: "Jane Doe",
        initials: "JD",
        rating: 5,
        comment: "Excellent care and communication.",
      }
    ],
    nextAvailable: "Tomorrow, 10:00 AM",
  },
  {
    id: 2,
    slug: "sanjay-naidu",
    name: "Dr. Sanjay Naidu",
    specialty: "Orthodontics",
    image: "/images/doc-img-2.png",
    description: "Invisalign specialist, Damon Braces, Ceramic and Lingual Braces specialist.",
    availableToday: true,
    profileSummary: "Dr. Sanjay is one of the few orthodontists in Bangalore who is an Invisalign specialist.",
    experienceYears: "15+",
    patientsCount: "6k+",
    rating: "4.9",
    specialties: ["Invisalign", "Damon Braces", "Ceramic Braces", "Lingual Braces"],
    biography: "Received the 'Best Orthodontist' award at Healthcare Awards (2016). His gentle patient approach makes his patients feel at ease instantaneously and he ensures that this continues during the course of the entire treatment.",
    reviews: [
      {
        name: "Michael K.",
        initials: "MK",
        rating: 5,
        comment: "Very professional and friendly.",
      }
    ],
    nextAvailable: "Tomorrow, 11:30 AM",
  },
  {
    id: 3,
    slug: "pradeep-kumar",
    name: "Dr. Pradeep Kumar",
    specialty: "Pediatric Dentistry",
    image: "/images/doc-img-3.png",
    description: "Handles pediatric patients with great ease.",
    availableToday: false,
    profileSummary: "Dr. Pradeep Kumar KN is a pediatric dentist who graduated from R.V. Dental College in 2007.",
    experienceYears: "16+",
    patientsCount: "4k+",
    rating: "4.8",
    specialties: ["Special Children", "Sports Dentistry", "Habit Corrections", "Preventive Care"],
    biography: "He completed his post graduation from A.B. Shetty Memorial Institute of Dental Sciences, Mangalore in 2011, during which he was awarded the best outgoing student.",
    reviews: [
      {
        name: "Priya S.",
        initials: "PS",
        rating: 5,
        comment: "Wonderful with kids and very thorough.",
      }
    ],
    nextAvailable: "Today, 4:30 PM",
  },
  {
    id: 4,
    slug: "sanchita",
    name: "Dr. Sanchita",
    specialty: "Periodontics",
    image: "/images/doc-img-4.png",
    description: "Periodontist and Implantologist with an experience of 13 years.",
    availableToday: true,
    profileSummary: "Dr. Sanchita is a Periodontist and Implantologist and has an experience of 13 years.",
    experienceYears: "19+",
    patientsCount: "3k+",
    rating: "4.8",
    specialties: ["Periodontics", "Implantology"],
    biography: "She graduated from Mathrusri Ramabai Ambedkar Dental College & Hospital, Bangalore in 2004 and completed her post graduation in Periodontics from the same institute in 2012.",
    reviews: [
      {
        name: "Sophia R.",
        initials: "SR",
        rating: 5,
        comment: "Excellent treatment plan.",
      }
    ],
    nextAvailable: "Today, 2:45 PM",
  },
  {
    id: 5,
    slug: "hari",
    name: "Dr. Hari",
    specialty: "Prosthodontics",
    image: "/images/doc-img-5.png",
    description: "Prosthodontist and Implantologist with 15 years of experience.",
    availableToday: false,
    profileSummary: "Dr. Hari is a Prosthodontist and Implantologist with 15 years of experience.",
    experienceYears: "20+",
    patientsCount: "3k+",
    rating: "4.9",
    specialties: ["Prosthodontics", "Implantology"],
    biography: "He graduated from Oxford dental college and completed his post graduation from Maruthi Dental College. He completed his Advanced Implant Course from ISG in 2015. He is currently working as an Asst. Professor at Vydehi Dental College.",
    reviews: [
      {
        name: "Kevin M.",
        initials: "KM",
        rating: 5,
        comment: "Highly recommended.",
      }
    ],
    nextAvailable: "Friday, 11:30 AM",
  }
];

export function getDoctorBySlug(slug) {
  return DOCTORS.find((doctor) => doctor.slug === slug) ?? null;
}
